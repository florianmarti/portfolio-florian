import { FaCss3Alt, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact, FaWordpress } from "react-icons/fa";
import { SiMysql, SiN8N, SiNetlify, SiPwa, SiTailwindcss } from "react-icons/si";

// Nota: He añadido FaWordpress y SiPwa a los imports por si los quieres usar en la sección de Skills visuales más adelante.

export const portfolioData = {
  personal: {
    name: "Florian Marti",
    title: "Desarrollador Full-Stack & Freelancer",
    location: "Argentino de nacimiento, radicado en México 🇦🇷 → 🇲🇽",
    email: "florianmarti@gmail.com",
    phone: "+52 55 7850 1972",
    availability: "Disponible para proyectos freelance",
  },
  skills: [
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "PHP", icon: FaPhp, color: "text-purple-600" },
    { name: "Laravel", icon: FaLaravel, color: "text-red-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "n8n", icon: SiN8N, color: "text-pink-500" },
  ],
  projects: [
    {
      id: 1,
      title: "Mostrodev.com",
      role: "Fundador & Director (2022-2026)",
      description: "Agencia digital que fundé y dirigí. Lideré estrategias de desarrollo web, SEO y diseño para múltiples clientes antes de mi etapa actual como freelancer.",
      tech: ["Wordpress", "Gestión de Proyectos", "SEO", "CSS3"],
      link: "https://mostrodev.com",
      // Recuerda cambiar la URL de la imagen cuando tengas la captura real
      image: "/images/mostrodev.png"
    },
    {
      id: 2,
      title: "FactuPrint",
      role: "Desarrollador Frontend",
      description: "PWA (Progressive Web App) para la creación e impresión ágil de presupuestos. Permite guardar datos localmente y generar PDFs profesionales desde el móvil.",
      tech: ["React", "PWA", "Local Storage", "PDF Generation"],
      link: "https://factuprint.netlify.app/",
      image: "/images/factuprint.png"
    },
    {
      id: 3,
      title: "MyWebStudies",
      role: "Colaborador Técnico",
      description: "Desarrollo integral del Home, integración de base de datos para vistas dinámicas de cursos, y configuración de cumplimiento legal (RGPD/Consentimiento) y certificaciones.",
      tech: ["Backend Integration", "Compliance Legal", "UI/UX", "DB Views"],
      link: "https://www.mywebstudies.com/",
      image: "/images/mywebstudie.png"
    },
    {
      id: 4,
      title: "FutbolTop (efutmerce)",
      role: "Desarrollador Full Stack",
      description: "Plataforma de comercio electrónico de nicho enfocada en el fútbol. Implementación de catálogo y lógica de e-commerce.",
      tech: ["React", "Netlify", "E-commerce Logic"],
      link: "https://efutmerce.netlify.app",
      image: "/images/efutmerce.png"
    },
    {
      id: 5,
      title: "Turnine",
      role: "Desarrollador Full Stack",
      description: "Sistema de gestión de turnos optimizado para mejorar la eficiencia operativa.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      link: "https://turnine.mostrodev.com",
      image: "/images/turnine.png"
    },
    {
      id: 6,
      title: "Menuvisu",
      role: "Desarrollador Frontend",
      description: "Plataforma digital moderna para la visualización de menús de restaurantes mediante códigos QR.",
      tech: ["React", "Firebase", "Tailwind"],
      link: "https://menuvisu.mostrodev.com",
      image: "/images/menuvisu.png"
    }
  ]
};