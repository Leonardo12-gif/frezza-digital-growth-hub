import { useState } from "react";
import { Video, Film, Users, TrendingUp, Leaf, Share2, Bot, Globe, ChevronDown, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Gravação de Vídeo",
      subtitle: "Drone Opcional",
      description: "Produção audiovisual profissional com equipamentos de última geração para criar conteúdo de alta qualidade para sua marca.",
      icon: Video,
      features: ["Captação aérea opcional", "Equipamentos profissionais", "Alta qualidade"]
    },
    {
      title: "Edição de Vídeo",
      subtitle: "Pós-produção",
      description: "Efeitos visuais, colorização e finalização que transformam seu material bruto em conteúdo impactante.",
      icon: Film,
      features: ["Efeitos visuais", "Colorização", "Finalização profissional"]
    },
    {
      title: "Personal Media",
      subtitle: "Imagem pessoal",
      description: "Serviço exclusivo de produção audiovisual para valorizar sua imagem e fortalecer sua presença digital.",
      icon: Video,
      features: ["Conteúdo exclusivo", "Presença digital", "Conexão autêntica"]
    },
    {
      title: "Modelo Publicitário",
      subtitle: "Masculino & Feminino",
      description: "Modelos profissionais para campanhas publicitárias, ensaios fotográficos e gravações comerciais.",
      icon: Users,
      features: ["Campanhas publicitárias", "Ensaios fotográficos", "Gravações comerciais"]
    },
    {
      title: "Tráfego Pago",
      subtitle: "Resultados imediatos",
      description: "Estratégias de anúncios pagos em plataformas digitais para aumentar visibilidade e gerar resultados.",
      icon: TrendingUp,
      features: ["Meta Ads", "Google Ads", "ROI otimizado"]
    },
    {
      title: "Tráfego Orgânico",
      subtitle: "Crescimento sustentável",
      description: "Estratégias de crescimento nas redes sociais e buscadores para construir autoridade digital.",
      icon: Leaf,
      features: ["SEO", "Redes sociais", "Autoridade digital"]
    },
    {
      title: "Social Media",
      subtitle: "Gestão completa",
      description: "Gestão das suas redes sociais com criação de conteúdo, planejamento estratégico e análise de resultados.",
      icon: Share2,
      features: ["Criação de conteúdo", "Planejamento", "Análise de resultados"]
    },
    {
      title: "Criação de Sites",
      subtitle: "Design moderno",
      description: "Desenvolvimento de sites modernos, responsivos e otimizados para conversão com identidade visual personalizada.",
      icon: Globe,
      features: ["Responsivo", "Otimizado", "Personalizado"]
    },
    {
      title: "Automação Digital",
      subtitle: "Bots inteligentes",
      description: "Criação de fluxos com bots inteligentes para WhatsApp, Instagram e e-mail.",
      icon: Bot,
      features: ["WhatsApp", "Instagram", "E-mail"]
    }
  ];

  const handleWhatsAppClick = (service: string) => {
    const message = `Olá, gostaria de um orçamento para o serviço de ${service}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5515991273423?text=${encodedMessage}`, '_blank');
  };

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className={`py-24 md:py-32 scroll-animate ${isVisible ? 'visible' : ''} relative overflow-hidden bg-black`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-frezza-red"></div>
            <span className="text-frezza-red text-sm font-medium tracking-[0.3em] uppercase">O que fazemos</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-frezza-red"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Montserrat']">
            NOSSOS <span className="text-frezza-red">SERVIÇOS</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções completas para elevar sua presença digital e transformar sua marca
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Card */}
              <div className="relative h-full bg-black border border-gray-800/50 rounded-xl p-6 transition-all duration-500 hover:border-frezza-red/50 hover:bg-frezza-red/[0.02]">
                {/* Top Row: Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-frezza-red/10 border border-frezza-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-frezza-red/20 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-frezza-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white group-hover:text-frezza-red transition-colors duration-300 font-['Montserrat']">
                      {service.title}
                    </h3>
                    <span className="text-frezza-red/70 text-sm font-medium">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-transparent border border-frezza-red/30 rounded-lg text-frezza-red text-sm font-medium transition-all duration-300 hover:bg-frezza-red hover:text-white hover:border-frezza-red group/btn"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-frezza-red/50 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-frezza-red/50 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-frezza-red/30 rounded-lg text-frezza-red font-medium transition-all duration-300 hover:bg-frezza-red hover:text-white hover:border-frezza-red"
            >
              <span className="font-['Montserrat'] tracking-wide">Ver Mais Serviços</span>
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-frezza-red/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <a 
              href="#contact" 
              className="relative inline-flex items-center gap-3 px-10 py-5 bg-frezza-red text-white rounded-xl font-bold text-lg transition-all duration-300 hover:bg-frezza-red/90 hover:scale-105 font-['Montserrat']"
            >
              <span>INICIAR PROJETO AGORA</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-frezza-red rounded-full animate-pulse"></div>
            <span className="text-gray-500 text-sm uppercase tracking-widest">Consultoria Gratuita</span>
            <div className="w-2 h-2 bg-frezza-red rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
