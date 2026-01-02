import { FaArrowDown, FaServer, FaTerminal } from 'react-icons/fa';
import React, { useState } from 'react';
import { SiGmail, SiN8N, SiNetlify } from 'react-icons/si';
import { motion } from 'framer-motion';

const AutomationDemo = () => {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Leemos la variable, pero si no existe, no pasa nada grave.
  const WEBHOOK_URL = import.meta.env.VITE_N8N_DEMO_WEBHOOK_URL;

  const triggerDemo = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setLogs([]); 

    const addLog = (msg, delay) => {
      setTimeout(() => {
        setLogs(prev => [...prev, msg]);
      }, delay);
    };

    // GUIÓN TÉCNICO (Visualización de Arquitectura)
    addLog("➜ Inicializando visualización de arquitectura...", 100);
    
    // Solo intentamos el fetch si la variable existe. Si no, seguimos con la demo visual.
    if (WEBHOOK_URL) {
      try {
        fetch(WEBHOOK_URL, {
            method: 'POST',
            body: JSON.stringify({ demo: true, timestamp: new Date() })
        }).catch(() => {}); 
      } catch (error) {
        // Silently ignore webhook errors during demo
      }
    }

    // Estos logs aparecen SIEMPRE, garantizando el espectáculo visual
    addLog("📡 POST https://n8n.mostrodev.com/webhook/contact", 600);
    addLog("✅ [200 OK] Webhook recibido en n8n Self-Hosted", 1200);
    addLog("⚙️ n8n: Ejecutando nodo 'Regex Validation'...", 2000);
    addLog("🔄 Validando integridad de datos (Sanitization)...", 2800);
    addLog("📨 Gmail API: Disparando notificación al Admin...", 3800);
    addLog("📤 Gmail API: Enviando Auto-respuesta HTML al cliente...", 4500);
    addLog("💾 Netlify Forms: Backup de seguridad creado.", 5200);
    
    setTimeout(() => {
        addLog("🚀 ¡Ciclo completado! (Pruébalo real arriba)", 0);
        setIsLoading(false);
    }, 6000);
  };

  // Función para llevar al usuario al formulario real
  const scrollToContact = () => {
    const section = document.getElementById("contact"); // Asegúrate que tu ContactForm tenga id="contact"
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* COLUMNA IZQUIERDA: Explicación de Arquitectura */}
            <div className="p-8 border-r border-gray-200 dark:border-gray-700 relative">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                <SiN8N className="text-pink-500" /> 
                Arquitectura del Sistema
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm">
                El formulario de contacto de este portafolio no es estático. 
                Esta animación visualiza la lógica <strong>Serverless</strong> real que se ejecuta cada vez que alguien me contacta, integrando n8n, Gmail y Netlify.
              </p>
              
              {/* Diagrama Visual */}
              <div className="flex flex-col gap-6 relative pl-2">
                <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-300 dark:bg-gray-600 -z-10"></div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-gray-900 border-2 border-primary rounded-full flex items-center justify-center text-primary z-10 shadow-sm">
                        <FaServer />
                    </div>
                    <div>
                        <span className="block font-bold text-gray-800 dark:text-gray-100">Webhook Trigger</span>
                        <span className="text-xs text-gray-500">React Fetch {"->"} n8n</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center z-10 shadow-lg shadow-pink-500/30">
                        <SiN8N className="text-2xl"/>
                    </div>
                    <div>
                        <span className="block font-bold text-gray-800 dark:text-gray-100">Lógica de Negocio</span>
                        <span className="text-xs text-gray-500">Validación & Orquestación</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center z-10 shadow-lg shadow-red-500/20">
                        <SiGmail className="text-2xl"/>
                    </div>
                    <div>
                        <span className="block font-bold text-gray-800 dark:text-gray-100">Respuesta & Backup</span>
                        <span className="text-xs text-gray-500">Gmail API + Netlify DB</span>
                    </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: Consola */}
            <div className="bg-[#1e1e1e] p-6 text-green-400 font-mono text-sm flex flex-col justify-between min-h-[400px]">
              
              <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
                <FaTerminal className="text-gray-400" />
                <span className="text-gray-400">root@mostrodev:~/architecture# ./explain-flow.sh</span>
              </div>

              <div className="flex-grow space-y-2 overflow-y-auto mb-4 font-mono custom-scrollbar">
                {logs.length === 0 && (
                    <div className="text-gray-500 italic text-center mt-12 opacity-50">
                        Haga clic para visualizar el flujo de datos...
                    </div>
                )}
                
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-2"
                  >
                    <span className="text-blue-500 opacity-70 select-none">➜</span>
                    <span>{log}</span>
                  </motion.div>
                ))}
                
                {isLoading && (
                    <motion.span 
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-4 bg-green-500 ml-2 align-middle"
                    />
                )}
              </div>

              <div className="flex flex-col gap-3">
                <button 
                    onClick={triggerDemo}
                    disabled={isLoading}
                    className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-xs ${
                    isLoading 
                        ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700' 
                        : 'bg-green-600 hover:bg-green-500 text-white border border-green-500'
                    }`}
                >
                    {isLoading ? 'Visualizando...' : '▶ Visualizar Flujo de Datos'}
                </button>

                {/* BOTÓN AL FORMULARIO REAL */}
                <button 
                    onClick={scrollToContact}
                    className="w-full py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-white hover:bg-white/10"
                >
                    <FaArrowDown /> Probar el Sistema Real Abajo
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationDemo;