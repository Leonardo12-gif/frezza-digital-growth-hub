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

  // Função para ir para o próximo cliente
  const nextClient = () => {
    setCurrentIndex((prev) => (prev + 1) % clientes.length);
  };

  // Função para ir para o cliente anterior
  const prevClient = () => {
    setCurrentIndex((prev) => (prev - 1 + clientes.length) % clientes.length);
  };

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextClient, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  // Função para obter clientes visíveis (3 por vez)
  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % clientes.length;
      visible.push({ ...clientes[index], index });
    }
    return visible;
  };

  const ClientCard = ({ nome, user, url, desc, img, index: cardIndex }) => (
    <div
      className="flex flex-col rounded-2xl shadow-lg px-7 pt-8 pb-6 min-h-[390px] h-full justify-between items-center transition-all duration-500 min-w-[280px] max-w-[300px] mx-4 group relative overflow-hidden"
      style={{
        boxShadow: "0 6px 30px 0 rgba(0,0,0,0.5), 0 0px 1.5px 0 rgba(255,255,255,0.1)",
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Fundo animado com gradiente vermelho-preto */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div 
        className="absolute inset-0 bg-gradient-to-br from-frezza-red/20 via-red-900/30 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "linear-gradient(135deg, rgba(234, 56, 76, 0.3) 0%, rgba(139, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.9) 100%)"
        }}
      ></div>
      
      {/* Conteúdo do card */}
      <div className="relative z-10 flex flex-col h-full items-center justify-between w-full">
        {/* Avatar com borda degradê Instagram - agora clicável */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir Instagram de ${nome}`}
          tabIndex={0}
          className="relative flex items-center justify-center mb-3 group/avatar outline-none focus-visible:ring-2 focus-visible:ring-frezza-red/80 rounded-full"
          style={{ outline: "none" }}
        >
          <div
            className="rounded-full p-1 transition-all duration-150 group-hover/avatar:scale-105"
            style={{
              background:
                'conic-gradient(from 210deg at 50% 50%, #405DE6 0deg, #5851DB 40deg, #833AB4 90deg, #C13584 140deg, #E1306C 190deg, #FD1D1D 240deg, #F56040 290deg, #FCAF45 340deg, #405DE6 360deg)'
            }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center shrink-0 border-0">
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
        
        {/* AVISO DISCRETO abaixo da imagem do Instagram */}
        <span className="block text-xs text-gray-400 mt-1 mb-1 text-center select-none" aria-hidden="true">
          clique para acessar o perfil
        </span>

        {/* Nome */}
        <div className="flex items-center justify-center mb-2 w-full">
          <span
            className="
              px-4 py-1 rounded-lg bg-gradient-to-r from-frezza-red/20 to-black/50 text-white text-lg md:text-xl font-bold font-['Montserrat'] shadow-sm border border-frezza-red/30
              w-full text-center break-words break-all max-w-full
              overflow-hidden
              whitespace-pre-line
              leading-tight
              "
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
          className="
            font-semibold text-white text-base md:text-lg mb-2
            hover:text-gray-200 transition duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-frezza-red/80
            px-2 py-0.5 rounded cursor-pointer
            w-full text-center
          "
          aria-label={`Ir para o Instagram de ${nome}`}
          tabIndex={0}
          style={{ outline: "none" }}
        >
          <span
            className="
              inline-flex items-center gap-1
              w-full
              justify-center
              break-all break-words whitespace-pre-line
              text-center
              "
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
            className="flex items-center justify-center w-8 h-8 rounded-full duration-200 
              bg-gradient-to-r from-frezza-red/30 to-black/50 hover:from-frezza-red hover:to-red-600 transition-all shadow-sm border border-frezza-red/40 hover:border-frezza-red"
            aria-label={`Abrir Instagram de ${nome}`}
            tabIndex={0}
          >
            <Instagram className="text-white transition-colors" size={20} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-2 bg-black relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2 font-['Montserrat']">
          Clientes que nós trabalhamos.
        </h2>
        <p className="text-center text-frezza-red text-base md:text-lg mb-12 select-none font-medium">
          ⚠️ Clique no <span className="inline-block px-1 rounded font-mono text-white bg-[#351718]">@</span> para acessar o perfil diretamente!
        </p>
        
        {/* Container dos clientes com controles */}
        <div className="relative">
          {/* Botão anterior */}
          <Button
            onClick={prevClient}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-frezza-red/20 hover:bg-frezza-red/40 text-white border border-frezza-red/50 hover:border-frezza-red backdrop-blur-sm"
            size="icon"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          {/* Botão próximo */}
          <Button
            onClick={nextClient}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-frezza-red/20 hover:bg-frezza-red/40 text-white border border-frezza-red/50 hover:border-frezza-red backdrop-blur-sm"
            size="icon"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
          
          {/* Slider dos clientes */}
          <div className="overflow-hidden mx-16">
            <div className="flex justify-center items-center">
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-frezza-red scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        
        {/* Status do auto-play */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            {isAutoPlaying ? 'Auto-play ativo' : 'Passe o mouse para retomar o auto-play'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clientes;