import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        sectionRef.current?.classList.add('animate-fadeIn');
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="about" ref={sectionRef} className="section-padding relative bg-[#030303] opacity-0 overflow-hidden">
      {/* Geometric Background with Red Palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -150, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 12 }}
          transition={{ duration: 2.4, delay: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ width: 600, height: 140 }}
            className="relative"
          >
            <div className={cn(
              "absolute inset-0 rounded-full",
              "bg-gradient-to-r from-red-500/[0.15] to-transparent",
              "backdrop-blur-[2px] border-2 border-red-500/[0.25]",
              "shadow-[0_8px_32px_0_rgba(239,68,68,0.2)]",
              "after:absolute after:inset-0 after:rounded-full",
              "after:bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.3),transparent_70%)]"
            )} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -15 }}
          transition={{ duration: 2.4, delay: 0.5, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ width: 500, height: 120 }}
            className="relative"
          >
            <div className={cn(
              "absolute inset-0 rounded-full",
              "bg-gradient-to-r from-rose-500/[0.15] to-transparent",
              "backdrop-blur-[2px] border-2 border-rose-500/[0.25]",
              "shadow-[0_8px_32px_0_rgba(244,63,94,0.2)]",
              "after:absolute after:inset-0 after:rounded-full",
              "after:bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.3),transparent_70%)]"
            )} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 7 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 2.4, delay: 0.4, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ width: 300, height: 80 }}
            className="relative"
          >
            <div className={cn(
              "absolute inset-0 rounded-full",
              "bg-gradient-to-r from-red-600/[0.15] to-transparent",
              "backdrop-blur-[2px] border-2 border-red-600/[0.25]",
              "shadow-[0_8px_32px_0_rgba(220,38,38,0.2)]",
              "after:absolute after:inset-0 after:rounded-full",
              "after:bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.3),transparent_70%)]"
            )} />
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-gradient">Sobre a Frezza Marketing</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-16">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  Na Frezza Marketing, somos movidos por 
                  <span className="text-white font-semibold"> performance</span>, 
                  <span className="text-white font-semibold"> criatividade</span> e 
                  <span className="text-white font-semibold"> resultados</span>. 
                  Atuamos como uma agência completa, especializada em 
                  <span className="text-frezza-red font-semibold">  Marketing Digital</span> e 
                  <span className="text-frezza-red font-semibold">   Crescimento da sua marca</span>.
                </p>
                
                <p>
                  Nossa missão é <span className="text-white font-semibold">impulsionar marcas para o próximo nível</span>, 
                  com estratégias personalizadas que conectam empresas ao público certo, na hora certa. 
                  Com uma equipe criativa, técnica e comprometida, entregamos muito mais que anúncios: 
                  entregamos presença digital, conversão e crescimento sustentável.
                </p>
                
                <p>
                  Trabalhamos lado a lado com nossos clientes para construir não apenas campanhas, 
                  mas <span className="text-white font-semibold">relacionamentos de confiança e resultados consistentes</span>.
                </p>
              </div>
              
              <div className="mt-10">
                <Button className="bg-frezza-red hover:bg-frezza-red/80 text-white border border-frezza-red/20 px-8 py-6 text-lg" asChild>
                  <a href="#contact">Entre em Contato</a>
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-frezza-red/5 -rotate-3 rounded-lg"></div>
                <div className="absolute top-0 left-0 w-full h-full border border-frezza-red/20 rotate-3 rounded-lg"></div>
                
                {/* Main image */}
                <div className="relative rounded-lg overflow-hidden border border-[#333] shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="Equipe Frezza Marketing" className="w-full h-auto" />
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex items-center space-x-4">
                      <div className="w-1 h-12 bg-frezza-red"></div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Nossa Missão</h3>
                        <p className="text-gray-300 mt-2">Transformar cliques em crescimento real para o seu negócio</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stats card */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;