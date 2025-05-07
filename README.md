# Mini E-Commerce Web App

A simple React + Node.js + PostgreSQL mini e-commerce platform with two tabs:
- **Product Submission**: Submit new products
- **My Products**: View all products (with optional smart search)

---

## 🔧 Tech Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Version Control**: GitHub

---

## 📦 Features Implemented

✅ Product Submission with:
- Product Name  
- Price  
- Description  
- Optional Image URL  

✅ View My Products:
- Fetches from backend
- Displays product in card layout (Name, Price, Description, Image)

✅ Optional Feature:
- 🔍 Simple search implemented (case-insensitive keyword matching on name and description)

---

## 🛠 Setup Instructions

### 🔙 Backend

1. `cd backend`
2. Create `.env` with:
DB_HOST=localhost
DB_USER=your_pg_user
DB_PASSWORD=your_pg_password
DB_NAME=your_db
DB_PORT=5432
 
3. Install dependencies:
```bash
npm install
Run backend:

 
npm start
🌐 Frontend
cd frontend

Install dependencies:

 
npm install
Run frontend:
 
npm run dev
