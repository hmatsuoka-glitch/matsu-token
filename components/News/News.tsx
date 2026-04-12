import styles from './News.module.css';

const newsItems = [
  { date: '2025.04.01', title: 'ホームページをリニューアルしました' },
  { date: '2025.03.15', title: '春の塗装キャンペーン実施中' },
  { date: '2024.12.01', title: '年末年始休業のお知らせ' },
];

export default function News() {
  return (
    <section className={styles.homeNews}>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <h2 className={styles.homeTtl}>
            <span className={styles.fontEn}>NEWS</span>
            <span className={styles.fontJp}>お知らせ</span>
          </h2>
          <a className={styles.allLink} href="/news/">一覧を見る</a>
        </div>
        <div>
          <ul className={styles.newsList}>
            {newsItems.map((item, i) => (
              <li key={i}>
                <a href="/news/">
                  <span className={styles.newsDate}>{item.date}</span>
                  <p>{item.title}</p>
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.bottomLink}>
            <a className={styles.allLink} href="/news/">一覧を見る</a>
          </div>
        </div>
      </div>
    </section>
  );
}
