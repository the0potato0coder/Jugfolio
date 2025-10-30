// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Jugantar Roy
        </h1>
        {/* Corrected line below */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-8">
          A motivated Computer Science graduate with a strong foundation in Java and the Spring Framework, eager to build and maintain scalable full-stack applications.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded">
            LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;