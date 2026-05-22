from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
from ultralytics import YOLO
import os

app = Flask(__name__)
CORS(app)

# Fallback basic model that automatically initialization copies on first operational load
model = YOLO('yolov8n.pt')

PART_CATEGORIES = {0: 'bonnet', 1: 'bumper_front', 2: 'bumper_rear', 3: 'door', 5: 'light_headlight'}
REPAIR_COSTS = {'bonnet': 12000, 'bumper_front': 8500, 'bumper_rear': 7500, 'door': 15000, 'light_headlight': 6200}

@app.route('/api/detect-damage', methods=['POST'])
def detect_damage():
    if 'image' not in request.files:
        return jsonify({'error': 'No image component stream detected.'}), 400
    
    file = request.files['image']
    
    import tempfile
    with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as tmp_file:
        file.save(tmp_file.name)
        tmp_file_path = tmp_file.name

    try:
        results = model.predict(source=tmp_file_path)
    finally:
        if os.path.exists(tmp_file_path):
            os.remove(tmp_file_path)
    detected_parts = []
    total_cost = 0
    max_confidence = 0.0

    for result in results:
        for box in result.boxes:
            confidence = float(box.conf[0])
            class_id = int(box.cls[0])
            
            if confidence > 0.25: # Baseline bounding configuration limits
                part_name = PART_CATEGORIES.get(class_id, 'Generic Panel')
                cost = REPAIR_COSTS.get(part_name, 5000)
                detected_parts.append(part_name)
                total_cost += cost
                if confidence > max_confidence:
                    max_confidence = confidence

    return jsonify({
        'detected_parts': list(set(detected_parts)),
        'severity': 'Moderate' if total_cost > 10000 else 'Minor',
        'estimated_cost': total_cost,
        'confidence': max_confidence
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
