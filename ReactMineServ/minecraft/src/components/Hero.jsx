const shootingStars = [
  {
    id: 'one',
    style: {
      '--star-top': '18%',
      '--star-left': '58%',
      '--star-delay': '1.1s',
      '--star-duration': '3.8s',
    },
  },
  {
    id: 'two',
    style: {
      '--star-top': '33%',
      '--star-left': '26%',
      '--star-delay': '4.5s',
      '--star-duration': '3.4s',
    },
  },
  {
    id: 'three',
    style: {
      '--star-top': '12%',
      '--star-left': '74%',
      '--star-delay': '8.2s',
      '--star-duration': '3.2s',
    },
  },
  {
    id: 'four',
    style: {
      '--star-top': '44%',
      '--star-left': '42%',
      '--star-delay': '12.6s',
      '--star-duration': '3.9s',
    },
  },
]

export default function Hero({ onJoinClick }) {
  const handleAnchorClick = (href) => (event) => {
    const target = document.querySelector(href)
    if (!target) {
      return
    }

    event.preventDefault()
    const header = document.querySelector('.site-header')
    const headerOffset = header ? header.offsetHeight : 0
    const top = Math.max(target.offsetTop - headerOffset, 0)

    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section id="top" className="hero hero-landing hero-cycle">
      <div className="hero-scene" aria-hidden="true">
        <div className="hero-sky hero-sky-night"></div>
        <div className="hero-sky hero-sky-dawn"></div>
        <div className="hero-sky hero-sky-day"></div>
        <div className="hero-sky hero-sky-sunset"></div>
        <div className="hero-horizon-glow"></div>
        <div className="hero-sky-glow hero-sky-glow-left"></div>
        <div className="hero-sky-glow hero-sky-glow-right"></div>
        <div className="hero-stars"></div>
        <div className="hero-starfall-field">
          {shootingStars.map((star) => (
            <span key={star.id} className="hero-starfall" style={star.style}></span>
          ))}
        </div>
        <div className="hero-cloud-band hero-cloud-band-one"></div>
        <div className="hero-cloud-band hero-cloud-band-two"></div>
        <div className="hero-sun"></div>
        <div className="hero-moon"></div>
      </div>
      <div className="hero-overlay"></div>

      <div className="container hero-content hero-centered hero-content-shell">
        <h1>
          <span className="brand-ember">EMBER</span> <span className="brand-saga">SAGA</span>
        </h1>
        <p className="hero-subline">Свобода. Политика. Ламповые войны.</p>
        <p className="hero-text hero-text-centered">
          Мир, где государства строятся игроками, конфликты имеют последствия, а история сервера рождается прямо в игре.
        </p>

        <div className="hero-actions hero-actions-centered">
          <button type="button" className="btn hero-btn-primary" onClick={onJoinClick}>
            Подать заявку
          </button>
          <a href="#map" className="btn hero-btn-secondary" onClick={handleAnchorClick('#map')}>
            Смотреть карту
          </a>
        </div>

        <div className="hero-promo-line" aria-label="Особенности сервера">
          <span>Whitelist</span>
          <span>Политика и лор</span>
          <span>Честный старт</span>
        </div>

        <a href="#about" className="hero-scroll-indicator" aria-label="Прокрутить вниз" onClick={handleAnchorClick('#about')}>
          ↓
        </a>
      </div>
    </section>
  )
}