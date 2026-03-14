import siteHeroVideo from '../Logo/fon/FonZ.mp4'

export default function Hero({ onJoinClick }) {
  return (
    <section id="top" className="hero hero-landing">
      <video className="hero-bg-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src={siteHeroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="container hero-content hero-centered">
        <h1>
          <span className="brand-ember">EMBER</span> <span className="brand-saga">SAGA</span>
        </h1>
        <p className="hero-subline">Свобода. Политика. Ламповые войны.</p>

        <div className="hero-actions hero-actions-centered">
          <button type="button" className="btn hero-btn-primary" onClick={onJoinClick}>
            Подать заявку
          </button>
          <a href="#map" className="btn hero-btn-secondary">
            Смотреть карту
          </a>
        </div>

        <a href="#about" className="hero-scroll-indicator" aria-label="Прокрутить вниз">
          ↓
        </a>
      </div>
    </section>
  )
}

