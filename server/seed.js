import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const projects = [
  {
    title: "Portfolio Website",
    description: "Built and deployed a responsive personal portfolio displaying projects and skills. Developed during training at Rexnar Creative Solution.",
    technologies: ["HTML", "JavaScript", "React", "Tailwind CSS"],
    imageUrl: "/src/assets/Website.jpg",
    projectUrl: "https://github.com/akash-forge"
  },
  {
    title: "Web Calculator App",
    description: "Developed a functional calculator with intuitive UI, enabling basic arithmetic via JavaScript logic.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/src/assets/Calculator.jpg",
    projectUrl: "https://github.com/akash-forge"
  },
  {
    title: "Chessboard Generator",
    description: "Created an interactive chessboard layout using JavaScript, demonstrating DOM manipulation and layout logic.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/src/assets/Chess board.jpg",
    projectUrl: "https://github.com/akash-forge"
  }
];

const seedDB = async () => {
  try {
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log('Database Seeded Successfully');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
