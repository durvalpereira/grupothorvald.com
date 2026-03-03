import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface Company {
  name: string
  description: string
  segment: string
  url: string | null
  status: 'active' | 'exit'
  emoji: string
  gradient: string
  className: string
}

const companies: Company[] = [
  {
    name: 'Bigu Tech',
    description:
      'Software house com clientes em 6 continentes. Sistemas e soluções digitais inteligentes.',
    segment: 'Tecnologia',
    url: 'https://bigutech.com.br',
    status: 'active',
    emoji: '💻',
    gradient: 'bg-[linear-gradient(135deg,#0C4339_0%,var(--color-teal-700)_50%,var(--color-teal-500)_100%)]',
    className: 'col-span-2 row-span-2',
  },
  {
    name: 'Sua Carreira Tech',
    description:
      'Mentoria para profissionais tech que querem ir além do código.',
    segment: 'Educação',
    url: 'https://suacarreiratech.com.br',
    status: 'active',
    emoji: '🎓',
    gradient: 'bg-[linear-gradient(135deg,var(--color-navy-800)_0%,#1a3a5c_50%,var(--color-teal-800)_100%)]',
    className: 'col-span-2',
  },
  {
    name: 'Hostu',
    description: 'Hospedagem web e cloud computing.',
    segment: 'Infraestrutura',
    url: 'https://hostu.info',
    status: 'active',
    emoji: '☁️',
    gradient: 'bg-[linear-gradient(135deg,var(--color-teal-600)_0%,var(--color-teal-400)_100%)]',
    className: '',
  },
  {
    name: 'Geral.ink',
    description: 'Links e cartão digital de visitas.',
    segment: 'SaaS',
    url: 'https://geral.ink',
    status: 'active',
    emoji: '🔗',
    gradient: 'bg-[linear-gradient(135deg,var(--color-teal-800)_0%,var(--color-teal-600)_100%)]',
    className: '',
  },
  {
    name: 'QuantoGastei',
    description:
      'Startup premiada pelo Inovativa Brasil e Samsung. +R$400k captados.',
    segment: 'Fintech',
    url: null,
    status: 'exit',
    emoji: '💰',
    gradient: 'bg-[linear-gradient(135deg,var(--color-navy-900)_0%,var(--color-navy-800)_50%,#1a3050_100%)]',
    className: 'md:col-span-2',
  },
  {
    name: 'Outras Participações',
    description:
      'Sociedades em negócios físicos no Nordeste: suplementos, gastronomia e mais.',
    segment: 'Diversificado',
    url: null,
    status: 'active',
    emoji: '🏢',
    gradient: 'bg-[linear-gradient(135deg,var(--color-teal-700)_0%,var(--color-teal-500)_100%)]',
    className: 'md:col-span-2',
  },
]

export default function Portfolio() {
  return (
    <section id="empresas" className="py-24 md:py-32 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-teal-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Portfólio
          </p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <ScrollReveal delay={100}>
            <h2 className="font-heading text-4xl md:text-5xl text-navy-800">
              Nossas Empresas
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-navy-400 text-lg max-w-md">
              Negócios em diferentes setores, unidos por tecnologia como motor
              de crescimento.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[170px] md:auto-rows-[190px] gap-3 md:gap-4">
            {companies.map((company) => (
              <BentoCard key={company.name} company={company} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function BentoCard({ company }: { company: Company }) {
  const isLarge = company.className.includes('row-span-2')

  const inner = (
    <>
      <span className="absolute -bottom-6 -right-4 text-[7rem] sm:text-[8rem] leading-none opacity-[0.08] select-none pointer-events-none">
        {company.emoji}
      </span>

      <div className="relative z-10 flex items-start justify-between">
        <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full border border-white/10">
          {company.segment}
        </span>
        <div className="flex items-center gap-2">
          {company.status === 'exit' && (
            <span className="bg-white/10 text-white/70 text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full">
              Exit
            </span>
          )}
          {company.url && (
            <ArrowUpRight
              size={16}
              className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          )}
        </div>
      </div>

      <div className="relative z-10">
        <h3
          className={`font-heading text-white mb-1 ${
            isLarge
              ? 'text-2xl sm:text-3xl md:text-4xl'
              : 'text-lg sm:text-xl md:text-2xl'
          }`}
        >
          {company.name}
        </h3>
        <p
          className={`text-white/55 leading-relaxed ${
            isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
          }`}
        >
          {company.description}
        </p>
      </div>
    </>
  )

  const cardClasses = `group relative h-full overflow-hidden rounded-2xl ${company.gradient} p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 ${company.className}`

  if (company.url) {
    return (
      <a
        href={company.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {inner}
      </a>
    )
  }

  return <div className={cardClasses}>{inner}</div>
}
