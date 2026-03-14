import { useState } from 'react'
import serverLogo from '../Logo/logo.jpg'

const navItems = [
  { href: '#about', label: 'О сервере' },
  { href: '#history', label: 'История сервера' },
  { href: '#rules', label: 'Правила' },
  { href: '#map', label: 'Карта сервера' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contact', label: 'Контакты' },
]

export default function Header({ onJoinClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={closeMenu}>
          <img src={serverLogo} alt="Логотип сервера Ember Saga" className="brand-logo" />
          <span className="brand-ember">EMBER</span> <span className="brand-saga">SAGA</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-small"
            onClick={() => {
              closeMenu()
              onJoinClick?.()
            }}
          >
            Подать заявку
          </button>
        </nav>
      </div>
    </header>
  )
}
