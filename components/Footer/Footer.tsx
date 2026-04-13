import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerCompany}>
          <Link href="/" className={styles.footerLogo}>
            <svg viewBox="0 0 200 48" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="32" fontFamily="Sen, sans-serif" fontSize="24" fontWeight="700" fill="#ffffff">
                MATSUTOKEN
              </text>
            </svg>
          </Link>
          <div className={styles.footerInfo}>
            <p>まつ塗研</p>
            <p>〒692-0402 島根県安来市広瀬町町帳94-2</p>
            <p>電話番号 0854-32-3181</p>
            <p>FAX番号 0854-32-3181</p>
          </div>
          <aside className={styles.snsArea}>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
          </aside>
        </div>
        <nav className={styles.fnav}>
          <ul className={styles.fnavMenu}>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/feature/">まつ塗研の特徴</Link></li>
            <li><Link href="/service/">事業内容</Link></li>
            <li><Link href="/company/">会社概要</Link></li>
            <li><Link href="/works/">施工実績</Link></li>
            <li><Link href="/recruit/">採用情報</Link></li>
            <li><a href="/#news">新着情報</a></li>
            <li><Link href="/contact/">お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
      <p className={styles.copyright}>©2017-2026 まつ塗研 All Rights Reserved.</p>
    </footer>
  );
}
