import { useState } from "react";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    desc: "Condomínio residencial em Sorocaba com área verde e infraestrutura completa.",
    img: "/lovable-uploads/villa-dos-inglezes.png"
  },
  {
    nome: "SPA MIDIA",
    user: "@spamidia",
    url: "https://www.instagram.com/spamidia/",
    desc: "Empresa de comunicação visual super renomada em Sorocaba-SP.",
    img: "/lovable-uploads/spa-midia-logo.png"
  },
  {
    nome: "Mais Mídia",
    user: "@maismidiapaineis",
    url: "https://www.instagram.com/maismidiapaineis/",
    desc: "Empresa de publicidade que aluga outdoors estratégicos em Sorocaba e região.",
    img: "/lovable-uploads/mais-midia-logo.jpg"
  },
  {
    nome: "Elaluz Concept",
    user: "@elaluzconcept",
    url: "https://www.instagram.com/elaluzconcept/",
    desc: "Loja de roupas com alfaiataria, essência e feminilidade.",
    img: "/lovable-uploads/elaluz-logo.jpg"
  },
  {
    nome: "Robério Fontes",
    user: "@roberiofonttes",
    url: "https://www.instagram.com/roberiofonttes/",
    desc: "Proprietário de um salão de beleza feminino de alto padrão.",
    img: "/lovable-uploads/roberio-fontes-logo.jpg"
  }
];

const Clientes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  // Função para ir para o próximo cliente
  const nextClient = () => {
    setCurrentIndex((prev) => (prev + 1) % clientes.length);
  };

  // Função para ir para o cliente anterior
  const prevClient = () => {
    setCurrentIndex((prev) => (prev - 1 + clientes.length) % clientes.length);
  };

  // Função para obter clientes visíveis (3 por vez)
  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % clientes.length;
      visible.push({ ...clientes[index], index });
    }
    return visible;
  };

  const ClientCard = ({ nome, user, url, desc, img }) => (
    <div
      className="flex flex-col rounded-2xl p-8 md:p-10 min-h-[380px] md:min-h-[420px] justify-between items-center transition-all duration-300 w-full max-w-[300px] md:max-w-[340px] mx-4 group bg-black/50 border border-gray-800 hover:border-frezza-red/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Avatar with Instagram gradient */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir Instagram de ${nome}`}
        className="relative mb-6 group/avatar outline-none focus-visible:ring-2 focus-visible:ring-frezza-red rounded-full transition-transform duration-300 hover:scale-105"
      >
        <div
          className="rounded-full p-[3px]"
          style={{
            background: 'linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FCAF45)'
          }}
        >
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-black p-[2px]">
            <img
              src={img}
              alt={nome}
              className="object-cover w-full h-full rounded-full"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>
      </a>

      {/* Name */}
      <h3
        className="text-white text-lg md:text-xl font-semibold text-center mb-2 font-['Montserrat']"
        style={{
          fontSize: nome.length > 22 ? "1rem" : undefined,
        }}
      >
        {nome}
      </h3>
      
      {/* Instagram username */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-frezza-red hover:text-white text-sm md:text-base mb-4 transition-colors duration-300 font-medium"
        aria-label={`Ir para o Instagram de ${nome}`}
      >
        {user}
      </a>
      
      {/* Description */}
      <p className="text-gray-400 text-sm text-center leading-relaxed mb-6 min-h-[48px]">
        {desc}
      </p>
      
      {/* Instagram button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 hover:border-frezza-red hover:bg-frezza-red/10 transition-all duration-300 text-gray-300 hover:text-white text-sm"
        aria-label={`Visitar ${nome} no Instagram`}
      >
        <Instagram size={16} />
        <span>Ver perfil</span>
      </a>
    </div>
  );

  return (
    <section ref={sectionRef} className={`py-24 px-4 bg-black relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Clean title */}
        <div className="text-center mb-16">
          <span className="text-frezza-red text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
            Nossos Clientes
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Montserrat']">
            Clientes que <span className="text-frezza-red">transformamos</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Marcas que confiaram em nosso trabalho e alcançaram resultados extraordinários
          </p>
        </div>
        
        {/* Container dos clientes com controles */}
        <div className="relative">
          {/* Botão anterior - apenas desktop */}
          <Button
            onClick={prevClient}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black border border-gray-800 hover:border-frezza-red text-gray-400 hover:text-white transition-all duration-300"
            size="icon"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          {/* Botão próximo - apenas desktop */}
          <Button
            onClick={nextClient}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black border border-gray-800 hover:border-frezza-red text-gray-400 hover:text-white transition-all duration-300"
            size="icon"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          
          {/* Slider dos clientes */}
          <div className="overflow-hidden mx-0 md:mx-16">
            {/* Mobile: um cliente por vez */}
            <div className="md:hidden flex justify-center items-center">
              <ClientCard {...clientes[currentIndex]} />
            </div>
            
            {/* Desktop: três clientes por vez */}
            <div className="hidden md:flex justify-center items-center">
              {getVisibleClients().map((cliente, idx) => (
                <ClientCard key={`${cliente.nome}-${cliente.index}`} {...cliente} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Indicadores limpos */}
        <div className="flex justify-center items-center mt-12 gap-2">
          {clientes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para cliente ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-frezza-red' 
                  : 'w-2 h-2 bg-gray-700 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        
        {/* Botões de navegação mobile */}
        <div className="md:hidden flex justify-center mt-8 gap-3">
          <Button
            onClick={prevClient}
            className="px-6 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600 transition-all duration-300"
            size="lg"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>
          <Button
            onClick={nextClient}
            className="px-6 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600 transition-all duration-300"
            size="lg"
          >
            Próximo
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clientes;