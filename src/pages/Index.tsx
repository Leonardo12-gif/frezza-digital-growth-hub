import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParticlesBackground from "@/components/ParticlesBackground";
import ContactInfo from "@/components/ContactInfo";
import Clientes from "@/components/Clientes";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-black bg-noise overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <ParticlesBackground />
        <div className="absolute top-1/4 left-10 md:left-20 w-64 h-64 rounded-full bg-frezza-red opacity-5 blur-3xl"></div>
        <div className="absolute top-3/4 right-10 md:right-20 w-64 h-64 rounded-full bg-frezza-red opacity-5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white opacity-[0.03] blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-frezza-red opacity-[0.05] blur-2xl"></div>
      </div>
      
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
