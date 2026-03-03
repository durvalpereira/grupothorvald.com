import { Mail, MessageCircle, Linkedin, ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const contactLinks = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    description: 'Resposta em até 24h',
    href: 'https://wa.me/5582999215896?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Grupo%20Thorvald.',
  },
  {
    icon: Mail,
    label: 'E-mail',
    description: 'contato@grupothorvald.com',
    href: 'mailto:contato@grupothorvald.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    description: 'Durval Pereira',
    href: 'https://linkedin.com/in/durvalpereira',
  },
]

export default function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <ScrollReveal>
              <p className="text-teal-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                Contato
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl text-navy-800 mb-6 leading-tight">
                Parcerias &amp;
                <br />
                Oportunidades
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-navy-400 text-lg leading-relaxed max-w-lg">
                Estamos abertos a parcerias estratégicas, investimentos e novos
                negócios. Se você busca um parceiro com visão de longo prazo e
                expertise técnica, vamos conversar.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => (
              <ScrollReveal key={link.label} delay={i * 100}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 bg-white rounded-xl border border-border p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                    <link.icon size={22} className="text-teal-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-navy-800 font-semibold group-hover:text-teal-700 transition-colors">
                      {link.label}
                    </p>
                    <p className="text-navy-400 text-sm">{link.description}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-navy-300 group-hover:text-teal-500 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
