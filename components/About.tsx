import { Code2, Lightbulb, Users, Rocket } from 'lucide-react';
import ScrollFloat from './ui/ScrollFloat';
import GlareHover from './ui/GlareHover';
import StarBorder from './ui/StarBorder';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-zinc-950">
      <div className="container mx-auto">
        <ScrollFloat className="text-4xl md:text-6xl font-bold text-center mb-4 text-white tracking-wider">
          SOBRE A KURUPIRA LABS
        </ScrollFloat>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          Somos uma desenvolvedora focada em criar aplicativos mobile que fazem a diferença
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <StarBorder color="#ef4444" speed="6s" thickness={2}>
              <GlareHover glareColor="#ef4444" glareOpacity={0.2}>
                <div className="bg-zinc-900 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
                  <Code2 className="w-12 h-12 text-red-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">TECNOLOGIA DE PONTA</h3>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos as mais modernas tecnologias de desenvolvimento mobile para criar 
                aplicativos rápidos, seguros e escaláveis.
              </p>
              </div>
              </GlareHover>
            </StarBorder>

            <StarBorder color="#ef4444" speed="6s" thickness={2}>
              <GlareHover glareColor="#ef4444" glareOpacity={0.2}>
                <div className="bg-zinc-900 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
                  <Lightbulb className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">INOVAÇÃO CONSTANTE</h3>
              <p className="text-gray-300 leading-relaxed">
                Estamos sempre buscando novas soluções e abordagens criativas para resolver 
                problemas do dia a dia de nossos usuários.
              </p>
              </div>
              </GlareHover>
            </StarBorder>

            <StarBorder color="#ef4444" speed="6s" thickness={2}>
              <GlareHover glareColor="#ef4444" glareOpacity={0.2}>
                <div className="bg-zinc-900 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
                  <Users className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">FOCO NO USUÁRIO</h3>
              <p className="text-gray-300 leading-relaxed">
                Cada aplicativo é pensado para proporcionar a melhor experiência possível, 
                com interfaces intuitivas e funcionalidades práticas.
              </p>
              </div>
              </GlareHover>
            </StarBorder>

            <StarBorder color="#ef4444" speed="6s" thickness={2}>
              <GlareHover glareColor="#ef4444" glareOpacity={0.2}>
                <div className="bg-zinc-900 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
                  <Rocket className="w-12 h-12 text-red-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">CRESCIMENTO CONTÍNUO</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Estamos em constante evolução, desenvolvendo novos projetos e aprimorando 
                    nossas soluções existentes.
                  </p>
                </div>
              </GlareHover>
            </StarBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
