'use client'

import { useEffect, useState } from 'react'
import { Building2, User, Mail } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Anos de história' },
  { value: '10+', label: 'Empresas no portfólio' },
  { value: '6', label: 'Continentes' },
  { value: '100+', label: 'Projetos entregues' },
]

const quickLinks = [
  { icon: Building2, label: 'empresas', href: '#empresas' },
  { icon: User, label: 'liderança', href: '#lideranca' },
  { icon: Mail, label: 'contato', href: '#contato' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center bg-white px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div
        className={`relative max-w-7xl mx-auto w-full rounded-[2rem] overflow-hidden bg-[linear-gradient(135deg,var(--color-navy-900)_0%,var(--color-teal-900)_30%,var(--color-teal-600)_65%,var(--color-teal-400)_100%)] shadow-2xl transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)]" />

        <div className="relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-12 p-7 sm:p-10 md:p-12 lg:p-16">
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div
              className={`transition-all duration-700 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8 border border-white/10">
                ✦ Conglomerado de Empresas
              </span>
            </div>

            <div
              className={`transition-all duration-700 delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h1 className="font-heading text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
                Tecnologia, educação{' '}
                <span className="md:block text-teal-200">&amp; inovação</span>
              </h1>
            </div>

            <div
              className={`transition-all duration-700 delay-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-white/65 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                Conectando visão empreendedora e excelência técnica para
                construir negócios que geram resultados reais.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-[900ms] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#empresas"
                className="inline-flex items-center bg-white text-navy-800 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Conheça nossas empresas
              </a>
              <a
                href="#contato"
                className="inline-flex items-center border border-white/25 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Fale conosco
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4 justify-center">
            <div
              className={`bg-navy-900/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition-all duration-700 delay-[600ms] ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-teal-300 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Sobre o nome
              </p>
              <p className="text-white font-heading text-xl sm:text-2xl leading-snug mb-3">
                Thorvald
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Do nórdico antigo, significa{' '}
                <span className="text-teal-300 font-semibold">
                  &ldquo;Regente de Thor na Terra&rdquo;
                </span>
                . É a origem etimológica do nome Durval — força, liderança e
                presença em cada empresa do grupo.
              </p>
              <div className="w-10 h-0.5 bg-teal-400/50" />
            </div>

            <div
              className={`grid grid-cols-3 gap-3 transition-all duration-700 delay-[800ms] ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl py-4 border border-white/10 transition-all duration-200"
                >
                  <link.icon size={20} className="text-teal-300" />
                  <span className="text-white/60 text-xs font-medium">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`max-w-7xl mx-auto w-full px-2 sm:px-6 lg:px-8 pt-10 md:pt-14 transition-all duration-700 delay-[1100ms] ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
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
    </section>
  )
}
