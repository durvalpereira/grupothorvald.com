import { TrendingUp, Cpu, Target } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const principles = [
  {
    number: '01',
    icon: TrendingUp,
    title: 'Visão de Longo Prazo',
    description:
      'Medimos sucesso em décadas, não em trimestres. Investimos em negócios que constroem valor duradouro e transcendem ciclos de mercado.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Tecnologia como Motor',
    description:
      'Cada empresa do grupo utiliza tecnologia de forma estratégica — não como fim, mas como instrumento de transformação e geração de resultados financeiros.',
  },
  {
    number: '03',
    icon: Target,
    title: 'Excelência & Execução',
    description:
      'Combinamos visão empreendedora com rigor operacional. Do MVP ao produto escalável, entregamos com qualidade e velocidade.',
  },
]

export default function Principles() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-teal-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Nossos Princípios
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-heading text-4xl md:text-5xl text-navy-800 mb-6">
            O que nos guia
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-navy-400 text-lg max-w-2xl mb-16">
            Valores que orientam cada decisão, cada investimento e cada parceria
            do Grupo Thorvald.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {principles.map((principle, i) => (
            <ScrollReveal key={principle.number} delay={i * 150}>
              <div className="group relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-heading text-5xl text-teal-200 leading-none select-none">
                    {principle.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <principle.icon size={20} className="text-teal-600" />
                  </div>
                </div>

                <h3 className="font-heading text-2xl text-navy-800 mb-4">
                  {principle.title}
                </h3>

                <p className="text-navy-400 leading-relaxed">
                  {principle.description}
                </p>

                <div className="mt-6 w-12 h-0.5 bg-teal-400 group-hover:w-20 transition-all duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
