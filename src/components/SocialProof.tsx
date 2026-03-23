import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, DollarSign, LayoutGrid, CheckCircle } from "lucide-react";

const stats = [
  { icon: Users, number: "13", label: "Clientes Ativos", suffix: "" },
  { icon: DollarSign, number: "+R$ 10 milhões", label: "Em receitas gerados", suffix: "" },
  { icon: LayoutGrid, number: "4", label: "Segmentos Atendidos", suffix: "" },
  { icon: CheckCircle, number: "100%", label: "Entrega no Prazo", suffix: "" },
];

const clientLogos = [
  { name: "Robério Fontes", img: "/lovable-uploads/roberio-fontes-logo.jpg" },
  { name: "Elaluz Concept", img: "/lovable-uploads/elaluz-logo.jpg" },
  { name: "Jhonne Tatuagens", img: "/lovable-uploads/e08283f5-4be1-4ae5-9241-475b80369b30.png" },
  { name: "Allpfit Sorocaba", img: "/lovable-uploads/46160644-af2b-4687-bf1e-2fd232bf96f4.png" },
  { name: "Rota Forte Truck", img: "/lovable-uploads/rota-forte-truck.jpg" },
  { name: "Gabriela Garcia", img: "/lovable-uploads/1d34533a-7917-426b-a4d8-31b5055c92e4.png" },
  { name: "Fabiano Jugger", img: "/lovable-uploads/fabiano-jugger-new.jpg" },
  { name: "Villa dos Inglezes", img: "/lovable-uploads/villa-dos-inglezes.png" },
  { name: "SPA Mídia", img: "/lovable-uploads/spa-midia-logo.png" },
  { name: "Mais Mídia", img: "/lovable-uploads/mais-midia-logo.jpg" },
];

const SocialProof = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="numeros"
      ref={sectionRef}
      className={`py-20 bg-black relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-frezza-red/10 mb-4 group-hover:bg-frezza-red/20 transition-colors duration-300">
                <stat.icon className="w-5 h-5 text-frezza-red" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-['Montserrat']">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-center text-sm text-gray-500 uppercase tracking-[0.3em] mb-10">
            Empresas que confiam na Frezza
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="group relative"
                title={client.name}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white/5 border border-white/10 group-hover:border-frezza-red/30 transition-all duration-300 grayscale group-hover:grayscale-0">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />
    </section>
  );
};

export default SocialProof;
