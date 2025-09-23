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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Content */}
      <div className="relative flex-1">
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
