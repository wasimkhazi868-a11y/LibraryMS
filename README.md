# Library Management System
<img width="1911" height="1073" alt="Screenshot 2026-07-10 113734" src="https://github.com/user-attachments/assets/0d0e4dfd-324b-4418-bedc-7e2fd11f1967" />

<img width="1897" height="1027" alt="Screenshot 2026-07-10 113750" src="https://github.com/user-attachments/assets/96a7549d-e156-4738-852f-a9391ff9c3dc" />



A web application built with **Node.js, Express, and MongoDB** on the backend, paired with a dynamic vanilla JavaScript frontend interface. This system provides user authentication through **JSON Web Tokens (JWT)** and a complete **CRUD (Create, Read, Update, Delete)** engine for cataloging books securely.

---

## 🚀 Features

* **User Authentication**: Secure user login with server-backed verification. Authentic sessions grant unique JWT access tokens stored client-side.
* **Protected Operations**: Automated route guards intercept unauthenticated traffic and force access validation before serving sensitive CRUD features.
* **Book Inventory Tracker**: Complete management cycle covering standard catalog ingestion, batch listing retrievals, and targeting specific books for deletion.
* **Persistent Sessions**: Automated configuration syncs matching state contexts via `localStorage` caches across page loads.

---

## 🛠️ Tech Stack

* **Frontend**: HTML5, Vanilla JavaScript (Fetch API), CSS3
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Object Mapping via Mongoose ODM architecture)
* **Security**: Token-Based Bearer Authentication Architecture (JWT)

---

## 📋 Prerequisites

Before setting up the environment locally, make sure you have installed:
* [Node.js](https://nodejs.org/) (v16.x or newer recommended)
* [MongoDB](https://www.mongodb.com/) (Local instance running at `mongodb://127.0.0.1:27017` or a cloud-hosted MongoDB Atlas URI)

---

## ⚙️ Getting Started

### 1. Structure the Project Files
Ensure your project files follow a structured workspace pattern:
```text
├── backend/
│   ├── index.js             # Express application root gateway
│   ├── models/              # Mongoose database resource entities
│   └── routes/              # Explicit route definitions
├── frontend/
│   ├── index.html           # Main administrative dashboard UI
│   ├── login.html           # User gateway authentication template
│   └── register.html        # Registration entry page template
└── .env                     # Backend configuration variables
```
# Navigate to the backend workspace
cd backend

# Ingest necessary runtime node components
npm install express mongoose jsonwebtoken bcryptjs dotenv cors

# Execute development cluster instances
node index.js

# Environment Setup
Create a .env file in the root directory:

> Code snippet

JWT_SECRET=your_super_secret_jwt_key_here

# To run in production mode
npm start

# To run in development auto-reload mode
npm run dev

# open your localhost:5000 in browser to see UI

### Owner  - wasim k
