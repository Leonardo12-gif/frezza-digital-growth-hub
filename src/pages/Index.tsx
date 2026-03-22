import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import QuemSomos from "@/components/QuemSomos";
import ProcessoTrabalho from "@/components/ProcessoTrabalho";
import Depoimentos from "@/components/Depoimentos";
import CTAFinal from "@/components/CTAFinal";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-black">
      <div className="relative flex-1">
        <Header />
        <Hero />
        <SocialProof />
        <Services />
        <CaseStudies />
        <QuemSomos />
        <ProcessoTrabalho />
        <AIAssistant />
        <Depoimentos />
        <CTAFinal />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
