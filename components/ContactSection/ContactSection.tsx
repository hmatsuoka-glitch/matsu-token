import Link from 'next/link';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.sectionContact}>
      <div className={styles.inner}>
        <p className={styles.titleEn}>CONTACT</p>
        <h2 className={styles.titleJp}>お問い合わせ</h2>
        <p className={styles.text}>
          塗装についてのご相談やお見積りは無料です。
          <br />
          「まずは話を聞いてみたい」という方も大歓迎です。
          <br />
          お気軽にお問い合わせください。
        </p>
        <div className={styles.tel}>
          <span className={styles.telLabel}>TEL.</span>
          <a href="tel:0854323181" className={styles.telNum}>0854-32-3181</a>
        </div>
        <Link href="/contact/" className={styles.btn}>
          まずはお見積り
        </Link>
      </div>
      <p className={styles.homeTtlDeco}>MATSUTOKEN</p>
    </section>
  );
}
