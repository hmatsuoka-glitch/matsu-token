import styles from './Recruit.module.css';

export default function Recruit() {
  return (
    <section id="recruit" className={styles.homeRecruit}>
      <div className={styles.inner}>
        <h2 className={styles.homeTtl}>
          <span className={styles.fontEn}>RECRUIT</span>
          <span className={styles.fontJp}>採用情報</span>
        </h2>
        <p className={styles.homeTxt}>
          わたしたちは個のちからを最大限に活かしたチーム戦を実践しています。未来の自分と、未来の暮らしをわたしたちと一緒につくりませんか？
        </p>
        <div className={styles.btnWh}>
          <a href="#contact">お問い合わせはこちら</a>
        </div>
      </div>
      <div className={styles.imgarea}>
        <div className={styles.imgareaBox}>
          <img src="/RECRUIT01_若手職人笑顔.jpg" alt="若手職人" loading="lazy" />
        </div>
        <div className={styles.imgareaBox}>
          <img src="/RECRUIT02_チーム集合写真.jpg" alt="チーム集合写真" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
