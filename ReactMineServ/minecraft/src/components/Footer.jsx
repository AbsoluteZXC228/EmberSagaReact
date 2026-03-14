export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3><span className="brand-ember">EMBER</span> <span className="brand-saga">SAGA</span></h3>
          <p>
            Проект для тех, кто любит долгую игру, политику и атмосферу.
            Подключайся к сообществу и подавай заявку в вайтлист.
          </p>
        </div>

        <div>
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="https://t.me/DebustSoSo" target="_blank" rel="noreferrer">
                Telegram канал сервера
              </a>
            </li>
          </ul>
        </div>

        <div id="join">
          <h4>Как начать</h4>
          <ul>
            <li>Играть можно и с лицензии, и с пиратских лаунчеров.</li>
            <li>Чтобы начать играть на сервере, обязательно оставь заявку в нашем Telegram-канале (там находится бот).</li>
            <li>После одобрения заявки ты получишь доступ и сможешь сразу зайти на сервер.</li>
          </ul>
        </div>
      </div>

      <div className="container footer-copy">
        <p>© 2026 Ember Saga. Не является официальным проектом Mojang.</p>
      </div>
    </footer>
  )
}

