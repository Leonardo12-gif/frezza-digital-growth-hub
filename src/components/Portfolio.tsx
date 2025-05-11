
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Placeholder portfolio items - replace with real content later
  const portfolioItems = [
    {
      id: 1,
      title: "Campanha Facebook Ads",
      category: "trafego-pago",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      type: "image"
    },
    {
      id: 2,
      title: "Estratégia SEO E-commerce",
      category: "trafego-organico",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80",
      type: "image"
    },
    {
      id: 3,
      title: "Vídeo Campanha Produto",
      category: "videos",
      image: "https://images.unsplash.com/photo-1601840622903-c3f001e19373?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      type: "video"
    },
    {
      id: 4,
      title: "Modelos para Linha de Roupas",
      category: "modelos",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
      type: "image"
    },
    {
      id: 5,
      title: "Campanha Google Ads",
      category: "trafego-pago",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      type: "image"
    },
    {
      id: 6,
      title: "Vídeo Institucional",
      category: "videos",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80",
      type: "video"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Nosso Portfólio</h2>
        <p className="section-subtitle">
          Conheça alguns dos nossos trabalhos e cases de sucesso
        </p>
        
        <Tabs defaultValue="all" className="w-full mt-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveCategory("all")}
                className="px-6"
              >
                Todos
              </TabsTrigger>
              <TabsTrigger 
                value="trafego-pago" 
                onClick={() => setActiveCategory("trafego-pago")}
                className="px-6"
              >
                Tráfego Pago
              </TabsTrigger>
              <TabsTrigger 
                value="trafego-organico" 
                onClick={() => setActiveCategory("trafego-organico")}
                className="px-6"
              >
                Tráfego Orgânico
              </TabsTrigger>
              <TabsTrigger 
                value="videos" 
                onClick={() => setActiveCategory("videos")}
                className="px-6"
              >
                Vídeos
              </TabsTrigger>
              <TabsTrigger 
                value="modelos" 
                onClick={() => setActiveCategory("modelos")}
                className="px-6"
              >
                Modelos
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                  <CardContent className="p-0 relative group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-frezza bg-opacity-75 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-frezza bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-4">
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="capitalize">{item.category.replace('-', ' ')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {["trafego-pago", "trafego-organico", "videos", "modelos"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems
                  .filter(item => item.category === category)
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                      <CardContent className="p-0 relative group">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-64 object-cover"
                        />
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-frezza bg-opacity-75 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-frezza bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-4">
                            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                            <p className="capitalize">{item.category.replace('-', ' ')}</p>
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
