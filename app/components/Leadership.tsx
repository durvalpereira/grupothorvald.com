import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Leadership() {
  return (
    <section id="lideranca" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <Image
                src="/durval-sobre.jpg"
                alt="Durval Pereira — Fundador do Grupo Thorvald"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-teal-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                Fundação
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl text-navy-800 mb-2">
                Durval Pereira
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-teal-600 text-sm font-semibold uppercase tracking-wide mb-8">
                Fundador &amp; CEO
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-navy-500 text-lg leading-relaxed mb-10">
                Cientista da Computação com mais de 20 anos de experiência em
                tecnologia, negócios e liderança. Todas as informações sobre o
                fundador estão no site pessoal.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <a
                href="https://durvalpereira.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy-800 text-white px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-navy-700 transition-colors"
              >
                Conheça o fundador
                <ArrowUpRight size={16} />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
