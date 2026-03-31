import React from 'react';
import aboutImage from '../assets/about.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 golden-section">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Content */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-3 scale-105 opacity-50 blur-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-70"></div>
              <img 
                 src={aboutImage} 
                 alt="Akash M" 
                 className="relative z-10 w-64 md:w-80 h-auto object-cover rounded-2xl border-4 border-white/10 shadow-2xl transition duration-500 group-hover:-translate-y-2"
              />
            </div>
          </div>

          {/* Text and Stats Content */}
          <div className="w-full lg:w-7/12">
            <div className="glass-panel p-8 mb-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 transition duration-500 group-hover:bg-primary/20"></div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-light">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed font-light text-lg">
                I'm a Web Developer with hands-on experience in HTML, CSS, JavaScript, and React, currently pursuing a B.E. in Computer Engineering at Annai Vailankanni College of Engineering (2023–2027). Passionate about building responsive, user-focused web applications and continuously improving through collaboration and modern development practices. Open to internships and entry-level opportunities to contribute technical skills and grow within the tech industry.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 cursor-default">
                <span className="block text-3xl md:text-4xl font-bold text-primary mb-2">B.E.</span>
                <span className="text-gray-400 text-sm">Computer Eng. (Current)</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/20 cursor-default">
                <span className="block text-3xl md:text-4xl font-bold text-secondary mb-2">8.2</span>
                <span className="text-gray-400 text-sm">CGPA</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 cursor-default">
                <span className="block text-3xl md:text-4xl font-bold text-primary mb-2">3+</span>
                <span className="text-gray-400 text-sm">Projects Completed</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/20 cursor-default">
                <span className="block text-3xl md:text-4xl font-bold text-secondary mb-2">Fluent</span>
                <span className="text-gray-400 text-sm">Tamil, English, Hindi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
