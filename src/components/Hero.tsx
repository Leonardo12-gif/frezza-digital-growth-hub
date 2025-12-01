
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
      className="relative w-full min-h-screen min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden bg-black"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Subtle radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-frezza-red/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4 sm:px-0 opacity-0" 
                style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '0.5s' }}>
              Transformamos 
              <span className="text-frezza-red block mt-2 md:mt-4 glow"> cliques </span>
              em 
              <span className="text-frezza-red glow"> resultados reais</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl px-4 sm:px-0 opacity-0"
               style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '1.5s' }}>
              Sua marca com mais visibilidade, estratégia e performance.
              Conte com quem entende de crescimento digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 px-4 sm:px-0 opacity-0"
                 style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '2.5s' }}>
              <Button 
                className="bg-frezza-red hover:bg-frezza-red/80 text-white px-6 py-7 text-lg border border-frezza-red/20" 
                asChild
              >
                <a href="#services">
                  Nossos Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-frezza-red text-white hover:bg-frezza-red/10 hover:text-white px-6 py-7 text-lg backdrop-blur-sm" 
                asChild
              >
                <a href="#contact">Fale Conosco</a>
              </Button>
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
                {/* Outer glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-frezza-red/20 via-frezza-red/5 to-frezza-red/20 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated ring effects */}
                <div className="absolute -inset-4 rounded-3xl border border-frezza-red/30 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute -inset-2 rounded-3xl border-2 border-frezza-red/20 bg-gradient-to-br from-frezza-red/10 to-transparent backdrop-blur-sm" />
                
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-frezza-red rounded-tl-2xl" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-frezza-red rounded-tr-2xl" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-frezza-red rounded-bl-2xl" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-frezza-red rounded-br-2xl" />
                
                {/* Video container */}
                <div className="relative w-full max-w-[300px] md:max-w-[400px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-frezza-red/20 bg-black/50 backdrop-blur-sm" 
                     style={{ 
                       aspectRatio: '9/16',
                       height: 'min(80vh, 600px)'
                     }}>
                  <video 
                    src="/hero-video.mp4" 
                    controls
                    loop 
                    playsInline 
                    poster="/placeholder.svg" 
                    className="w-full h-full object-cover" 
                  />
                  
                  {/* Scan line effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-frezza-red/5 to-transparent pointer-events-none animate-pulse" style={{ animationDuration: '3s' }} />
                </div>
              </div>
            </div>
            
            {/* Modern stats cards */}
            <div className="absolute top-4 -left-4 md:top-10 md:-left-10 group/card animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="relative bg-black/80 backdrop-blur-xl border border-frezza-red/30 rounded-2xl p-3 md:p-5 shadow-xl shadow-frezza-red/20">
                <div className="absolute inset-0 bg-gradient-to-br from-frezza-red/20 to-transparent rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-frezza-red to-red-400 bg-clip-text text-transparent">+300%</div>
                  <div className="text-xs md:text-sm text-gray-300 mt-1">Aumento de ROI</div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-frezza-red rounded-full animate-pulse" />
              </div>
            </div>
            
            <div className="absolute bottom-4 right-0 md:bottom-5 md:right-0 group/card animate-float" style={{ animationDelay: '1s' }}>
              <div className="relative bg-black/80 backdrop-blur-xl border border-frezza-red/30 rounded-2xl p-3 md:p-5 shadow-xl shadow-frezza-red/20">
                <div className="absolute inset-0 bg-gradient-to-br from-frezza-red/20 to-transparent rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-frezza-red to-red-400 bg-clip-text text-transparent">+10K</div>
                  <div className="text-xs md:text-sm text-gray-300 mt-1">Campanhas</div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-frezza-red rounded-full animate-pulse" />
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
