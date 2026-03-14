import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import History from '../components/History'
import Rules from '../components/Rules'
import ServerMap from '../components/ServerMap'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)

  const openJoinModal = () => setIsJoinModalOpen(true)
  const closeJoinModal = () => setIsJoinModalOpen(false)

  return (
    <div className="minecraft-app">
      <Header onJoinClick={openJoinModal} />
      <main>
        <Hero onJoinClick={openJoinModal} />
        <div className="hero-static-transition" aria-hidden="true"></div>
        <About />
        <History />
        <Rules />
        <ServerMap />
        <Gallery />
      </main>
      <Footer />

      {isJoinModalOpen && (
        <div className="join-modal" role="dialog" aria-modal="true" aria-label="Как начать играть" onClick={closeJoinModal}>
          <div className="join-modal-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="join-modal-close" onClick={closeJoinModal} aria-label="Закрыть">
              ×
            </button>

            <h3>Как начать играть</h3>
            <p>
              Чтобы начать играть на нашем сервере, не обязательно иметь лицензию Minecraft.
              Можно зайти и с пиратских лаунчеров.
            </p>
            <p>
              Регистрация проходит через бота, который указан в Telegram. После одобрения заявки ты получишь доступ на сервер.
            </p>

            <div className="join-modal-actions">
              <a href="https://t.me/DebustSoSo" target="_blank" rel="noreferrer" className="btn">
                Открыть Telegram
              </a>
              <button type="button" className="btn btn-ghost" onClick={closeJoinModal}>
                Понятно
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
