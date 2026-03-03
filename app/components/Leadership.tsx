import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const highlights = [
  'Cientista da Computação, MSc. em IA e Eng. de Software (UFAL)',
  'Consultor na MongoDB — único a atender em 3 idiomas globalmente',
  'CTO e Tech Lead em startups premiadas e empresas internacionais',
  'Projetos que geraram centenas de milhões de dólares em receita',
  'Sociedade em +10 negócios em 6 continentes',
]

export default function Leadership() {
  return (
    <section id="lideranca" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <ScrollReveal>
              <p className="text-teal-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                Liderança
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl text-navy-800 mb-2">
                Durval Pereira
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-teal-600 text-sm font-semibold uppercase tracking-wide mb-10">
                Fundador &amp; CEO
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-navy-500 text-lg leading-relaxed mb-8">
                Com mais de 20 anos no mercado de tecnologia, Durval combina
                expertise técnica profunda com visão estratégica de negócios. Sua
                especialidade é transformar tecnologia em resultados financeiros
                — a premissa que fundamenta cada empresa do Grupo Thorvald.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <ul className="space-y-3 mb-10">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 shrink-0" />
                    <span className="text-navy-500">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <a
                href="https://durvalpereira.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy-800 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-navy-700 transition-colors"
              >
                durvalpereira.com.br
                <ArrowUpRight size={16} />
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-teal-50 to-surface flex items-center justify-center border border-border">
                  <span className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-teal-300 select-none">
                    DP
                  </span>
                </div>

                <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 bg-white rounded-xl shadow-lg px-4 py-2.5 md:px-5 md:py-3.5 border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs md:text-sm text-navy-700 font-semibold">
                      MongoDB Expert
                    </span>
                  </div>
                </div>

                <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 bg-white rounded-xl shadow-lg px-4 py-2.5 md:px-5 md:py-3.5 border border-border">
                  <span className="text-xs md:text-sm text-navy-700 font-semibold">
                    20+ anos de experiência
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
