import mapBackdrop from '../Logo/about/Karta.png'

const mapHighlights = [
  'Города и столицы',
  'Маршруты и границы',
  'Игроки онлайн',
]

export default function ServerMap() {
  return (
    <section id="map" className="section section-alt map-section" style={{ '--map-bg': `url(${mapBackdrop})` }}>
      <div className="container">
        <div className="section-screen map-screen">
          <div className="map-intro-shell">
            <div className="section-heading map-heading">
              <p className="eyebrow">Онлайн-навигация</p>
              <h2>Карта сервера</h2>
              <p className="rules-note">
                Живая карта мира: города, маршруты, ключевые территории и активность игроков в реальном времени.
              </p>
            </div>

            <div className="map-meta-panel panel">
              <div className="map-meta-copy">
                <strong>Что видно на карте</strong>
                <p>Следи за государствами, дорогами, столицами и передвижением игроков без входа в сам мир.</p>
              </div>

              <div className="map-highlight-row" aria-label="Что можно отслеживать">
                {mapHighlights.map((item) => (
                  <span key={item} className="map-highlight-chip">{item}</span>
                ))}
              </div>

              <div className="map-actions">
                <a
                  href="http://213.171.18.207:32826/#"
                  target="_blank"
                  rel="noreferrer"
                  className="btn map-open-btn"
                >
                  Открыть карту
                </a>
                <span className="map-note">Лучше всего работает на десктопе в отдельной вкладке.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
