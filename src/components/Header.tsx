
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Define base path
  const basePath = import.meta.env.BASE_URL || "/";
  
  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(239,68,68,0.15)] py-3 border-b border-frezza-red/10" 
          : "bg-transparent py-6"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Futuristic glow line at bottom */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-frezza-red/50 to-transparent"></div>
      )}
      
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
        <a href="#home" className="flex items-center group">
          <div className="h-20 w-auto relative">
            <div className="absolute inset-0 bg-frezza-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src={`${basePath}lovable-uploads/frezza-logo-new.png`}
              alt="Frezza Marketing Logo" 
              className="h-20 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide"
            >
              <span className="relative z-10">{link.name}</span>
              {/* Futuristic hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-frezza-red/0 via-frezza-red/10 to-frezza-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-frezza-red to-transparent group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button 
            className="relative bg-gradient-to-r from-frezza-red to-red-600 hover:from-red-600 hover:to-frezza-red text-white border border-frezza-red/30 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300 overflow-hidden group" 
            asChild
          >
            <a href="#contact" className="relative z-10">
              <span className="relative z-10">Fale Conosco</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white relative group p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="absolute inset-0 bg-frezza-red/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          {mobileMenuOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/95 py-6 px-6 backdrop-blur-xl border-t border-frezza-red/20 animate-slideUp shadow-[0_8px_32px_rgba(239,68,68,0.2)]">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-frezza-red/50 to-transparent"></div>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-gray-200 hover:text-white py-3 transition-all duration-300 font-medium text-lg pl-4 rounded-lg hover:bg-frezza-red/10"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-frezza-red group-hover:h-full transition-all duration-300 rounded-r"></div>
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
            <Button 
              className="bg-gradient-to-r from-frezza-red to-red-600 hover:from-red-600 hover:to-frezza-red text-white w-full mt-4 border border-frezza-red/30 shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300" 
              asChild
            >
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Fale Conosco</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
