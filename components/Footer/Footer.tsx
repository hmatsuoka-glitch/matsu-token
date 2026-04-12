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
                YUTAKA PLUS
              </text>
            </svg>
          </Link>
          <div className={styles.footerInfo}>
            <p>株式会社ユタカプラス</p>
            <p>本社：〒476-0002 東海市名和町吹付63番地</p>
            <p>名古屋支社：〒459-8011 名古屋市緑区定納山2丁目1210番地</p>
            <p>電話番号 052-693-9169</p>
            <p>FAX番号 052-693-9168</p>
          </div>
          <aside className={styles.snsArea}>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
          </aside>
        </div>
        <nav className={styles.fnav}>
          <ul className={styles.fnavMenu}>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/feature/">ユタカプラスの特徴</Link></li>
            <li><Link href="/service/">事業内容</Link></li>
            <li><Link href="/company/">会社概要</Link></li>
            <li><Link href="/works/">施工実績</Link></li>
            <li><Link href="/recruit/">採用情報</Link></li>
            <li><Link href="/news/">新着情報</Link></li>
            <li><Link href="/privacy/">プライバシーポリシー</Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.footerNote}>
        <p>その他施工実績も掲載中</p>
        <p>一般住宅塗装をお考えの方、店舗工事をお考えの工務店様はこちら</p>
      </div>
      <p className={styles.copyright}>©2023 株式会社ユタカプラス</p>
    </footer>
  );
}
