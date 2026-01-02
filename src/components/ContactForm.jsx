import React from 'react';

const ContactForm = () => {
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
            // action="/success"  <-- Opcional: Si quisieras redirigir a una pagina de gracias
          >
            {/* Campo Oculto Necesario para Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
              <textarea 
                name="message" 
                rows="5" 
                required 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
            >
              Enviar Mensaje
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;