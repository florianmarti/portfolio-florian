import { FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Una selección de mis trabajos en desarrollo web y gestión de proyectos.
          </p>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }} 
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all flex flex-col"
            >
              {/* Imagen del Proyecto */}
              <div className="relative group h-48 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay oscuro al pasar el mouse */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors transform hover:scale-105"
                  >
                    <FaExternalLinkAlt /> Visitar Sitio
                  </a>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                </div>

                {/* NUEVO: Badge de Rol */}
                <div className="mb-3">
                    <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wide text-primary bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-100 dark:border-blue-800">
                        {project.role}
                    </span>
                </div>

                {/* Descripción con line-clamp para evitar desbordes */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                {/* Etiquetas de Tecnologías */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded">
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