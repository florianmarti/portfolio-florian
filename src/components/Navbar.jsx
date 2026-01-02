import { FaMoon, FaSun } from 'react-icons/fa'; // Iconos
import React, { useEffect, useState } from 'react';

import { useTheme } from '../hooks/useTheme'; // Importamos nuestro hook

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Usamos la lógica del tema

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Florian.dev
        </a>

        {/* Enlaces de Escritorio + Botón Dark Mode */}
        <div className="hidden md:flex items-center space-x-8">
          {['Proyectos', 'Habilidades', 'Demo Automatización'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              {item}
            </a>
          ))}

          {/* Botón Toggle Dark/Light */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>

          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-primary text-white font-bold hover:bg-blue-600 transition-transform hover:scale-105 shadow-md"
          >
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;