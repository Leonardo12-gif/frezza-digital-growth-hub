import { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartBarIncreasing, Instagram, Handshake, Video, Scissors, Camera, BarChart, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        sectionRef.current?.classList.add('animate-fadeIn');
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
  return <section id="portfolio" ref={sectionRef} className="section-padding bg-black opacity-0">
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
        
        {/* Botão de destaque para o portfólio completo */}
        <div className="flex flex-col items-center justify-center mb-12 mt-8 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-frezza-red via-frezza-red/70 to-frezza-red rounded-lg blur-lg opacity-75 animate-pulse"></div>
          <a href="https://www.canva.com/design/DAGqfGP0KrA/b_tYbS5_f94YrJ9jCZoIIg/view?utm_content=DAGqfGP0KrA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h60be45537d" target="_blank" rel="noopener noreferrer" className="relative z-10">
            <Button variant="outline" size="lg" className="border-frezza-red bg-black hover:bg-frezza-red/10 text-frezza-red hover:text-white transition-all duration-300 text-lg font-bold gap-3 px-8 py-6 animate-bounce hover:animate-none transform hover:translate-y-[-3px] hover:translate-x-[3px]">
              Confira nosso portfólio completo
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </Button>
          </a>
          <p className="mt-3 text-frezza-red font-medium animate-pulse">
            Veja todos os nossos trabalhos e resultados
          </p>
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
