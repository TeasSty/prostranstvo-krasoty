import { asset } from '../lib/asset'

const works = [
  {
    src: 'images/craft-color.jpg',
    alt: 'Сложное окрашивание',
    label: 'Окрашивание',
  },
  {
    src: 'images/craft-braids.jpg',
    alt: 'Афрокосы с канекалоном',
    label: 'Косы',
  },
  {
    src: 'images/craft-doubleshift.jpg',
    alt: 'Техника double shift',
    label: '#doubleshift',
  },
  {
    src: 'images/hero-copper.jpg',
    alt: 'Медный тон и фактура пряди',
    label: 'Тон',
  },
]

export function Works() {
  return (
    <section className="section works" id="works" aria-labelledby="works-title">
      <div className="section-head">
        <p className="eyebrow">Портфолио</p>
        <h2 id="works-title">Работы по направлениям</h2>
        <p className="section-lede">
          Полный архив — в сообществе VK. Здесь — характер направлений.
        </p>
      </div>

      <div className="works-strip" role="list">
        {works.map((work) => (
          <figure className="work-item" role="listitem" key={work.label}>
            <img src={asset(work.src)} alt={work.alt} width={640} height={800} />
            <figcaption>{work.label}</figcaption>
          </figure>
        ))}
      </div>

      <p className="works-more">
        <a
          className="text-link"
          href="https://vk.ru/beautifulhair111"
          target="_blank"
          rel="noreferrer"
        >
          Смотреть альбомы во VK
        </a>
      </p>
    </section>
  )
}
