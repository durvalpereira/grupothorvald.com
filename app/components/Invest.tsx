import { Rocket, Code, TrendingUp, Handshake } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const pillars = [
  {
    icon: Code,
    title: 'Tecnologia',
    description:
      'Infraestrutura técnica completa: desenvolvimento, automação, IA e dados para escalar operações.',
  },
  {
    icon: TrendingUp,
    title: 'Capital',
    description:
      'Investimento direto ou co-participação em negócios com potencial de crescimento comprovado.',
  },
  {
    icon: Rocket,
    title: 'Aceleração',
    description:
      'Go-to-market, posicionamento digital e estratégia de crescimento com base em execução real.',
  },
  {
    icon: Handshake,
    title: 'Rede',
    description:
      'Acesso a uma rede global de parceiros, clientes e especialistas em 6 continentes.',
  },
]

export default function Invest() {
  return (
    <section
      id="investir"
      className="py-24 md:py-32 bg-navy-900 relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-teal-900)_0%,transparent_50%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-navy-700)_0%,transparent_50%)] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-16">
          <div>
            <ScrollReveal>
              <p className="text-teal-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                Aceleração de Negócios
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight mb-6">
                Invista ou cresça
                <span className="text-teal-300"> com a gente</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-navy-300 text-lg leading-relaxed">
                O Grupo Thorvald busca negócios com potencial real de
                crescimento. Entramos com tecnologia, capital e estratégia —
                tudo o que um negócio precisa para escalar de forma
                sustentável.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex items-end">
            <ScrollReveal delay={300}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-white font-heading text-xl mb-3">
                  O que buscamos
                </p>
                <ul className="space-y-3">
                  {[
                    'Negócios com tração inicial ou modelo validado',
                    'Fundadores com visão de longo prazo',
                    'Oportunidades onde tecnologia é diferencial competitivo',
                    'Setores com potencial de escala digital',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2.5 shrink-0" />
                      <span className="text-navy-200 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 100}>
              <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center mb-5 group-hover:bg-teal-500/25 transition-colors">
                  <pillar.icon size={20} className="text-teal-400" />
                </div>
                <h3 className="font-heading text-white text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-14">
            <a
              href="#contato"
              className="inline-flex items-center bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-colors"
            >
              Quero conversar sobre oportunidades
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
