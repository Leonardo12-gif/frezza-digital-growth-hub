
import { useEffect, useRef } from "react";
import { Video, Film, Users, TrendingUp, Leaf } from "lucide-react";
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
      title: "Gravação de Vídeo",
      description: "Produção audiovisual profissional com equipamentos de última geração para criar conteúdo de alta qualidade para sua marca.",
      icon: Video,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Edição de Vídeo",
      description: "Pós-produção detalhada com efeitos visuais, colorização e finalização que transformam seu material bruto em conteúdo impactante.",
      icon: Film,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Modelo para Publicidade",
      description: "Modelos profissionais masculinos e femininos para campanhas publicitárias, ensaios fotográficos e gravações comerciais.",
      icon: Users,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Tráfego Pago",
      description: "Estratégias de anúncios pagos em plataformas digitais para aumentar a visibilidade da sua marca e gerar resultados imediatos.",
      icon: TrendingUp,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Tráfego Orgânico",
      description: "Estratégias de crescimento sustentável nas redes sociais e buscadores para construir autoridade e presença digital a longo prazo.",
      icon: Leaf,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1a4?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-[#0a0a0a] opacity-0">
      <div className="container mx-auto">
        <h2 className="section-title text-gradient">Nossos Serviços</h2>
        <p className="section-subtitle">
          Soluções completas para elevar sua presença digital e impacto visual
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <Card 
                className="border-[#222] bg-[#111] shadow-xl hover:shadow-frezza-red/10 hover:border-frezza-red/40 transition-all duration-500 h-full overflow-hidden"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Frezza Marketing`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardHeader className={`${service.color} flex items-center justify-center py-6`}>
                  <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 text-center">
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
