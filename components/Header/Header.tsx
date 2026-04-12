'use client';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.headerLogo}>
          <a href="#top" onClick={closeMenu}>
            <svg viewBox="0 0 200 48" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="32" fontFamily="Sen, sans-serif" fontSize="24" fontWeight="700" fill="#3FB5EA">
                MATSUTOKEN
              </text>
            </svg>
          </a>
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
            <li><a href="#top">ホーム</a></li>
            <li><a href="#feature">まつ塗研の特徴</a></li>
            <li><a href="#service">事業内容</a></li>
            <li><a href="#about">会社概要</a></li>
            <li><a href="#works">施工実績</a></li>
            <li><a href="#recruit">採用情報</a></li>
          </ul>
        </nav>

        <div className={styles.ctaButtons}>
          <a className={`${styles.ctaBtn} ${styles.ctaBtnGreen}`} href="#contact">まずはお見積り</a>
          <a className={`${styles.ctaBtn} ${styles.ctaBtnBlue}`} href="#contact">個人のお客様はこちら</a>
        </div>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayActive : ''}`}
        onClick={closeMenu}
      />

      <nav className={`${styles.drawer} ${isMenuOpen ? styles.drawerActive : ''}`}>
        <ul className={styles.drawerMenu}>
          <li><a href="#top" onClick={closeMenu}>ホーム</a></li>
          <li><a href="#feature" onClick={closeMenu}>まつ塗研の特徴</a></li>
          <li><a href="#service" onClick={closeMenu}>事業内容</a></li>
          <li><a href="#about" onClick={closeMenu}>会社概要</a></li>
          <li><a href="#works" onClick={closeMenu}>施工実績</a></li>
          <li><a href="#recruit" onClick={closeMenu}>採用情報</a></li>
        </ul>
        <div className={styles.drawerTel}>
          <p className={styles.drawerTelLabel}>TEL.</p>
          <a href="tel:0854323181" className={styles.drawerTelNum}>0854-32-3181</a>
          <p className={styles.drawerTelTime}>［受付時間］月〜金 9:00〜17:00</p>
        </div>
        <div className={styles.drawerCta}>
          <a href="#contact" className={styles.drawerCtaBtn} onClick={closeMenu}>
            まずはお見積り
          </a>
        </div>
      </nav>
    </header>
  );
}
