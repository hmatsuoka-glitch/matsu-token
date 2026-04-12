import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.homeAbout}>
      <div className={styles.flex}>
        <div className={styles.imgarea}>
          <div className={styles.aboutImg01}>
            <div className={`${styles.aboutImg01Box} placeholder`}>ABOUT IMAGE 1</div>
          </div>
          <div className={`${styles.aboutImg02} placeholder`}>ABOUT IMAGE 2</div>
          <div className={`${styles.aboutImg03} placeholder`}>ABOUT IMAGE 3</div>
        </div>
        <div className={styles.txtarea}>
          <h2 className={styles.homeTtl}>
            <span className={styles.fontEn}>ABOUT US</span>
            <span className={styles.fontJp}>ユタカプラスについて</span>
          </h2>
          <p className={styles.aboutTxt}>
            塗装のプロフェッショナルとして、お客様一人ひとりのお悩みに寄り添う住宅塗装をはじめ、
            鉄道、高速道路、工場、ビル、マンション、アミューズメントパークに至るまで
            愛知の街を守る幅広い塗装工事に携わってまいりました。
            ユタカプラスでは、「柔軟性のあるご提案」と「高品質」「安全な施工」を大切にしています。
            現場では資格保有の職人が誠実な対応と確実な指揮を心がけ、
            徹底した安全対策を敷いて建物環境を保護します。
          </p>
          <div className={styles.btn}>
            <a href="/company/">会社概要をみる</a>
          </div>
        </div>
      </div>
    </section>
  );
}
