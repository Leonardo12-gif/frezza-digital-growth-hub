import { useState } from "react";
import { Video, Film, Users, TrendingUp, Leaf, Share2, Bot, Globe, ChevronDown, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Gravação de Vídeo",
      subtitle: "Drone Opcional",
      description: "Produção audiovisual profissional com equipamentos de última geração para criar conteúdo de alta qualidade.",
      icon: Video,
    },
    {
      title: "Edição de Vídeo",
      subtitle: "Pós-produção",
      description: "Efeitos visuais, colorização e finalização que transformam seu material bruto em conteúdo impactante.",
      icon: Film,
    },
    {
      title: "Personal Media",
      subtitle: "Imagem pessoal",
      description: "Serviço exclusivo de produção audiovisual para valorizar sua imagem e fortalecer sua presença digital.",
      icon: Video,
    },
    {
      title: "Modelo Publicitário",
      subtitle: "Masculino & Feminino",
      description: "Modelos profissionais para campanhas publicitárias, ensaios fotográficos e gravações comerciais.",
      icon: Users,
    },
    {
      title: "Tráfego Pago",
      subtitle: "Resultados imediatos",
      description: "Estratégias de anúncios pagos em plataformas digitais para aumentar visibilidade e gerar resultados.",
      icon: TrendingUp,
    },
    {
      title: "Tráfego Orgânico",
      subtitle: "Crescimento sustentável",
      description: "Estratégias de crescimento nas redes sociais e buscadores para construir autoridade digital.",
      icon: Leaf,
    },
    {
      title: "Social Media",
      subtitle: "Gestão completa",
      description: "Gestão das suas redes sociais com criação de conteúdo, planejamento estratégico e análise de resultados.",
      icon: Share2,
    },
    {
      title: "Criação de Sites",
      subtitle: "Design moderno",
      description: "Desenvolvimento de sites modernos, responsivos e otimizados para conversão com identidade visual personalizada.",
      icon: Globe,
    },
    {
      title: "Automação Digital",
      subtitle: "Bots inteligentes",
      description: "Criação de fluxos com bots inteligentes para WhatsApp, Instagram e e-mail.",
      icon: Bot,
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
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-frezza-red text-sm font-medium tracking-[0.3em] uppercase mb-4"
            >
              Serviços
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-tight"
            >
              O que podemos<br />
              <span className="text-frezza-red">fazer por você</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-md lg:text-right"
          >
            Soluções estratégicas para transformar sua presença digital e impulsionar resultados
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800/30 rounded-2xl overflow-hidden">
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-black"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover Gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-frezza-red/10 via-frezza-red/5 to-transparent opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : ''}`}
                />
                
                <div className="relative p-8 h-full flex flex-col min-h-[280px]">
                  {/* Number */}
                  <span className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] font-['Montserrat'] select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${hoveredIndex === index ? 'bg-frezza-red' : 'bg-white/5'}`}>
                      <service.icon className={`w-5 h-5 transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-frezza-red'}`} />
                    </div>
                  </div>

                  {/* Content */}
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

                  {/* CTA */}
                  <button
                    onClick={() => handleWhatsAppClick(service.title)}
                    className={`mt-6 flex items-center gap-2 text-sm font-medium transition-all duration-300 ${hoveredIndex === index ? 'text-frezza-red' : 'text-gray-500'}`}
                  >
                    <span>Solicitar orçamento</span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-1 -translate-y-1' : ''}`} />
                  </button>

                  {/* Bottom Border Animation */}
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-frezza-red transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-0'}`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {!showAll && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium transition-all duration-300 hover:bg-frezza-red hover:border-frezza-red"
            >
              <span className="font-['Montserrat'] text-sm tracking-wide">Ver todos os serviços</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.02] to-transparent">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-['Montserrat'] mb-2">
                Pronto para começar?
              </h3>
              <p className="text-gray-400">
                Agende uma consultoria gratuita com nossa equipe
              </p>
            </div>
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-frezza-red text-white rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-frezza-red"
            >
              <span className="font-['Montserrat']">Iniciar projeto</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
