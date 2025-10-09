import { useState, useEffect } from "react";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    nome: "Alphatruck",
    user: "@alphatruck",
    url: "https://www.instagram.com/alphatruckofc/",
    desc: "Oficina mecânica para caminhões pesados.",
    img: "/lovable-uploads/6c16c0b7-e20b-4db3-9bb0-5cbb958765b7.png"
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
  }
];

const Clientes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      className="flex flex-col rounded-3xl p-6 md:p-8 min-h-[380px] md:min-h-[420px] justify-between items-center transition-all duration-500 w-full max-w-[280px] md:max-w-[320px] mx-3 md:mx-4 group relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-frezza-red/20 via-frezza-red/10 to-frezza-red/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Modern glass background with border */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-3xl border-2 border-frezza-red/20 group-hover:border-frezza-red/40 transition-colors duration-500"></div>
      
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-frezza-red/40 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-frezza-red/40 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-frezza-red/40 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-frezza-red/40 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
      
      {/* Scan line effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-frezza-red/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-1000 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full items-center justify-between w-full group-hover:scale-[1.02] transition-transform duration-300">
        {/* Avatar with modern border */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir Instagram de ${nome}`}
          className="relative flex items-center justify-center mb-4 group/avatar outline-none focus-visible:ring-2 focus-visible:ring-frezza-red rounded-full"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#FD1D1D] rounded-full opacity-75 blur-md group-hover/avatar:opacity-100 transition-opacity"></div>
            
            {/* Instagram gradient border */}
            <div
              className="relative rounded-full p-[3px] transition-all duration-300 group-hover/avatar:scale-110"
              style={{
                background: 'conic-gradient(from 210deg at 50% 50%, #405DE6 0deg, #5851DB 40deg, #833AB4 90deg, #C13584 140deg, #E1306C 190deg, #FD1D1D 240deg, #F56040 290deg, #FCAF45 340deg, #405DE6 360deg)'
              }}
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-black p-1">
                <img
                  src={img}
                  alt={nome}
                  className="object-cover w-full h-full rounded-full"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </a>
        
        {/* Hint text */}
        <span className="text-xs text-gray-500 mb-3 text-center">
          Clique para visitar o perfil
        </span>

        {/* Name badge */}
        <div className="w-full mb-3">
          <div className="relative group/name">
            <div className="absolute inset-0 bg-gradient-to-r from-frezza-red/20 to-frezza-red/10 rounded-xl blur-sm"></div>
            <div className="relative px-4 py-2 rounded-xl bg-gradient-to-r from-frezza-red/10 to-black/50 border border-frezza-red/30">
              <span
                className="text-white text-lg md:text-xl font-bold font-['Montserrat'] block text-center"
                style={{
                  fontSize: nome.length > 22 ? "1rem" : undefined,
                }}
              >
                {nome}
              </span>
            </div>
          </div>
        </div>
        
        {/* Instagram username */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-base md:text-lg mb-4 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-frezza-red px-3 py-1 rounded-lg"
          aria-label={`Ir para o Instagram de ${nome}`}
        >
          <span className="font-medium">{user}</span>
        </a>
        
        {/* Description */}
        <div className="text-gray-400 text-sm md:text-base text-center mb-4 leading-relaxed px-2 min-h-[48px] flex items-center">
          {desc}
        </div>
        
        {/* Instagram icon button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/button"
          aria-label={`Abrir Instagram de ${nome}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-frezza-red to-frezza-red/80 rounded-full blur opacity-50 group-hover/button:opacity-100 transition-opacity"></div>
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-frezza-red to-frezza-red/80 hover:from-frezza-red hover:to-frezza-red transition-all duration-300 group-hover/button:scale-110">
            <Instagram className="text-white" size={22} />
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Modern grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-frezza-red/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-frezza-red/10 via-transparent to-transparent"></div>
      
      {/* Radial glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-frezza-red/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-frezza-red/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Modern title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-frezza-red/30 bg-gradient-to-r from-frezza-red/10 to-transparent backdrop-blur-xl mb-8 shadow-lg shadow-frezza-red/20">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-frezza-red animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-frezza-red animate-ping"></div>
            </div>
            <span className="text-sm md:text-base text-gray-300 uppercase tracking-widest font-semibold">Nossos Clientes</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Montserrat'] leading-tight">
            Clientes que
            <span className="text-frezza-red block md:inline md:ml-4 glow mt-2 md:mt-0"> transformamos</span>
          </h2>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-frezza-red/20 blur-xl"></div>
            <p className="relative text-gray-400 text-lg md:text-xl max-w-3xl mx-auto px-4">
              Marcas que confiaram em nosso trabalho e alcançaram resultados extraordinários
            </p>
          </div>
        </div>
        
        {/* Container dos clientes com controles */}
        <div className="relative">
          {/* Botão anterior - apenas desktop */}
          <Button
            onClick={prevClient}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-black/90 hover:bg-gradient-to-r hover:from-frezza-red hover:to-frezza-red/80 text-white border-2 border-frezza-red/40 hover:border-frezza-red backdrop-blur-xl transition-all duration-300 shadow-xl shadow-frezza-red/30 hover:shadow-frezza-red/60 hover:scale-110 group"
            size="icon"
          >
            <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
          </Button>
          
          {/* Botão próximo - apenas desktop */}
          <Button
            onClick={nextClient}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-black/90 hover:bg-gradient-to-r hover:from-frezza-red hover:to-frezza-red/80 text-white border-2 border-frezza-red/40 hover:border-frezza-red backdrop-blur-xl transition-all duration-300 shadow-xl shadow-frezza-red/30 hover:shadow-frezza-red/60 hover:scale-110 group"
            size="icon"
          >
            <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
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
        
        {/* Indicadores modernos futuristas */}
        <div className="flex justify-center items-center mt-16 gap-4">
          {clientes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group relative"
              aria-label={`Ir para cliente ${index + 1}`}
            >
              <div className={`transition-all duration-500 rounded-full ${
                index === currentIndex 
                  ? 'w-16 h-3 bg-gradient-to-r from-frezza-red to-frezza-red/60' 
                  : 'w-3 h-3 bg-gray-700 hover:bg-gray-500 hover:scale-125'
              }`}>
                {index === currentIndex && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-frezza-red blur-md animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-frezza-red/0 via-white/50 to-frezza-red/0 animate-[shimmer_2s_infinite]"></div>
                  </>
                )}
              </div>
            </button>
          ))}
        </div>
        
        {/* Botões de navegação mobile modernos */}
        <div className="md:hidden flex justify-center mt-10 gap-4">
          <Button
            onClick={prevClient}
            className="flex-1 max-w-[150px] bg-black/90 hover:bg-gradient-to-r hover:from-frezza-red hover:to-frezza-red/80 text-white border-2 border-frezza-red/40 hover:border-frezza-red backdrop-blur-xl transition-all duration-300 shadow-lg shadow-frezza-red/30 hover:shadow-frezza-red/50 hover:scale-105"
            size="lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Anterior
          </Button>
          <Button
            onClick={nextClient}
            className="flex-1 max-w-[150px] bg-black/90 hover:bg-gradient-to-r hover:from-frezza-red hover:to-frezza-red/80 text-white border-2 border-frezza-red/40 hover:border-frezza-red backdrop-blur-xl transition-all duration-300 shadow-lg shadow-frezza-red/30 hover:shadow-frezza-red/50 hover:scale-105"
            size="lg"
          >
            Próximo
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clientes;