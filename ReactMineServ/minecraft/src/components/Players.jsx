import ServerStatus from './ServerStatus'

export default function Players() {
  return (
    <section id="players" className="section players-section">
      <div className="container players-screen">
        <div className="section-heading players-heading">
          <p className="eyebrow">{'\u0418\u0433\u0440\u043e\u043a\u0438'}</p>
          <h2>{'\u041a\u0442\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u0432 \u043c\u0438\u0440\u0435 Ember Saga'}</h2>
          <p className="rules-note">
            {
              '\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043e\u043d\u043b\u0430\u0439\u043d \u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0438 \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435.'
            }
          </p>
        </div>

        <ServerStatus mode="players" />
      </div>
    </section>
  )
}
