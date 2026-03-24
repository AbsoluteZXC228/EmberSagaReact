import { useEffect, useState } from 'react'
import serverLogo from '../Logo/logo.jpg'
import gameIcon from '../Logo/game.svg'
import { getHeaderOffset, getSectionTargetTop, scrollToSelector } from '../utils/scroll'

const iconNavItems = [
  { href: '#history', label: 'История', icon: 'icon-book', tone: 'ember' },
  { href: '#rules', label: 'Правила', icon: 'icon-shield', tone: 'violet' },
  { href: '#map', label: 'Карта', icon: 'icon-map', tone: 'sky' },
  { href: '#players', label: 'Игроки', icon: 'icon-players', tone: 'green' },
  { href: '#start', label: 'Начать', image: gameIcon, tone: 'violet' },
  { href: '#gallery', label: 'Галерея', icon: 'icon-gallery', tone: 'gold' },
]

const mobileNavItems = [
  { href: '#top', label: 'Главная' },
  ...iconNavItems,
]

function HeaderIconSprite() {
  return (
    <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg" hidden>
      <defs>
        <symbol id="icon-plus" viewBox="0 0 32 32">
          <path d="M32 14.4v3.2c0 0.8-0.64 1.44-1.44 1.44h-11.68v11.52c0 0.8-0.64 1.44-1.44 1.44h-3.040c-0.8 0-1.44-0.64-1.44-1.44v-11.52h-11.52c-0.8 0-1.44-1.44v-3.2c0-0.8 0.64-1.44 1.44-1.44h11.68v-11.52c-0.16-0.8 0.48-1.44 1.28-1.44h3.2c0.8 0 1.44 0.64 1.44 1.44v11.68h11.68c0.64-0.16 1.28 0.48 1.28 1.28z" />
        </symbol>
        <symbol id="icon-book" viewBox="0 0 32 32">
          <path d="M6 4.5A3.5 3.5 0 0 1 9.5 1H27v24.5H9.5A3.5 3.5 0 0 0 6 29V4.5z" />
          <path d="M5 5h2v24H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm5-2h15v20H10a5 5 0 0 0-3 1V8a5 5 0 0 1 3-5z" />
          <path d="M11 8h10v2H11zm0 5h10v2H11zm0 5h7v2h-7z" />
        </symbol>
        <symbol id="icon-shield" viewBox="0 0 32 32">
          <path d="M16 2l10 4v7c0 8-4.9 13.4-10 17-5.1-3.6-10-9-10-17V6l10-4z" />
          <path d="M16 5.1l-7 2.8V13c0 5.9 3.2 10.3 7 13.3 3.8-3 7-7.4 7-13.3V7.9l-7-2.8z" />
          <path d="M17.2 10v4.8H22v2.4h-4.8V22h-2.4v-4.8H10v-2.4h4.8V10z" />
        </symbol>
        <symbol id="icon-map" viewBox="0 0 32 32">
          <path d="M3 6.5l8-3 10 3 8-3v22l-8 3-10-3-8 3v-22z" />
          <path d="M11 3.5v22M21 6.5v22" />
          <path d="M18.6 10.6l2.8 2.8-5.2 6.8-4.9 1.3 1.3-4.9 6-6z" />
        </symbol>
        <symbol id="icon-players" viewBox="0 0 32 32">
          <path d="M11 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm10 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          <path d="M3 27c0-4.4 3.6-8 8-8s8 3.6 8 8H3zm14 0c0-3.3 2.7-6 6-6s6 2.7 6 6h-12z" />
        </symbol>
        <symbol id="icon-gallery" viewBox="0 0 32 32">
          <path d="M4 6h24v20H4z" />
          <path d="M7 22l5.5-6 4.5 4 3.5-3.5L25 22z" />
          <path d="M10 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </symbol>
        <symbol id="icon-search" viewBox="0 0 32 32">
          <path d="M30.56 28.64l-5.76-5.76c2.24-2.4 3.52-5.6 3.52-9.12 0-7.52-6.24-13.76-13.76-13.76s-13.76 6.24-13.76 13.76 6.24 13.76 13.76 13.76c2.72 0 5.12-0.8 7.36-2.080l6.080 6.080c0.32 0.32 0.8 0.48 1.28 0.48s0.96-0.16 1.28-0.48c0.8-0.8 0.8-2.080 0-2.88zM4.64 13.76c0-5.44 4.48-9.92 9.92-9.92s9.92 4.48 9.92 9.92-4.48 9.92-9.92 9.92-9.92-4.48-9.92-9.92z" />
        </symbol>
        <symbol id="icon-user" viewBox="0 0 32 32">
          <path d="M16 0.64c4.16 0 7.52 3.36 7.52 7.36 0 4.16-3.36 7.52-7.52 7.52s-7.36-3.36-7.36-7.52c-0.16-4 3.2-7.36 7.36-7.36zM16 2.56c-3.2 0-5.6 2.56-5.6 5.6s2.4 5.6 5.6 5.6 5.76-2.56 5.76-5.76-2.56-5.44-5.76-5.44z" />
          <path d="M16 16.32c-2.24 0-4.16-0.8-5.76-2.4s-2.4-3.68-2.4-5.76c0-2.24 0.8-4.16 2.4-5.76s3.52-2.4 5.76-2.4c4.48 0 8.16 3.68 8.16 8.16s-3.68 8.16-8.16 8.16zM16 1.44c-1.76 0-3.52 0.64-4.8 1.92s-1.92 3.040-1.92 4.8c0 1.76 0.64 3.52 1.92 4.8s2.88 1.92 4.8 1.92c3.84 0 6.72-3.040 6.72-6.72s-3.040-6.72-6.72-6.72zM16 14.56c-3.52 0-6.4-2.88-6.4-6.4 0-1.76 0.64-3.36 1.92-4.48s2.72-1.92 4.48-1.92c3.68 0 6.4 2.72 6.4 6.4 0 1.76-0.64 3.36-1.92 4.48-1.28 1.28-2.88 1.92-4.48 1.92zM16 3.2c-1.44 0-2.56 0.48-3.52 1.44s-1.44 2.080-1.44 3.52c0 2.72 2.24 4.96 4.96 4.96 1.28 0 2.56-0.48 3.52-1.44s1.44-2.24 1.44-3.52c0-2.72-2.24-4.96-4.96-4.96z" />
          <path d="M3.68 30.4c0 1.12-1.76 1.12-1.76 0v-3.68c0-4.64 3.84-8.48 8.48-8.48h11.36c4.64 0 8.48 3.84 8.48 8.48v3.68c0 1.12-1.76 1.12-1.76 0v-3.68c0-3.68-3.040-6.72-6.72-6.72h-11.36c-3.68 0-6.72 3.040-6.72 6.72v3.68z" />
        </symbol>
        <symbol id="icon-cup" viewBox="0 0 32 32">
          <path d="M28 4h-1.28v-2.72c0-0.8-0.64-1.28-1.28-1.28h-18.72c-0.8 0-1.44 0.64-1.44 1.28v2.72h-1.28c-2.24 0-4 1.76-4 4v1.28c0 2.24 1.76 4 4 4h1.76c0.8 3.2 3.2 5.92 6.24 7.2v3.52h-1.28c-2.24 0-4 1.76-4 4v2.72c0 0.64 0.48 1.28 1.28 1.28h16c0.8 0 1.28-0.64 1.28-1.28v-2.72c0-2.24-1.76-4-4-4h-1.28v-3.52c3.2-1.28 5.44-4 6.4-7.2h1.6c2.24 0 4-1.76 4-4v-1.28c0-2.24-1.76-4-4-4zM4 10.72c-0.8 0-1.28-0.64-1.28-1.44v-1.28c0-0.8 0.64-1.28 1.28-1.28h1.28v4h-1.28zM22.72 28v1.28h-13.44v-1.28c0-0.8 0.64-1.28 1.28-1.28h10.72c0.8 0 1.44 0.48 1.44 1.28zM17.28 24h-2.56v-2.72c0.96 0.16 1.76 0.16 2.72 0v2.72zM16 18.72c-4.48 0-8-3.52-8-8v-8h16v8c0 4.32-3.52 8-8 8zM29.28 9.28c0 0.8-0.64 1.28-1.28 1.28h-1.28v-3.84h1.28c0.8 0 1.28 0.64 1.28 1.28v1.28z" />
        </symbol>
        <symbol id="icon-home" viewBox="0 0 32 32">
          <path d="M16 4.48l12.48 9.92v14.080h-24.96v-14.080l12.48-9.92zM16 0.48l-15.52 12.48v18.72h31.040v-18.72l-15.52-12.48z" />
          <path d="M32 32h-32v-19.2l16-12.8 16 12.8v19.2zM0.8 31.2h30.4v-18.080l-15.2-12.16-15.2 12.16v18.080zM28.8 28.8h-25.6v-14.56l12.8-10.24 12.8 10.24v14.56zM4 28h24.16v-13.44l-12-9.6-12 9.6v13.44z" />
        </symbol>
      </defs>
    </svg>
  )
}

