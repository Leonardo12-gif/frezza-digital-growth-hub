import { Facebook, Instagram, MessageSquare, Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const services = [
    "Gravação de Vídeo (Opcional DRONE)",
    "Edição de Vídeo",
    "Personal Media",
    "Modelo para Publicidade",
    "Tráfego Pago",
    "Tráfego Orgânico",
    "Social Media",
    "Criação de Site Profissional",
    "Automação e Atendimento Digital"
  ];
  
  // Get base URL from environment
  const basePath = import.meta.env.BASE_URL || "/";
  
  // Utiliza o basePath corretamente, evitando "//" no caminho da imagem
  // Remove barra final caso tenha, apenas para concatenar o path do arquivo corretamente
  const getFullPath = (relativePath: string) =>
    `${basePath.replace(/\/$/, "")}${relativePath.startsWith("/") ? relativePath : "/" + relativePath}`;
  
  return (
    <footer className="relative bg-black text-white pt-24 pb-8 border-t border-frezza-red/20 overflow-hidden">
      {/* Background Futurístico */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/30 to-black"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-r border-b border-frezza-red/30"></div>
          ))}
        </div>
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-frezza-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-frezza-red/5 rounded-full blur-3xl"></div>
      
      {/* Linha Superior Brilhante */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-frezza-red to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6 group">
            <div className="mb-4 relative">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-frezza-red/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <img
                src={getFullPath("/lovable-uploads/ebe49235-58da-4d8b-bc7e-d356459a8c4f.png")}
                alt="Frezza Marketing Logo"
                className="h-14 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              Sua agência de marketing digital focada em performance, criação de conteúdo audiovisual e resultados reais para empresas que querem crescer online.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a href="https://www.facebook.com/profile.php?id=61575768677479" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group/social relative w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-frezza-red transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-frezza-red/0 group-hover/social:bg-frezza-red/10 transition-all duration-300"></div>
                <Facebook size={18} className="relative z-10 text-gray-400 group-hover/social:text-frezza-red transition-colors duration-300" />
              </a>
              <a href="https://www.instagram.com/fa.marketingoficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group/social relative w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-frezza-red transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-frezza-red/0 group-hover/social:bg-frezza-red/10 transition-all duration-300"></div>
                <Instagram size={18} className="relative z-10 text-gray-400 group-hover/social:text-frezza-red transition-colors duration-300" />
              </a>
              <a href="https://wa.me/5515991273423" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="group/social relative w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-green-500 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-green-500/0 group-hover/social:bg-green-500/10 transition-all duration-300"></div>
                <img 
                  src="/lovable-uploads/700ccf25-b57c-4bb6-bc6c-e9316fe138aa.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5 filter brightness-0 invert relative z-10 group-hover/social:brightness-100 group-hover/social:invert-0 transition-all duration-300"
                />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-8 relative group/title">
              <span className="relative z-10 text-white group-hover/title:text-frezza-red transition-colors duration-300 font-['Montserrat']">Links Rápidos</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-frezza-red group-hover/title:w-24 transition-all duration-500"></span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-frezza-red blur-sm opacity-50"></span>
            </h3>
            <ul className="space-y-4">
              <li className="group/link">
                <a href="#home" className="text-gray-400 hover:text-frezza-red transition-all duration-300 flex items-center gap-2">
                  <span className="w-0 h-[1px] bg-frezza-red group-hover/link:w-3 transition-all duration-300"></span>
                  Início
                </a>
              </li>
              <li className="group/link">
                <a href="#services" className="text-gray-400 hover:text-frezza-red transition-all duration-300 flex items-center gap-2">
                  <span className="w-0 h-[1px] bg-frezza-red group-hover/link:w-3 transition-all duration-300"></span>
                  Serviços
                </a>
              </li>
              <li className="group/link">
                <a href="#portfolio" className="text-gray-400 hover:text-frezza-red transition-all duration-300 flex items-center gap-2">
                  <span className="w-0 h-[1px] bg-frezza-red group-hover/link:w-3 transition-all duration-300"></span>
                  Portfólio
                </a>
              </li>
              <li className="group/link">
                <a href="#testimonials" className="text-gray-400 hover:text-frezza-red transition-all duration-300 flex items-center gap-2">
                  <span className="w-0 h-[1px] bg-frezza-red group-hover/link:w-3 transition-all duration-300"></span>
                  Depoimentos
                </a>
              </li>
              <li className="group/link">
                <a href="#about" className="text-gray-400 hover:text-frezza-red transition-all duration-300 flex items-center gap-2">
                  <span className="w-0 h-[1px] bg-frezza-red group-hover/link:w-3 transition-all duration-300"></span>
                  Sobre Nós
                </a>
              </li>
              <li className="group/link">
                <a href="#contact" className="text-gray-400 hover:text-frezza-red transition-all duration-300 flex items-center gap-2">
                  <span className="w-0 h-[1px] bg-frezza-red group-hover/link:w-3 transition-all duration-300"></span>
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-8 relative group/title">
              <span className="relative z-10 text-white group-hover/title:text-frezza-red transition-colors duration-300 font-['Montserrat']">Serviços</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-frezza-red group-hover/title:w-24 transition-all duration-500"></span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-frezza-red blur-sm opacity-50"></span>
            </h3>
            <ul className="space-y-4">
              {services.map(service => <li key={service} className="group/link">
                  <a href="#services" className="text-gray-400 hover:text-frezza-red transition-all duration-300 flex items-center gap-2 text-sm">
                    <span className="w-0 h-[1px] bg-frezza-red group-hover/link:w-3 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-8 relative group/title">
              <span className="relative z-10 text-white group-hover/title:text-frezza-red transition-colors duration-300 font-['Montserrat']">Contato</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-frezza-red group-hover/title:w-24 transition-all duration-500"></span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-frezza-red blur-sm opacity-50"></span>
            </h3>
            <ul className="space-y-6">
              <li className="group/contact flex items-center">
                <div className="mr-3 w-8 h-8 rounded-full border border-frezza-red/30 flex items-center justify-center group-hover/contact:border-frezza-red group-hover/contact:bg-frezza-red/10 transition-all duration-300">
                  <Mail size={16} className="text-frezza-red" />
                </div>
                <a href="mailto:frezza.trafego@gmail.com" className="text-gray-400 hover:text-frezza-red transition-colors duration-300 text-sm">
                  frezza.trafego@gmail.com
                </a>
              </li>
              <li className="group/contact flex items-center">
                <div className="mr-3 w-8 h-8 rounded-full border border-frezza-red/30 flex items-center justify-center group-hover/contact:border-frezza-red group-hover/contact:bg-frezza-red/10 transition-all duration-300">
                  <Phone size={16} className="text-frezza-red" />
                </div>
                <a href="tel:+5515991273423" className="text-gray-400 hover:text-frezza-red transition-colors duration-300 text-sm">
                  (15) 99127-3423
                </a>
              </li>
              <li className="group/contact flex items-center">
                <div className="mr-3 w-8 h-8 rounded-full border border-green-500/30 flex items-center justify-center group-hover/contact:border-green-500 group-hover/contact:bg-green-500/10 transition-all duration-300">
                  <MessageSquare size={16} className="text-green-500" />
                </div>
                <a href="https://wa.me/5515991273423" className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Separator com Glow */}
        <div className="relative my-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-frezza-red/50 to-transparent blur-sm"></div>
          <Separator className="relative bg-gradient-to-r from-transparent via-frezza-red to-transparent" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm group/copy cursor-default">
            <span className="group-hover/copy:text-frezza-red transition-colors duration-300">&copy; {currentYear}</span> Frezza Marketing. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-2 md:mb-0">
              Site criado por: <a href="https://www.instagram.com/l.frezza/" target="_blank" rel="noopener noreferrer" className="text-frezza-red hover:text-white transition-colors font-medium relative group/creator">
                Leonardo Frezza
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-frezza-red scale-x-100 group-hover/creator:scale-x-0 transition-transform duration-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover/creator:scale-x-100 transition-transform duration-300"></span>
              </a>
            </p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-frezza-red transition-colors duration-300 relative group/terms">
              Termos de Uso
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-frezza-red group-hover/terms:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="hover:text-frezza-red transition-colors duration-300 relative group/privacy">
              Política de Privacidade
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-frezza-red group-hover/privacy:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
