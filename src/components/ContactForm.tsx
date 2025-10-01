
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
    <section id="contact" ref={sectionRef} className="opacity-0 relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-red-600/15 rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto relative z-10 section-padding">
        {/* Futuristic title */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient relative inline-block">
            Entre em Contato
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 via-red-500/30 to-red-600/20 blur-2xl opacity-50 -z-10"></div>
          </h2>
          <div className="h-1 w-40 mx-auto mt-6 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          <p className="section-subtitle mt-8">
            Vamos conversar sobre como podemos impulsionar seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div className="relative group">
            {/* Holographic frame */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 via-red-500/50 to-red-600/50 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-black/40 via-red-950/20 to-black/40 backdrop-blur-xl border border-red-500/30 rounded-2xl p-12 overflow-hidden">
              {/* Scan line effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-scan-line"></div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-500/50 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-500/50 rounded-br-2xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white relative z-10">
                Informações de Contato
                <div className="absolute -inset-1 bg-red-500/10 blur-lg -z-10"></div>
              </h3>
              
              <div className="space-y-8 mt-10 relative z-10">
                <div className="flex items-start group/item">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/30 blur-md rounded-lg group-hover/item:bg-red-500/50 transition-all"></div>
                    <div className="relative bg-gradient-to-br from-red-600/20 to-red-900/20 p-3 rounded-lg mr-5 border border-red-500/30">
                      <Mail className="h-6 w-6 text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">E-mail</h4>
                    <a href="mailto:frezza.trafego@gmail.com" className="text-gray-400 hover:text-frezza-red transition-colors">
                      frezza.trafego@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group/item">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/30 blur-md rounded-lg group-hover/item:bg-red-500/50 transition-all"></div>
                    <div className="relative bg-gradient-to-br from-red-600/20 to-red-900/20 p-3 rounded-lg mr-5 border border-red-500/30">
                      <Phone className="h-6 w-6 text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Telefone</h4>
                    <a href="tel:+5515991273423" className="text-gray-400 hover:text-frezza-red transition-colors">
                      (15) 99127-3423
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group/item">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/30 blur-md rounded-lg group-hover/item:bg-red-500/50 transition-all"></div>
                    <div className="relative bg-gradient-to-br from-red-600/20 to-red-900/20 p-3 rounded-lg mr-5 border border-red-500/30">
                      <MapPin className="h-6 w-6 text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Endereço</h4>
                    <p className="text-gray-400">
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-red-500/20 relative z-10">
                <h4 className="text-xl font-bold mb-4 text-white">Quer resultados agora?</h4>
                <p className="text-gray-400 mb-6">
                  Entre em contato pelo WhatsApp para um atendimento rápido e personalizado.
                </p>
                <div className="relative group/btn inline-block w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg opacity-50 group-hover/btn:opacity-75 blur transition-all duration-300"></div>
                  <Button 
                    className="relative w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border border-red-400/30"
                    asChild
                  >
                    <a 
                      href="https://wa.me/5515991273423" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10">Falar no WhatsApp</span>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            {/* Holographic frame */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 via-red-500/50 to-red-600/50 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-black/40 via-red-950/20 to-black/40 backdrop-blur-xl border border-red-500/30 rounded-2xl p-12 overflow-hidden">
              {/* Scan line effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-scan-line"></div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-500/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-500/50 rounded-bl-2xl"></div>
              
              <h3 className="text-2xl font-bold mb-8 text-white relative z-10">
                Envie sua mensagem
                <div className="absolute -inset-1 bg-red-500/10 blur-lg -z-10"></div>
              </h3>
            
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
              
              <div className="relative group/btn inline-block w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg opacity-50 group-hover/btn:opacity-75 blur transition-all duration-300"></div>
                <Button 
                  type="submit" 
                  className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border border-red-400/30 w-full py-6 group"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send size={18} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
