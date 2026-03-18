import discordIcon from '../Logo/messanger/icons8-discord-50.png'
import telegramIcon from '../Logo/messanger/icons8-telegram-50.png'
import tiktokIcon from '../Logo/messanger/icons8-tik-tok-50.png'
import serverLogo from '../Logo/logo.jpg'
import privacyPolicyFile from '../documents/PK.txt'
import userAgreementFile from '../documents/PS.txt'

export default function FooterShowcase() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-showcase">
        <div className="footer-showcase-grid">
          <div className="footer-column footer-brand-column">
            <div className="footer-brand-badge">
              <img src={serverLogo} alt="" className="footer-brand-logo" />
            </div>
            <h3>
              <span className="brand-ember">EMBER</span> <span className="brand-saga">SAGA</span>
            </h3>
            <p>
              {
                '\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0441 \u0436\u0438\u0432\u044b\u043c \u043c\u0438\u0440\u043e\u043c, \u0438\u0441\u0442\u043e\u0440\u0438\u0435\u0439 \u0438 \u0447\u0435\u0441\u0442\u043d\u044b\u043c \u0441\u0442\u0430\u0440\u0442\u043e\u043c.'
              }
            </p>
            <p>
              <a href="https://www.donationalerts.com/r/absolutezxc228" target="_blank" rel="noreferrer">
                {'\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440'}
              </a>
            </p>
            <p className="footer-love-line">{'\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0441 \u0437\u0430\u0431\u043e\u0442\u043e\u0439 \u0434\u043b\u044f \u0438\u0433\u0440\u043e\u043a\u043e\u0432'}</p>
          </div>

          <div className="footer-column footer-social-column">
            <h4>{'\u041c\u044b \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445'}</h4>
            <p>{'\u0421\u043b\u0435\u0434\u0438 \u0437\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c\u0438, \u0437\u0430\u044f\u0432\u043a\u0430\u043c\u0438 \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438.'}</p>
            <div className="footer-socials">
              <a href="https://t.me/DebustSoSo" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Telegram channel">
                <img src={telegramIcon} alt="" className="footer-social-icon" />
              </a>
              <a href="https://www.tiktok.com/@wwsenseless" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="TikTok">
                <img src={tiktokIcon} alt="" className="footer-social-icon" />
              </a>
              <a href="https://discord.gg/4yAcJqubPJ" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Discord server">
                <img src={discordIcon} alt="" className="footer-social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-copy footer-copy-showcase">
        <div className="footer-copy-row">
          <p>{'\u00a9 2026 Ember Saga. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.'}</p>
          <p>
            <a href={userAgreementFile} target="_blank" rel="noreferrer">
              {'\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435'}
            </a>
          </p>
        </div>
        <div className="footer-copy-row">
          <p>{'\u041d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d \u0441 Mojang AB \u0438\u043b\u0438 Microsoft.'}</p>
          <p>
            <a href={privacyPolicyFile} target="_blank" rel="noreferrer">
              {'\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438'}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
