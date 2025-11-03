import { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartBarIncreasing, Instagram, Handshake, Video, Scissors, Camera, BarChart, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  // Portfólio otimizado com imagens hospedadas localmente
  const portfolioItems = [{
    id: 1,
    title: "Campanha para Loja de Suplementos",
    category: "trafego-pago",
    image: "/lovable-uploads/portfolio/suplementos-ad.webp",
    type: "image",
    icon: <ChartBarIncreasing className="text-frezza-red" />
  }, {
    id: 2,
    title: "Gestão de Anúncios",
    category: "trafego-pago",
    image: "/lovable-uploads/portfolio/anuncios.webp",
    type: "image",
    icon: <ChartBarIncreasing className="text-frezza-red" />
  }, {
    id: 3,
    title: "Resultados Campanhas Digitais",
    category: "trafego-pago",
    image: "/lovable-uploads/portfolio/meta-results.webp",
    type: "image",
    icon: <BarChart className="text-frezza-red" />
  }, {
    id: 4,
    title: "Campanha para Academia",
    category: "trafego-pago",
    videoUrl: "/lovable-uploads/portfolio/academia-video.mp4",
    image: "/lovable-uploads/portfolio/academia-thumbnail.webp",
    type: "video",
    icon: <Video className="text-frezza-red" />
  }, {
    id: 5,
    title: "Edição de Vídeo Profissional",
    category: "producao-de-conteudo",
    videoUrl: "/lovable-uploads/portfolio/edicao-video.mp4",
    image: "/lovable-uploads/portfolio/edicao-thumbnail.webp",
    type: "video",
    icon: <Scissors className="text-frezza-red" />
  }, {
    id: 6,
    title: "Estratégia de Instagram",
    category: "trafego-organico",
    image: "/lovable-uploads/portfolio/instagram-growth.webp",
    type: "image",
    icon: <Instagram className="text-frezza-red" />
  }, {
    id: 7,
    title: "Produção de Conteúdo",
    category: "producao-de-conteudo",
    videoUrl: "/lovable-uploads/portfolio/producao-conteudo.mp4",
    image: "/lovable-uploads/portfolio/producao-thumbnail.webp",
    type: "video",
    icon: <Camera className="text-frezza-red" />
  }, {
    id: 8,
    title: "Parceria Estratégica",
    category: "all",
    image: "/lovable-uploads/portfolio/parceria.webp",
    type: "image",
    icon: <Handshake className="text-frezza-red" />
  }, {
    id: 9,
    title: "Gestão de Tráfego Orgânico",
    category: "trafego-organico",
    image: "/lovable-uploads/portfolio/organico-estrategia.webp",
    type: "image",
    icon: <Instagram className="text-frezza-red" />
  }];
  const VideoPlayer = ({
    item
  }: {
    item: any;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    return <div className="w-full h-80 relative">
        <AspectRatio ratio={16 / 9} className="overflow-hidden h-80">
          <video ref={videoRef} className="w-full h-full object-cover" poster={item.image} controls muted playsInline preload="metadata">
            <source src={item.videoUrl} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
            <div className="w-16 h-16 bg-frezza-red rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
            </div>
          </div>
        </AspectRatio>
      </div>;
  };
  const renderPortfolioItem = (item: any) => <Card key={item.id} className="overflow-hidden border-none shadow-xl hover:shadow-frezza-red/10 transition-all duration-500 bg-transparent">
      <CardContent className="p-0 relative group h-full">
        {item.type === "video" ? <VideoPlayer item={item} /> : <img src={item.image} alt={item.title} className="w-full h-80 object-cover" loading="lazy" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end rounded-none">
          <div className="text-white p-8 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex items-center mb-3">
              {item.icon}
              <span className="ml-2 text-frezza-red font-medium capitalize">
                {item.category.replace(/-/g, ' ')}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
          </div>
        </div>
      </CardContent>
    </Card>;
  const CarouselVideoPlayer = ({
    item
  }: {
    item: any;
  }) => {
    return <AspectRatio ratio={16 / 9} className="bg-black rounded-lg overflow-hidden">
        <video controls playsInline preload="metadata" className="w-full h-full object-contain" poster={item.image}>
          <source src={item.videoUrl} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </AspectRatio>;
  };
  return <section id="portfolio" ref={sectionRef} className={`section-padding bg-black scroll-animate ${isVisible ? 'visible' : ''}`}>
      {/* Background Elements */}
      <div className="absolute inset-x-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-frezza-red opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-frezza-red opacity-5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-gradient">Nosso Portfólio</h2>
        <p className="section-subtitle">
          Conheça alguns dos nossos trabalhos e cases de sucesso
        </p>
        
        {/* Botão Futurístico do Portfólio */}
        <div className="flex flex-col items-center justify-center mb-16 mt-12 relative">
          {/* Efeito de Partículas de Fundo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-frezza-red rounded-full opacity-30 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Container Principal do Botão */}
          <div className="relative group cursor-pointer">
            {/* Glow Effect Externo */}
            <div className="absolute -inset-8 bg-gradient-to-r from-frezza-red/20 via-frezza-red/40 to-frezza-red/20 rounded-full blur-xl opacity-60 group-hover:opacity-100 animate-pulse group-hover:animate-none transition-all duration-700"></div>
            
            {/* Anel Orbital Animado */}
            <div className="absolute -inset-4 border border-frezza-red/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -inset-6 border border-frezza-red/20 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
            
            {/* Botão Principal */}
            <a 
              href="https://www.canva.com/design/DAGqfGP0KrA/b_tYbS5_f94YrJ9jCZoIIg/view?utm_content=DAGqfGP0KrA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h60be45537d" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative z-10 block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black via-gray-900 to-black p-[2px] group-hover:from-frezza-red/50 group-hover:via-frezza-red group-hover:to-frezza-red/50 transition-all duration-500">
                {/* Background com Efeito Holográfico */}
                <div className="relative bg-black rounded-2xl px-12 py-6 group-hover:bg-gradient-to-r group-hover:from-black/90 group-hover:via-black/80 group-hover:to-black/90 transition-all duration-500 overflow-hidden">
                  {/* Efeito de Scan Line */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-frezza-red/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
                  {/* Conteúdo do Botão */}
                  <div className="relative flex items-center gap-4 text-xl font-bold">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-frezza-red rounded-full animate-pulse group-hover:animate-none group-hover:bg-white transition-colors duration-300"></div>
                      <span className="text-white group-hover:text-frezza-red transition-colors duration-300 font-['Montserrat'] tracking-wide">
                        PORTFÓLIO COMPLETO
                      </span>
                    </div>
                    
                    {/* Ícone Animado */}
                    <div className="relative">
                      <ArrowRight className="w-6 h-6 text-frezza-red group-hover:text-white transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                      <div className="absolute inset-0 bg-frezza-red rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Efeito de Reflexo */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-frezza-red/50 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-frezza-red/50 transition-all duration-500"></div>
                </div>
              </div>
            </a>
          </div>

          {/* Texto Descritivo Futurístico */}
          <div className="mt-8 text-center relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-frezza-red/50"></div>
              <div className="w-2 h-2 bg-frezza-red rounded-full animate-pulse"></div>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-frezza-red/50"></div>
            </div>
            <p className="text-frezza-red font-medium text-lg tracking-widest uppercase font-['Montserrat']">
              Acesso Exclusivo
            </p>
            <p className="text-gray-400 text-sm mt-1 max-w-md mx-auto">
              Explore nossos projetos mais impactantes e cases de sucesso
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full mt-8">
          
          
          <TabsContent value="all" className="mt-0 bg-zinc-950">
            
          </TabsContent>
          
          {["trafego-pago", "trafego-organico", "producao-de-conteudo"].map(category => <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.filter(item => item.category === category).map(item => renderPortfolioItem(item))}
              </div>
            </TabsContent>)}
        </Tabs>
        
        
      </div>
    </section>;
};
export default Portfolio;
