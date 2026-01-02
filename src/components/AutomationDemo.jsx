import { FaArrowRight, FaCheckCircle, FaServer, FaTerminal } from 'react-icons/fa';
import React, { useState } from 'react';
import { SiGmail, SiGooglesheets, SiN8N, SiTelegram } from 'react-icons/si';

import { motion } from 'framer-motion';

const AutomationDemo = () => {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Intentamos leer la variable de entorno, si no existe usamos una dummy
  const WEBHOOK_URL = import.meta.env.VITE_N8N_DEMO_WEBHOOK_URL;

  const triggerDemo = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setLogs([]); 

    // Función auxiliar para añadir logs con retraso
    const addLog = (msg, delay) => {
      setTimeout(() => {
        setLogs(prev => [...prev, msg]);
      }, delay);
    };

    // Secuencia de simulación visual
    addLog("🚀 Iniciando secuencia...", 100);
    addLog("📡 Enviando payload a Webhook...", 800);

    // Intentamos hacer el fetch real si existe la URL
    if (WEBHOOK_URL) {
      try {
        fetch(WEBHOOK_URL, {
            method: 'POST',
            body: JSON.stringify({ demo: true, timestamp: new Date() })
        }).catch(e => console.log("Webhook disparado sin cors"));
      } catch (e) { /* Ignoramos errores de red para la demo */ }
    } else {
        addLog("⚠️ (Modo Simulación: No hay URL de Webhook configurada)", 1000);
    }

    addLog("⚙️ n8n: Recibiendo datos JSON...", 2000);
    addLog("🔄 n8n: Procesando lógica de negocio...", 3500);
    addLog("✈️ Telegram: Enviando notificación al admin...", 4500);
    addLog("💾 Google Sheets: Guardando lead...", 5500);
    
    setTimeout(() => {
        addLog("✅ ¡Flujo automatizado completado con éxito!", 0);
        setIsLoading(false);
    }, 6500);
  };

  return (
    <section className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* COLUMNA IZQUIERDA: Explicación Visual */}
            <div className="p-8 border-r border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                <SiN8N className="text-pink-500" /> 
                Backend Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Más allá del código, diseño sistemas eficientes. Este formulario está conectado a un flujo de trabajo automatizado real.
              </p>
              
              {/* Diagrama Visual CSS */}
              <div className="flex flex-col gap-6 relative">
                {/* Línea conectora vertical */}
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-300 dark:bg-gray-600 -z-10"></div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-gray-900 border-2 border-primary rounded-full flex items-center justify-center text-primary z-10">
                        <FaServer />
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Webhook Trigger (POST)</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center z-10 shadow-lg shadow-pink-500/30">
                        <SiN8N className="text-2xl"/>
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Procesamiento de Datos</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center z-10">
                        <SiTelegram className="text-2xl"/>
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Alerta Inmediata</span>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: Consola Interactiva */}
            <div className="bg-[#1e1e1e] p-6 text-green-400 font-mono text-sm flex flex-col justify-between min-h-[400px]">
              
              {/* Header de Terminal */}
              <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
                <FaTerminal className="text-gray-400" />
                <span className="text-gray-400">n8n-workflow-console ~ demo</span>
              </div>

              {/* Área de Logs */}
              <div className="flex-grow space-y-2 overflow-y-auto mb-4 font-mono">
                {logs.length === 0 && (
                    <div className="text-gray-500 italic text-center mt-10">
                        Esperando evento... <br/> Haz clic en "Ejecutar Demo"
                    </div>
                )}
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2"
                  >
                    <span className="text-blue-500 opacity-50">➜</span>
                    <span>{log}</span>
                  </motion.div>
                ))}
                {isLoading && <span className="animate-pulse">_</span>}
              </div>

              {/* Botón de Acción */}
              <button 
                onClick={triggerDemo}
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                  isLoading 
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-500 text-white hover:scale-[1.02] shadow-lg shadow-green-900/50'
                }`}
              >
                {isLoading ? 'Ejecutando Workflow...' : '🚀 Ejecutar Demo en Vivo'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationDemo;