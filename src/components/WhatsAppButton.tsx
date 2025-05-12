
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
            href="https://wa.me/5500000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1112.4-12.4 9 9 0 01-12.4 12.4L3 21" />
              <path d="M9 10a.5.5 0 001 0V9a.5.5 0 00-1 0v1z" />
              <path d="M14 10a.5.5 0 001 0V9a.5.5 0 00-1 0v1z" />
              <path d="M10 13.5a3.5 3.5 0 003.5 0" />
            </svg>
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
