import Image from 'next/image'

const links = [
  { label: 'O Grupo', href: '#sobre' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Liderança', href: '#lideranca' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-thorvald.png"
              alt="Grupo Thorvald"
              width={120}
              height={35}
              className="h-8 w-auto brightness-0 invert opacity-60"
            />
            <p className="text-navy-400 text-sm max-w-xs">
              Tecnologia, educação e inovação conectadas com resultados reais de
              negócio.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy-400 text-sm hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-navy-800">
          <p className="text-navy-500 text-xs">
            &copy; {new Date().getFullYear()} Grupo Thorvald LTDA. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
