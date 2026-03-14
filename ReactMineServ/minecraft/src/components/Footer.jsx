export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid footer-grid--single">
        <div className="footer-column footer-brand-column">
          <h3>
            <span className="brand-ember">EMBER</span> <span className="brand-saga">SAGA</span>
          </h3>
          <p>
            Сервер для тех, кто любит долгую игру, государства, конфликты и атмосферный мир,
            в котором история создаётся самими игроками.
          </p>
        </div>
      </div>

      <div className="container footer-copy">
        <p>© 2026 Ember Saga. Не является официальным проектом Mojang.</p>
      </div>
    </footer>
  )
}