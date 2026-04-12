import styles from './News.module.css';

const newsItems = [
  { date: '2025.12.24', title: '年末年始のお知らせ' },
  { date: '2025.07.23', title: '社員旅行に伴う臨時休業のお知らせ（2025/8/28-8/31）' },
  { date: '2024.07.11', title: '施工事例を更新致しました。' },
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
