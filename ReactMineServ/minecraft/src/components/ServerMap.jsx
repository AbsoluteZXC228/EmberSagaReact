import mapBackdrop from '../Logo/about/Karta.png'

const mapHighlights = [
  'Города и столицы',
  'Маршруты и границы',
  'Игроки онлайн',
]

const dynmapUrl = '/map/'

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
                Живая карта мира с городами, дорогами, территориями и активностью игроков в реальном времени.
              </p>
            </div>

            <div className="map-meta-panel panel">
              <div className="map-meta-copy">
                <strong>Что видно на карте</strong>
                <p>Следи за государствами, дорогами, столицами и перемещением игроков без входа в сам мир.</p>
              </div>

              <div className="map-highlight-row" aria-label="Что можно отслеживать">
                {mapHighlights.map((item) => (
                  <span key={item} className="map-highlight-chip">{item}</span>
                ))}
              </div>

              <div className="map-actions">
                <a
                  href={dynmapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn map-open-btn"
                >
                  Открыть карту
                </a>
                <span className="map-note">Если встраивание не сработает, открой карту в отдельной вкладке.</span>
              </div>
            </div>
          </div>

          <div className="map-wrap panel">
            <iframe
              title="EmberSaga Dynmap"
              src={dynmapUrl}
              className="server-map-frame"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
