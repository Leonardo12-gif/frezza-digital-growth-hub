import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Robério Fontes",
    company: "Robério Fontes Salão",
    text: "A Frezza transformou completamente nossa presença digital. Em poucos meses, triplicamos os agendamentos pelo Instagram. Profissionais excepcionais!",
    rating: 5,
    initials: "RF",
  },
  {
    name: "Jhonne Silva",
    company: "Jhonne Tatuagens",
    text: "O trabalho de produção de vídeo e social media elevou o nível do meu estúdio. Hoje recebo clientes de toda a região graças à Frezza.",
    rating: 5,
    initials: "JS",
  },
  {
    name: "Equipe Elaluz",
    company: "Elaluz Concept",
    text: "Desde que começamos com a Frezza, nossas vendas online cresceram exponencialmente. A estratégia de tráfego pago deles é muito eficiente.",
    rating: 5,
    initials: "EC",
  },
  {
    name: "Fabiano Jugger",
    company: "Atleta IFBB Pro",
    text: "A equipe entende perfeitamente o mercado fitness. Criaram conteúdos que realmente engajam e atraem os patrocinadores certos.",
    rating: 5,
    initials: "FJ",
  },
];

const Depoimentos = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className={`py-24 md:py-32 bg-black relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-frezza-red" />
            <span className="text-frezza-red text-sm uppercase tracking-[0.3em] font-medium">Depoimentos</span>
            <div className="w-12 h-px bg-frezza-red" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-tight">
            O que dizem nossos<br />
            <span className="text-frezza-red">clientes</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/5 hover:border-frezza-red/20 transition-all duration-500 p-8"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
                <span className="text-xs text-gray-500 ml-2">Google</span>
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-frezza-red/30 to-frezza-red/5 border border-frezza-red/20 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-frezza-red">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <span className="text-gray-500 text-xs">{testimonial.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />
    </section>
  );
};

export default Depoimentos;
