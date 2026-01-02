import React from 'react';
import { resumeData } from '../data/resumeData';

const SkillsSection = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Habilidades Técnicas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.skills.map((skillGroup, index) => (
            <div 
              key={index} 
              // AQUI ESTABA EL ERROR: Agregamos soporte dark mode
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    // Badges que se ven bien en ambos modos
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;