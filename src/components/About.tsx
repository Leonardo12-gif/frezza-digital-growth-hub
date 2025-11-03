import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  return <section id="about" ref={sectionRef} className={`section-padding relative bg-black scroll-animate ${isVisible ? 'visible' : ''} overflow-hidden`}>
      {/* Background consistente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
      
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Glow sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05),transparent_70%)]"></div>
      
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
          {/* Futuristic title with holographic effect */}
          <div className="text-center mb-16">
            <h2 className="section-title text-gradient relative inline-block">
              Sobre a Frezza Marketing
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 via-red-500/30 to-red-600/20 blur-2xl opacity-50 -z-10"></div>
            </h2>
            <div className="h-1 w-40 mx-auto mt-6 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-16">
            <div className="lg:col-span-5 order-2 lg:order-1">
              {/* Holographic content card */}
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 via-red-500/50 to-red-600/50 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-black/40 via-red-950/20 to-black/40 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8">
                  {/* Scan line effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-scan-line"></div>
                  </div>
                  
                  <div className="space-y-6 text-gray-300 text-lg relative z-10">
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
                </div>
              </div>
              
              <div className="mt-10">
                {/* Futuristic CTA button */}
                <div className="relative group inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg opacity-50 group-hover:opacity-75 blur transition-all duration-300"></div>
                  <Button className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border border-red-400/30 px-8 py-6 text-lg shadow-lg shadow-red-500/20" asChild>
                    <a href="#contact">
                      <span className="relative z-10">Entre em Contato</span>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative group">
                {/* Holographic floating frames */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-red-500/30 rounded-2xl transform -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-red-400/20 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                
                {/* Glowing corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-500 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-500 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-red-500 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-500 rounded-br-2xl"></div>
                
                {/* Main holographic image container */}
                <div className="relative rounded-2xl overflow-hidden border border-red-500/40 shadow-2xl">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-30 blur-lg"></div>
                  
                  {/* Scan line overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent opacity-50 animate-scan-line z-20"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 z-10"></div>
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="Equipe Frezza Marketing" className="w-full h-auto relative" />
                  
                  {/* Futuristic overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="relative">
                      {/* Glowing accent line */}
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-red-600 to-transparent">
                        <div className="absolute inset-0 bg-red-500 blur-sm"></div>
                      </div>
                      
                      <div className="flex items-center space-x-4 backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-red-500/30">
                        <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-red-700 shadow-lg shadow-red-500/50"></div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 relative">
                            Nossa Missão
                            <div className="absolute -inset-1 bg-red-500/20 blur-lg -z-10"></div>
                          </h3>
                          <p className="text-gray-300 mt-2">Transformar cliques em crescimento real para o seu negócio</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;