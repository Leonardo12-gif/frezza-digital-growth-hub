import { useState, useEffect, useCallback } from "react";
import { Instagram, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

// Dados dos clientes
const clientes = [
  {
    nome: "Robério Fontes",
    user: "@roberiofonttes",
    url: "https://www.instagram.com/roberiofonttes/",
    desc: "Salão de beleza feminino de alto padrão.",
    img: "/lovable-uploads/roberio-fontes-logo.jpg"
  },
  {
    nome: "Elaluz Concept",
    user: "@elaluzconcept",
    url: "https://www.instagram.com/elaluzconcept/",
    desc: "Loja de roupas com alfaiataria e feminilidade.",
    img: "/lovable-uploads/elaluz-logo.jpg"
  },
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
    desc: "Condomínio residencial em Sorocaba com área verde.",
    img: "/lovable-uploads/villa-dos-inglezes.png"
  },
  {
    nome: "SPA MIDIA",
    user: "@spamidia",
    url: "https://www.instagram.com/spamidia/",
    desc: "Empresa de comunicação visual em Sorocaba-SP.",
    img: "/lovable-uploads/spa-midia-logo.png"
  },
  {
    nome: "Mais Mídia",
    user: "@maismidiapaineis",
    url: "https://www.instagram.com/maismidiapaineis/",
    desc: "Publicidade com outdoors estratégicos em Sorocaba.",
    img: "/lovable-uploads/mais-midia-logo.jpg"
  }
];

const Clientes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Autoplay contínuo
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Navegação manual - pausa temporariamente
  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  }, []);

  const nextClient = useCallback(() => {
    goToIndex((currentIndex + 1) % clientes.length);
  }, [currentIndex, goToIndex]);

  const prevClient = useCallback(() => {
    goToIndex((currentIndex - 1 + clientes.length) % clientes.length);
  }, [currentIndex, goToIndex]);

  // Clientes visíveis
  const getVisibleClients = (count: number) => {
    const visible = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % clientes.length;
      visible.push({ ...clientes[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section 
      ref={sectionRef} 
      className={`py-32 px-4 bg-black relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/30 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-frezza-red"></div>
                <span className="text-frezza-red text-sm uppercase tracking-[0.3em] font-medium">
                  Portfólio
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-[1.1]">
                Clientes que
                <br />
                <span className="text-frezza-red">transformamos</span>
              </h2>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="text-gray-500 text-lg max-w-md leading-relaxed text-left md:text-right">
                Marcas que confiaram em nosso trabalho e alcançaram resultados extraordinários.
              </p>
              
              {/* Controles */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={prevClient}
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-transparent border border-white/10 hover:border-frezza-red hover:bg-frezza-red/10 text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={nextClient}
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-transparent border border-white/10 hover:border-frezza-red hover:bg-frezza-red/10 text-white transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Carrossel */}
        <div className="relative overflow-hidden">
          {/* Mobile: 1 cliente */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="px-2"
            >
              <ClientCard client={clientes[currentIndex]} index={currentIndex} />
            </motion.div>
          </div>
          
          {/* Tablet: 2 clientes */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {getVisibleClients(2).map((cliente, idx) => (
              <motion.div
                key={`${cliente.nome}-${cliente.originalIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ClientCard client={cliente} index={cliente.originalIndex} />
              </motion.div>
            ))}
          </div>
          
          {/* Desktop: 4 clientes */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {getVisibleClients(4).map((cliente, idx) => (
              <motion.div
                key={`${cliente.nome}-${cliente.originalIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ClientCard client={cliente} index={cliente.originalIndex} />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Indicadores */}
        <div className="flex justify-center items-center mt-12 gap-2">
          {clientes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className="group p-1"
              aria-label={`Ir para cliente ${index + 1}`}
            >
              <div className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-1.5 bg-frezza-red' 
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/30 to-transparent"></div>
    </section>
  );
};

// Card do cliente com foto redonda estilo Instagram
const ClientCard = ({ client, index }: { client: typeof clientes[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-frezza-red/30 transition-all duration-500">
        <div className="relative h-full flex flex-col p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-auto">
            {/* Avatar redondo estilo Instagram */}
            <div className="relative">
              <div 
                className="p-[3px] rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-black p-[2px]">
                  <img
                    src={client.img}
                    alt={client.nome}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-black border-2 border-frezza-red flex items-center justify-center">
                <Instagram className="w-3 h-3 text-white" />
              </div>
            </div>
            
            {/* Número */}
            <span className="text-4xl font-bold text-white/[0.05] select-none">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          
          {/* Info */}
          <div className="mt-6 space-y-3">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-frezza-red transition-colors duration-300 line-clamp-1">
                {client.nome}
              </h3>
              <span className="text-frezza-red/80 text-sm font-medium">
                {client.user}
              </span>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
              {client.desc}
            </p>
            
            {/* Link */}
            <div className="flex items-center gap-2 text-white/30 group-hover:text-frezza-red transition-colors duration-300 pt-2">
              <span className="text-xs uppercase tracking-wider">Ver perfil</span>
              <ExternalLink className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
          
          {/* Borda animada */}
          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-frezza-red"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.a>
  );
};

export default Clientes;
