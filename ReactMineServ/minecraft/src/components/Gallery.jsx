import { useMemo, useState } from 'react'
import cityPhotoOne from '../Logo/Goroda/gorod1.png'
import cityPhotoTwo from '../Logo/Goroda/gorod2.png'
import cityPhotoThree from '../Logo/Goroda/gorod3.png'
import expeditionPhotoOne from '../Logo/expidion/exp1.png'

const galleryItems = [
  {
    title: 'Города и замки',
    text: 'Крупные постройки игроков и фракций',
    images: [
      { src: cityPhotoOne, alt: 'Город и крепость игроков на сервере' },
      { src: cityPhotoTwo, alt: 'Замок и городская архитектура сервера' },
      { src: cityPhotoThree, alt: 'Панорама города и замка на сервере' },
    ],
  },
  {
    title: 'Ресурсные экспедиции',
    text: 'Командные вылазки в опасные биомы',
    images: [{ src: expeditionPhotoOne, alt: 'Экспедиция игроков за ресурсами' }],
  },
  { title: 'Арены и стычки', text: 'PvP без токсичности и с правилами' },
  { title: 'Инженерные фермы', text: 'Автоматизация и редстоун-архитектура' },
  { title: 'Ночной вайб', text: 'Эстетика света, тумана и костров' },
  { title: 'Серверные события', text: 'Ивенты с лором и живой историей' },
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(-1)

  const activeItem = useMemo(() => {
    if (activeIndex < 0) {
      return null
    }

    return galleryItems[activeIndex] ?? null
  }, [activeIndex])

  const activeImages = activeItem?.images ?? []

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Мир Ember Saga</p>
          <h2>Галерея сервера</h2>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className="gallery-card gallery-card-btn"
              onClick={() => setActiveIndex(index)}
              aria-label={`Открыть раздел ${item.title}`}
            >
              {item.images ? (
                <div
                  className={`gallery-preview-grid ${
                    item.images.length === 1
                      ? 'gallery-preview-single'
                      : item.images.length >= 3
                        ? 'gallery-preview-three'
                        : ''
                  }`}
                >
                  {item.images.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="gallery-preview-img"
                      loading="lazy"
                    />
                  ))}
                </div>
              ) : (
                <div className="gallery-preview" aria-hidden="true"></div>
              )}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="gallery-open-hint">
                {item.images ? 'Нажми, чтобы открыть фото' : 'Раздел для будущих фото'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeItem.title}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActiveIndex(-1)}
            aria-label="Закрыть"
          >
            ×
          </button>

          <div className="lightbox-content">
            <h3>{activeItem.title}</h3>
            <p>{activeItem.text}</p>

            {activeImages.length > 0 ? (
              <div className="lightbox-grid">
                {activeImages.map((image) => (
                  <figure key={image.src} className="lightbox-item">
                    <img src={image.src} alt={image.alt} className="lightbox-image" />
                  </figure>
                ))}
              </div>
            ) : (
              <div className="lightbox-empty">Скоро здесь появятся фотографии этого раздела.</div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
