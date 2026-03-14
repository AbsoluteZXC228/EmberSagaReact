import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import History from '../components/History'
import Rules from '../components/Rules'
import ServerMap from '../components/ServerMap'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const SNAP_IDS = ['top', 'about', 'history', 'rules', 'map', 'gallery', 'contact']
const HEADER_OFFSET = 86
const SNAP_LOCK_MS = 760

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
  const snapLockRef = useRef(false)

  const openJoinModal = () => setIsJoinModalOpen(true)
  const closeJoinModal = () => setIsJoinModalOpen(false)

  useEffect(() => {
    if (isJoinModalOpen) {
      return undefined
    }

    const isDesktop = window.matchMedia('(min-width: 901px)').matches

    if (!isDesktop) {
      return undefined
    }

    const sections = SNAP_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) {
      return undefined
    }

    const releaseLock = () => {
      window.setTimeout(() => {
        snapLockRef.current = false
      }, SNAP_LOCK_MS)
    }

    const getClosestSectionIndex = () => {
      const currentY = window.scrollY + HEADER_OFFSET + 16
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section, index) => {
        const distance = Math.abs(section.offsetTop - currentY)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      return closestIndex
    }

    const handleWheel = (event) => {
      if (snapLockRef.current || Math.abs(event.deltaY) < 24) {
        return
      }

      const currentIndex = getClosestSectionIndex()
      const direction = event.deltaY > 0 ? 1 : -1
      const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction))
      const nextSection = sections[nextIndex]

      if (!nextSection || nextIndex === currentIndex) {
        return
      }

      event.preventDefault()
      snapLockRef.current = true
      window.scrollTo({
        top: Math.max(0, nextSection.offsetTop - HEADER_OFFSET),
        behavior: 'smooth',
      })
      releaseLock()
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => window.removeEventListener('wheel', handleWheel)
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
