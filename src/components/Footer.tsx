
import { Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const basePath = import.meta.env.BASE_URL || "/";
  
  const getFullPath = (relativePath: string) =>
    `${basePath.replace(/\/$/, "")}${relativePath.startsWith("/") ? relativePath : "/" + relativePath}`;

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/fa.marketingoficial/",
      icon: Instagram
    },
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/profile.php?id=61575768677479",
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "WhatsApp", 
      href: "https://wa.me/5515991273423",
      icon: () => (
        <img 
          src="/lovable-uploads/700ccf25-b57c-4bb6-bc6c-e9316fe138aa.png" 
          alt="WhatsApp" 
          className="w-4 h-4 filter brightness-0 invert"
        />
      )
    },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden" role="contentinfo" aria-label="Rodapé - Frezza Marketing, agência de marketing digital em Sorocaba">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Logo & Description - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <motion.a 
              href="#home"
              className="inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={getFullPath("/lovable-uploads/frezza-logo-new.png")}
                alt="Frezza Marketing - Agência de marketing digital em Sorocaba"
                className="h-12"
              />
            </motion.a>
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Agência de marketing digital focada em performance e resultados reais para empresas que querem crescer online.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-frezza-red hover:border-frezza-red transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Navigation - 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-frezza-red transition-all duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact - 4 cols */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:frezza.trafego@gmail.com"
                  className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-frezza-red/10 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-frezza-red" />
                  </div>
                  <span className="text-sm">frezza.trafego@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5515991273423"
                  className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-frezza-red/10 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-frezza-red" />
                  </div>
                  <span className="text-sm">(15) 99127-3423</span>
                </a>
              </li>
            </ul>
            
            {/* CTA */}
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-frezza-red/10 border border-frezza-red/30 text-frezza-red text-sm font-medium hover:bg-frezza-red hover:text-white transition-all duration-300 group"
            >
              Fale Conosco
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>
              © {currentYear} Frezza Marketing. Todos os direitos reservados.
            </p>
            
            <p>
              Desenvolvido por{" "}
              <a 
                href="https://www.instagram.com/l.frezza/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-frezza-red transition-colors duration-200"
              >
                Leonardo Frezza
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
