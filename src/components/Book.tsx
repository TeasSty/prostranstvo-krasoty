export function Book() {
  return (
    <section className="section book" id="book" aria-labelledby="book-title">
      <div className="book-panel">
        <p className="eyebrow">Запись</p>
        <h2 id="book-title">Как быстрее записаться</h2>
        <ol className="book-steps">
          <li>Напишите, на какое окрашивание или плетение хотите прийти.</li>
          <li>Пришлите фото волос в распущенном виде — не против света.</li>
          <li>Кратко: чем и когда красились, были ли хна, кератин, ботокс.</li>
          <li>Удобный день и время.</li>
        </ol>
        <div className="book-cta">
          <a
            className="btn btn-copper"
            href="https://vk.ru/beautifulhair111"
            target="_blank"
            rel="noreferrer"
          >
            Написать в VK
          </a>
          <a className="text-link" href="tel:+79113380215">
            +7 (911) 338-02-15
          </a>
        </div>
      </div>
    </section>
  )
}
