'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#sobre', label: 'O Grupo' },
  { href: '#empresas', label: 'Empresas' },
  { href: '#lideranca', label: 'Liderança' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo-thorvald.png"
            alt="Grupo Thorvald"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-600 hover:text-teal-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-navy-800 p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col px-6 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-navy-700 hover:text-teal-600 py-3.5 text-sm font-medium transition-colors border-b border-border/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
