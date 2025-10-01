import { Facebook, Instagram, MessageSquare, Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const services = [
    "Gravação de Vídeo",
    "Edição de Vídeo",
    "Modelo para Publicidade",
    "Tráfego Pago",
    "Tráfego Orgânico"
  ];
  
  // Get base URL from environment
  const basePath = import.meta.env.BASE_URL || "/";
  
  // Utiliza o basePath corretamente, evitando "//" no caminho da imagem
  // Remove barra final caso tenha, apenas para concatenar o path do arquivo corretamente
  const getFullPath = (relativePath: string) =>
    `${basePath.replace(/\/$/, "")}${relativePath.startsWith("/") ? relativePath : "/" + relativePath}`;
  
  return (
    <footer className="bg-black text-white pt-24 pb-8 border-t border-red-500/20 relative overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.05),transparent_50%)]"></div>
      
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="mb-4">
              {/* Corrigir o caminho do logo para funcionar em hospedagem tipo GitHub Pages */}
              <img
                src={getFullPath("/lovable-uploads/ebe49235-58da-4d8b-bc7e-d356459a8c4f.png")}
                alt="Frezza Marketing Logo"
                className="h-14 w-auto"
              />
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Sua agência de marketing digital focada em performance, criação de conteúdo audiovisual e resultados reais para empresas que querem crescer online.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-red-500/30 rounded-full opacity-0 group-hover:opacity-100 blur transition-all"></div>
                <a href="https://www.facebook.com/profile.php?id=61575768677479" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="relative w-10 h-10 rounded-full border border-red-500/30 flex items-center justify-center hover:border-red-500 hover:bg-red-950/30 transition-all backdrop-blur-sm">
                  <Facebook size={18} />
                </a>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-red-500/30 rounded-full opacity-0 group-hover:opacity-100 blur transition-all"></div>
                <a href="https://www.instagram.com/fa.marketingoficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="relative w-10 h-10 rounded-full border border-red-500/30 flex items-center justify-center hover:border-red-500 hover:bg-red-950/30 transition-all backdrop-blur-sm">
                  <Instagram size={18} />
                </a>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-green-500/30 rounded-full opacity-0 group-hover:opacity-100 blur transition-all"></div>
                <a href="https://wa.me/5515991273423" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="relative w-10 h-10 rounded-full border border-red-500/30 flex items-center justify-center hover:border-green-500 hover:bg-green-950/30 transition-all backdrop-blur-sm">
                  <img 
                    src="/lovable-uploads/700ccf25-b57c-4bb6-bc6c-e9316fe138aa.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5 filter brightness-0 invert"
                  />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-8 relative">
              <span className="relative z-10">Links Rápidos</span>
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
              <div className="absolute -bottom-0.5 left-0 w-12 h-px bg-red-500/50 blur-sm"></div>
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
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
              <div className="absolute -bottom-0.5 left-0 w-12 h-px bg-red-500/50 blur-sm"></div>
            </h3>
            <ul className="space-y-4">
              {services.map(service => <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-frezza-red transition-colors">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-8 relative">
              <span className="relative z-10">Contato</span>
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
              <div className="absolute -bottom-0.5 left-0 w-12 h-px bg-red-500/50 blur-sm"></div>
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
                <a href="tel:+5515991273423" className="text-gray-400 hover:text-frezza-red transition-colors">
                  (15) 99127-3423
                </a>
              </li>
              <li className="flex items-center">
                <MessageSquare size={18} className="mr-3 text-green-500" />
                <a href="https://wa.me/5515991273423" className="text-gray-400 hover:text-green-500 transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="my-12 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
          <div className="absolute inset-0 h-px bg-red-500/10 blur-sm"></div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Frezza Marketing. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-2 md:mb-0">
              Site criado por: <a href="https://www.instagram.com/l.frezza/" target="_blank" rel="noopener noreferrer" className="text-frezza-red hover:text-frezza-red/80 transition-colors font-medium">Leonardo Frezza</a>
            </p>
          </div>
          
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
