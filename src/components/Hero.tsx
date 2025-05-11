
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section id="home" className="relative bg-gradient-to-br from-red-50 to-white pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformamos 
              <span className="text-frezza-red"> cliques </span>
              em 
              <span className="text-frezza-red"> resultados reais</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700">
              Sua marca com mais visibilidade, estratégia e performance.
              Conte com quem entende de crescimento digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-frezza-red hover:bg-frezza-dark text-white px-6 py-6 text-lg" asChild>
                <a href="#services">
                  Nossos Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button variant="outline" className="border-frezza-red text-frezza-red hover:bg-frezza-red hover:text-white px-6 py-6 text-lg" asChild>
                <a href="#contact">Fale Conosco</a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float hidden md:block">
            {/* Hero image */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" 
                alt="Marketing digital e análise de dados" 
                className="w-full h-auto" 
              />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 bg-frezza-red w-24 h-24 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 bg-frezza-red w-16 h-16 rounded-full opacity-20"></div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="hidden md:flex justify-center mt-16">
          <a href="#services" className="animate-bounce">
            <div className="border-2 border-gray-300 rounded-full p-2">
              <ArrowRight size={20} className="text-gray-400 transform rotate-90" />
            </div>
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;
