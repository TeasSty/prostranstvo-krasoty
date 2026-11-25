import { asset } from '../lib/asset'

export function DoubleShift() {
  return (
    <section
      className="section doubleshift"
      id="doubleshift"
      aria-labelledby="doubleshift-title"
    >
      <div className="doubleshift-grid">
        <div className="doubleshift-copy">
          <p className="eyebrow">Авторская техника</p>
          <h2 id="doubleshift-title">#doubleshift</h2>
          <p className="section-lede">
            Пробор как ось: два цветовых поля встречаются на чистой линии. Контраст
            или соседние тона — без размытой «каши» на стыке.
          </p>
          <ul className="shift-points">
            <li>Графичная стыковка двух оттенков</li>
            <li>Работа от пробора и зон</li>
            <li>Подходит для смелых и тихих пар цветов</li>
          </ul>
        </div>
        <figure className="doubleshift-figure">
          <img
            src={asset('images/craft-doubleshift.jpg')}
            alt="Пробор с двумя цветовыми зонами в технике double shift"
            width={1280}
            height={720}
          />
        </figure>
      </div>
    </section>
  )
}
