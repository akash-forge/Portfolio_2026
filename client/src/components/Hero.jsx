import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Web Developer", "Computer Engineer", "3D Designer", "Tech Enthusiast"];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  const handleTyping = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setText(isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 80 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden white-blue-section">
      {/* Background soft glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-slate-900 leading-tight">
          Hi, I am <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
            Akash M
          </span>
        </h1>
        
        <div className="h-12 md:h-16 flex items-center justify-center mb-8">
          <p className="text-2xl md:text-4xl font-semibold text-slate-700">
            I am a <span className="text-primary border-r-4 border-primary pr-1 animate-pulse">{text}</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Focused on building responsive, user-focused web applications with HTML, CSS, JS, and React. Currently pursuing B.E. in Computer Engineering.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#projects" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-primary/30 active:scale-95">
            View My Work
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary px-10 py-4 rounded-xl font-bold transition-all shadow-sm active:scale-95">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
