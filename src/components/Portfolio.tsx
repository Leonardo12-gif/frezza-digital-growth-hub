
import { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIncreasing, Instagram, Handshake } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Portfolio items with more relevant content
  const portfolioItems = [
    {
      id: 1,
      title: "Campanha Facebook Ads",
      category: "trafego-pago",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      type: "image",
      icon: <ChartBarIncreasing className="text-frezza-red" />
    },
    {
      id: 2,
      title: "Estratégia SEO E-commerce",
      category: "trafego-organico",
      image: "https://images.unsplash.com/photo-1533750516278-4555388a4a06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      type: "image",
      icon: <Instagram className="text-frezza-red" />
    },
    {
      id: 3,
      title: "Parceria de Negócios",
      category: "all",
      image: "https://cdn.coverr.co/videos/coverr-business-partners-shaking-hands-4584/1080p.jpg",
      type: "video",
      videoUrl: "https://cdn.coverr.co/videos/coverr-business-partners-shaking-hands-4584/1080p.mp4",
      icon: <Handshake className="text-frezza-red" />
    },
    {
      id: 4,
      title: "Crescimento Instagram",
      category: "trafego-organico",
      image: "https://images.unsplash.com/photo-1563845104524-b6b320b5c3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      type: "image",
      icon: <Instagram className="text-frezza-red" />
    },
    {
      id: 5,
      title: "Campanha Google Ads",
      category: "trafego-pago",
      image: "https://images.unsplash.com/photo-1590845947616-1b2217279d02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
      type: "image",
      icon: <ChartBarIncreasing className="text-frezza-red" />
    },
    {
      id: 6,
      title: "Análise de ROI",
      category: "trafego-pago",
      image: "https://images.unsplash.com/photo-1617888284994-cc3b561a3ae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
      type: "image",
      icon: <ChartBarIncreasing className="text-frezza-red" />
    }
  ];

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
          <div className="flex justify-center mb-12">
            <TabsList className="bg-[#111] border border-[#222]">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveCategory("all")}
                className="data-[state=active]:bg-frezza-red data-[state=active]:text-white px-8 py-3"
              >
                Todos
              </TabsTrigger>
              <TabsTrigger 
                value="trafego-pago" 
                onClick={() => setActiveCategory("trafego-pago")}
                className="data-[state=active]:bg-frezza-red data-[state=active]:text-white px-8 py-3"
              >
                Tráfego Pago
              </TabsTrigger>
              <TabsTrigger 
                value="trafego-organico" 
                onClick={() => setActiveCategory("trafego-organico")}
                className="data-[state=active]:bg-frezza-red data-[state=active]:text-white px-8 py-3"
              >
                Tráfego Orgânico
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden border-none shadow-xl hover:shadow-frezza-red/10 transition-all duration-500 bg-transparent"
                >
                  <CardContent className="p-0 relative group">
                    {item.type === "video" ? (
                      <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-80 object-cover"
                        poster={item.image}
                      >
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-80 object-cover"
                      />
                    )}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-frezza-red bg-opacity-75 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                      <div className="text-white p-8 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                        <div className="flex items-center mb-3">
                          {item.icon}
                          <span className="ml-2 text-frezza-red font-medium capitalize">{item.category.replace('-', ' ')}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {["trafego-pago", "trafego-organico"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter(item => item.category === category)
                  .map((item) => (
                    <Card 
                      key={item.id} 
                      className="overflow-hidden border-none shadow-xl hover:shadow-frezza-red/10 transition-all duration-500 bg-transparent"
                    >
                      <CardContent className="p-0 relative group">
                        {item.type === "video" ? (
                          <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            className="w-full h-80 object-cover"
                            poster={item.image}
                          >
                            <source src={item.videoUrl} type="video/mp4" />
                          </video>
                        ) : (
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-80 object-cover"
                          />
                        )}
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-frezza-red bg-opacity-75 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                          <div className="text-white p-8 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                            <div className="flex items-center mb-3">
                              {item.icon}
                              <span className="ml-2 text-frezza-red font-medium capitalize">{item.category.replace('-', ' ')}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
