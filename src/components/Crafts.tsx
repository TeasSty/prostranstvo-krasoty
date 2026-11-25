import { asset } from '../lib/asset'

export function Crafts() {
  return (
    <section className="section crafts" id="crafts" aria-labelledby="crafts-title">
      <div className="section-head">
        <p className="eyebrow">Два ремесла</p>
        <h2 id="crafts-title">Цвет и плетение в одном пространстве</h2>
        <p className="section-lede">
          Сложное окрашивание и афротехники — без смешения «как у всех» в одну общую
          студию красоты.
        </p>
      </div>

      <div className="crafts-lanes">
        <article className="craft-lane">
          <p className="lane-label">Цвет</p>
          <figure className="lane-figure">
            <img
              src={asset('images/craft-color.jpg')}
              alt="Многотональное окрашивание в индиго-фиолетовых оттенках"
              width={960}
              height={720}
            />
          </figure>
          <p className="lane-copy">
            Сложные схемы, коррекция, восстановление после осветления. Чистый пигмент
            и спокойный рост.
          </p>
        </article>

        <article className="craft-lane craft-lane-braids">
          <p className="lane-label">
            Косы <span className="bead" aria-hidden="true" />
          </p>
          <figure className="lane-figure">
            <img
              src={asset('images/craft-braids.jpg')}
              alt="Афрокосы с розовым и бирюзовым канекалоном"
              width={960}
              height={720}
            />
          </figure>
          <p className="lane-copy">
            Афрокосы, кудри, дреды, съёмные комплекты и лулы — фактура, цвет и срок
            носки под ваш ритм.
          </p>
        </article>
      </div>
    </section>
  )
}
