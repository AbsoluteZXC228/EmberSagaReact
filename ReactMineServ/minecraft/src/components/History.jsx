const historyEvents = [
  {
    title: 'Инцидент с 1.5 млн кнопок',
    period: 'Критическая техническая проблема',
    details: [
      'Модератор случайно заспавнил около 1.5 млн кнопок, что привело к крашу сервера и сильной просадке TPS.',
      'После разбора ситуации проблему устранили и стабилизировали работу сервера.',
    ],
  },
  {
    title: 'Первая война на сервере',
    period: 'Поворотный момент в правилах',
    details: [
      'После первой войны команда проекта выявила уязвимости в правилах и доработала их.',
      'Война была объявлена нацией Евреев против Кровограда с причиной: "забрали некоторые вещи соклановца".',
      'Немцы участвовали как союзники Кровограда. Основатель немцев nepAKCNH в одиночку сражался против отряда из 7 человек.',
      'В итоге nepAKCNH соло разрушил маяк города Евреев, что по правилам дало автоматическую победу.',
    ],
  },
]

export default function History() {
  return (
    <section id="history" className="section section-alt history-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Летопись проекта</p>
          <h2>История сервера</h2>
          <p className="rules-note">Ключевые события, которые повлияли на развитие мира Ember Saga.</p>
        </div>

        <div className="history-grid">
          {historyEvents.map((event) => (
            <article key={event.title} className="panel history-card">
              <span className="history-period">{event.period}</span>
              <h3>{event.title}</h3>
              <ul className="history-list">
                {event.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
