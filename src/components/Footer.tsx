
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    "Tráfego Pago",
    "Tráfego Orgânico"
  ];
  
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-8 border-t border-[#222]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/be2896ed-d56c-4196-b094-88aa9e255918.png" 
                alt="Frezza Marketing Logo" 
                className="h-14 w-auto"
              />
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Sua agência de marketing digital focada em performance e resultados reais para empresas que querem crescer online.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:border-frezza-red hover:bg-frezza-red/10 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:border-frezza-red hover:bg-frezza-red/10 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:border-frezza-red hover:bg-frezza-red/10 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-8 relative">
              <span className="relative z-10">Links Rápidos</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-frezza-red"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-400 hover:text-frezza-red transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-frezza-red transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-frezza-red transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-frezza-red transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-frezza-red transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-frezza-red transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-8 relative">
              <span className="relative z-10">Serviços</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-frezza-red"></span>
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-frezza-red transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-8 relative">
              <span className="relative z-10">Contato</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-frezza-red"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-frezza-red" />
                <a href="mailto:frezza.trafego@gmail.com" className="text-gray-400 hover:text-frezza-red transition-colors">
                  frezza.trafego@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-frezza-red" />
                <a href="tel:+5500000000000" className="text-gray-400 hover:text-frezza-red transition-colors">
                  (00) 00000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-12 bg-[#222]" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Frezza Marketing. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-frezza-red transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-frezza-red transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
