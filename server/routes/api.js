import express from 'express';
import Project from '../models/Project.js';
import Message from '../models/Message.js';

const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    if (projects.length === 0) {
      return res.json([
        {
          _id: "1",
          title: "Portfolio Website",
          description: "Built and deployed a responsive personal portfolio displaying projects and skills.",
          technologies: ["HTML", "JavaScript", "React", "Tailwind CSS"],
          imageUrl: "/Portfolio_2026/projects/Website.jpg",
          projectUrl: "https://github.com/akash-forge"
        },
        {
          _id: "2",
          title: "Web Calculator App",
          description: "Developed a functional calculator with intuitive UI.",
          technologies: ["HTML", "CSS", "JavaScript"],
          imageUrl: "/Portfolio_2026/projects/Calculator.jpg",
          projectUrl: "https://github.com/akash-forge"
        },
        {
          _id: "3",
          title: "Chessboard Generator",
          description: "Created an interactive chessboard layout using JavaScript.",
          technologies: ["HTML", "CSS", "JavaScript"],
          imageUrl: "/Portfolio_2026/projects/Chess board.jpg",
          projectUrl: "https://github.com/akash-forge"
        }
      ]);
    }
    res.json(projects);
  } catch (error) {
    // If DB fails, return dummy data for development
    console.warn('DB Connection failed, using fallback data.');
    res.json([
      {
        _id: "1",
        title: "Portfolio Website (Dev)",
        description: "Built and deployed a responsive personal portfolio displaying projects and skills.",
        technologies: ["HTML", "JavaScript", "React", "Tailwind CSS"],
        imageUrl: "/Portfolio_2026/projects/Website.jpg",
        projectUrl: "https://github.com/akash-forge"
      },
      {
         _id: "2",
         title: "Web Calculator App (Dev)",
         description: "Developed a functional calculator with intuitive UI.",
         technologies: ["HTML", "CSS", "JavaScript"],
         imageUrl: "/Portfolio_2026/projects/Calculator.jpg",
         projectUrl: "https://github.com/akash-forge"
      },
      {
         _id: "3",
         title: "Chessboard Generator (Dev)",
         description: "Created an interactive chessboard layout using JavaScript.",
         technologies: ["HTML", "CSS", "JavaScript"],
         imageUrl: "/Portfolio_2026/projects/Chess board.jpg",
         projectUrl: "https://github.com/akash-forge"
      }
    ]);
  }
});

// @route   POST /api/contact
// @desc    Handle incoming contact messages
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    
    console.log(`Saved message from ${name} (${email})`);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
