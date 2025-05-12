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
  return <section ref={sectionRef} className="py-16 bg-[#0c0c0c] opacity-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center bg-[#111] hover:bg-[#151515] transition-colors duration-300 p-6 rounded-lg border border-[#222] shadow-lg max-w-xs w-full">
            <div className="mr-5 bg-frezza-red/10 p-4 rounded-full">
              <Phone className="text-frezza-red w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-1">Telefone</h3>
              <p className="text-gray-400">(15) 99127-3423</p>
            </div>
          </div>
          
          <div className="flex items-center bg-[#111] hover:bg-[#151515] transition-colors duration-300 p-6 rounded-lg border border-[#222] shadow-lg max-w-xs w-full">
            <div className="mr-5 bg-frezza-red/10 p-4 rounded-full">
              <Mail className="text-frezza-red w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-1">Email</h3>
              <p className="text-gray-400">frezza.trafego@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center bg-[#111] hover:bg-[#151515] transition-colors duration-300 p-6 rounded-lg border border-[#222] shadow-lg max-w-xs w-full">
            <div className="mr-5 bg-frezza-red/10 p-4 rounded-full">
              <MapPin className="text-frezza-red w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-1">Localização</h3>
              <p className="text-gray-400">Sorocaba, SP</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-frezza-red/10 to-frezza-red/5 p-6 rounded-xl border border-frezza-red/10">
            <h3 className="text-xl font-bold text-white mb-2">Estatísticas de Sucesso</h3>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-frezza-red mb-1">30+</p>
                <p className="text-gray-400">Clientes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-frezza-red mb-1">1+</p>
                <p className="text-gray-400">Anos de experiência</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-frezza-red mb-1">500k+</p>
                <p className="text-gray-400">Investidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactInfo;