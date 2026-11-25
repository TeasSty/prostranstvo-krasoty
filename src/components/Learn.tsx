import { asset } from '../lib/asset'

export function Learn() {
  return (
    <section className="section learn" id="learn" aria-labelledby="learn-title">
      <div className="learn-grid">
        <figure className="learn-figure">
          <img
            src={asset('images/craft-training.jpg')}
            alt="Работа с фольгой и пигментом на обучении"
            width={960}
            height={720}
          />
        </figure>
        <div className="learn-copy">
          <p className="eyebrow">Для мастеров</p>
          <h2 id="learn-title">Обучение окрашиванию</h2>
          <p className="section-lede">
            Отдельный блок от клиентских услуг: схемы, база, стыковка тонов и практика
            на живой голове — по запросу.
          </p>
          <a
            className="btn btn-ink"
            href="https://vk.ru/beautifulhair111"
            target="_blank"
            rel="noreferrer"
          >
            Узнать про набор
          </a>
        </div>
      </div>
    </section>
  )
}
