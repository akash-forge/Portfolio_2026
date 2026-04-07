import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frameworks' },
    { name: 'Bootstrap', category: 'Frameworks' },
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'VS Code', category: 'Tools' },
    { name: 'Kali Linux (Basics)', category: 'Security' },
    { name: 'Network Security (Basics)', category: 'Security' },
    { name: 'Blender', category: 'Animation' },

  ];

  return (
    <section id="skills" className="py-24 golden-section">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Technical Arsenal</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-16"></div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] cursor-default text-lg font-medium text-gray-200 hover:text-white"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
