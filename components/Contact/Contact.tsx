import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.sectionContact}>
      <div className={styles.inner}>
        <h2 className={`${styles.homeTtl} ${styles.homeTtlCtr}`}>
          <span className={styles.fontEn}>CONTACT</span>
          <span className={styles.fontJp}>お問い合わせ</span>
        </h2>
        <p className={styles.contactText}>
          塗装についてのご相談やお見積りは無料です。
          <br />
          「まずは話を聞いてみたい」という方も大歓迎です。
          <br />
          お気軽にお問い合わせください。
        </p>
        <div className={styles.contactTelArea}>
          <p>電話でお問い合わせ</p>
          <a className={styles.contactTel} href="tel:0854323181">TEL.0854-32-3181</a>
          <p className={styles.contactTelLabel}>［受付時間］ 月〜金 9:00〜17:00</p>
        </div>
        <div>
          <a className={styles.contactBtn} href="tel:0854323181">お電話でのお問い合わせはこちら</a>
        </div>
      </div>
      <p className={styles.homeTtlDeco}>MATSUTOKEN</p>
    </section>
  );
}
