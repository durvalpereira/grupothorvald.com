import ScrollReveal from './ScrollReveal'

export default function Quote() {
  return (
    <section className="py-20 md:py-32 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-teal-900)_0%,transparent_50%)] opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="mb-8">
            <svg
              className="w-12 h-12 text-teal-400 mx-auto opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-snug mb-10">
            Minha especialidade é conectar tecnologia com resultados
            financeiros. Cada negócio do grupo nasce dessa premissa.
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center">
              <span className="font-heading text-white text-lg">DP</span>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Durval Pereira</p>
              <p className="text-navy-300 text-sm">Fundador &amp; CEO</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
