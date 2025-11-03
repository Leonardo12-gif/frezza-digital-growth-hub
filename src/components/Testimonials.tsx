
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "CEO, Tech Solutions",
      content: "A Frezza Marketing transformou completamente nossa presença digital. O ROI das campanhas superou todas as nossas expectativas, com um aumento de 300% nas conversões em apenas 3 meses.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      logo: "https://placehold.co/200x80/111111/FFFFFF?text=TechSolutions"
    },
    {
      id: 2,
      name: "Juliana Costa",
      role: "CMO, E-commerce Plus",
      content: "Após diversas tentativas com outras agências, a Frezza conseguiu entender exatamente o que precisávamos. O tráfego orgânico cresceu mais de 200% e as vendas pelo site aumentaram consideravelmente.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      logo: "https://placehold.co/200x80/111111/FFFFFF?text=EcommercePlus"
    },
    {
      id: 3,
      name: "Ricardo Almeida",
      role: "Fundador, Startup Inovadora",
      content: "As estratégias da Frezza Marketing foram fundamentais para escalar nosso negócio. A criatividade e eficiência nas campanhas nos ajudaram a conquistar um mercado extremamente competitivo.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      logo: "https://placehold.co/200x80/111111/FFFFFF?text=Inovadora"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" ref={sectionRef} className={`section-padding bg-black scroll-animate ${isVisible ? 'visible' : ''} relative overflow-hidden`}>
      {/* Background consistente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
      
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Glow sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05),transparent_70%)]"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-gradient">O que nossos clientes dizem</h2>
        <p className="section-subtitle">
          Resultados reais para empresas reais
        </p>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-[#111] border-[#222] shadow-lg">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                          <div className="md:col-span-4 bg-[#0a0a0a] p-8 flex flex-col items-center justify-center border-r border-[#222]">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-frezza-red/30">
                              <img 
                                src={testimonial.avatar} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div className="text-center">
                              <h4 className="text-xl font-bold mb-1">{testimonial.name}</h4>
                              <p className="text-gray-400">{testimonial.role}</p>
                            </div>
                            <div className="mt-8">
                              <img 
                                src={testimonial.logo} 
                                alt="Company Logo" 
                                className="h-10 opacity-70" 
                              />
                            </div>
                          </div>
                          
                          <div className="md:col-span-8 p-8 flex items-center">
                            <div>
                              <blockquote className="relative">
                                <div className="text-5xl text-frezza-red opacity-30 absolute -top-8 -left-4">"</div>
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                  {testimonial.content}
                                </p>
                                <div className="text-5xl text-frezza-red opacity-30 absolute -bottom-10 right-0">"</div>
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center mt-12 space-x-4">
              <Button 
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-[#333] hover:border-frezza-red hover:bg-frezza-red/10 h-12 w-12"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 rounded-full transition-all ${
                      activeIndex === index ? "w-8 bg-frezza-red" : "w-3 bg-[#333]"
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-[#333] hover:border-frezza-red hover:bg-frezza-red/10 h-12 w-12"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
