import { FaCss3Alt, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { SiMysql, SiN8N, SiNetlify, SiTailwindcss } from "react-icons/si";

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
      title: "Turnine",
      description: "Sistema de gestión de turnos optimizado.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      link: "https://turnine.mostrodev.com",
      image: "https://placehold.co/600x400/1F2937/FFFFFF?text=Turnine+Screenshot" // Placeholder temporal
    },
    {
      id: 2,
      title: "Menuvisu",
      description: "Plataforma digital para visualización de menús.",
      tech: ["React", "Firebase", "Tailwind"],
      link: "https://menuvisu.mostrodev.com",
      image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Menuvisu+Screenshot" // Placeholder temporal
    }
  ]
};