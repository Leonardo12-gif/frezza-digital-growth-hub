
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { sendEmail } from "@/utils/emailService";

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
    
    try {
      // Usar o serviço EmailJS real
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });
      
      if (result) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
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
    <section id="contact" ref={sectionRef} className="opacity-0 relative py-20 md:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] overflow-hidden">
      {/* Animated red particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-frezza-red/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-frezza-red/15 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-frezza-red/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-frezza-red/20 rounded-full blur-md animate-ping"></div>
      </div>
      
      <div className="container mx-auto relative z-10 section-padding">
        <h2 className="section-title text-gradient">Entre em Contato</h2>
        <p className="section-subtitle">
          Vamos conversar sobre como podemos impulsionar seu negócio
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -left-10 w-2/3 h-2/3 border border-frezza-red/20 rounded-lg"></div>
            
            <div className="bg-[#111] p-12 rounded-lg border border-[#222] shadow-lg input-laser-border">
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
                    <a href="tel:+5515991273423" className="text-gray-400 hover:text-frezza-red transition-colors">
                      (15) 99127-3423
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
                    href="https://wa.me/5515991273423" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111] p-12 rounded-lg border border-[#222] shadow-lg relative input-laser-border">
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-1/2 h-1/2 border border-frezza-red/20 rounded-lg"></div>
            
            <h3 className="text-2xl font-bold mb-8 text-white">Envie sua mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
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
                  className="bg-[#161616] border-[#333] focus:border-frezza-red focus:ring-frezza-red/10 text-white placeholder:text-gray-500 relative z-10"
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
                    className="bg-[#161616] border-[#333] focus:border-frezza-red focus:ring-frezza-red/10 text-white placeholder:text-gray-500 relative z-10"
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
                    className="bg-[#161616] border-[#333] focus:border-frezza-red focus:ring-frezza-red/10 text-white placeholder:text-gray-500 relative z-10"
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
                  className="min-h-[150px] bg-[#161616] border-[#333] focus:border-frezza-red focus:ring-frezza-red/10 text-white placeholder:text-gray-500 relative z-10"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-frezza-red hover:bg-frezza-red/80 text-white border border-frezza-red/20 w-full py-6 group relative z-10"
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
