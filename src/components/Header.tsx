
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Detect active section
      const sections = ["home", "services", "portfolio", "about", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Define base path
  const basePath = import.meta.env.BASE_URL || "/";
  
  const navLinks = [
    { name: "Início", href: "#home", id: "home" },
    { name: "Serviços", href: "#services", id: "services" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Sobre", href: "#about", id: "about" },
    { name: "Contato", href: "#contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-2xl py-2" 
          : "bg-transparent py-4"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between relative ${
          isScrolled ? "py-2" : "py-0"
        }`}>
          {/* Logo */}
          <a href="#home" className="flex items-center group relative z-10">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-frezza-red/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              <img 
                src={`${basePath}lovable-uploads/frezza-logo-new.png`}
                alt="Frezza Marketing Logo" 
                className={`relative z-10 transition-all duration-300 ${
                  isScrolled ? "h-14" : "h-16"
                }`}
              />
            </motion.div>
          </a>

          {/* Desktop Navigation - Pill Style */}
          <nav className="hidden md:flex items-center">
            <div className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${
              isScrolled ? "bg-white/5 border border-white/10" : ""
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group"
                >
                  <div className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === link.id 
                      ? "bg-frezza-red text-white" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}>
                    <span className="text-sm font-medium">{link.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              className="group relative bg-transparent border border-frezza-red/50 text-white hover:bg-frezza-red hover:border-frezza-red transition-all duration-300 rounded-full px-6" 
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <span>Fale Conosco</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative z-10 p-3 rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "bg-frezza-red" : "bg-white/5 border border-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`group flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${
                      activeSection === link.id 
                        ? "bg-frezza-red/10 border border-frezza-red/30" 
                        : "hover:bg-white/5"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className={`text-lg font-medium ${
                      activeSection === link.id ? "text-frezza-red" : "text-white"
                    }`}>
                      {link.name}
                    </span>
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                      activeSection === link.id 
                        ? "text-frezza-red" 
                        : "text-gray-600 group-hover:text-white group-hover:translate-x-1"
                    }`} />
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Button 
                  className="w-full bg-frezza-red hover:bg-red-600 text-white rounded-xl h-14 text-base font-semibold" 
                  asChild
                >
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                    Fale Conosco
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
