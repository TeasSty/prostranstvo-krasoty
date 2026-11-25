import { asset } from '../lib/asset'

const links = [
  { href: '#crafts', label: 'Ремесла' },
  { href: '#doubleshift', label: '#doubleshift' },
  { href: '#works', label: 'Работы' },
  { href: '#learn', label: 'Обучение' },
  { href: '#book', label: 'Запись' },
]

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Пространство красоты — наверх">
        <img
          className="brand-logo"
          src={asset('images/logo.jpg')}
          alt="Karasiova_hair — Пространство красоты"
          width={320}
          height={128}
        />
      </a>
      <nav className="site-nav" aria-label="Разделы">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a
        className="btn btn-copper btn-compact"
        href="https://vk.ru/beautifulhair111"
        target="_blank"
        rel="noreferrer"
      >
        Написать
      </a>
    </header>
  )
}
