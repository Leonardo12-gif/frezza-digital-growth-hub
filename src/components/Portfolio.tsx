
import { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChartBarIncreasing, 
  Instagram, 
  Handshake, 
  Video, 
  Scissors, 
  Camera, 
  BarChart 
} from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
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

  // Portfolio items com materiais do Canva
  const portfolioItems = [
    {
      id: 1,
      title: "Campanha para Loja de Suplementos",
      category: "trafego-pago",
      image: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/suplementos-ad.png",
      type: "image",
      icon: <ChartBarIncreasing className="text-frezza-red" />
    },
    {
      id: 2,
      title: "Gestão de Anúncios",
      category: "trafego-pago",
      image: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/anuncios.png",
      type: "image",
      icon: <ChartBarIncreasing className="text-frezza-red" />
    },
    {
      id: 3,
      title: "Resultados Campanhas Digitais",
      category: "trafego-pago",
      image: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/meta-results.png",
      type: "image",
      icon: <BarChart className="text-frezza-red" />
    },
    {
      id: 4,
      title: "Campanha para Academia",
      category: "trafego-pago",
      videoUrl: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/academia-video.mp4",
      image: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/academia-thumbnail.png",
      type: "video",
      icon: <Video className="text-frezza-red" />
    },
    {
      id: 5,
      title: "Edição de Vídeo Profissional",
      category: "producao-de-conteudo",
      videoUrl: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/edicao-video.mp4",
      image: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/edicao-thumbnail.png",
      type: "video",
      icon: <Scissors className="text-frezza-red" />
    },
    {
      id: 6,
      title: "Estratégia de Instagram",
      category: "trafego-organico",
      image: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/instagram-growth.png",
      type: "image",
      icon: <Instagram className="text-frezza-red" />
    },
    {
      id: 7,
      title: "Produção de Conteúdo",
      category: "producao-de-conteudo",
      videoUrl: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/producao-conteudo.mp4",
      image: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/producao-thumbnail.png",
      type: "video",
      icon: <Camera className="text-frezza-red" />
    },
    {
      id: 8,
      title: "Parceria Estratégica",
      category: "all",
      image: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/parceria.png",
      type: "image",
      icon: <Handshake className="text-frezza-red" />
    },
    {
      id: 9,
      title: "Gestão de Tráfego Orgânico",
      category: "trafego-organico",
      image: "https://yderodrwgnxrvlsgjxns.supabase.co/storage/v1/object/public/lovable/portfolio/organico-estrategia.png",
      type: "image",
      icon: <Instagram className="text-frezza-red" />
    }
  ];

  const renderPortfolioItem = (item: any) => (
    <Card key={item.id} className="overflow-hidden border-none shadow-xl hover:shadow-frezza-red/10 transition-all duration-500 bg-transparent">
      <CardContent className="p-0 relative group h-full">
        {item.type === "video" ? (
          <div className="w-full h-80 relative">
            <AspectRatio ratio={16/9} className="overflow-hidden h-80">
              <video 
                className="w-full h-full object-cover" 
                poster={item.image} 
                controls
                muted
              >
                <source src={item.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
                <div className="w-16 h-16 bg-frezza-red rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                </div>
              </div>
            </AspectRatio>
          </div>
        ) : (
          <img src={item.image} alt={item.title} className="w-full h-80 object-cover" />
        )}
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
    </Card>
  );

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding bg-black opacity-0">
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
        
        <Tabs defaultValue="all" className="w-full mt-16">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <TabsList className="bg-[#111] border border-[#222] flex-nowrap">
              <TabsTrigger value="all" onClick={() => setActiveCategory("all")} className="data-[state=active]:bg-frezza-red data-[state=active]:text-white px-8 py-3">
                Todos
              </TabsTrigger>
              <TabsTrigger value="trafego-pago" onClick={() => setActiveCategory("trafego-pago")} className="data-[state=active]:bg-frezza-red data-[state=active]:text-white px-8 py-3">
                Tráfego Pago
              </TabsTrigger>
              <TabsTrigger value="trafego-organico" onClick={() => setActiveCategory("trafego-organico")} className="data-[state=active]:bg-frezza-red data-[state=active]:text-white px-8 py-3">
                Tráfego Orgânico
              </TabsTrigger>
              <TabsTrigger value="producao-de-conteudo" onClick={() => setActiveCategory("producao-de-conteudo")} className="data-[state=active]:bg-frezza-red data-[state=active]:text-white px-8 py-3">
                Produção de Conteúdo
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0 bg-zinc-950">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => renderPortfolioItem(item))}
            </div>
          </TabsContent>
          
          {["trafego-pago", "trafego-organico", "producao-de-conteudo"].map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter(item => item.category === category)
                  .map(item => renderPortfolioItem(item))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Destaques em Vídeo</h3>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {portfolioItems
                .filter(item => item.type === "video")
                .map(item => (
                  <CarouselItem key={item.id} className="md:basis-4/5 lg:basis-3/4">
                    <div className="p-1">
                      <AspectRatio ratio={16/9} className="bg-black rounded-lg overflow-hidden">
                        <video 
                          controls 
                          className="w-full h-full object-contain"
                          poster={item.image}
                        >
                          <source src={item.videoUrl} type="video/mp4" />
                        </video>
                      </AspectRatio>
                      <div className="text-center mt-4">
                        <h4 className="text-lg font-medium text-white">{item.title}</h4>
                        <p className="text-gray-400 capitalize">{item.category.replace(/-/g, ' ')}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 bg-frezza-red text-white border-none" />
            <CarouselNext className="right-2 md:right-4 bg-frezza-red text-white border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
