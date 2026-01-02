import React, { useState } from 'react';

const ContactForm = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Estado para manejar la interfaz (carga, éxito, error)
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  // ⚠️ IMPORTANTE: Reemplaza esto con tu URL del Webhook de Producción de n8n
  const N8N_WEBHOOK_URL = "https://n8n.mostrodev.com/webhook/contact";

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Manejador del envío
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // 1. Enviar a n8n (Automatización)
      // Usamos JSON porque es lo más fácil de leer para n8n
      const n8nRequest = fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Portfolio Web', // Dato extra útil para saber de dónde vino
          date: new Date().toISOString()
        })
      });

      // 2. Enviar a Netlify (Respaldo)
      // Netlify requiere codificación de formulario estándar (x-www-form-urlencoded)
      const netlifyRequest = fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData
        }).toString(),
      });

      // Ejecutamos ambas peticiones en paralelo
      await Promise.all([n8nRequest, netlifyRequest]);

      // Si todo sale bien:
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario

      // Resetear el mensaje de éxito después de 5 segundos
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">¿Hablamos?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Estoy disponible para nuevos proyectos. Envíame un mensaje y te responderé automáticamente.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit}
          >
            {/* Campo Oculto Necesario para que Netlify detecte el formulario al compilar */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                  placeholder="Tu nombre"
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                  placeholder="tucorreo@ejemplo.com"
                  disabled={status === 'submitting'}
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
              <textarea 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
                disabled={status === 'submitting'}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting' || status === 'success'}
              className={`w-full font-bold py-4 rounded-lg transition-all transform shadow-lg 
                ${status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 
                  status === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' :
                  'bg-primary hover:bg-blue-600 text-white hover:-translate-y-1 hover:shadow-blue-500/30'
                }`}
            >
              {status === 'submitting' ? 'Enviando...' : 
               status === 'success' ? '¡Mensaje Enviado!' : 
               'Enviar Mensaje'}
            </button>

            {/* Mensajes de feedback visual */}
            {status === 'success' && (
              <p className="mt-4 text-center text-green-600 dark:text-green-400 font-medium animate-pulse">
                Gracias por contactarme. Revisa tu correo, pronto recibirás una confirmación.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-center text-red-600 dark:text-red-400 font-medium">
                Hubo un error al enviar. Por favor, intenta nuevamente o escríbeme directo al email.
              </p>
            )}
            
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;