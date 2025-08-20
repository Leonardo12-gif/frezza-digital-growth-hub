
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <BeamsBackground className="relative min-h-screen" intensity="medium">
      <section 
        id="home" 
        className="relative min-h-screen flex items-center pt-28 pb-16"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-frezza-red opacity-5 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-frezza-red opacity-5 blur-3xl"></div>
        </div>
      
      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isLoaded 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transformamos 
              <span className="text-frezza-red block mt-2 md:mt-4 glow"> cliques </span>
              em 
              <span className="text-frezza-red glow"> resultados reais</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl">
              Sua marca com mais visibilidade, estratégia e performance.
              Conte com quem entende de crescimento digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
            {/* Decorative elements */}
            <div className="w-full aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[70%] h-[70%] border-2 border-frezza-red/30 rounded-full animate-spin-slow opacity-60" style={{ animationDuration: '30s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] border border-white/10 rounded-full animate-spin-slow opacity-60" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[55%] h-[55%] border border-white/20 rounded-full animate-spin-slow opacity-70" style={{ animationDuration: '20s' }}></div>
              </div>
              
              {/* Hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65%] h-[65%] overflow-hidden rounded-full border-2 border-frezza-red/40 bg-frezza-red/5 glass-card animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" 
                    alt="Marketing digital e análise de dados" 
                    className="w-full h-full object-cover scale-125 opacity-80"
                  />
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="absolute top-10 -left-10 glass-card p-4 rounded-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-xl font-bold text-frezza-red">+300%</div>
                <div className="text-sm text-gray-300">Aumento de ROI</div>
              </div>
              
              <div className="absolute bottom-5 right-0 glass-card p-4 rounded-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xl font-bold text-frezza-red">+10K</div>
                <div className="text-sm text-gray-300">Campanhas</div>
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
    </BeamsBackground>
  );
};

export default Hero;
