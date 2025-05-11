
import { CircleDollarSign, TrendingUp, Video, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Tráfego Pago",
      description: "Campanhas estratégicas em Google Ads, Facebook Ads e Instagram Ads para maximizar seu ROI e conversões.",
      icon: CircleDollarSign,
      color: "bg-blue-50",
      iconColor: "text-frezza"
    },
    {
      title: "Tráfego Orgânico",
      description: "Estratégias de SEO e marketing de conteúdo para posicionar sua marca organicamente nos motores de busca.",
      icon: TrendingUp,
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Vídeos Publicitários",
      description: "Produção completa de vídeos de alta qualidade para campanhas impactantes que convertem.",
      icon: Video,
      color: "bg-amber-50",
      iconColor: "text-frezza-accent"
    },
    {
      title: "Modelos para Campanhas",
      description: "Fornecimento de atores e atrizes profissionais para dar vida às suas campanhas e comunicações.",
      icon: Users,
      color: "bg-purple-50", 
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title animate-slideUp">Nossos Serviços</h2>
        <p className="section-subtitle animate-slideUp animate-delay-200">
          A publicidade certa no momento certo para o público certo
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <CardHeader className={`${service.color} rounded-t-lg`}>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mx-auto">
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
              </CardHeader>
              <CardContent className="pt-6 text-center">
                <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
