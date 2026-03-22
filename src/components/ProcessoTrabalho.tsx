import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Lightbulb, Rocket, BarChart3, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Gratuito",
    description: "Analisamos sua presença digital atual e identificamos oportunidades de crescimento.",
    icon: Search,
  },
  {
    number: "02",
    title: "Estratégia Personalizada",
    description: "Criamos um plano sob medida com metas claras e ações definidas para o seu negócio.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Execução Semanal",
    description: "Implementamos as ações com entregas semanais — conteúdo, anúncios e otimizações.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Relatório de Resultados",
    description: "Relatórios transparentes com métricas reais: leads, vendas, engajamento e ROI.",
    icon: BarChart3,
  },
  {
    number: "05",
    title: "Evolução Contínua",
    description: "Otimizamos continuamente as estratégias com base nos dados para escalar resultados.",
    icon: RefreshCw,
  },
];

const ProcessoTrabalho = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="processo"
      ref={sectionRef}
      className={`py-24 md:py-32 bg-black relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-frezza-red" />
            <span className="text-frezza-red text-sm uppercase tracking-[0.3em] font-medium">Como Trabalhamos</span>
            <div className="w-12 h-px bg-frezza-red" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-tight">
            Do diagnóstico ao<br />
            <span className="text-frezza-red">resultado</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-gradient-to-b from-frezza-red/30 via-frezza-red/10 to-transparent md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-frezza-red/30 transition-all duration-500 ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  } max-w-md`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-frezza-red/10 flex items-center justify-center group-hover:bg-frezza-red transition-colors duration-300">
                        <step.icon className="w-5 h-5 text-frezza-red group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-frezza-red transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Number dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-frezza-red/30 z-10 shrink-0">
                  <span className="text-frezza-red font-bold text-sm">{step.number}</span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />
    </section>
  );
};

export default ProcessoTrabalho;
