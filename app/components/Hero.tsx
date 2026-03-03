'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '20+', label: 'Anos de história' },
  { value: '10+', label: 'Empresas no portfólio' },
  { value: '6', label: 'Continentes' },
  { value: '100+', label: 'Projetos entregues' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-teal-500" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-teal-50)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-12 w-full">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-teal-600 text-sm font-semibold tracking-[0.25em] uppercase mb-8">
              Grupo Thorvald
            </p>
          </div>

          <div
            className={`transition-all duration-700 ease-out delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-navy-800 leading-[1.08] mb-8">
              Tecnologia, educação{' '}
              <span className="md:block text-teal-600">&amp; inovação</span>
            </h1>
          </div>

          <div
            className={`transition-all duration-700 ease-out delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-navy-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Um conglomerado de empresas fundado por Durval Pereira, conectando
              visão empreendedora e excelência técnica para construir negócios
              que geram resultados reais.
            </p>
          </div>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ease-out delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#empresas"
              className="inline-flex items-center bg-teal-600 text-white px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-teal-500 transition-colors duration-200"
            >
              Conheça nossas empresas
            </a>
            <a
              href="#contato"
              className="inline-flex items-center border border-navy-200 text-navy-700 px-7 py-3.5 rounded-lg text-sm font-semibold hover:border-teal-400 hover:text-teal-700 transition-colors duration-200"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 mt-auto border-t border-border bg-white/60 backdrop-blur-sm transition-all duration-700 ease-out delay-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl sm:text-4xl md:text-5xl text-teal-600 mb-1">
                  {stat.value}
                </p>
                <p className="text-navy-400 text-xs font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
