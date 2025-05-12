
import { useEffect, useRef } from "react";
import { CircleDollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
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

  const services = [
    {
      title: "Tráfego Pago",
      description: "Campanhas estratégicas em Google Ads, Facebook Ads e Instagram Ads para maximizar seu ROI e conversões.",
      icon: CircleDollarSign,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red"
    },
    {
      title: "Tráfego Orgânico",
      description: "Estratégias de SEO e marketing de conteúdo para posicionar sua marca organicamente nos motores de busca.",
      icon: TrendingUp,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-[#0a0a0a] opacity-0">
      <div className="container mx-auto">
        <h2 className="section-title text-gradient">Nossos Serviços</h2>
        <p className="section-subtitle">
          A publicidade certa no momento certo para o público certo
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <Card 
                className="border-[#222] bg-[#111] shadow-xl hover:shadow-frezza-red/10 hover:border-frezza-red/40 transition-all duration-500 h-full overflow-hidden"
              >
                <CardHeader className={`${service.color} flex items-center justify-center py-8`}>
                  <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </CardHeader>
                <CardContent className="pt-8 text-center">
                  <CardTitle className="text-2xl mb-4 text-white group-hover:text-frezza-red transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-lg">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <Button 
            className="bg-frezza-red hover:bg-frezza-red/80 text-white px-8 py-6 text-lg border border-frezza-red/20"
            asChild
          >
            <a href="#contact">Entre em Contato</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
