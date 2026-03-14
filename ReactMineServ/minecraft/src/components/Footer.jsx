const focusItems = ['Политический мир', 'Whitelist-доступ', 'Живая история игроков']

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div className="footer-column footer-brand-column">
          <h3><span className="brand-ember">EMBER</span> <span className="brand-saga">SAGA</span></h3>
          <p>
            Сервер для тех, кто любит долгую игру, государства, конфликты и атмосферный мир,
            в котором история создаётся самими игроками.
          </p>
        </div>

        <div className="footer-column">
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="https://t.me/DebustSoSo" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Фокус</h4>
          <ul>
            {focusItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-copy">
        <p>© 2026 Ember Saga. Не является официальным проектом Mojang.</p>
      </div>
    </footer>
  )
}