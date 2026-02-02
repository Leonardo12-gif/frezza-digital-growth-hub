
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mobile touch handler that mimics hover effect
  const handleTouch = () => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 2000);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div 
        className="relative"
        onTouchStart={handleTouch}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          className="bg-green-600 hover:bg-green-500 text-white h-14 w-14 rounded-full shadow-lg flex items-center justify-center shadow-green-900/30"
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
              className="w-7 h-7 filter brightness-0 invert"
            />
          </a>
        </Button>
        
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping pointer-events-none" style={{ animationDuration: '2s' }}></div>
      </motion.div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-2 right-16 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-green-600/30"
          >
            <span className="whitespace-nowrap text-sm font-medium text-white">Fale conosco</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-black/90 rotate-45 border-r border-t border-green-600/30"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;
