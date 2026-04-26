import React, { useEffect, useState } from 'react';
import chessBoardImg from '../assets/Chess board.jpg';
import calculatorImg from '../assets/Calculator.jpg';
import websiteImg from '../assets/Website.jpg';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data for frontend when backend is unreachable
        setProjects([
          {
            _id: "1",
            title: "Portfolio Website",
            description: "Built and deployed a responsive personal portfolio displaying projects and skills using HTML, JavaScript, React, and Tailwind CSS. Developed during training at Rexnar Creative Solution.",
            technologies: ["HTML", "JavaScript", "React", "Tailwind CSS"],
            imageUrl: "/Portfolio_2026/projects/Website.jpg",
            projectUrl: "https://github.com/akash-forge"
          },
          {
            _id: "2",
            title: "Web Calculator App",
            description: "Developed a functional calculator with intuitive UI, enabling basic arithmetic via JavaScript logic. Created as part of training at Rexnar Creative Solution.",
            technologies: ["HTML", "CSS", "JavaScript"],
            imageUrl: "/Portfolio_2026/projects/Calculator.jpg",
            projectUrl: "https://github.com/akash-forge"
          },
          {
            _id: "3",
            title: "Chessboard Generator",
            description: "Created an interactive chessboard layout using JavaScript, demonstrating DOM manipulation and layout logic. Completed during training at Rexnar Creative Solution.",
            technologies: ["HTML", "CSS", "JavaScript"],
            imageUrl: "/Portfolio_2026/projects/Chess board.jpg",
            projectUrl: "https://github.com/akash-forge"
          }
        ]);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 white-blue-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Featured Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project._id} className="bg-white border border-slate-200 rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full shadow-md hover:shadow-xl">
                <div className="h-48 overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition duration-300 z-10"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-slate-100 text-xs px-2 py-1 rounded text-primary font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors inline-flex items-center">
                      View Project <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
