import { Button } from "@/components/ui/button";
import { Bot, Sparkles } from "lucide-react";

const AIAssistant = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-frezza-red/5 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,transparent_65%)]"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-frezza-red/20 bg-frezza-red/5 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-frezza-red" />
              <span className="text-sm text-gray-300">Assistente Virtual</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tire suas dúvidas com
              <span className="text-frezza-red block mt-2 glow"> nossa IA</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Converse com nosso assistente inteligente e esclareça todas as suas dúvidas sobre nossos serviços de forma rápida e eficiente.
            </p>
          </div>

          {/* AI Card */}
          <div className="relative group">
            {/* Glow Effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-frezza-red/20 via-frezza-red/30 to-frezza-red/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-75"></div>
            
            {/* Main Card */}
            <div className="relative bg-black/80 backdrop-blur-sm border border-frezza-red/20 rounded-2xl p-8 md:p-12">
              {/* Bot Icon with Animation */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-frezza-red/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-frezza-red/20 to-frezza-red/5 p-6 rounded-full border border-frezza-red/30">
                    <Bot className="w-12 h-12 text-frezza-red" />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-frezza-red mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Disponível sempre</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-frezza-red mb-1">Instantâneo</div>
                  <div className="text-sm text-gray-400">Respostas rápidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-frezza-red mb-1">Inteligente</div>
                  <div className="text-sm text-gray-400">IA avançada</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Button 
                  className="bg-frezza-red hover:bg-frezza-red/80 text-white px-8 py-6 text-lg border border-frezza-red/20 group relative overflow-hidden"
                  asChild
                >
                  <a 
                    href="https://frezza-spark.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAacGnoaHFt0pVIid1Vob9eWmuREYuRh2VngpORRM_Ve4vlYh6R4E5vyITba8NQ_aem_-2S10iq6MTPJT-Zc2fxkPg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Bot className="w-5 h-5" />
                      Conversar com a IA
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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
