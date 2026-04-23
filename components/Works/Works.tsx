import styles from './Works.module.css';

export default function Works() {
  return (
    <section id="works" className={styles.homeWorks}>
      <p className={styles.homeTtlDeco}>MATSUTOKEN</p>
      <div className={styles.ttlarea}>
        <h2 className={styles.homeTtl}>
          <span className={styles.fontEn}>WORKS</span>
          <span className={styles.fontJp}>施工実績</span>
        </h2>
      </div>

      <div className={styles.comingSoon}>
        <p className={styles.comingSoonTtl}>ただいま準備中です</p>
        <p className={styles.comingSoonTxt}>
          施工実績は順次公開してまいります。
          <br />
          今しばらくお待ちください。
        </p>
      </div>
    </section>
  );
}
