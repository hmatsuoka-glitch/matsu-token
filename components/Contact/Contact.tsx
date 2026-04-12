import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.sectionContact}>
      <div className={styles.inner}>
        <h2 className={`${styles.homeTtl} ${styles.homeTtlCtr}`}>
          <span className={styles.fontEn}>CONTACT</span>
          <span className={styles.fontJp}>お問い合わせ</span>
        </h2>
        <p className={styles.contactText}>
          相見積もりをご希望の方や、まずは話を聞いてみたい、という方も大歓迎です。
          <br />
          お気軽にお問い合わせください。
        </p>
        <div className={styles.contactTelArea}>
          <p>電話でお問い合わせ</p>
          <a className={styles.contactTel} href="tel:0526939169">TEL.052-693-9169</a>
          <p className={styles.contactTelLabel}>［受付時間］ 月〜金 9:00〜17:00</p>
        </div>
        <div>
          <a className={styles.contactBtn} href="/contact/">まずはお見積り</a>
        </div>
      </div>
      <p className={styles.homeTtlDeco}>YUTAKA PLUS</p>
    </section>
  );
}
