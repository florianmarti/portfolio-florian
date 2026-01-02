import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

import React from 'react';
import { resumeData } from '../data/resumeData';

const ExperienceList = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Experiencia Laboral
        </h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {resumeData.experience.map((job) => (
            <div 
              key={job.id} 
              // Soporte para modo oscuro en las tarjetas
              className="border-l-4 border-blue-500 bg-white dark:bg-gray-800 p-6 rounded-r-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                    <FaBriefcase className="text-gray-400 dark:text-gray-500"/> {job.company}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{job.role}</p>
                </div>
                {job.link && (
                  <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;