import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import React from 'react';
import Skills from './components/Skills';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        
        {/* Próximamente: Contacto y Demo n8n */}
        <section id="contact-placeholder" className="py-20 text-center opacity-50">
          (Aquí irá la automatización con n8n...)
        </section>
      </main>

    </div>
  );
}

export default App;