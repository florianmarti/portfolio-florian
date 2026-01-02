import { useEffect, useState } from 'react';

export const useTheme = () => {
  // 1. Estado inicial: Busca en localStorage o usa la preferencia del sistema
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // Si hay algo guardado, úsalo
      if (savedTheme) {
        return savedTheme;
      }
      // Si no, revisa la preferencia del sistema operativo
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // 2. Efecto: Cada vez que 'theme' cambia, actualiza el DOM y localStorage
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Guardar elección
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 3. Función para alternar
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};