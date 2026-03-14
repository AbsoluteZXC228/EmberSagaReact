import { useEffect, useState } from 'react'
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

  useEffect(() => {
    if (isJoinModalOpen) {
      return undefined
    }

    const sectionSelectors = ['#top', '#about', '#history', '#rules', '#map', '#gallery', '#contact']
    const desktopBreakpoint = 980
    const wheelThreshold = 45
    const scrollLockMs = 850

    let wheelDelta = 0
    let isLocked = false
    let lockTimer = null

    const getHeaderOffset = () => {
      const header = document.querySelector('.site-header')
      return header ? header.offsetHeight : 0
    }

    const getSections = () =>
      sectionSelectors
        .map((selector) => document.querySelector(selector))
        .filter(Boolean)

    const getCurrentSectionIndex = (sections, headerOffset) => {
      const targetY = window.scrollY + headerOffset + 24
      let closestIndex = 0

      sections.forEach((section, index) => {
        if (section.offsetTop <= targetY) {
          closestIndex = index
        }
      })

      return closestIndex
    }

    const scrollToSection = (section) => {
      const top = Math.max(section.offsetTop - getHeaderOffset(), 0)
      window.scrollTo({ top, behavior: 'smooth' })
    }

    const lockScroll = () => {
      isLocked = true
      window.clearTimeout(lockTimer)
      lockTimer = window.setTimeout(() => {
        isLocked = false
      }, scrollLockMs)
    }

    const handleWheel = (event) => {
      if (window.innerWidth <= desktopBreakpoint) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      if (isLocked) {
        event.preventDefault()
        return
      }

      wheelDelta += event.deltaY

      if (Math.abs(wheelDelta) < wheelThreshold) return

      const sections = getSections()
      if (!sections.length) {
        wheelDelta = 0
        return
      }

      const direction = wheelDelta > 0 ? 1 : -1
      const currentIndex = getCurrentSectionIndex(sections, getHeaderOffset())
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1)

      wheelDelta = 0

      if (nextIndex === currentIndex) return

      event.preventDefault()
      lockScroll()
      scrollToSection(sections[nextIndex])
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.clearTimeout(lockTimer)
    }
  }, [isJoinModalOpen])

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
