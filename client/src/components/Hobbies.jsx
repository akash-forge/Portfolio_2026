import React from 'react';
import blenderImg from '../assets/Blender.jpg';
import gymImg from '../assets/Gym.jpeg';

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 relative overflow-hidden white-blue-section">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Beyond the Code</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-16"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hobby Card */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col text-left shadow-md hover:shadow-xl">
            <div className="h-56 w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition duration-300 z-10"></div>
              <img 
                src={blenderImg} 
                alt="3D Modeling with Blender" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3D Modeling</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                When I'm not writing code, I love expressing my creativity through <span className="text-primary font-semibold">Blender</span>, designing and rendering 3D environments and objects.
              </p>
            </div>
          </div>

          {/* Fitness Card */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col text-left shadow-md hover:shadow-xl">
            <div className="h-56 w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition duration-300 z-10"></div>
              <img 
                src={gymImg} 
                alt="Fitness & Strength Training" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fitness & Strength</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                A healthy body fuels a sharp mind. I am dedicated to pushing my physical limits through regular <span className="text-secondary font-semibold">Gym and Strength Training</span> sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
