import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frezza-red/5 rounded-full blur-[150px]" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-2.5"
        >
          <div className="w-2 h-2 bg-frezza-red rounded-full animate-pulse" />
          <span className="text-sm text-gray-300 tracking-wide">Agência de Marketing Digital — Sorocaba/SP</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Transformamos</span>
          <br />
          <span className="text-white">seguidores em </span>
          <span className="text-frezza-red">clientes</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-gray-400 font-light max-w-2xl leading-relaxed"
        >
          Estratégias de tráfego pago, social media e produção audiovisual que geram resultados reais para o seu negócio.
        </motion.p>

        {/* Stats highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex items-center gap-3 text-sm text-gray-500"
        >
          <span className="text-frezza-red font-bold text-lg">+R$ 22.000</span>
          <span>em contratos mensais gerenciados</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#cases"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-frezza-red text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-white hover:text-frezza-red"
          >
            <Play className="w-4 h-4" />
            Ver nossos resultados
          </a>
          <a
            href="https://wa.me/5515991273423?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Frezza!"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/15 text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/10 hover:border-white/30"
          >
            Fale com a gente agora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#numeros"
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-frezza-red transition-colors duration-300 group"
        >
          <div className="w-6 h-10 rounded-full border border-gray-600 group-hover:border-frezza-red transition-colors duration-300 flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-500 group-hover:bg-frezza-red rounded-full animate-bounce transition-colors duration-300" />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
