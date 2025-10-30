// src/components/EducationSection.jsx
import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Education</h2>
        <div className="inline-block text-left">
          [cite_start]<h3 className="text-2xl font-semibold text-cyan-400">University of Engineering and Management</h3> [cite: 8]
          [cite_start]<p className="text-lg text-slate-300">Bachelor of Technology - Computer Science and Technology</p> [cite: 9]
          [cite_start]<p className="text-md text-slate-400">2021 - 2025</p> [cite: 9]
          [cite_start]<p className="text-md text-slate-400">CGPA: 8.62</p> [cite: 10]
        </div>
      </div>
    </section>
  );
};

export default EducationSection;