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
      className="flex flex-col rounded-3xl p-6 md:p-8 min-h-[380px] md:min-h-[420px] justify-between items-center transition-all duration-500 w-full max-w-[280px] md:max-w-[320px] mx-3 md:mx-4 group relative overflow-hidden hover:scale-[1.02]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Modern glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-2xl"></div>
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-frezza-red/0 via-frezza-red/40 to-frezza-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main border */}
      <div className="absolute inset-[1px] rounded-3xl bg-black/80 backdrop-blur-xl"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-frezza-red/20"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full items-center justify-between w-full">
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
      {/* Modern background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-frezza-red/5 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]"></div>
      
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Modern title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-frezza-red/20 bg-frezza-red/5 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-frezza-red animate-pulse"></div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Portfólio</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Montserrat']">
            Clientes que
            <span className="text-frezza-red block md:inline md:ml-3 glow"> transformamos</span>
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
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/80 hover:bg-frezza-red text-white border border-frezza-red/30 hover:border-frezza-red backdrop-blur-xl transition-all duration-300 shadow-lg shadow-frezza-red/20 hover:shadow-frezza-red/40"
            size="icon"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          {/* Botão próximo - apenas desktop */}
          <Button
            onClick={nextClient}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/80 hover:bg-frezza-red text-white border border-frezza-red/30 hover:border-frezza-red backdrop-blur-xl transition-all duration-300 shadow-lg shadow-frezza-red/20 hover:shadow-frezza-red/40"
            size="icon"
          >
            <ChevronRight className="w-6 h-6" />
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
        
        {/* Indicadores modernos */}
        <div className="flex justify-center items-center mt-12 space-x-3">
          {clientes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-12 h-2 bg-frezza-red shadow-lg shadow-frezza-red/50' 
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Ir para cliente ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Botões de navegação mobile */}
        <div className="md:hidden flex justify-center mt-8 gap-4">
          <Button
            onClick={prevClient}
            className="flex-1 max-w-[140px] bg-black/80 hover:bg-frezza-red text-white border border-frezza-red/30 hover:border-frezza-red backdrop-blur-xl transition-all duration-300"
            size="lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Anterior
          </Button>
          <Button
            onClick={nextClient}
            className="flex-1 max-w-[140px] bg-black/80 hover:bg-frezza-red text-white border border-frezza-red/30 hover:border-frezza-red backdrop-blur-xl transition-all duration-300"
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