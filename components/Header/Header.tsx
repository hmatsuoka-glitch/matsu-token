import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.headerLogo}>
          <Link href="/">
            <svg viewBox="0 0 200 48" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="32" fontFamily="Sen, sans-serif" fontSize="24" fontWeight="700" fill="#3FB5EA">
                MATSUTOKEN
              </text>
            </svg>
          </Link>
        </h1>

        <div className={styles.telBtn}>
          <a href="tel:0854323181">
            <svg className={styles.telIcon} viewBox="0 0 24 24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.07 15.07 0 0 1-6.59-6.58l2.2-2.21a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z" />
            </svg>
            <div>
              <span className={styles.telLabel}>TEL.</span>
              <span className={styles.telNumber}>0854-32-3181</span>
            </div>
            <p className={styles.telReception}>［受付時間］ 月〜金 9:00〜17:00</p>
          </a>
        </div>

        <nav>
          <ul className={styles.gnav}>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/feature/">まつ塗研の特徴</Link></li>
            <li><Link href="/service/">事業内容</Link></li>
            <li><Link href="/company/">会社概要</Link></li>
            <li><Link href="/works/">施工実績</Link></li>
            <li><Link href="/recruit/">採用情報</Link></li>
          </ul>
        </nav>

        <div className={styles.ctaButtons}>
          <a className={`${styles.ctaBtn} ${styles.ctaBtnGreen}`} href="/contact/">まずはお見積り</a>
          <a className={`${styles.ctaBtn} ${styles.ctaBtnBlue}`} href="/personal/">個人のお客様はこちら</a>
        </div>
      </div>
    </header>
  );
}
