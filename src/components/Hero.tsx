import { asset } from '../lib/asset'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero-split">
        <div className="hero-copy">
          <p className="eyebrow">Мончегорск · парикмахер-модельер</p>
          <h1 id="hero-brand" className="hero-logo-wrap">
            <img
              className="hero-logo"
              src={asset('images/logo.jpg')}
              alt="Karasiova_hair — Пространство красоты"
              width={960}
              height={384}
            />
          </h1>
          <p className="hero-lede">
            цвет · косы · <span className="tag-hash">#doubleshift</span>
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-copper"
              href="https://vk.ru/beautifulhair111"
              target="_blank"
              rel="noreferrer"
            >
              Записаться
            </a>
            <a className="text-link" href="#learn">
              Обучение окрашиванию
            </a>
          </div>
        </div>

        <div className="hero-parting" aria-hidden="true" />

        <div className="hero-visual" aria-hidden="true">
          <img
            className="hero-photo"
            src={asset('images/hero-copper.jpg')}
            alt=""
            width={900}
            height={1200}
          />
          <span className="parting-label">#doubleshift</span>
        </div>
      </div>
    </section>
  )
}
