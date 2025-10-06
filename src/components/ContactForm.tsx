
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
    <section id="contact" ref={sectionRef} className="opacity-0 relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Modern grid background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(239, 68, 68, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-frezza-red/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-frezza-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-frezza-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Montserrat']">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-frezza-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos impulsionar seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-frezza-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-frezza-red group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-5 w-5 text-frezza-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-mail</h4>
                    <a href="mailto:frezza.trafego@gmail.com" className="text-gray-400 hover:text-frezza-red transition-colors text-sm">
                      frezza.trafego@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-frezza-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-frezza-red group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-5 w-5 text-frezza-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefone</h4>
                    <a href="tel:+5515991273423" className="text-gray-400 hover:text-frezza-red transition-colors text-sm">
                      (15) 99127-3423
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-frezza-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-frezza-red group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-frezza-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Localização</h4>
                    <p className="text-gray-400 text-sm">
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
              <h4 className="font-bold text-white mb-2">Atendimento Rápido</h4>
              <p className="text-gray-400 text-sm mb-4">
                Fale conosco pelo WhatsApp agora
              </p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white border-0"
                asChild
              >
                <a 
                  href="https://wa.me/5515991273423" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
          
          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3 bg-gradient-to-br from-gray-950 to-black rounded-2xl border border-gray-800 p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Montserrat']">
              Envie sua mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required
                  className="bg-black/50 border-gray-800 focus:border-frezza-red focus:ring-frezza-red text-white placeholder:text-gray-500 h-12"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="bg-black/50 border-gray-800 focus:border-frezza-red focus:ring-frezza-red text-white placeholder:text-gray-500 h-12"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="bg-black/50 border-gray-800 focus:border-frezza-red focus:ring-frezza-red text-white placeholder:text-gray-500 h-12"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar você?"
                  required
                  className="min-h-[140px] bg-black/50 border-gray-800 focus:border-frezza-red focus:ring-frezza-red text-white placeholder:text-gray-500 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-frezza-red hover:bg-frezza-red/90 text-white w-full h-12 text-base font-semibold group shadow-sm hover:shadow-md transition-all duration-300"
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
