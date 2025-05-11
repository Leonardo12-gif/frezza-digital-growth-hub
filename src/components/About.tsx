
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Frezza Marketing</h2>
            
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Na Frezza Marketing, somos movidos por performance, criatividade e resultado. 
                Atuamos como uma agência completa, especializada em 
                <span className="font-semibold text-frezza"> tráfego pago</span>, 
                <span className="font-semibold text-frezza"> tráfego orgânico</span>,
                <span className="font-semibold text-frezza"> criação de vídeos publicitários</span> e 
                fornecimento de <span className="font-semibold text-frezza">modelos para campanhas visuais</span>.
              </p>
              
              <p>
                Nossa missão é <span className="font-semibold">impulsionar marcas para o próximo nível</span>, 
                com estratégias personalizadas que conectam empresas ao público certo, na hora certa. 
                Com uma equipe criativa, técnica e comprometida, entregamos muito mais que anúncios: 
                entregamos presença digital, conversão e crescimento sustentável.
              </p>
              
              <p>
                Trabalhamos lado a lado com nossos clientes para construir não apenas campanhas, 
                mas <span className="font-semibold">relacionamentos de confiança e resultados consistentes</span>.
              </p>
            </div>
            
            <div className="mt-8">
              <Button 
                className="bg-frezza hover:bg-frezza-dark text-white"
                asChild
              >
                <a href="#contact">Entre em Contato</a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Replace with actual about image */}
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" 
                alt="Equipe Frezza Marketing" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 bg-frezza w-32 h-32 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 bg-frezza-accent w-20 h-20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
