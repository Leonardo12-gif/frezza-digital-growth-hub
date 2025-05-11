
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background design elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 md:left-20 w-64 h-64 rounded-full bg-frezza-red opacity-5"></div>
        <div className="absolute top-3/4 right-10 md:right-20 w-48 h-48 rounded-full bg-frezza-red opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-frezza-red opacity-[0.03]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1">
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
