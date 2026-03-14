export default function Hero({ onJoinClick }) {
  return (
    <section id="top" className="hero hero-landing">
      <div className="hero-scene" aria-hidden="true">
        <div className="hero-sky-glow hero-sky-glow-left"></div>
        <div className="hero-sky-glow hero-sky-glow-right"></div>
        <div className="hero-nebula hero-nebula-top"></div>
        <div className="hero-nebula hero-nebula-bottom"></div>
        <div className="hero-stars"></div>
        <div className="hero-clouds"></div>
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
