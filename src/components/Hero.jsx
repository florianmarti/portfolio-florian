import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { name, title, location, availability } = portfolioData.personal;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      
      {/* Fondo decorativo (opcional: círculos difuminados) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-sm font-semibold mb-6">
          {availability}
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
          Hola, soy <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-accent">
            {name}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {title} <br />
          <span className="text-lg opacity-80">{location}</span>
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:shadow-lg transition hover:-translate-y-1"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary text-gray-700 dark:text-gray-300 font-medium transition hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Hablemos
          </a>
        </motion.div>
      </motion.div>
      
      {/* Indicador de Scroll animado */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;