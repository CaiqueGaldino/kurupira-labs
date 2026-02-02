'use client';

import DarkVeil from './ui/DarkVeil';
import Noise from './ui/Noise';
import TextType from './ui/TextType';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
      {/* Dark Veil Background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil primaryColor="#dc2626" secondaryColor="#000000" />
        <Noise patternAlpha={15} />
        {/* Degradê preto na parte de baixo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
      </div>
      
      {/* Conteúdo */}
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent tracking-wider">
          KURUPIRA LABS
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-200 mb-10 max-w-3xl mx-auto font-semibold tracking-wide">
          <TextType 
            text={[
              "DESENVOLVEMOS APLICATIVOS MOBILE",
              "TRANSFORMAMOS IDEIAS EM SOLUÇÕES",
              "INOVAÇÃO E TECNOLOGIA"
            ]}
            typingSpeed={80}
            deletingSpeed={50}
            pauseDuration={2000}
            className="inline-block"
          />
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-red-600/50 transition-all text-lg tracking-wide"
          >
            VER PROJETOS
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-red-500 rounded-lg font-bold text-red-500 hover:bg-red-500/10 transition-all text-lg tracking-wide"
          >
            ENTRAR EM CONTATO
          </button>
        </div>
      </div>
    </section>
  );
}
