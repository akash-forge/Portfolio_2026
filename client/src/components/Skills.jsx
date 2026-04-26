import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const container = useRef();
  const skills = [
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Python', category: 'Automation' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frameworks' },
    { name: 'Bootstrap', category: 'Frameworks' },
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'VS Code', category: 'Tools' },
    { name: 'Kali Linux', category: 'Security' },
    { name: 'Network Security', category: 'Security' },
    { name: 'Blender', category: 'Animation' },
  ];

  useGSAP(() => {
    // Initial state set via GSAP to avoid "flash of invisible content"
    gsap.set(".skill-badge", { opacity: 0, y: 30 });

    // Staggered reveal from bottom
    gsap.to(".skill-badge", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out"
    });

    // Subtle floating loop - only starts after reveal
    gsap.to(".skill-badge", {
      y: "-=6",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
      stagger: {
        each: 0.2,
        from: "random"
      }
    });
  }, { scope: container });

  return (
    <section id="skills" ref={container} className="py-24 white-blue-section">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Technical Arsenal</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-16"></div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-badge px-6 py-3 bg-slate-50 border border-slate-200 rounded-full hover:bg-white hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)] cursor-default text-lg font-medium text-slate-600 hover:text-primary"
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
