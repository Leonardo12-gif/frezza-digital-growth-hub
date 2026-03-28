import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const founders = [
  {
    name: "Ana Julia Lopes",
    role: "Co-fundadora & Social Media",
    bio: "Especialista em construir comunidades engajadas e transformar seguidores em clientes fiéis através de conteúdo estratégico.",
    initials: "AJ",
  },
  {
    name: "Leonardo Frezza",
    role: "Co-fundador & Estrategista Digital",
    bio: "Apaixonado por performance e dados, cria estratégias de tráfego e automação que geram resultados mensuráveis.",
    initials: "LF",
  },
];

const timeline = [
  { year: "2023", event: "Fundação da Frezza Marketing em Sorocaba/SP" },
  { year: "2024", event: "Marca de 10+ clientes ativos e 4 segmentos atendidos" },
  { year: "2025", event: "+R$ 10 milhões em receitas gerados para clientes" },
];

const QuemSomos = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 md:py-32 bg-black relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-frezza-red" />
            <span className="text-frezza-red text-sm uppercase tracking-[0.3em] font-medium">Quem Somos</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-tight">
            Os rostos por trás<br />
            <span className="text-frezza-red">dos resultados</span>
          </h2>
        </motion.div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/5 hover:border-frezza-red/30 transition-all duration-500 p-8"
            >
              <div className="flex items-start gap-6">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-frezza-red/30 to-frezza-red/5 border border-frezza-red/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-frezza-red">{founder.initials}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-frezza-red transition-colors duration-300">
                    {founder.name}
                  </h3>
                  <span className="text-frezza-red/60 text-sm font-medium">{founder.role}</span>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-10 font-['Montserrat'] text-center">Nossa Trajetória</h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-frezza-red/10 border border-frezza-red/20 mb-4">
                    <span className="text-frezza-red font-bold text-sm">{item.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />
    </section>
  );
};

export default QuemSomos;
