import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Users, Target } from "lucide-react";

const cases = [
  {
    client: "Robério Fontes",
    segment: "Salão de Beleza",
    image: "/lovable-uploads/roberio-fontes-logo.jpg",
    problem: "Baixa visibilidade online e dificuldade em atrair novos clientes para o salão.",
    solution: "Gestão de redes sociais + tráfego pago com foco em agendamentos.",
    results: [
      { label: "Aumento em agendamentos", value: "+180%" },
      { label: "Seguidores orgânicos", value: "+2.500" },
      { label: "ROAS médio", value: "4.2x" },
    ],
    icon: TrendingUp,
  },
  {
    client: "Elaluz Concept",
    segment: "Moda Feminina",
    image: "/lovable-uploads/elaluz-logo.jpg",
    problem: "Marca nova no mercado, sem presença digital e sem estratégia de vendas online.",
    solution: "Branding completo, produção de conteúdo e campanhas de tráfego pago.",
    results: [
      { label: "Vendas no primeiro mês", value: "+R$ 15k" },
      { label: "Engajamento médio", value: "8.5%" },
      { label: "Custo por lead", value: "R$ 3,20" },
    ],
    icon: Users,
  },
  {
    client: "Allpfit Sorocaba",
    segment: "Academia / Fitness",
    image: "/lovable-uploads/46160644-af2b-4687-bf1e-2fd232bf96f4.png",
    problem: "Alta concorrência local e dificuldade em converter leads em matrículas.",
    solution: "Funil de vendas otimizado com vídeos profissionais e remarketing.",
    results: [
      { label: "Novas matrículas/mês", value: "+85" },
      { label: "Leads gerados", value: "+1.200" },
      { label: "Redução no CAC", value: "-40%" },
    ],
    icon: Target,
  },
];

const CaseStudies = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="cases"
      ref={sectionRef}
      className={`py-24 md:py-32 bg-black relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-frezza-red" />
            <span className="text-frezza-red text-sm uppercase tracking-[0.3em] font-medium">Cases de Sucesso</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-tight">
            Resultados que<br />
            <span className="text-frezza-red">falam por si</span>
          </h2>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.client}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-frezza-red/30 transition-all duration-500"
            >
              {/* Client Header */}
              <div className="p-6 pb-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0">
                  <img src={caseItem.image} alt={`${caseItem.client} - Case de sucesso de marketing digital em Sorocaba`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-frezza-red transition-colors duration-300">
                    {caseItem.client}
                  </h3>
                  <span className="text-frezza-red/60 text-xs uppercase tracking-wider">{caseItem.segment}</span>
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="px-6 space-y-4">
                <div>
                  <span className="text-xs text-gray-600 uppercase tracking-wider">Desafio</span>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{caseItem.problem}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-600 uppercase tracking-wider">Solução Frezza</span>
                  <p className="text-gray-300 text-sm mt-1 leading-relaxed">{caseItem.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="p-6 mt-4">
                <div className="grid grid-cols-3 gap-3">
                  {caseItem.results.map((result) => (
                    <div key={result.label} className="text-center p-3 rounded-xl bg-frezza-red/5 border border-frezza-red/10">
                      <div className="text-lg font-bold text-frezza-red">{result.value}</div>
                      <div className="text-[10px] text-gray-500 mt-1 leading-tight">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-frezza-red w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frezza-red/20 to-transparent" />
    </section>
  );
};

export default CaseStudies;
