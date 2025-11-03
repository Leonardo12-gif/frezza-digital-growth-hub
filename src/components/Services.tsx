

import { useState } from "react";
import { Video, Film, Users, TrendingUp, Leaf, Share2, Bot, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const [showAll, setShowAll] = useState(false);
  // Get base URL from environment
  const basePath = import.meta.env.BASE_URL || "/";

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
      title: "Personal Media",
      description: "É um serviço exclusivo de produção de conteúdo audiovisual para pessoas que desejam valorizar sua imagem, fortalecer a presença digital e se conectar de forma autêntica com o público.",
      icon: Video,
      color: "bg-frezza-red/10",
      iconColor: "text-frezza-red",
      image: `/lovable-uploads/personal-media-banner-new.png`
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
    <section id="services" ref={sectionRef} className={`section-padding scroll-animate ${isVisible ? 'visible' : ''} relative overflow-hidden bg-black`}>
      {/* Background consistente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
      
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Glow sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05),transparent_70%)]"></div>

      <div className="container mx-auto relative z-10">
        {/* Header Futurístico */}
        <div className="text-center mb-20 relative">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-frezza-red"></div>
            <div className="w-4 h-4 border-2 border-frezza-red rotate-45 bg-black"></div>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-frezza-red"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white font-['Montserrat'] relative">
            <span className="bg-gradient-to-r from-white via-frezza-red to-white bg-clip-text text-transparent">
              NOSSOS SERVIÇOS
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-frezza-red to-white bg-clip-text text-transparent blur-sm opacity-50"></div>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Soluções completas para elevar sua presença digital
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-frezza-red via-white to-frezza-red mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Grid de Serviços Futurístico */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {services.slice(0, showAll ? services.length : 3).map((service, index) => (
            <div key={service.title} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Container Principal do Card */}
              <div className="relative h-full">
                {/* Glow sutil no hover */}
                <div className="absolute -inset-1 bg-frezza-red/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card Principal */}
                <Card className="relative bg-black/80 border border-gray-800 rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-frezza-red/50 transition-all duration-300 shadow-xl">
                  {/* Header com Imagem */}
                  <div className="relative overflow-hidden h-52">
                    <img 
                      src={service.image} 
                      alt={`${service.title} - Frezza Marketing`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70"></div>
                    
                    {/* Ícone Flutuante */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-black/90 rounded-full flex items-center justify-center border border-frezza-red/30 group-hover:border-frezza-red transition-all duration-300">
                      <service.icon className="w-6 h-6 text-frezza-red" />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <CardContent className="p-6 flex-1 flex flex-col relative">
                    {/* Título com Efeito Neon */}
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-frezza-red transition-all duration-300 font-['Montserrat'] tracking-wide">
                      {service.title}
                      <div className="w-full h-[1px] bg-gradient-to-r from-frezza-red/0 via-frezza-red/50 to-frezza-red/0 mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </h3>

                    {/* Descrição */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Tag Especial para Modelo */}
                    {service.title === "Modelo para Publicidade" && (
                      <div className="mb-4 p-3 bg-gradient-to-r from-frezza-red/10 to-frezza-red/5 border border-frezza-red/20 rounded-lg">
                        <p className="text-xs text-frezza-red font-medium text-center">
                          ⚡ Disponível nas versões masculina e feminina
                        </p>
                      </div>
                    )}

                    {/* Botão limpo */}
                    <div className="mt-auto">
                      <div 
                        onClick={() => handleWhatsAppClick(service.title)}
                        className="relative cursor-pointer bg-frezza-red hover:bg-frezza-red/90 border border-frezza-red/20 rounded-lg p-3 transition-all duration-300"
                      >
                        {/* Texto do Botão */}
                        <div className="flex items-center justify-center gap-2 text-white font-bold text-sm tracking-wider">
                          <span className="font-['Montserrat']">SOLICITAR ORÇAMENTO</span>
                        </div>
                      </div>
                    </div>

                    {/* Efeitos de Canto */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-frezza-red/30 group-hover:border-frezza-red transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-frezza-red/30 group-hover:border-frezza-red transition-colors duration-300"></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Ver Mais */}
        {!showAll && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setShowAll(true)}
              className="group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-frezza-red via-white to-frezza-red rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Button Container */}
              <div className="relative flex items-center gap-3 px-10 py-4 bg-black border-2 border-frezza-red rounded-xl overflow-hidden transition-all duration-300 group-hover:border-white">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-frezza-red/0 via-frezza-red/10 to-frezza-red/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                {/* Content */}
                <span className="relative text-lg font-bold font-['Montserrat'] tracking-wider text-frezza-red group-hover:text-white transition-colors duration-300">
                  VER MAIS SERVIÇOS
                </span>
                <ChevronDown className="relative w-5 h-5 text-frezza-red group-hover:text-white group-hover:animate-bounce transition-colors duration-300" />
              </div>
            </button>
          </div>
        )}

        {/* Call-to-Action limpo */}
        <div className="mt-32 text-center relative">
          <a href="#contact" className="relative group/cta inline-block">
            <div className="absolute -inset-2 bg-frezza-red/20 rounded-xl blur-lg opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative bg-frezza-red hover:bg-frezza-red/90 text-white px-12 py-6 rounded-xl border border-frezza-red/20 transition-all duration-300">
              <span className="text-2xl font-bold font-['Montserrat'] tracking-wide">
                INICIAR PROJETO AGORA
              </span>
            </div>
          </a>
          
          {/* Indicador */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-frezza-red rounded-full"></div>
            <span className="text-gray-400 text-sm uppercase tracking-widest">Consultoria Gratuita</span>
            <div className="w-2 h-2 bg-frezza-red rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
);
};

export default Services;

