import { scrollToSelector } from '../utils/scroll'

const shootingStars = [
  {
    id: 'one',
    style: {
      '--star-top': '18%',
      '--star-left': '58%',
      '--star-delay': '0.9s',
      '--star-duration': '3.5s',
    },
  },
  {
    id: 'two',
    style: {
      '--star-top': '33%',
      '--star-left': '26%',
      '--star-delay': '3.2s',
      '--star-duration': '3.2s',
    },
  },
  {
    id: 'three',
    style: {
      '--star-top': '12%',
      '--star-left': '74%',
      '--star-delay': '5.6s',
      '--star-duration': '3.1s',
    },
  },
  {
    id: 'four',
    style: {
      '--star-top': '44%',
      '--star-left': '42%',
      '--star-delay': '7.8s',
      '--star-duration': '3.6s',
    },
  },
  {
    id: 'five',
    style: {
      '--star-top': '24%',
      '--star-left': '64%',
      '--star-delay': '10.4s',
      '--star-duration': '3.3s',
    },
  },
]

export default function Hero({ onJoinClick }) {
  const handleAnchorClick = (href) => (event) => {
    event.preventDefault()
    scrollToSelector(href)
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
        <p className="hero-subline">Свобода. Союзы. Сражения.</p>
        <p className="hero-text hero-text-centered">
          Мир, где государства строятся игроками, конфликты имеют последствия, а история сервера рождается прямо в игре.
        </p>

        <div className="hero-actions hero-actions-centered">
          <button type="button" className="btn hero-btn-primary" onClick={onJoinClick}>
            {'\u0418\u0433\u0440\u0430\u0442\u044c'}
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

        <a href="#history" className="hero-scroll-indicator" aria-label="\u041f\u0440\u043e\u043a\u0440\u0443\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u0437" onClick={handleAnchorClick('#history')}>
          ↓
        </a>
      </div>
    </section>
  )
}
