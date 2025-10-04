import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
const ContactInfo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        sectionRef.current?.classList.add('animate-fadeIn');
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section 
      ref={sectionRef}
      id="contact-info" 
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-black/40 backdrop-blur-sm border border-frezza-red/20 rounded-lg hover:border-frezza-red/40 transition-all">
            <div className="bg-frezza-red/10 p-4 rounded-full mb-4">
              <Phone className="w-6 h-6 text-frezza-red" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Telefone</h3>
            <a href="tel:+5511999999999" className="text-gray-400 hover:text-frezza-red transition-colors">
              (11) 99999-9999
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-black/40 backdrop-blur-sm border border-frezza-red/20 rounded-lg hover:border-frezza-red/40 transition-all">
            <div className="bg-frezza-red/10 p-4 rounded-full mb-4">
              <Mail className="w-6 h-6 text-frezza-red" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
            <a href="mailto:contato@frezza.com" className="text-gray-400 hover:text-frezza-red transition-colors">
              contato@frezza.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-black/40 backdrop-blur-sm border border-frezza-red/20 rounded-lg hover:border-frezza-red/40 transition-all">
            <div className="bg-frezza-red/10 p-4 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-frezza-red" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Localização</h3>
            <p className="text-gray-400">São Paulo, SP</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactInfo;