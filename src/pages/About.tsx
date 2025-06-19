
import { Brain, Heart, Sparkles, Users, Target, Zap } from 'lucide-react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 px-4 py-2 rounded-full border border-neon-blue/30 mb-4">
              <Heart className="w-4 h-4 text-neon-pink" />
              <span className="text-sm text-neon-blue font-medium">Conoce nuestra historia</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 animate-float">
              Acerca de PromptMaster AI
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              PromptMaster AI es una aplicación diseñada para ayudarte a crear prompts claros, 
              efectivos y optimizados para cualquier uso de inteligencia artificial, ya sea laboral o personal.
            </p>
          </div>

          {/* Mission Section */}
          <div className="futuristic-card p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-neon-blue" />
              <h2 className="text-3xl font-bold text-white">Nuestra Misión</h2>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Nuestra misión es simplificar el arte del prompting, haciéndolo accesible para todos, 
              sin vueltas ni tecnicismos.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-effect p-6 rounded-lg border border-white/10">
                <Zap className="w-10 h-10 text-neon-yellow mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Simplicidad</h3>
                <p className="text-slate-400">
                  Transformamos ideas complejas en prompts claros con un solo clic.
                </p>
              </div>
              
              <div className="glass-effect p-6 rounded-lg border border-white/10">
                <Sparkles className="w-10 h-10 text-neon-purple mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Efectividad</h3>
                <p className="text-slate-400">
                  Cada prompt optimizado está diseñado para obtener mejores resultados.
                </p>
              </div>
              
              <div className="glass-effect p-6 rounded-lg border border-white/10">
                <Users className="w-10 h-10 text-neon-green mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Accesibilidad</h3>
                <p className="text-slate-400">
                  Para todos los usuarios, desde principiantes hasta expertos.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="futuristic-card p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="w-8 h-8 text-neon-purple" />
              <h2 className="text-3xl font-bold text-white">¿Qué Hace Especial a PromptMaster AI?</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-neon-blue mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Interfaz Intuitiva</h4>
                  <p className="text-slate-300">
                    Diseño futurista y minimalista que permite concentrarse en lo importante: tus ideas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-neon-purple mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Optimización Inteligente</h4>
                  <p className="text-slate-300">
                    Algoritmos que mejoran tus prompts agregando contexto, estructura y especificidad.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-neon-green mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Explicaciones Claras</h4>
                  <p className="text-slate-300">
                    Entendé por qué cada mejora hace que tu prompt sea más efectivo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-neon-pink mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Copia Instantánea</h4>
                  <p className="text-slate-300">
                    Un clic y tu prompt optimizado está listo para usar en cualquier IA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="futuristic-card p-8">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-neon-pink" />
                <h2 className="text-3xl font-bold text-white">Nuestro Equipo</h2>
              </div>
              
              <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Creado por <span className="text-neon-blue font-semibold">Sebastián y equipo</span>, 
                apasionados por la IA y la creatividad.
              </p>
              
              <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-lg p-6 border border-neon-blue/30 max-w-2xl mx-auto">
                <p className="text-slate-300 italic">
                  "Creemos que la inteligencia artificial debe ser una herramienta accesible para todos. 
                  PromptMaster AI nació de la necesidad de democratizar el poder del prompting efectivo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
