
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight } from "lucide-react";
import { sendEmail } from "@/utils/emailService";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });
      
      if (result) {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "E-mail",
      value: "frezza.trafego@gmail.com",
      href: "mailto:frezza.trafego@gmail.com",
      description: "Resposta em até 24h"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(15) 99127-3423",
      href: "tel:+5515991273423",
      description: "Seg - Sex, 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      href: null,
      description: "Atendimento remoto"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className={`scroll-animate ${isVisible ? 'visible' : ''} relative py-24 md:py-32 bg-black overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-frezza-red/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-frezza-red/5 rounded-full blur-[100px]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-frezza-red/10 text-frezza-red text-sm font-medium mb-6 border border-frezza-red/20">
              Fale Conosco
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Montserrat']">
              Vamos <span className="text-frezza-red">Conversar</span>?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Transforme suas ideias em resultados. Estamos prontos para impulsionar seu negócio.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    {method.href ? (
                      <a
                        href={method.href}
                        className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5 hover:border-frezza-red/30 hover:from-frezza-red/5 transition-all duration-300"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-frezza-red/20 to-frezza-red/5 flex items-center justify-center group-hover:from-frezza-red group-hover:to-frezza-red/80 transition-all duration-300">
                          <method.icon className="h-6 w-6 text-frezza-red group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1 group-hover:text-frezza-red transition-colors">{method.title}</h4>
                          <p className="text-gray-300 text-sm">{method.value}</p>
                          <p className="text-gray-500 text-xs mt-1">{method.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-frezza-red group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-frezza-red/20 to-frezza-red/5 flex items-center justify-center">
                          <method.icon className="h-6 w-6 text-frezza-red" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                          <p className="text-gray-300 text-sm">{method.value}</p>
                          <p className="text-gray-500 text-xs mt-1">{method.description}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* WhatsApp CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600/20 to-green-600/5 border border-green-500/20 p-8"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-500/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">WhatsApp</h4>
                      <p className="text-green-400/80 text-sm">Resposta Imediata</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">
                    Prefere uma conversa rápida? Chame no WhatsApp para um atendimento instantâneo.
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-500 text-white border-0 h-12 text-base font-semibold rounded-xl group"
                    asChild
                  >
                    <a 
                      href="https://wa.me/5515991273423" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Iniciar Conversa
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Form */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              {/* Form Card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 md:p-10 backdrop-blur-sm">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-frezza-red/10 rounded-bl-[60px]"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-['Montserrat']">
                    Envie sua mensagem
                  </h3>
                  <p className="text-gray-500 mb-8">Preencha o formulário e entraremos em contato</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label 
                        htmlFor="name" 
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'name' || formData.name 
                            ? '-top-2.5 text-xs bg-black px-2 text-frezza-red' 
                            : 'top-3.5 text-gray-500'
                        }`}
                      >
                        Nome completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="bg-black/50 border-white/10 focus:border-frezza-red focus:ring-frezza-red/20 text-white h-14 rounded-xl px-4"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Email Field */}
                      <div className="relative">
                        <label 
                          htmlFor="email" 
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === 'email' || formData.email 
                              ? '-top-2.5 text-xs bg-black px-2 text-frezza-red' 
                              : 'top-3.5 text-gray-500'
                          }`}
                        >
                          E-mail
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="bg-black/50 border-white/10 focus:border-frezza-red focus:ring-frezza-red/20 text-white h-14 rounded-xl px-4"
                        />
                      </div>
                      
                      {/* Phone Field */}
                      <div className="relative">
                        <label 
                          htmlFor="phone" 
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === 'phone' || formData.phone 
                              ? '-top-2.5 text-xs bg-black px-2 text-frezza-red' 
                              : 'top-3.5 text-gray-500'
                          }`}
                        >
                          Telefone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="bg-black/50 border-white/10 focus:border-frezza-red focus:ring-frezza-red/20 text-white h-14 rounded-xl px-4"
                        />
                      </div>
                    </div>
                    
                    {/* Message Field */}
                    <div className="relative">
                      <label 
                        htmlFor="message" 
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'message' || formData.message 
                            ? '-top-2.5 text-xs bg-black px-2 text-frezza-red z-10' 
                            : 'top-4 text-gray-500'
                        }`}
                      >
                        Sua mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="min-h-[140px] bg-black/50 border-white/10 focus:border-frezza-red focus:ring-frezza-red/20 text-white rounded-xl px-4 pt-5 resize-none"
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="relative w-full h-14 text-base font-bold rounded-xl overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      {/* Button gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-frezza-red to-red-500 group-hover:from-red-500 group-hover:to-frezza-red transition-all duration-500"></div>
                      
                      {/* Button content */}
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar Mensagem
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
