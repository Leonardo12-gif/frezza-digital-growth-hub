import { useState } from "react";
import { Instagram, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

const clientes = [
  {
    nome: "Jhonne Tatuagens",
    user: "@jhonnetatuagens",
    url: "https://www.instagram.com/jhonnetattuagens/",
    desc: "Estúdio de tatuagem com +60 mil seguidores.",
    img: "/lovable-uploads/e08283f5-4be1-4ae5-9241-475b80369b30.png"
  },
  {
    nome: "Allpfit Sorocaba",
    user: "@allpfit.sorocaba",
    url: "https://instagram.com/allpfit.sorocaba",
    desc: "Rede de academias com +200 unidades no Brasil.",
    img: "/lovable-uploads/46160644-af2b-4687-bf1e-2fd232bf96f4.png"
  },
  {
    nome: "Rota Forte Truck",
    user: "@rotafortetruck",
    url: "https://www.instagram.com/rotafortetruck/",
    desc: "Oficina mecânica para caminhões pesados.",
    img: "/lovable-uploads/rota-forte-truck.jpg"
  },
  {
    nome: "Gabriela Garcia Academy",
    user: "@gabrielagarcia.academy",
    url: "https://instagram.com/gabrielagarcia.academy",
    desc: "Clínica estética com +220 mil seguidores.",
    img: "/lovable-uploads/1d34533a-7917-426b-a4d8-31b5055c92e4.png"
  },
  {
    nome: "Fabiano Jugger",
    user: "@fabiano.jugger",
    url: "https://www.instagram.com/fabiano.jugger",
    desc: "Atleta de fisiculturismo, campeão de Mr Olympia.",
    img: "/lovable-uploads/fabiano-jugger-new.jpg"
  },
  {
    nome: "Villa dos Inglezes",
    user: "@villadosinglezes",
    url: "https://www.instagram.com/villadosinglezes/",
    desc: "Condomínio residencial em Sorocaba.",
    img: "/lovable-uploads/villa-dos-inglezes.png"
  },
  {
    nome: "SPA MIDIA",
    user: "@spamidia",
    url: "https://www.instagram.com/spamidia/",
    desc: "Empresa de comunicação visual em Sorocaba.",
    img: "/lovable-uploads/spa-midia-logo.png"
  },
  {
    nome: "Mais Mídia",
    user: "@maismidiapaineis",
    url: "https://www.instagram.com/maismidiapaineis/",
    desc: "Publicidade em outdoors estratégicos.",
    img: "/lovable-uploads/mais-midia-logo.jpg"
  },
  {
    nome: "Elaluz Concept",
    user: "@elaluzconcept",
    url: "https://www.instagram.com/elaluzconcept/",
    desc: "Loja de roupas com alfaiataria e feminilidade.",
    img: "/lovable-uploads/elaluz-logo.jpg"
  },
  {
    nome: "Robério Fontes",
    user: "@roberiofonttes",
    url: "https://www.instagram.com/roberiofonttes/",
    desc: "Salão de beleza feminino de alto padrão.",
    img: "/lovable-uploads/roberio-fontes-logo.jpg"
  }
];

const Clientes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const nextClient = () => {
    setCurrentIndex((prev) => (prev + 1) % clientes.length);
  };

  const prevClient = () => {
    setCurrentIndex((prev) => (prev - 1 + clientes.length) % clientes.length);
  };

  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % clientes.length;
      visible.push({ ...clientes[index], index });
    }
    return visible;
  };

  return (
    <section 
      ref={sectionRef} 
      className={`py-24 md:py-32 bg-black relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-frezza-red text-sm font-medium tracking-[0.3em] uppercase mb-4"
            >
              Portfólio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-tight"
            >
              Clientes que<br />
              <span className="text-frezza-red">confiam em nós</span>
            </motion.h2>
          </div>
          
          {/* Navigation Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <span className="text-gray-500 text-sm hidden lg:block">
              {String(currentIndex + 1).padStart(2, '0')} / {String(clientes.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prevClient}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-frezza-red hover:border-frezza-red transition-all duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextClient}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-frezza-red hover:border-frezza-red transition-all duration-300"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {getVisibleClients().map((cliente, idx) => (
              <motion.div
                key={`${cliente.nome}-${cliente.index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group"
              >
                <a
                  href={cliente.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative bg-black border border-gray-800/50 rounded-2xl p-6 h-full transition-all duration-500 hover:border-frezza-red/50 hover:bg-frezza-red/[0.02]"
                >
                  {/* Logo Container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-frezza-red/30 transition-all duration-300">
                      <img
                        src={cliente.img}
                        alt={cliente.nome}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-1 font-['Montserrat'] group-hover:text-frezza-red transition-colors duration-300">
                      {cliente.nome}
                    </h3>
                    <span className="text-frezza-red/60 text-sm font-medium block mb-3">
                      {cliente.user}
                    </span>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {cliente.desc}
                    </p>
                  </div>

                  {/* Instagram Icon */}
                  <div className="flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-frezza-red group-hover:border-frezza-red transition-all duration-300">
                      <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-frezza-red" />
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center mt-12 gap-2">
          {clientes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-frezza-red' 
                  : 'w-2 h-2 bg-gray-700 hover:bg-gray-500'
              }`}
              aria-label={`Ir para cliente ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Quer fazer parte desses casos de sucesso?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-frezza-red/30 rounded-full text-frezza-red font-medium transition-all duration-300 hover:bg-frezza-red hover:text-white hover:border-frezza-red"
          >
            <span className="font-['Montserrat']">Seja nosso próximo cliente</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Clientes;
