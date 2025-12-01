
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden bg-black"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Subtle radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frezza-red/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Title with sequential animation */}
        <h1 
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-white">Frezza</span>
          <span className="text-frezza-red ml-2 md:ml-4"> Marketing</span>
        </h1>
        
        {/* Subtitle with delayed animation */}
        <p 
          className={`mt-6 md:mt-8 text-xl sm:text-2xl md:text-3xl text-gray-400 font-light tracking-wide transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Sua empresa no próximo nível
        </p>
        
        {/* Animated line separator */}
        <div 
          className={`mt-8 h-[1px] bg-gradient-to-r from-transparent via-frezza-red to-transparent transition-all duration-1000 delay-700 ${
            isLoaded ? "w-48 md:w-64 opacity-100" : "w-0 opacity-0"
          }`}
        />
        
        {/* Video with delayed animation */}
        <div 
          className={`mt-12 md:mt-16 w-full max-w-md transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="relative group">
            {/* Outer glow effect */}
            <div className="absolute -inset-4 bg-frezza-red/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Border frame */}
            <div className="absolute -inset-1 rounded-3xl border border-frezza-red/20 bg-gradient-to-br from-frezza-red/5 to-transparent" />
            
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-frezza-red rounded-tl-xl" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-frezza-red rounded-tr-xl" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-frezza-red rounded-bl-xl" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-frezza-red rounded-br-xl" />
            
            {/* Video container */}
            <div 
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-frezza-red/10 bg-black/50"
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
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className={`mt-12 md:mt-16 transition-all duration-1000 delay-[1500ms] ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a 
            href="#services" 
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-frezza-red transition-colors duration-300 group"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
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
