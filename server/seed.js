import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const projects = [
  {
    title: "AI Voice & Chat Assistant",
    description: "Rapidly prototyped a sci-fi themed AI assistant web app featuring dual text and voice communication modes, integrating OpenAI-compatible APIs (OpenRouter) with support for 9+ models (GPT-4o, Claude, Gemini) and self-healing voice recognition loop.",
    technologies: ["Python", "Streamlit", "OpenAI API", "OpenRouter", "Web Speech API"],
    imageUrl: "/Portfolio_2026/projects/ai_assistant.jpg",
    projectUrl: "https://github.com/akash-forge"
  },
  {
    title: "Automated Content Delivery Bot",
    description: "Built a full-stack automation system that fetches daily vocabulary via Wordnik API, filters it through a custom Python blocklist, and auto-delivers formatted messages to WhatsApp using a self-healing n8n workflow.",
    technologies: ["Python", "Flask", "Selenium", "n8n", "Wordnik API"],
    imageUrl: "/Portfolio_2026/projects/content_bot.png",
    projectUrl: "https://github.com/akash-forge/Automated-Content-Delivery-Bot/"
  },
  {
    title: "Portfolio Website",
    description: "Built and deployed a responsive personal portfolio displaying projects and skills using HTML, JavaScript, React, and Tailwind CSS.",
    technologies: ["HTML", "JavaScript", "React", "Tailwind CSS"],
    imageUrl: "/Portfolio_2026/projects/Website.jpg",
    projectUrl: "https://github.com/akash-forge/Portfolio_2026"
  },
  {
    title: "Web Calculator App",
    description: "Developed a functional calculator with intuitive UI, enabling basic arithmetic via JavaScript logic.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/Portfolio_2026/projects/Calculator.jpg",
    projectUrl: "https://github.com/akash-forge/Calculator"
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
