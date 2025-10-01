
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
          ? "bg-gradient-to-r from-black/90 via-black/85 to-black/90 backdrop-blur-xl shadow-lg shadow-red-500/10 py-3 border-b border-red-500/20" 
          : "bg-transparent py-6"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Holographic top border effect when scrolled */}
      {isScrolled && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      )}
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <div className="h-20 w-auto">
            <img 
              src={`${basePath}lovable-uploads/ebe49235-58da-4d8b-bc7e-d356459a8c4f.png`}
              alt="Frezza Marketing Logo" 
              className="h-20 w-auto"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-frezza-red transition-colors font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop com efeito futurístico */}
        <div className="hidden md:block">
          <div className="relative group inline-block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg opacity-50 group-hover:opacity-75 blur transition-all duration-300"></div>
            <Button 
              className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border border-red-400/30 shadow-lg shadow-red-500/20" 
              asChild
            >
              <a href="#contact">
                <span className="relative z-10">Fale Conosco</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation com design futurístico */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gradient-to-b from-black/95 via-red-950/20 to-black/95 py-6 px-6 backdrop-blur-xl border-t border-red-500/30 animate-slideUp relative">
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/30 to-transparent animate-scan-line"></div>
          </div>
          <div className="flex flex-col space-y-6 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-red-400 py-2 transition-colors font-medium text-lg relative group"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            <div className="relative group inline-block w-full mt-4">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg opacity-50 group-hover:opacity-75 blur transition-all duration-300"></div>
              <Button 
                className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white w-full border border-red-400/30" 
                asChild
              >
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Fale Conosco</a>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
