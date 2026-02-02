import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Entre em Contato
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Tem uma ideia de app? Quer saber mais sobre nossos projetos? Entre em contato conosco!
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-red-950 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Mensagem
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <textarea
                  id="message"
                  rows={5}
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  placeholder="Conte-nos sobre sua ideia..."
                />
              </div>
            </div>

            <button className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-600/50 transition-all flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
