import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.headerLogo}>
          <Link href="/" aria-label="株式会社ユタカプラス">
            <span className={styles.logoBox}>
              <svg className={styles.logoSvg} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="#98C6DB" strokeWidth="4" strokeLinecap="round">
                  {/* "4" shape */}
                  <path d="M30 20 L30 60 L70 60" />
                  <path d="M60 20 L60 90" />
                  {/* "+" shape */}
                  <path d="M80 70 L100 70" />
                  <path d="M90 60 L90 80" />
                </g>
              </svg>
              <span className={styles.logoText}>YUTAKAPLUS</span>
            </span>
          </Link>
        </h1>

        <nav className={styles.gnavWrap}>
          <ul className={styles.gnav}>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/feature/">ユタカプラスの特徴</Link></li>
            <li><Link href="/service/">事業内容</Link></li>
            <li><Link href="/company/">会社概要</Link></li>
            <li><Link href="/works/">施工実績</Link></li>
            <li><Link href="/recruit/">採用情報</Link></li>
          </ul>
        </nav>

        <div className={styles.telArea}>
          <a href="tel:0526939169" className={styles.telLink}>
            <span className={styles.telLabel}>TEL.</span>
            <span className={styles.telNumber}>052-693-9169</span>
          </a>
          <p className={styles.telSub}>［受付時間］ 月〜金 9:00〜17:00</p>
        </div>

        <div className={styles.ctaButtons}>
          <a className={`${styles.ctaBtn} ${styles.ctaBtnGreen}`} href="/contact/">
            <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            まずはお見積り
          </a>
          <a className={`${styles.ctaBtn} ${styles.ctaBtnBlue}`} href="/personal/">
            <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
            </svg>
            個人のお客様はこちら
          </a>
        </div>
      </div>
    </header>
  );
}
