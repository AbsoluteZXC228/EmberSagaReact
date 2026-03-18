import { useState } from 'react'
import serverLogo from '../Logo/logo.jpg'
import { scrollToSelector } from '../utils/scroll'

const navItems = [
  { href: '#about', label: 'О сервере' },
  { href: '#history', label: 'История сервера' },
  { href: '#rules', label: 'Правила' },
  { href: '#map', label: 'Карта сервера' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contact', label: 'Контакты' },
]

const navItemsWithPlayers = [
  ...navItems.slice(0, 4),
  { href: '#start', label: '\u041d\u0430\u0447\u0430\u0442\u044c' },
  { href: '#players', label: '\u0418\u0433\u0440\u043e\u043a\u0438' },
  ...navItems.slice(4),
]

export default function Header({ onJoinClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  const handleAnchorClick = (href) => (event) => {
    closeMenu()
    event.preventDefault()
    scrollToSelector(href)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={handleAnchorClick('#top')}>
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
          {navItemsWithPlayers.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" onClick={handleAnchorClick(item.href)}>
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