export default function Header({ onJoinClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(null)

  useEffect(() => {
    const updateActiveItem = () => {
      const sections = iconNavItems
        .map((item) => ({
          href: item.href,
          section: document.querySelector(item.href),
        }))
        .filter((item) => item.section)

      if (!sections.length) {
        setActiveHref(null)
        return
      }

      const firstSectionTop = getSectionTargetTop(sections[0].section)

      if (window.scrollY < Math.max(firstSectionTop - 80, 0)) {
        setActiveHref(null)
        return
      }

      const headerOffset = getHeaderOffset()
      const viewportAnchor = headerOffset + (window.innerHeight - headerOffset) * 0.35

      let closestHref = sections[0].href
      let closestDistance = Number.POSITIVE_INFINITY

      sections.forEach(({ href, section }) => {
        const rect = section.getBoundingClientRect()
        const sectionAnchor = rect.top + Math.min(rect.height * 0.35, 220)
        const distance = Math.abs(sectionAnchor - viewportAnchor)

        if (distance < closestDistance) {
          closestDistance = distance
          closestHref = href
        }
      })

      setActiveHref(closestHref)
    }

    updateActiveItem()
    window.addEventListener('scroll', updateActiveItem, { passive: true })
    window.addEventListener('resize', updateActiveItem)

    return () => {
      window.removeEventListener('scroll', updateActiveItem)
      window.removeEventListener('resize', updateActiveItem)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)
  const handleAnchorClick = (href) => (event) => {
    closeMenu()
    event.preventDefault()
    setActiveHref(href)
    scrollToSelector(href)
  }

  return (
    <header className="site-header">
      <HeaderIconSprite />

      <div className="container header-inner">
        <a href="#top" className="brand" onClick={handleAnchorClick('#top')}>
          <img src={serverLogo} alt="Логотип сервера Ember Saga" className="brand-logo" />
          <span className="brand-ember">EMBER</span> <span className="brand-saga">SAGA</span>
        </a>

        <nav className="header-icon-nav" aria-label="Главная навигация">
          <div className="header-icon-nav-shell">
            {iconNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`header-icon-item tone-${item.tone} ${activeHref === item.href ? 'header-icon-item-active' : ''}`}
                aria-label={item.label}
                title={item.label}
                onClick={handleAnchorClick(item.href)}
              >
                <span className="header-icon-circle">
                  {item.image ? (
                    <img src={item.image} alt="" className="header-nav-image-icon" aria-hidden="true" />
                  ) : (
                    <svg className="header-nav-icon" viewBox="0 0 32 32" aria-hidden="true">
                      <use href={`#${item.icon}`} />
                    </svg>
                  )}
                </span>
                <span className="header-icon-label">{item.label}</span>
                <span className="header-icon-indicator" aria-hidden="true"></span>
              </a>
            ))}
          </div>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="btn btn-small header-play-btn"
            onClick={() => {
              closeMenu()
              onJoinClick?.()
            }}
          >
            Играть
          </button>

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
        </div>

        <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
          {mobileNavItems.map((item) => (
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
            Играть
          </button>
        </nav>
      </div>
    </header>
  )
}
