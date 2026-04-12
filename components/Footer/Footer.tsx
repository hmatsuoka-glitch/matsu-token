import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerCompany}>
          <a href="#top" className={styles.footerLogo}>
            <svg viewBox="0 0 200 48" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="32" fontFamily="Sen, sans-serif" fontSize="24" fontWeight="700" fill="#ffffff">
                MATSUTOKEN
              </text>
            </svg>
          </a>
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
            <li><a href="#top">ホーム</a></li>
            <li><a href="#feature">まつ塗研の特徴</a></li>
            <li><a href="#service">事業内容</a></li>
            <li><a href="#about">会社概要</a></li>
            <li><a href="#works">施工実績</a></li>
            <li><a href="#recruit">採用情報</a></li>
            <li><a href="#news">新着情報</a></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
      <p className={styles.copyright}>©2017-2026 まつ塗研 All Rights Reserved.</p>
    </footer>
  );
}
