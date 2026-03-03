import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface Company {
  name: string
  description: string
  segment: string
  url: string | null
  status: 'active' | 'exit'
  icon: string
  featured?: boolean
}

const companies: Company[] = [
  {
    name: 'Bigu Tech',
    description:
      'Software house com clientes em 6 continentes. Desenvolvimento de sistemas e soluções digitais inteligentes para negócios de todos os tamanhos.',
    segment: 'Tecnologia',
    url: 'https://bigutech.com.br',
    status: 'active',
    icon: '💻',
    featured: true,
  },
  {
    name: 'Sua Carreira Tech',
    description:
      'Programa de mentoria para profissionais de tecnologia que querem ir além do código e construir carreiras e negócios rentáveis.',
    segment: 'Educação',
    url: 'https://suacarreiratech.com.br',
    status: 'active',
    icon: '🎓',
    featured: true,
  },
  {
    name: 'Hostu',
    description:
      'Hospedagem web e cloud computing para empresas de todos os tamanhos.',
    segment: 'Infraestrutura',
    url: 'https://hostu.info',
    status: 'active',
    icon: '☁️',
  },
  {
    name: 'Geral.ink',
    description:
      'Plataforma de links e cartão digital de visitas para profissionais e empresas.',
    segment: 'SaaS',
    url: 'https://geral.ink',
    status: 'active',
    icon: '🔗',
  },
  {
    name: 'QuantoGastei',
    description:
      'Startup de finanças pessoais premiada pelo Inovativa Brasil e Samsung. +R$400k em investimento.',
    segment: 'Fintech',
    url: null,
    status: 'exit',
    icon: '💰',
  },
  {
    name: 'Outras Participações',
    description:
      'Sociedades minoritárias em negócios físicos no Nordeste: suplementos, gastronomia, automotivo e mais.',
    segment: 'Diversificado',
    url: null,
    status: 'active',
    icon: '🏢',
  },
]

export default function Portfolio() {
  const featured = companies.filter((c) => c.featured)
  const others = companies.filter((c) => !c.featured)

  return (
    <section id="empresas" className="py-24 md:py-32 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-teal-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Portfólio
          </p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <ScrollReveal delay={100}>
            <h2 className="font-heading text-4xl md:text-5xl text-navy-800">
              Nossas Empresas
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-navy-400 text-lg max-w-lg">
              Negócios em diferentes setores, unidos pela visão de usar
              tecnologia como motor de crescimento.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((company, i) => (
            <ScrollReveal key={company.name} delay={i * 100}>
              <FeaturedCard company={company} />
            </ScrollReveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((company, i) => (
            <ScrollReveal key={company.name} delay={i * 100}>
              <CompactCard company={company} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ company }: { company: Company }) {
  const content = (
    <div className="group h-full bg-white rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-teal-300 hover:-translate-y-1">
      <div className="h-1.5 bg-teal-500" />
      <div className="p-6 md:p-8 lg:p-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{company.icon}</span>
            <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wide">
              {company.segment}
            </span>
          </div>
          {company.url && (
            <ArrowUpRight
              size={20}
              className="text-navy-300 group-hover:text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          )}
        </div>

        <h3 className="font-heading text-2xl md:text-3xl text-navy-800 mb-3 group-hover:text-teal-700 transition-colors">
          {company.name}
        </h3>

        <p className="text-navy-400 leading-relaxed">{company.description}</p>
      </div>
    </div>
  )

  if (company.url) {
    return (
      <a href={company.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    )
  }
  return content
}

function CompactCard({ company }: { company: Company }) {
  const content = (
    <div className="group h-full bg-white rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:border-teal-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{company.icon}</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold text-navy-300 uppercase tracking-wider">
            {company.segment}
          </span>
          {company.status === 'exit' && (
            <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full uppercase">
              Exit
            </span>
          )}
        </div>
      </div>

      <h3 className="font-heading text-xl text-navy-800 mb-2 group-hover:text-teal-700 transition-colors">
        {company.name}
      </h3>

      <p className="text-navy-400 text-sm leading-relaxed">
        {company.description}
      </p>

      {company.url && (
        <div className="flex items-center gap-1 text-teal-600 text-sm font-medium mt-4">
          Visitar
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </div>
      )}
    </div>
  )

  if (company.url) {
    return (
      <a href={company.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    )
  }
  return <div className="h-full">{content}</div>
}
