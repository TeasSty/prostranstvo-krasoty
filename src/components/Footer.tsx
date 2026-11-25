import { asset } from '../lib/asset'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img
          className="footer-logo"
          src={asset('images/logo.jpg')}
          alt="Karasiova_hair — Пространство красоты"
          width={280}
          height={112}
        />
        <p>Надежда Карасёва · парикмахер-модельер</p>
      </div>
      <div className="footer-meta">
        <p>г. Мончегорск</p>
        <p>
          <a href="tel:+79113380215">+7 (911) 338-02-15</a>
        </p>
        <p>
          <a href="https://vk.ru/beautifulhair111" target="_blank" rel="noreferrer">
            vk.ru/beautifulhair111
          </a>
        </p>
      </div>
    </footer>
  )
}
