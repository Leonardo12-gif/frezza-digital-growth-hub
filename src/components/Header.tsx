
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <div className="h-12 w-auto">
            <img 
              src="/lovable-uploads/be2896ed-d56c-4196-b094-88aa9e255918.png" 
              alt="Frezza Marketing Logo" 
              className="h-12 w-auto"
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

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button 
            className="bg-frezza-red hover:bg-frezza-red/80 text-white border border-frezza-red/20" 
            asChild
          >
            <a href="#contact">Fale Conosco</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/95 py-6 px-6 backdrop-blur-lg border-t border-white/10 animate-slideUp">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-frezza-red py-2 transition-colors font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-frezza-red hover:bg-frezza-red/80 text-white w-full mt-4 border border-frezza-red/20" 
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
