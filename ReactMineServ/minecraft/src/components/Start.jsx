import { useState } from 'react'

const SERVER_ADDRESS = 'debustember.gomc.me'

const startCards = [
  {
    number: '01',
    title: '\u041e\u0441\u0442\u0430\u0432\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u0432 Telegram',
    text: '\u041f\u0435\u0440\u0435\u0439\u0434\u0438 \u043a \u043d\u0430\u0448\u0435\u043c\u0443 Telegram-\u0431\u043e\u0442\u0443 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u0432\u0445\u043e\u0434.',
  },
  {
    number: '02',
    title: '\u0414\u043e\u0436\u0434\u0438\u0441\u044c \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u044f',
    text: '\u041f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0448\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u0438 \u0441\u043c\u043e\u0436\u0435\u0448\u044c \u0437\u0430\u0439\u0442\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440.',
  },
  {
    number: '03',
    title: '\u0417\u0430\u0445\u043e\u0434\u0438 \u0432 \u0438\u0433\u0440\u0443',
    text: '\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439 IP `debustember.gomc.me`, \u0432\u0435\u0440\u0441\u0438\u044e `1.21.11` \u0438 \u0437\u0430\u0445\u043e\u0434\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u043e\u0441\u043b\u0435 \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438.',
  },
]

export default function Start() {
  const [copyState, setCopyState] = useState('idle')

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_ADDRESS)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }

    window.setTimeout(() => {
      setCopyState('idle')
    }, 1800)
  }

  return (
    <section id="start" className="section start-section">
      <div className="container start-screen">
        <div className="section-heading start-heading start-heading-centered">
          <p className="eyebrow">{'\u041d\u0430\u0447\u0430\u0442\u044c'}</p>
          <h2>{'\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0441\u0442\u043e!'}</h2>
          <p className="rules-note">{'\u0412\u0441\u0435\u0433\u043e 3 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0448\u0430\u0433\u0430 \u0438 \u0442\u044b \u0443\u0436\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435.'}</p>
        </div>

        <div className="start-status-shell">
          <article className="start-status-card">
            <span className="start-status-kicker">{'IP-\u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:'}</span>

            <div className="start-status-main">
              <div className="start-ip-shell">
                <div className="start-ip-box">
                  <strong>{SERVER_ADDRESS}</strong>
                </div>
                <button type="button" className="start-copy-btn" onClick={handleCopyIp}>
                  {copyState === 'copied' ? '\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e!' : '\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c IP'}
                </button>
              </div>

              <div className="start-meta-line" aria-label={'\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f'}>
                <span>{'\u041e\u043d\u043b\u0430\u0439\u043d 24/7'}</span>
                <span>{'\u0412\u0435\u0440\u0441\u0438\u044f: 1.21.11'}</span>
                <span>{'\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 Telegram-\u0431\u043e\u0442\u0430'}</span>
              </div>
            </div>
          </article>
        </div>

        <div className="start-steps-grid">
          {startCards.map((card) => (
            <article key={card.number} className="start-step-card">
              <span className="start-step-number">{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className="start-actions">
          <a href="https://t.me/EmberSaga_bot" target="_blank" rel="noreferrer" className="btn start-cta-btn">
            {'\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0430\u0442\u044c \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441!'}
          </a>
        </div>
      </div>
    </section>
  )
}
