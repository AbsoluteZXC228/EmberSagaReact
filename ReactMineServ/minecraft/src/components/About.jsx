export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">О проекте</p>
          <h2>Почему выбирают Ember Saga</h2>
          <p className="rules-note">
            Здесь ты не просто выживаешь, а влияешь на мир: заключаешь союзы, строишь государства,
            участвуешь в конфликтах и пишешь историю вместе с другими игроками.
          </p>
        </div>

        <div className="about-grid">
          <article className="panel">
            <h3>Честный старт</h3>
            <p>
              Нет pay-to-win и скрытых бустов. У всех игроков одинаковые условия на старте,
              а прогресс строится навыком и командной игрой.
            </p>
          </article>

          <article className="panel">
            <h3>Живой мир</h3>
            <p>
              Политика, союзы, конфликты и дипломатия — не декорация, а реальная часть геймплея.
              Каждое действие влияет на баланс сил сервера.
            </p>
          </article>

          <article className="panel">
            <h3>Безопасное комьюнити</h3>
            <p>
              Вайтлист и модерация поддерживают здоровую атмосферу.
              Меньше случайного хаоса, больше осознанной и интересной игры.
            </p>
          </article>
        </div>

        <div className="about-metrics">
          <div><strong>100%</strong><span>роль и лор внутри игры</span></div>
          <div><strong>0%</strong><span>pay-to-win механик</span></div>
          <div><strong>24/7</strong><span>доступ к серверу</span></div>
        </div>
      </div>
    </section>
  )
}

