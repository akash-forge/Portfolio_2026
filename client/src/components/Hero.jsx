import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden golden-section">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
          Hi, I am <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">
            Akash M.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
          A passionate Web Developer focused on building responsive, user-focused web applications with HTML, CSS, JS, and React.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/50">
            View My Work
          </a>
          <a href="#contact" className="bg-transparent border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-full font-medium transition-all">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
