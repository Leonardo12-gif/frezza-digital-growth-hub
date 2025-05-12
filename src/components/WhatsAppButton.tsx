
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div 
        className={`absolute bottom-0 right-0 transform transition-all duration-300 ${
          isHovered ? "scale-110 -translate-y-2" : "scale-100"
        }`}
      >
        <Button
          className="bg-green-600 hover:bg-green-700 text-white h-16 w-16 rounded-full shadow-lg flex items-center justify-center shadow-green-900/20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          asChild
        >
          <a 
            href="https://wa.me/5515991273423" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <img 
              src="/lovable-uploads/ebe2700e-629b-4350-81f5-85199f536a3e.png" 
              alt="WhatsApp" 
              className="w-8 h-8" 
            />
          </a>
        </Button>
      </div>
      {isHovered && (
        <div className="absolute bottom-6 right-20 bg-black px-5 py-2 rounded-lg shadow-lg transform animate-fadeIn border border-green-600/20">
          <span className="whitespace-nowrap text-sm font-medium text-white">Fale conosco</span>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
