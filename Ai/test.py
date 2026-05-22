from ultralytics import YOLO
import torch

model = YOLO('yolov8n.pt')
# We can use a dummy image, but we need an actual image. I'll use the uploaded image from the metadata.
results = model(r'C:/Users/deepika/.gemini/antigravity/brain/61af49ae-9a88-49bf-9d6b-119fbe9c5c1d/uploaded_media_1779420189027.png')
print(type(results))
for r in results:
    print(type(r))
    if isinstance(r, torch.Tensor):
        print(r.shape)
