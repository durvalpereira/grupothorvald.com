'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    question: 'O que é o Grupo Thorvald?',
    answer:
      'O Grupo Thorvald é um conglomerado de empresas fundado por Durval Pereira que une tecnologia, educação e inovação. Atuamos como holding de negócios digitais e físicos, conectando expertise técnica com resultados financeiros reais.',
  },
  {
    question: 'Quais empresas fazem parte do grupo?',
    answer:
      'Atualmente o portfólio inclui Bigu Tech (software house), Sua Carreira Tech (mentoria para profissionais de tecnologia), Hostu (hospedagem e cloud), Geral.ink (links e cartão digital), além de participações em negócios físicos no Nordeste. O QuantoGastei, startup premiada pelo Inovativa Brasil e Samsung, fez parte do grupo como exit.',
  },
  {
    question: 'O grupo aceita investidores ou parceiros?',
    answer:
      'Sim. Estamos abertos a parcerias estratégicas, investimentos e co-fundação de novos negócios. Buscamos parceiros alinhados com nossa visão de longo prazo e que entendam o papel da tecnologia como motor de crescimento.',
  },
  {
    question: 'Qual é a relação entre as empresas do grupo?',
    answer:
      'Cada empresa opera de forma independente com seu próprio posicionamento e equipe, mas todas compartilham a infraestrutura, conhecimento técnico e visão estratégica do grupo. Isso gera sinergias em tecnologia, marketing e operações.',
  },
  {
    question: 'O que significa "Thorvald"?',
    answer:
      'Thorvald vem do nórdico antigo e significa "Regente de Thor na Terra" — é a origem etimológica do nome Durval. Escolhemos esse nome para representar força, liderança e herança do fundador.',
  },
  {
    question: 'Como entrar em contato?',
    answer:
      'Você pode nos contatar pelo e-mail contato@grupothorvald.com, pelo WhatsApp ou pelo LinkedIn do fundador. Na seção de contato do site você encontra todos os canais disponíveis.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-teal-900)_0%,transparent_50%)] opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-navy-300 text-lg">
              Tudo o que você precisa saber sobre o Grupo Thorvald
            </p>
          </div>
        </ScrollReveal>

        <div className="divide-y divide-white/10">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div>
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                >
                  <span className="font-semibold text-white text-base sm:text-lg pr-8 group-hover:text-teal-300 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-white/40 shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-teal-400' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-navy-300 leading-relaxed pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
