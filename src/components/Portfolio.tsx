
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIncreasing, ChartColumnIncreasing, ChartLine, Instagram, Handshake } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Updated portfolio items with more relevant content
  const portfolioItems = [
    {
      id: 1,
      title: "Campanha Facebook Ads",
      category: "trafego-pago",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      type: "image",
      icon: <ChartBarIncreasing className="text-frezza-red" />
    },
    {
      id: 2,
      title: "Estratégia SEO E-commerce",
      category: "trafego-organico",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      type: "image",
      icon: <Instagram className="text-frezza-red" />
    },
    {
      id: 3,
      title: "Parceria de Negócios",
      category: "all",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      type: "video",
      icon: <Handshake className="text-frezza-red" />
    },
    {
      id: 4,
      title: "Crescimento Instagram",
      category: "trafego-organico",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      type: "image",
      icon: <Instagram className="text-frezza-red" />
    },
    {
      id: 5,
      title: "Campanha Google Ads",
      category: "trafego-pago",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80",
      type: "image",
      icon: <ChartColumnIncreasing className="text-frezza-red" />
    },
    {
      id: 6,
      title: "Análise de ROI",
      category: "trafego-pago",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      type: "image",
      icon: <ChartLine className="text-frezza-red" />
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50 relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-frezza-red opacity-5"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-frezza-red opacity-5"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-frezza-red opacity-5"></div>
      
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
                    <div className="absolute inset-0 bg-frezza-red bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-4">
                        <div className="flex items-center justify-center mb-3">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="capitalize">{item.category.replace('-', ' ')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {["trafego-pago", "trafego-organico"].map((category) => (
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
                        <div className="absolute inset-0 bg-frezza-red bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-4">
                            <div className="flex items-center justify-center mb-3">
                              {item.icon}
                            </div>
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
