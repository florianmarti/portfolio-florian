import AutomationDemo from './components/AutomationDemo';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import React from 'react';
import Skills from './components/Skills';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300 selection:bg-primary selection:text-white">
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        
        {/* Sección unificada de Contacto y Demo */}
        <div className="relative">
             {/* Un fondo sutil para separar visualmente */}
             <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 skew-y-3 -z-10 transform origin-bottom-right"></div>
             
             <ContactForm />
             <AutomationDemo />
        </div>

        {/* Footer simple */}
        <footer className="py-8 text-center text-gray-500 text-sm bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <p>© {new Date().getFullYear()} Florian Marti. Hecho con React, Tailwind & n8n 🇦🇷 🇲🇽</p>
        </footer>

      </main>

    </div>
  );
}

export default App;