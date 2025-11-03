import { Phone, Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactInfo = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  return (
    <section ref={sectionRef} className={`section-padding scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto">
        <h2 className="section-title text-gradient">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="group text-center">
            <div className="w-16 h-16 rounded-full bg-frezza-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-frezza-red group-hover:scale-110 transition-all duration-300">
              <Phone className="text-frezza-red group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Telefone</h3>
            <a href="tel:+5515991273423" className="text-gray-400 hover:text-frezza-red transition-colors">
              (15) 99127-3423
            </a>
          </div>
          
          <div className="group text-center">
            <div className="w-16 h-16 rounded-full bg-frezza-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-frezza-red group-hover:scale-110 transition-all duration-300">
              <Mail className="text-frezza-red group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">E-mail</h3>
            <a href="mailto:frezza.trafego@gmail.com" className="text-gray-400 hover:text-frezza-red transition-colors">
              frezza.trafego@gmail.com
            </a>
          </div>
          
          <div className="group text-center">
            <div className="w-16 h-16 rounded-full bg-frezza-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-frezza-red group-hover:scale-110 transition-all duration-300">
              <MapPin className="text-frezza-red group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Localização</h3>
            <p className="text-gray-400">São Paulo, SP - Brasil</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;