import React, { useEffect, useState } from 'react';
import calculatorImg from '../assets/Calculator.jpg';
import websiteImg from '../assets/Website.jpg';
import contentBotImg from '../assets/content_bot.png';
import aiAssistantImg from '../assets/ai_assistant.jpg';

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
            title: "AI Voice & Chat Assistant",
            description: "Rapidly prototyped a sci-fi themed AI assistant web app featuring dual text and voice communication modes, integrating OpenAI-compatible APIs (OpenRouter) with support for 9+ models (GPT-4o, Claude, Gemini) and self-healing voice recognition loop.",
            technologies: ["Python", "Streamlit", "OpenAI API", "OpenRouter", "Web Speech API"],
            imageUrl: aiAssistantImg,
            projectUrl: "https://github.com/akash-forge"
          },
          {
            _id: "2",
            title: "Automated Content Delivery Bot",
            description: "Built a full-stack automation system that fetches daily vocabulary via Wordnik API, filters it through a custom Python blocklist, and auto-delivers formatted messages to WhatsApp using a self-healing n8n workflow.",
            technologies: ["Python", "Flask", "Selenium", "n8n", "Wordnik API"],
            imageUrl: contentBotImg,
            projectUrl: "https://github.com/akash-forge/Automated-Content-Delivery-Bot/"
          },
          {
            _id: "3",
            title: "Portfolio Website",
            description: "Designed and deployed a responsive personal portfolio displaying projects and skills using React, JavaScript, Tailwind CSS, and GSAP animations.",
            technologies: ["React", "JavaScript", "Tailwind CSS", "GSAP"],
            imageUrl: websiteImg,
            projectUrl: "https://github.com/akash-forge/Portfolio_2026"
          },
          {
            _id: "4",
            title: "Web Calculator App",
            description: "Developed a functional calculator with an intuitive UI, enabling basic and advanced arithmetic operations via clean JavaScript logic.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            imageUrl: calculatorImg,
            projectUrl: "https://github.com/akash-forge/Calculator"
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
