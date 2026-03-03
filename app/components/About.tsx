import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-teal-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                O Grupo
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl text-navy-800 leading-tight mb-10">
                Construindo negócios
                <br />
                que geram valor
              </h2>
            </ScrollReveal>

            <div className="space-y-6 text-navy-500 text-lg leading-relaxed">
              <ScrollReveal delay={200}>
                <p>
                  O Grupo Thorvald é um conglomerado de empresas com atuação nos
                  setores de tecnologia, educação, infraestrutura digital e
                  outros segmentos estratégicos.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p>
                  Com mais de duas décadas de experiência no mercado e presença
                  em 6 continentes, unimos visão empreendedora e excelência
                  técnica para construir negócios que geram impacto real e
                  resultados financeiros sustentáveis.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p>
                  Nossa missão é investir e desenvolver empresas que usam
                  tecnologia como motor de transformação — conectando inovação
                  com geração de valor.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="lg:col-span-2 flex items-center">
            <ScrollReveal delay={200}>
              <div className="relative pl-8 border-l-2 border-teal-400">
                <p className="font-heading text-2xl md:text-3xl text-navy-800 leading-snug mb-4">
                  &ldquo;Thorvald&rdquo;
                </p>
                <p className="text-navy-500 leading-relaxed mb-3">
                  Do nórdico antigo, significa{' '}
                  <span className="text-teal-600 font-semibold">
                    Regente de Thor na Terra
                  </span>
                  . É também a origem etimológica do nome{' '}
                  <span className="font-semibold text-navy-700">Durval</span>.
                </p>
                <p className="text-navy-400 text-sm">
                  O nome carrega a ideia de força, liderança e presença —
                  valores que guiam cada empresa do grupo.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
