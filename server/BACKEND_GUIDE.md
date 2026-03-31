# 🖥️ Portfolio Backend Documentation

This guide provides a comprehensive overview of the backend infrastructure for the **Portfolio 2026** project.

---

## 📂 1. Directory Structure

The backend is built with **Node.js**, **Express**, and **MongoDB**.

```text
server/
├── config/
│   └── db.js            # MongoDB connection configuration
├── models/
│   ├── Message.js       # Schema for contact form submissions
│   └── Project.js       # Schema for portfolio projects
├── routes/
│   └── api.js          # Main API endpoints (GET projects, POST contact)
├── .env                # Environment variables (Port, Mongo URI)
├── package.json        # Dependencies and scripts (express, mongoose, cors, etc.)
├── seed.js             # Database initialization script
└── server.js           # Main entry point for the Express server
```

---

## 📄 2. Core File Summaries

### `server.js` (Entry Point)
Initializes the Express application, connects to MongoDB, sets up middleware (CORS, JSON parsing), and mounts the API routes.

### `config/db.js` (Database Connection)
Uses **Mongoose** to connect to your MongoDB Atlas cluster. It includes a fallback to a local MongoDB instance and error handling to ensure the server remains stable even if the database is disconnected.

### `models/` (Data Schemas)
- **`Project.js`**: Defines fields for project titles, descriptions, technologies, and image URLs.
- **`Message.js`**: Stores contact form data (Name, Email, Message) including timestamps.

### `routes/api.js` (Endpoints)
- **`GET /api/projects`**: Fetches all projects from MongoDB. 
  - *Feature*: Includes a **Development Fallback** that delivers project data even if the database is offline.
- **`POST /api/contact`**: Receives and saves messages from the frontend contact form.

### `seed.js` (Database Seeder)
A utility script used to clear the existing projects collection and repopulate it with the latest "Featured Work" data.

---

## ⚙️ 3. Setup and Process

### How the Data Flows
1. **Request**: The Frontend (React) sends a request to the server (e.g., `GET /api/projects`).
2. **Controller**: The server receives the request in `routes/api.js`.
3. **Model**: The server queries the MongoDB database using the `Project` model.
4. **Response**: The server sends the JSON data back to the frontend.

### Running the Backend
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Environment Configuration**: Ensure your `.env` file contains your `MONGO_URI`.
3. **Database Seeding**: Run this once to populate your projects:
   ```bash
   node seed.js
   ```
4. **Start Development Server**:
   ```bash
   npm run dev
   ```

---

## 🚀 4. Deployment Readiness
The backend is configured to be deployment-ready with:
- **CORS Support**: Ready to accept requests from your hosted frontend.
- **Environment Variables**: Port and DB URI are configurable via `.env`.
- **ES Modules**: Modern `import/export` syntax used throughout.
