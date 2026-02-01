import { useState } from "react";
import { Instagram, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

// Dados dos clientes
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

  // Navegação
  const nextClient = () => {
    setCurrentIndex((prev) => (prev + 1) % clientes.length);
  };

  const prevClient = () => {
    setCurrentIndex((prev) => (prev - 1 + clientes.length) % clientes.length);
  };

  // Clientes visíveis (3 no desktop)
  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % clientes.length;
      visible.push({ ...clientes[index], index });
    }
    return visible;
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section 
      ref={sectionRef} 
      className={`py-32 px-4 bg-black relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Background minimalista */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Linha decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/30 to-transparent"></div>
      
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header moderno e minimalista */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
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
            
            <p className="text-gray-500 text-lg max-w-md leading-relaxed">
              Marcas que confiaram em nosso trabalho e alcançaram resultados extraordinários nas redes sociais.
            </p>
          </div>
        </motion.div>
        
        {/* Grid de clientes */}
        <div className="relative">
          {/* Navegação desktop */}
          <div className="hidden md:flex absolute -top-16 right-0 gap-3 z-20">
            <Button
              onClick={prevClient}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-transparent border border-white/10 hover:border-frezza-red hover:bg-frezza-red/10 text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextClient}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-transparent border border-white/10 hover:border-frezza-red hover:bg-frezza-red/10 text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Cards container */}
          <motion.div
            key={currentIndex}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Mobile: 1 cliente */}
            <motion.div variants={cardItem} className="md:hidden">
              <ClientCard client={clientes[currentIndex]} />
            </motion.div>
            
            {/* Desktop: 3 clientes */}
            {getVisibleClients().map((cliente) => (
              <motion.div 
                key={`${cliente.nome}-${cliente.index}`}
                variants={cardItem}
                className="hidden md:block"
              >
                <ClientCard client={cliente} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Indicadores minimalistas */}
        <div className="flex justify-center items-center mt-16 gap-2">
          {clientes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className="group p-1"
              aria-label={`Ir para cliente ${index + 1}`}
            >
              <div className={`transition-all duration-500 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-1.5 bg-frezza-red' 
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>
        
        {/* Navegação mobile */}
        <div className="md:hidden flex justify-center mt-8 gap-4">
          <Button
            onClick={prevClient}
            variant="outline"
            className="flex-1 max-w-[140px] h-12 bg-transparent border border-white/10 hover:border-frezza-red hover:bg-frezza-red/10 text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Anterior
          </Button>
          <Button
            onClick={nextClient}
            variant="outline"
            className="flex-1 max-w-[140px] h-12 bg-transparent border border-white/10 hover:border-frezza-red hover:bg-frezza-red/10 text-white transition-all duration-300"
          >
            Próximo
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
      
      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/30 to-transparent"></div>
    </section>
  );
};

// Componente de card moderno
const ClientCard = ({ client }: { client: typeof clientes[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-frezza-red/30 transition-all duration-500">
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0">
          <img
            src={client.img}
            alt={client.nome}
            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70"></div>
        </div>
        
        {/* Conteúdo */}
        <div className="relative h-full flex flex-col justify-end p-8">
          {/* Avatar */}
          <div className="absolute top-8 left-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-frezza-red/50 transition-colors duration-500">
                <img
                  src={client.img}
                  alt={client.nome}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center group-hover:border-frezza-red/50 group-hover:bg-frezza-red/10 transition-all duration-300">
                <Instagram className="w-4 h-4 text-white/60 group-hover:text-frezza-red transition-colors" />
              </div>
            </div>
          </div>
          
          {/* Info */}
          <div className="mt-auto">
            {/* Número decorativo */}
            <div className="absolute top-8 right-8 text-[80px] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
              {String(clientes.indexOf(client) + 1).padStart(2, '0')}
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-frezza-red transition-colors duration-300">
                  {client.nome}
                </h3>
                <span className="text-frezza-red/80 text-sm font-medium">
                  {client.user}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {client.desc}
              </p>
              
              {/* Link hover indicator */}
              <div className="flex items-center gap-2 text-white/40 group-hover:text-frezza-red transition-colors duration-300">
                <span className="text-xs uppercase tracking-wider">Ver perfil</span>
                <ExternalLink className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
          
          {/* Borda animada inferior */}
          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-frezza-red"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.a>
  );
};

export default Clientes;
