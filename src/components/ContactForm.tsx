
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a placeholder for EmailJS integration
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success toast
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      // Error toast
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-[#0a0a0a] opacity-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-frezza-red opacity-5 blur-3xl"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-gradient">Entre em Contato</h2>
        <p className="section-subtitle">
          Vamos conversar sobre como podemos impulsionar seu negócio
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -left-10 w-2/3 h-2/3 border border-frezza-red/20 rounded-lg"></div>
            
            <div className="bg-[#111] p-12 rounded-lg border border-[#222] shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h3>
              
              <div className="space-y-8 mt-10">
                <div className="flex items-start">
                  <div className="bg-frezza-red/10 p-3 rounded-lg mr-5">
                    <Mail className="h-6 w-6 text-frezza-red" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">E-mail</h4>
                    <a href="mailto:frezza.trafego@gmail.com" className="text-gray-400 hover:text-frezza-red transition-colors">
                      frezza.trafego@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-frezza-red/10 p-3 rounded-lg mr-5">
                    <Phone className="h-6 w-6 text-frezza-red" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Telefone</h4>
                    <a href="tel:+5500000000000" className="text-gray-400 hover:text-frezza-red transition-colors">
                      (00) 00000-0000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-frezza-red/10 p-3 rounded-lg mr-5">
                    <MapPin className="h-6 w-6 text-frezza-red" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Endereço</h4>
                    <p className="text-gray-400">
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-[#222]">
                <h4 className="text-xl font-bold mb-4 text-white">Quer resultados agora?</h4>
                <p className="text-gray-400 mb-6">
                  Entre em contato pelo WhatsApp para um atendimento rápido e personalizado.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-frezza-red text-frezza-red hover:bg-frezza-red hover:text-white"
                  asChild
                >
                  <a 
                    href="https://wa.me/5500000000000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111] p-12 rounded-lg border border-[#222] shadow-lg relative">
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-1/2 h-1/2 border border-frezza-red/20 rounded-lg"></div>
            
            <h3 className="text-2xl font-bold mb-8 text-white">Envie sua mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="bg-[#161616] border-[#333] focus:border-frezza-red focus:ring-frezza-red/10 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="bg-[#161616] border-[#333] focus:border-frezza-red focus:ring-frezza-red/10 text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone (opcional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="bg-[#161616] border-[#333] focus:border-frezza-red focus:ring-frezza-red/10 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  required
                  className="min-h-[150px] bg-[#161616] border-[#333] focus:border-frezza-red focus:ring-frezza-red/10 text-white placeholder:text-gray-500"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-frezza-red hover:bg-frezza-red/80 text-white border border-frezza-red/20 w-full py-6 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
