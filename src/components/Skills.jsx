import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Elemento Decorativo CSS (El "Orbe" Giratorio) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="w-full h-full border-4 border-dashed border-primary rounded-full animate-spin-slow"></div>
      </div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="w-full h-full border-4 border-dotted border-accent rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Stack <span className="text-accent">Tecnológico</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Herramientas que utilizo para dar vida a mis ideas, desde el frontend interactivo hasta la automatización del backend.
          </p>
        </motion.div>

        {/* Grid de Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/20 cursor-pointer"
            >
              <skill.icon className={`text-4xl mb-3 ${skill.color}`} />
              <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Mención Especial a CSS (Demostración Técnica) */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-700">
          <div>
             <h3 className="text-xl font-bold mb-2">🎨 Pasión por el Diseño & CSS</h3>
             <p className="text-gray-300 text-sm">
               No solo uso librerías; entiendo lo que pasa "bajo el capó". Este sitio utiliza animaciones personalizadas y TailwindCSS para un rendimiento óptimo.
             </p>
          </div>
          {/* Pequeña demo visual de CSS puro */}
          <div className="flex gap-4">
             <div className="w-12 h-12 bg-primary rounded-lg animate-bounce flex items-center justify-center shadow-lg shadow-blue-500/50">CSS</div>
             <div className="w-12 h-12 bg-accent rounded-full animate-pulse flex items-center justify-center shadow-lg shadow-purple-500/50">JS</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;