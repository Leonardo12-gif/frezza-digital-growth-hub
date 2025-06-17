

import { useEffect, useRef } from "react";
import { Video, Film, Users, TrendingUp, Leaf, Share2, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // Get base URL from environment
  const basePath = import.meta.env.BASE_URL || "/";

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
      title: "Gravação de Vídeo (Opcinal DRONE)",
      description: "Produção audiovisual (captação aérea opcional) profissional com equipamentos de última geração para criar conteúdo de alta qualidade para sua marca.",
      icon: Video,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: `/lovable-uploads/b234918b-d672-4dd4-8299-0603173a16f2.png`
    },
    {
      title: "Edição de Vídeo",
      description: "Pós-produção detalhada com efeitos visuais, colorização e finalização que transformam seu material bruto em conteúdo impactante.",
      icon: Film,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: `/lovable-uploads/ed6f2a17-3f61-4200-9ab9-62e97c34467e.png`
    },
    {
      title: "Modelo para Publicidade",
      description: "Modelos profissionais masculinos e femininos para campanhas publicitárias, ensaios fotográficos e gravações comerciais.",
      icon: Users,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: `/lovable-uploads/13d9f5fc-872b-42e4-84ea-80665a78e30e.png`
    },
    {
      title: "Tráfego Pago",
      description: "Estratégias de anúncios pagos em plataformas digitais para aumentar a visibilidade da sua marca e gerar resultados imediatos.",
      icon: TrendingUp,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: `/lovable-uploads/e881b66b-1dc1-4d41-9e13-5b3cb6eb74e2.png`
    },
    {
      title: "Tráfego Orgânico",
      description: "Estratégias de crescimento sustentável nas redes sociais e buscadores para construir autoridade e presença digital a longo prazo.",
      icon: Leaf,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: `/lovable-uploads/3dcd54f4-121d-4d5b-8a01-064e9b6c7b0b.png`
    },
    {
      title: "Social Media",
      description: "Gestão completa das suas redes sociais com criação de conteúdo, planejamento estratégico e análise de resultados para aumentar seu engajamento.",
      icon: Share2,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: `/lovable-uploads/7e00b413-82e9-4902-9ab2-f9f2cb975040.png`
    },
    {
      title: "Criação de Site Profissional",
      description: "Desenvolvimento de sites modernos, responsivos e otimizados para conversão, com identidade visual personalizada para sua marca.",
      icon: TrendingUp, 
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: "/lovable-uploads/criacao-de-site-profissional.png"
    },
    {
      title: "Automação e Atendimento Digital",
      description: "Criação de fluxos com bots inteligentes para WhatsApp, Instagram e e-mail.",
      icon: Bot,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: "/lovable-uploads/6ea2347e-c731-4455-8faa-1b5af6e6331c.png"
    }
  ];

  const handleWhatsAppClick = (service: string) => {
    const message = `Olá, gostaria de um orçamento para o serviço de ${service}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5515991273423?text=${encodedMessage}`, '_blank');
  };

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
            <Card className="border-[#222] bg-[#111] shadow-xl hover:shadow-frezza-red/10 hover:border-frezza-red/40 transition-all duration-500 h-full flex flex-col overflow-hidden">
              
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Frezza Marketing`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 border-b border-neutral-700 shadow-md"
                  style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)' }}
                />
              </div>

              <CardHeader className={`${service.color} flex items-center justify-center py-6`}>
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
              </CardHeader>

              <CardContent className="pt-6 text-center flex-1 flex flex-col">
                <CardTitle className="text-2xl mb-4 text-white group-hover:text-frezza-red transition-colors duration-300">
                  {service.title}
                </CardTitle>

                <CardDescription className="text-gray-400 text-lg mb-6">
                  {service.description}
                </CardDescription>

                {service.title === "Modelo para Publicidade" && (
                  <div className="mt-auto mb-4 p-2 bg-[#1a1a1a] rounded-md">
                    <p className="text-sm text-gray-300">Disponível nas versões masculina e feminina</p>
                  </div>
                )}

                <div className="mt-auto">
                  <Button 
                    onClick={() => handleWhatsAppClick(service.title)}
                    className="w-full bg-frezza-red hover:bg-black hover:text-frezza-red text-white font-semibold py-2 border border-frezza-red transition-all duration-300 transform hover:-translate-y-1"
                  >
                    QUERO UM ORÇAMENTO
                  </Button>
                </div>
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

