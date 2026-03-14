const shootingStars = [
  {
    id: 'one',
    style: {
      '--star-top': '18%',
      '--star-left': '58%',
      '--star-delay': '1.2s',
      '--star-duration': '8.6s',
    },
  },
  {
    id: 'two',
    style: {
      '--star-top': '34%',
      '--star-left': '26%',
      '--star-delay': '3.8s',
      '--star-duration': '10.4s',
    },
  },
  {
    id: 'three',
    style: {
      '--star-top': '12%',
      '--star-left': '74%',
      '--star-delay': '6.1s',
      '--star-duration': '11.8s',
    },
  },
  {
    id: 'four',
    style: {
      '--star-top': '48%',
      '--star-left': '42%',
      '--star-delay': '8.7s',
      '--star-duration': '12.6s',
    },
  },
]

export default function Hero({ onJoinClick }) {
  return (
    <section id="top" className="hero hero-landing">
      <div className="hero-scene" aria-hidden="true">
        <div className="hero-sky-glow hero-sky-glow-left"></div>
        <div className="hero-sky-glow hero-sky-glow-right"></div>
        <div className="hero-stars"></div>
        <div className="hero-starfall-field">
          {shootingStars.map((star) => (
            <span key={star.id} className="hero-starfall" style={star.style}></span>
          ))}
        </div>
        <div className="hero-moon"></div>
      </div>
      <div className="hero-overlay"></div>

      <div className="container hero-content hero-centered">
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
          <a href="#map" className="btn hero-btn-secondary">
            Смотреть карту
          </a>
        </div>

        <div className="hero-promo-line" aria-label="Особенности сервера">
          <span>Whitelist</span>
          <span>Политика и лор</span>
          <span>Честный старт</span>
        </div>

        <a href="#about" className="hero-scroll-indicator" aria-label="Прокрутить вниз">
          ↓
        </a>
      </div>
    </section>
  )
}
