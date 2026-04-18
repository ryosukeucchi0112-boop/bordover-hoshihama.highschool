import "./styles.css";

const newsItems = [
  {
    title: "朝倉さんの転落事故について",
    category: "重要",
    date: "2026.04.12",
  },
  {
    title: "熱中症への対応について",
    category: "お知らせ",
    date: "2026.04.10",
  },
  {
    title: "昨年度の教育実績",
    category: "学校案内",
    date: "2026.04.05",
  },
  {
    title: "三浦新聞への対応について",
    category: "お知らせ",
    date: "2026.04.01",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <p className="eyebrow">SEIHAMA GAKUEN</p>
            <h1 className="site-title">星浜学園高等部</h1>
          </div>

          <nav className="nav">
            <a href="#news">お知らせ</a>
            <a href="#about">学校案内</a>
            <a href="#admission">入試情報</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero hero-background">
          <img
            src="horse.png"
            alt="星浜学園高等部のメインビジュアル"
            className="hero-bg-image"
          />
          <div className="hero-bg-dark"></div>
          <div className="hero-bg-grad"></div>

          <div className="hero-content">
            <div className="hero-copy hero-copy-full">
              <p className="hero-label hero-label-on-image">
                ACADEMIC INSTITUTION
              </p>
              <h2 className="hero-heading hero-heading-on-image">
                Eclipse first
                <br />
                the rest nowhere.
              </h2>
              <p className="hero-since hero-since-on-image">since 1898</p>
              <p className="hero-text hero-text-on-image">
                星浜学園高等部は、互いに切磋琢磨し合いながら、知性と自律を育む学びを大切にしています。
                日々の学習と学校生活を通して、生徒一人ひとりの確かな成長を支えます。
              </p>

              <div className="hero-actions">
                <a href="#news" className="button primary light-button">
                  お知らせを見る
                </a>
                <a
                  href="#about"
                  className="button secondary secondary-on-image"
                >
                  学校案内
                </a>
              </div>
            </div>

            <div className="hero-school-name hero-school-name-on-image">
              星浜学園高等部
            </div>
          </div>
        </section>

        <section id="news" className="section">
          <div className="section-head">
            <div>
              <p className="section-label">NEWS</p>
              <h3 className="section-title">学校からのお知らせ</h3>
            </div>
            <a href="#news" className="section-link">
              一覧を見る
            </a>
          </div>

          <div className="news-list">
            {newsItems.map((item, index) => (
              <a key={index} href="#news" className="news-item">
                <div className="news-date">{item.date}</div>
                <div>
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-title">{item.title}</div>
                <div className="news-arrow">↗</div>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="cards">
          <div className="card">
            <p className="card-label">PHILOSOPHY</p>
            <h4 className="card-title">教育方針</h4>
            <p className="card-text">
              礼節と探究心を重んじ、学力だけでなく、社会の中で自律して生きる力を育てます。
            </p>
          </div>

          <div className="card">
            <p className="card-label">ENVIRONMENT</p>
            <h4 className="card-title">学習環境</h4>
            <p className="card-text">
              静かな校舎環境ときめ細かな指導体制のもと、生徒が安心して学べる場を整えています。
            </p>
          </div>

          <div id="admission" className="card">
            <p className="card-label">ADMISSION</p>
            <h4 className="card-title">入試・学校案内</h4>
            <p className="card-text">
              学校説明会や入学希望者向け資料、年間行事の概要など、受験生・保護者向け情報を掲載しています。
            </p>
          </div>
        </section>

        <section className="notice">
          <p>
            このサイトはフィクション作品用に制作された演出ページです。
            内容に登場する人物名・団体名・出来事・問い合わせ先等はすべて架空のものです。
          </p>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-inner">
          <p>© Seihama Gakuen Senior High School</p>
          <p>〒430-0000 静岡県浜松市中央区星浜町 1-2-3</p>
        </div>
      </footer>
    </div>
  );
}
