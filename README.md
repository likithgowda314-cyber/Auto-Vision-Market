# AutoPrice: Vision-Powered Auto Parts Market 🚗💻

AutoPrice is a full-stack, AI-powered marketplace and price-comparison engine for automotive parts. It allows users to compare prices between OEM and local store parts, list their refurbished parts for sale, and use Computer Vision (AI) to automatically detect damage on car parts!

## 🌟 Key Features

* **AI Damage Detection:** Upload an image of a car part, and our custom PyTorch/YOLOv8 AI model will instantly detect and highlight the damage.
* **Price Comparison Engine:** Compare the price of OEM (Company) parts against Local Store prices to find the best savings.
* **Refurbished Marketplace:** A community-driven market where users can securely list, sell, and buy used or refurbished car parts.
* **Secure Authentication:** JWT-based user login and registration system.
* **Full-Stack Architecture:** Built with React/Next.js (Frontend), Node.js/Express (Backend), and Python/Flask (AI Microservice).

## 🚀 Live Demo

*(Add your Netlify Live Website URL here once you deploy it! Example: `https://your-site.netlify.app`)*

---

## 🛠️ Tech Stack

* **Frontend:** React, Next.js, Tailwind CSS, Framer Motion
* **Backend:** Node.js, Express.js, PostgreSQL (via Render), SQLite (Local fallback), JWT
* **AI Engine:** Python, Flask, PyTorch, Ultralytics (YOLOv8), OpenCV
* **CI/CD:** GitHub Actions, Netlify, Render Blueprints

---

## 💻 How to Run Locally

If you want to run this project on your own computer, you will need to start all three servers.

### 1. The Node.js Backend
The backend handles user authentication and the parts database.
```bash
cd BackEnd
npm install
node init_db.js  # Initializes the database tables
npm run dev      # Starts the server on http://localhost:3001
```

### 2. The Python AI Server
The AI server handles the computer vision damage detection model.
```bash
cd Ai
python -m venv venv
venv\Scripts\activate      # For Windows
# source venv/bin/activate # For Mac/Linux
pip install -r requirements.txt
python app.py              # Starts the AI server on http://localhost:5000
```

### 3. The React/Next.js Frontend
The frontend is the beautiful user interface.
```bash
cd frontend
npm install
npm run dev                # Starts the website on http://localhost:3000
```

Once all three servers are running, open your web browser and go to `http://localhost:3000` to use the application!

---

## ☁️ 1-Click Cloud Deployment

This project uses **Render Blueprints** for Infrastructure as Code. You can deploy the entire backend architecture (PostgreSQL Database, Node Server, and AI Server) to Render with one click:

1. Go to [Render.com](https://render.com)
2. Go to **Blueprints** -> **New Blueprint Instance**
3. Connect this repository and Render will automatically build the infrastructure using the `render.yaml` file!
