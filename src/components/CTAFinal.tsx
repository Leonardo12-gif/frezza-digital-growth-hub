import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Phone, Instagram } from "lucide-react";

const CTAFinal = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="cta-final"
      ref={sectionRef}
      className={`py-24 md:py-32 bg-black relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frezza-red/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-tight mb-6">
            Pronto para<br />
            <span className="text-frezza-red">crescer?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Agende uma consultoria gratuita agora e descubra como a Frezza pode transformar os resultados do seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/5515991273423?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20gratuita!"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-frezza-red text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-white hover:text-frezza-red"
            >
              <img
                src="/lovable-uploads/700ccf25-b57c-4bb6-bc6c-e9316fe138aa.png"
                alt="WhatsApp"
                className="w-5 h-5 filter brightness-0 invert group-hover:invert-0"
              />
              Chamar no WhatsApp
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/15 text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              Enviar mensagem
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <a
              href="tel:+5515991273423"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4 text-frezza-red" />
              (15) 99127-3423
            </a>
            <a
              href="https://www.instagram.com/frezzamarketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-4 h-4 text-frezza-red" />
              @frezzamarketing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinal;
