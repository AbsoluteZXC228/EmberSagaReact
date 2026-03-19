import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Start from '../components/Start'
import About from '../components/About'
import History from '../components/History'
import Players from '../components/Players'
import Rules from '../components/Rules'
import ServerMap from '../components/ServerMap'
import Gallery from '../components/Gallery'
import FooterShowcase from '../components/FooterShowcase'
import { getHeaderOffset, getSectionTargetTop, scrollToSection } from '../utils/scroll'

export default function Home() {
  const isJoinModalOpen = false
  const openJoinModal = () => scrollToSection(document.querySelector('#start'))
  const closeJoinModal = () => {}

  useEffect(() => {
    const sectionSelectors = ['#top', '#about', '#history', '#rules', '#map', '#players', '#start', '#gallery', '#contact']
    const desktopBreakpoint = 980
    const wheelThreshold = 70
    const scrollLockMs = 980

    let wheelDelta = 0
    let isLocked = false
    let lockTimer = null

    const getSections = () =>
      sectionSelectors
        .map((selector) => document.querySelector(selector))
        .filter(Boolean)

    const getCurrentSectionIndex = (sections) => {
      const headerOffset = getHeaderOffset()
      const viewportAnchor = headerOffset + (window.innerHeight - headerOffset) * 0.35
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionAnchor = rect.top + Math.min(rect.height * 0.35, 220)
        const distance = Math.abs(sectionAnchor - viewportAnchor)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      return closestIndex
    }

    const isAlignedToSection = (section) => {
      const targetTop = getSectionTargetTop(section)
      return Math.abs(window.scrollY - targetTop) <= 6
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

      const sections = getSections()
      if (!sections.length) {
        return
      }

      if (isLocked) {
        event.preventDefault()
        return
      }

      wheelDelta += event.deltaY

      if (Math.abs(wheelDelta) < wheelThreshold) return

      const direction = wheelDelta > 0 ? 1 : -1
      const currentIndex = getCurrentSectionIndex(sections)
      const currentSection = sections[currentIndex]
      const nextIndex = isAlignedToSection(currentSection)
        ? Math.min(Math.max(currentIndex + direction, 0), sections.length - 1)
        : currentIndex

      wheelDelta = 0

      event.preventDefault()
      lockScroll()
      scrollToSection(sections[nextIndex])
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.clearTimeout(lockTimer)
    }
  }, [])

  return (
    <div className="minecraft-app">
      <Header onJoinClick={openJoinModal} />
      <main>
        <Hero onJoinClick={openJoinModal} />
        <About />
        <History />
        <Rules />
        <ServerMap />
        <Players />
        <Start />
        <Gallery />
      </main>
      <FooterShowcase />

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
