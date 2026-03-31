# Portfolio 2026 | Full-Stack MERN Personal Website

A premium, high-performance personal portfolio built with React, Node.js, Express, and MongoDB. Featuring a "Wow-factor" golden aesthetic, glassmorphism design, and integrated backend for project data and contact form persistence.

## ✨ Features

- **Premium Golden Aesthetic**: Custom linear and radial gradients for a luxury look.
- **Glassmorphism Panels**: Modern, translucent UI components with backdrop blur effects.
- **Dynamic Assets**: Profile and project images with hover-scale and float animations.
- **MERN Backend**:
  - **Live Projects**: Projects are fetched from a MongoDB database with a local development fallback.
  - **Contact Persistence**: Messages sent via the contact form are validated and saved to the database.
- **Responsive Design**: Fully mobile-ready layout with optimized asset handling.

## 🛠 Tech Stack

- **Frontend**: React 19, Tailwind CSS 4, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Deployment-Ready**: Environment variable support and secure `.gitignore` for production.

---

## 🚀 Getting Started

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org/) installed and a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB) ready.

### 2. Setup Server
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

### 3. Setup Client
```bash
cd client
npm install
```
Create a `.env.local` file in the `client` directory and add:
```env
VITE_API_URL=http://localhost:5000
```

### 4. Running Locally
**Start Server**:
```bash
cd server
npm run dev
```
**Start Client**:
```bash
cd client
npm run dev
```

### 5. Seeding Data
To populate your database with the initial projects:
```bash
cd server
node seed.js
```

---

## 📂 Project Structure

- `client/`: React frontend with Vite and Tailwind.
- `server/`: Express backend with models, routes, and database configuration.
- `server/models/`: MongoDB schemas for Projects and Messages.
- `server/seed.js`: Database initialization script.

## 📜 License

Created by **Akash M**. Feel free to use this as a base for your own personal portfolio!
