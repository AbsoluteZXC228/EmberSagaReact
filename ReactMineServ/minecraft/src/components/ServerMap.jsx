export default function ServerMap() {
  return (
    <section id="map" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Онлайн-навигация</p>
          <h2>Карта сервера</h2>
          <p className="rules-note">
            Живая карта мира: города, маршруты, ключевые территории и активность игроков в реальном времени.
          </p>
        </div>

        <div className="map-wrap panel">
          <iframe
            src="http://213.171.18.207:32826/#"
            title="Карта мира сервера"
            loading="lazy"
            className="server-map-frame"
            referrerPolicy="no-referrer"
          />
        </div>

        <a
          href="http://213.171.18.207:32826/#"
          target="_blank"
          rel="noreferrer"
          className="btn map-open-btn"
        >
          Открыть карту в новой вкладке
        </a>
      </div>
    </section>
  )
}
