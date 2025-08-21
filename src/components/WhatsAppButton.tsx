
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mobile touch handler that mimics hover effect
  const handleTouch = () => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 2000); // Reset after 2 seconds
  };
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div 
        className={`absolute bottom-0 right-0 transform transition-all duration-300 ${
          isHovered ? "scale-110 -translate-y-2" : "scale-100"
        }`}
        onTouchStart={handleTouch}
      >
        <Button
          className="bg-green-600 hover:bg-green-700 text-white h-20 w-20 rounded-full shadow-lg flex items-center justify-center shadow-green-900/20"
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
              src="/lovable-uploads/700ccf25-b57c-4bb6-bc6c-e9316fe138aa.png" 
              alt="WhatsApp" 
              className="w-10 h-10 filter brightness-0 invert"
            />
          </a>
        </Button>
      </div>
        {isHovered && (
          <div className="absolute bottom-8 right-24 bg-black px-5 py-2 rounded-lg shadow-lg transform animate-fadeIn border border-green-600/20">
            <span className="whitespace-nowrap text-sm font-medium text-white">Fale conosco</span>
          </div>
        )}
    </div>
  );
};

export default WhatsAppButton;
