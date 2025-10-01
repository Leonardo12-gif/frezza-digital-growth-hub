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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  // Auto-play contínuo
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      const interval = setInterval(nextClient, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isPaused]);

  const ClientCard = ({ nome, user, url, desc, img }) => (
    <div
      className="flex flex-col rounded-2xl px-4 md:px-7 pt-6 md:pt-8 pb-4 md:pb-6 min-h-[320px] md:min-h-[390px] h-full justify-between items-center transition-all duration-700 ease-in-out w-full max-w-[260px] md:min-w-[280px] md:max-w-[300px] mx-2 md:mx-4 group relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Holographic base with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-red-950/30 to-black/40 backdrop-blur-xl"></div>
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(220, 38, 38, 0.3) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 3s ease infinite'
        }}
      />
      
      {/* Neon border effect */}
      <div className="absolute inset-0 rounded-2xl border border-red-500/30 group-hover:border-red-400/50 transition-all duration-500">
        <div className="absolute inset-0 rounded-2xl border border-red-400/20 blur-sm"></div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          boxShadow: '0 0 40px rgba(220, 38, 38, 0.4), inset 0 0 60px rgba(220, 38, 38, 0.1)'
        }}
      />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[200%] transition-transform duration-[3s] ease-linear"></div>
      </div>
      
      {/* Conteúdo do card */}
      <div className="relative z-10 flex flex-col h-full items-center justify-between w-full">
        {/* Avatar com borda degradê Instagram */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir Instagram de ${nome}`}
          className="relative flex items-center justify-center mb-3 group/avatar outline-none focus-visible:ring-2 focus-visible:ring-red-500/80 rounded-full"
        >
          <div
            className="rounded-full p-1 transition-all duration-500 ease-in-out group-hover/avatar:scale-103"
            style={{
              background:
                'conic-gradient(from 210deg at 50% 50%, #405DE6 0deg, #5851DB 40deg, #833AB4 90deg, #C13584 140deg, #E1306C 190deg, #FD1D1D 240deg, #F56040 290deg, #FCAF45 340deg, #405DE6 360deg)'
            }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center shrink-0 border-0">
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
        
        {/* Aviso discreto */}
        <span className="block text-xs text-gray-400 mt-1 mb-1 text-center select-none">
          clique para acessar o perfil
        </span>

        {/* Nome */}
        <div className="flex items-center justify-center mb-2 w-full">
          <span
            className="px-4 py-1 rounded-lg bg-gradient-to-r from-red-600/20 to-black/50 text-white text-lg md:text-xl font-bold font-['Montserrat'] shadow-sm border border-red-600/30 w-full text-center break-words leading-tight"
            style={{
              wordBreak: "break-word",
              hyphens: "auto",
              fontSize: nome.length > 22 ? "1rem" : undefined,
            }}
          >
            {nome}
          </span>
        </div>
        
        {/* User Instagram */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white text-base md:text-lg mb-2 hover:text-gray-200 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/80 px-2 py-0.5 rounded cursor-pointer w-full text-center"
          aria-label={`Ir para o Instagram de ${nome}`}
        >
          <span
            className="inline-flex items-center gap-1 w-full justify-center break-all break-words whitespace-pre-line text-center"
            style={{
              fontSize: user.length > 22 ? "1rem" : undefined,
              wordBreak: "break-word",
              hyphens: "auto",
              lineHeight: "1.2",
              minHeight: "2.3em",
            }}
            title={user}
          >
            {user}
          </span>
        </a>
        
        {/* Descrição */}
        <div className="text-white text-[15px] text-center mb-3 leading-snug max-w-xs mx-auto min-h-[48px] flex items-center justify-center">
          {desc}
        </div>
        
        {/* Ícone Instagram na base */}
        <div className="flex-1 flex flex-col items-center justify-end w-full">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-400 ease-in-out bg-gradient-to-r from-red-600/30 to-black/50 hover:from-red-600 hover:to-red-700 shadow-sm border border-red-600/40 hover:border-red-600 hover:scale-105"
            aria-label={`Abrir Instagram de ${nome}`}
          >
            <Instagram className="text-white transition-colors" size={20} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-2 bg-black relative overflow-hidden">
      {/* Futuristic background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Futuristic title with glow */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-['Montserrat'] relative inline-block">
            Clientes que nós trabalhamos
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 blur-xl opacity-50"></div>
            <span className="relative">.{' '}</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
        </div>
        
        <p className="text-center text-red-400 text-base md:text-lg mb-12 select-none font-medium backdrop-blur-sm">
          ⚠️ Clique no <span className="inline-block px-2 py-0.5 rounded font-mono text-white bg-red-900/50 border border-red-500/30">@</span> para acessar o perfil diretamente!
        </p>
        
        {/* Container dos clientes com controles */}
        <div className="relative">
          {/* Botão anterior - apenas desktop */}
          <Button
            onClick={prevClient}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600/20 hover:bg-red-600/40 text-white border border-red-600/50 hover:border-red-600 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105"
            size="icon"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          {/* Botão próximo - apenas desktop */}
          <Button
            onClick={nextClient}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600/20 hover:bg-red-600/40 text-white border border-red-600/50 hover:border-red-600 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105"
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
        
        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {clientes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out ${
                index === currentIndex 
                  ? 'bg-red-600 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
              }`}
            />
          ))}
        </div>
        
        {/* Botões de navegação mobile */}
        <div className="md:hidden flex justify-center mt-6 space-x-4">
          <Button
            onClick={prevClient}
            className="bg-red-600/20 hover:bg-red-600/40 text-white border border-red-600/50 hover:border-red-600 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105"
            size="sm"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Anterior
          </Button>
          <Button
            onClick={nextClient}
            className="bg-red-600/20 hover:bg-red-600/40 text-white border border-red-600/50 hover:border-red-600 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105"
            size="sm"
          >
            Próximo
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Status do auto-play - apenas desktop */}
        <div className="hidden md:block text-center mt-4">
          <p className="text-gray-400 text-sm">
            {isPaused ? 'Auto-play pausado (passe o mouse para fora)' : 'Auto-play ativo'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clientes;