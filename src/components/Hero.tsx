
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Futuristic grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(220,38,38,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      
      {/* Animated scan lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-scan-line"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4 sm:px-0 opacity-0 relative" 
                style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '0.5s' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/10 via-red-500/20 to-red-600/10 blur-3xl opacity-50 -z-10"></div>
              Transformamos 
              <span className="text-frezza-red block mt-2 md:mt-4 glow relative">
                cliques
                <div className="absolute -inset-2 bg-red-500/20 blur-xl -z-10"></div>
              </span>
              em 
              <span className="text-frezza-red glow relative">
                resultados reais
                <div className="absolute -inset-2 bg-red-500/20 blur-xl -z-10"></div>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl px-4 sm:px-0 opacity-0"
               style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '1.5s' }}>
              Sua marca com mais visibilidade, estratégia e performance.
              Conte com quem entende de crescimento digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 px-4 sm:px-0 opacity-0"
                 style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '2.5s' }}>
              <div className="relative group inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg opacity-50 group-hover:opacity-75 blur transition-all duration-300"></div>
                <Button 
                  className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-7 text-lg border border-red-400/30 shadow-lg shadow-red-500/20" 
                  asChild
                >
                  <a href="#services">
                    <span className="relative z-10">Nossos Serviços</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </a>
                </Button>
              </div>
              
              <div className="relative group inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 via-red-500/50 to-red-600/50 rounded-lg opacity-30 group-hover:opacity-50 blur transition-all duration-500"></div>
                <Button 
                  variant="outline" 
                  className="relative border-red-500/50 text-white hover:bg-red-950/30 hover:text-white px-6 py-7 text-lg backdrop-blur-xl bg-black/20" 
                  asChild
                >
                  <a href="#contact">Fale Conosco</a>
                </Button>
              </div>
            </div>
          </div>
          
          <div 
            className={`relative lg:block transition-all duration-1000 delay-300 ${
              isLoaded 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-20"
            }`}
          >
            {/* Hero video - Responsivo */}
            <div className="relative w-full flex items-center justify-center">
              <div className="relative group">
                {/* Holographic frame effects */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-red-600/30 via-red-500/30 to-red-600/30 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                
                {/* Corner accents */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-red-500 rounded-tl-3xl"></div>
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-red-500 rounded-tr-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-red-500 rounded-bl-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-red-500 rounded-br-3xl"></div>
                
                {/* Orbiting rings */}
                <div className="absolute -inset-1 rounded-3xl border border-red-500/30 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
                <div className="absolute -inset-2 rounded-3xl border border-red-400/20 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
                
                {/* Video container responsivo */}
                <div className="relative w-full max-w-[300px] md:max-w-[400px] rounded-3xl overflow-hidden border border-red-500/40 ring-1 ring-red-400/20" 
                     style={{ 
                       aspectRatio: '9/16',
                       height: 'min(80vh, 600px)'
                     }}>
                  {/* Scan line overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent opacity-50 animate-scan-line z-10 pointer-events-none"></div>
                  
                  <video 
                    src="/hero-video.mp4" 
                    controls
                    loop 
                    playsInline 
                    poster="/placeholder.svg" 
                    className="w-full h-full object-cover relative z-0" 
                  />
                </div>
              </div>
            </div>
            
            {/* Stats cards - Ajustadas para mobile com design futurístico */}
            <div className="absolute top-4 -left-4 md:top-10 md:-left-10 group animate-float text-xs md:text-sm" style={{ animationDelay: '0.5s' }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-500/50 rounded-lg opacity-40 group-hover:opacity-60 blur transition-all"></div>
              <div className="relative bg-gradient-to-br from-black/60 via-red-950/30 to-black/60 backdrop-blur-xl border border-red-500/40 p-3 md:p-4 rounded-lg">
                <div className="text-lg md:text-xl font-bold text-red-400">+300%</div>
                <div className="text-gray-300">Aumento de ROI</div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-0 md:bottom-5 md:right-0 group animate-float text-xs md:text-sm" style={{ animationDelay: '1s' }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-500/50 rounded-lg opacity-40 group-hover:opacity-60 blur transition-all"></div>
              <div className="relative bg-gradient-to-br from-black/60 via-red-950/30 to-black/60 backdrop-blur-xl border border-red-500/40 p-3 md:p-4 rounded-lg">
                <div className="text-lg md:text-xl font-bold text-red-400">+10K</div>
                <div className="text-gray-300">Campanhas</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="hidden md:flex justify-center mt-16 animate-bounce">
          <a href="#services" className="border border-white/20 rounded-full p-2 glass-card">
            <ArrowRight size={20} className="text-white/60 transform rotate-90" />
          </a>
        </div>
      </div>
      </section>
  );
};

export default Hero;
