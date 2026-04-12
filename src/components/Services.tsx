import { useState } from "react";
import { Video, TrendingUp, Leaf, Share2, Bot, Globe, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Vídeos que vendem",
      subtitle: "Produção profissional do roteiro à entrega",
      description: "Conteúdo audiovisual que comunica, engaja e converte — com drone opcional e edição cinematográfica.",
      icon: Video,
    },
    {
      title: "Mais clientes, menos custo",
      subtitle: "Anúncios que convertem de verdade",
      description: "Estratégias de tráfego pago otimizadas para gerar leads qualificados e vendas com o melhor ROI.",
      icon: TrendingUp,
    },
    {
      title: "Crescimento orgânico real",
      subtitle: "Autoridade digital que gera resultado",
      description: "SEO, conteúdo estratégico e posicionamento orgânico para sua marca ser encontrada e lembrada.",
      icon: Leaf,
    },
    {
      title: "Social media completo",
      subtitle: "Sua marca forte nas redes",
      description: "Gestão de redes sociais com planejamento, criação de conteúdo e análise de performance.",
      icon: Share2,
    },
    {
      title: "Sites que convertem",
      subtitle: "Design moderno + performance",
      description: "Desenvolvimento de sites responsivos, rápidos e otimizados para transformar visitantes em clientes.",
      icon: Globe,
    },
    {
      title: "Automação inteligente",
      subtitle: "Bots que trabalham por você",
      description: "Fluxos automatizados para WhatsApp, Instagram e e-mail que captam e nutrem leads 24/7.",
      icon: Bot,
    },
  ];

  const handleWhatsAppClick = (service: string) => {
    const message = `Olá, gostaria de um orçamento para o serviço de ${service}.`;
    window.open(`https://wa.me/5515991273423?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      aria-label="Serviços de marketing digital, tráfego pago e criação de sites em Sorocaba"
      className={`py-24 md:py-32 scroll-animate ${isVisible ? 'visible' : ''} relative overflow-hidden bg-black`}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-frezza-red" />
              <span className="text-frezza-red text-sm font-medium tracking-[0.3em] uppercase">Serviços</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-tight"
            >
              Soluções que geram<br />
              <span className="text-frezza-red">resultado</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-md lg:text-right"
          >
            Cada serviço focado em um objetivo: fazer seu negócio crescer com estratégia e criatividade.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800/30 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative bg-black"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-frezza-red/10 via-frezza-red/5 to-transparent opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : ''}`} />

              <div className="relative p-8 h-full flex flex-col min-h-[280px]">
                <span className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] font-['Montserrat'] select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${hoveredIndex === index ? 'bg-frezza-red' : 'bg-white/5'}`}>
                    <service.icon className={`w-5 h-5 transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-frezza-red'}`} />
                  </div>
                </div>

                <div className="flex-1">
                  <span className="text-frezza-red/60 text-xs font-medium tracking-wider uppercase">
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-3 font-['Montserrat'] group-hover:text-frezza-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className={`mt-6 flex items-center gap-2 text-sm font-medium transition-all duration-300 ${hoveredIndex === index ? 'text-frezza-red' : 'text-gray-500'}`}
                >
                  <span>Solicitar orçamento</span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-1 -translate-y-1' : ''}`} />
                </button>

                <div className={`absolute bottom-0 left-0 h-[2px] bg-frezza-red transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-0'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />
    </section>
  );
};

export default Services;
