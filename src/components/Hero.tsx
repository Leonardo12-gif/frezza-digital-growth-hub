
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
      className="relative w-full min-h-screen min-h-[100svh] flex items-center pt-28 pb-16"
    >      
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isLoaded 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4 sm:px-0">
              Transformamos 
              <span className="text-frezza-red block mt-2 md:mt-4 glow"> cliques </span>
              em 
              <span className="text-frezza-red glow"> resultados reais</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl px-4 sm:px-0">
              Sua marca com mais visibilidade, estratégia e performance.
              Conte com quem entende de crescimento digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 px-4 sm:px-0">
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
              <div className="relative">
                {/* Animated border effects around the video container */}
                <div className="absolute -inset-1 rounded-3xl border border-frezza-red/20 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
                <div className="absolute -inset-2 rounded-3xl border border-white/10 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
                
                {/* Glowing effect around border */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-frezza-red/20 via-transparent to-frezza-red/20 animate-pulse"></div>
                <div className="absolute -inset-1 rounded-3xl shadow-2xl shadow-frezza-red/30 animate-float"></div>
                
                {/* Video container responsivo */}
                <div className="relative w-full max-w-[300px] md:max-w-[400px] rounded-3xl overflow-hidden border border-white/10 ring-1 ring-white/10" 
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
                </div>
              </div>
            </div>
            
            {/* Stats cards - Ajustadas para mobile */}
            <div className="absolute top-4 -left-4 md:top-10 md:-left-10 glass-card p-3 md:p-4 rounded-lg animate-float text-xs md:text-sm" style={{ animationDelay: '0.5s' }}>
              <div className="text-lg md:text-xl font-bold text-frezza-red">+300%</div>
              <div className="text-gray-300">Aumento de ROI</div>
            </div>
            
            <div className="absolute bottom-4 right-0 md:bottom-5 md:right-0 glass-card p-3 md:p-4 rounded-lg animate-float text-xs md:text-sm" style={{ animationDelay: '1s' }}>
              <div className="text-lg md:text-xl font-bold text-frezza-red">+10K</div>
              <div className="text-gray-300">Campanhas</div>
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
