import { Button } from "@/components/ui/button";
import { Bot, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AIAssistant = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  return (
    <section ref={sectionRef} className={`relative py-24 overflow-hidden bg-black scroll-animate ${isVisible ? 'visible' : ''}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-frezza-red/10 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.1)_0%,transparent_50%)]"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)] animate-pulse-slow"></div>
      
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-frezza-red/5 to-transparent h-32 animate-scan"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-frezza-red/30 bg-gradient-to-r from-frezza-red/10 to-frezza-red/5 backdrop-blur-md mb-6 relative group">
              <div className="absolute inset-0 bg-frezza-red/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Sparkles className="w-4 h-4 text-frezza-red relative z-10 animate-pulse" />
              <span className="text-sm text-gray-200 relative z-10 font-medium">Assistente Virtual</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tire suas dúvidas com
              <span className="text-frezza-red block mt-2 glow bg-gradient-to-r from-frezza-red via-red-500 to-frezza-red bg-clip-text text-transparent"> nossa IA</span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre nossos serviços de forma rápida e eficiente.
            </p>
          </div>

          {/* AI Card */}
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-frezza-red/30 via-frezza-red/40 to-frezza-red/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-90"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-frezza-red/50 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-frezza-red/50 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-frezza-red/50 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-frezza-red/50 rounded-br-2xl"></div>
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-xl border border-frezza-red/30 rounded-2xl p-6 md:p-8 overflow-hidden">
              {/* Scan Line Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-frezza-red/5 to-transparent h-full w-full opacity-50 animate-scan"></div>
              {/* Bot Icon with Animation */}
              <div className="flex justify-center mb-6 relative z-10">
                <div className="relative">
                  {/* Multiple Glow Rings */}
                  <div className="absolute inset-0 bg-frezza-red/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -inset-4 border-2 border-frezza-red/20 rounded-full animate-ping-slow"></div>
                  <div className="absolute -inset-8 border border-frezza-red/10 rounded-full animate-ping-slower"></div>
                  
                  <div className="relative bg-gradient-to-br from-frezza-red/30 via-frezza-red/10 to-black p-6 rounded-full border-2 border-frezza-red/40 shadow-[0_0_50px_rgba(220,38,38,0.3)]">
                    <Bot className="w-10 h-10 text-frezza-red animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-4 mb-6 relative z-10">
                <div className="text-center group/feature relative">
                  <div className="absolute inset-0 bg-frezza-red/5 rounded-xl opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-3">
                    <div className="text-2xl font-bold bg-gradient-to-r from-frezza-red to-red-500 bg-clip-text text-transparent mb-1">24/7</div>
                    <div className="text-xs text-gray-300">Disponível sempre</div>
                  </div>
                </div>
                <div className="text-center group/feature relative">
                  <div className="absolute inset-0 bg-frezza-red/5 rounded-xl opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-3">
                    <div className="text-2xl font-bold bg-gradient-to-r from-frezza-red to-red-500 bg-clip-text text-transparent mb-1">Instantâneo</div>
                    <div className="text-xs text-gray-300">Respostas rápidas</div>
                  </div>
                </div>
                <div className="text-center group/feature relative">
                  <div className="absolute inset-0 bg-frezza-red/5 rounded-xl opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-3">
                    <div className="text-2xl font-bold bg-gradient-to-r from-frezza-red to-red-500 bg-clip-text text-transparent mb-1">Inteligente</div>
                    <div className="text-xs text-gray-300">IA avançada</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center relative z-10">
                <Button 
                  className="bg-gradient-to-r from-frezza-red via-red-600 to-frezza-red hover:from-frezza-red/90 hover:via-red-600/90 hover:to-frezza-red/90 text-white px-8 py-6 text-base border-2 border-frezza-red/40 group relative overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-all duration-300"
                  asChild
                >
                  <a 
                    href="https://frezza-spark.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAacGnoaHFt0pVIid1Vob9eWmuREYuRh2VngpORRM_Ve4vlYh6R4E5vyITba8NQ_aem_-2S10iq6MTPJT-Zc2fxkPg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Animated Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <span className="relative z-10 flex items-center gap-3 font-semibold">
                      <Bot className="w-6 h-6 animate-pulse" />
                      Conversar com a IA
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
