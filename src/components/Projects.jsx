import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Título de Sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Mis Proyectos <span className="text-primary">Destacados</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }} // Efecto de levitación al pasar el mouse
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all"
            >
              {/* Imagen del Proyecto */}
              <div className="relative group h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm h-12 overflow-hidden">
                  {project.description}
                </p>
                
                {/* Etiquetas de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-xs font-semibold px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;