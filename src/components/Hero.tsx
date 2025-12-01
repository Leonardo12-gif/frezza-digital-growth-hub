
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden bg-black"
    >
      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-[15%] w-32 h-48 bg-gradient-to-br from-gray-700/30 to-gray-900/30 rounded-full rotate-45 blur-sm animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }} />
      <div className="absolute top-32 right-[10%] w-16 h-24 bg-gradient-to-br from-frezza-red/20 to-red-900/20 rounded-full rotate-[60deg] blur-sm animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }} />
      <div className="absolute bottom-32 left-[10%] w-40 h-56 bg-gradient-to-br from-gray-700/20 to-gray-900/20 rounded-full -rotate-45 blur-sm animate-float" style={{ animationDelay: '2s', animationDuration: '7s' }} />
      <div className="absolute bottom-20 right-[20%] w-24 h-36 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-full rotate-[30deg] blur-sm animate-float" style={{ animationDelay: '0.5s', animationDuration: '9s' }} />
      <div className="absolute top-1/2 left-[5%] w-20 h-32 bg-gradient-to-br from-frezza-red/10 to-red-900/10 rounded-full -rotate-[20deg] blur-sm animate-float" style={{ animationDelay: '1.5s', animationDuration: '10s' }} />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-frezza-red/3 rounded-full blur-[150px]" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Badge */}
        <div 
          className={`mb-8 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-900/50 backdrop-blur-sm flex items-center gap-2 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="w-2 h-2 bg-frezza-red rounded-full animate-pulse" />
          <span className="text-sm text-gray-300 tracking-wide">Frezza Marketing</span>
        </div>
        
        {/* Title */}
        <h1 
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-white block">Frezza</span>
          <span className="text-frezza-red block mt-2">Marketing</span>
        </h1>
        
        {/* Subtitle */}
        <p 
          className={`mt-8 text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-xl transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Sua empresa no próximo nível
        </p>
        
        {/* Video */}
        <div 
          className={`mt-10 w-full max-w-[180px] md:max-w-[220px] transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl border border-frezza-red/20 bg-gradient-to-br from-frezza-red/5 to-transparent" />
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-frezza-red rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-frezza-red rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-frezza-red rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-frezza-red rounded-br-lg" />
            
            <div 
              className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-frezza-red/10 bg-black/50"
              style={{ aspectRatio: '9/16' }}
            >
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
        
        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a 
            href="#services" 
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-frezza-red transition-colors duration-300 group"
          >
            <div className="w-6 h-10 rounded-full border border-gray-600 group-hover:border-frezza-red transition-colors duration-300 flex justify-center pt-2">
              <div className="w-1 h-2 bg-gray-500 group-hover:bg-frezza-red rounded-full animate-bounce transition-colors duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
