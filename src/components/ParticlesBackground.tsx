
import { useEffect, useRef, useState } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isMobile) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Set initial size
    resizeCanvas();
    
    // Handle resize
    window.addEventListener('resize', resizeCanvas);
    
    // Particles settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(window.innerWidth / 10, 100); // Adjust based on screen width
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    init();
    
    const drawLines = () => {
      if (!ctx) return;
      let opacityValue = 0.7;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            opacityValue = 0.1 - (distance / 10000);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      drawLines();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMobile]);
  
  // Don't render canvas on mobile
  if (isMobile) return null;
  
  return <canvas ref={canvasRef} className="fixed inset-0 opacity-20" />;
};

export default ParticlesBackground;
