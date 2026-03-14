export function getHeaderOffset() {
  const header = document.querySelector('.site-header')
  return header ? header.getBoundingClientRect().height : 0
}

export function getSectionTargetTop(section) {
  if (!section) {
    return 0
  }

  const headerOffset = getHeaderOffset()
  const sectionTop = window.scrollY + section.getBoundingClientRect().top
  return Math.max(Math.round(sectionTop - headerOffset), 0)
}

export function scrollToSection(section) {
  if (!section) {
    return
  }

  window.scrollTo({
    top: getSectionTargetTop(section),
    behavior: 'smooth',
  })
}

export function scrollToSelector(selector) {
  const section = document.querySelector(selector)
  if (!section) {
    return
  }

  scrollToSection(section)
}