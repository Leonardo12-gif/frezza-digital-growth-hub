import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactInfo from "@/components/ContactInfo";
import Clientes from "@/components/Clientes";
import useMobileDetect from "@/hooks/use-mobile-detect";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const Index = () => {
  const isMobile = useMobileDetect();

  return (
    <div className="min-h-screen flex flex-col relative bg-black overflow-hidden">
      {/* Mobile gradient background */}
      <div className="md:hidden fixed inset-0 bg-gradient-to-br from-red-900/40 via-red-800/20 to-black z-0"></div>
      
      {/* Animated shader background - only on tablet/PC */}
      {!isMobile && <AnimatedShaderBackground />}
      
      {/* Content */}
      <div className="relative z-10 flex-1">
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <Clientes />
        <ContactInfo />
        <About />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
