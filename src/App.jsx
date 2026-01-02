import AutomationDemo from './components/AutomationDemo';
import ContactForm from './components/ContactForm';
import ExperienceList from './components/ExperienceList';
import Hero from './components/Hero';
// Componentes
import Navbar from './components/Navbar';
import Projects from './components/Projects';
// src/App.jsx
import React from 'react';
import SkillsSection from './components/SkillsSection';
import { motion } from 'framer-motion';

// Configuración de animaciones (Suaves)
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function App() {
  return (
    <div className="font-sans antialiased min-h-screen text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      <Navbar />
      
      <main className="overflow-hidden">
        
        {/* HERO */}
        <Hero />
        
        {/* SKILLS SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <SkillsSection />
        </motion.div>

        {/* EXPERIENCE SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <ExperienceList />
        </motion.div>

        {/* PROJECTS SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Projects />
        </motion.div>
        
        {/* CONTACTO Y DEMO */}
        <div className="relative py-16 mt-10">
             {/* Fondo sutil decorativo */}
             <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 skew-y-3 -z-10 transform origin-bottom-right"></div>
             
             <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">¿Trabajamos juntos?</h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Prueba el sistema de automatización o envíame un mensaje.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                   <motion.div 
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                   >
                     <ContactForm />
                   </motion.div>
                   
                   <motion.div 
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                   >
                     <AutomationDemo />
                   </motion.div>
                </div>
             </div>
        </div>

        {/* FOOTER */}
        <footer className="py-8 text-center text-gray-500 text-sm bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <p>© {new Date().getFullYear()} Florian Martí. Hecho con React, Tailwind & n8n 🇦🇷 🇲🇽</p>
        </footer>

      </main>
    </div>
  );
}

export default App;