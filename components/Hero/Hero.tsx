'use client';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const slides = [
  { label: 'SLIDE IMAGE 1' },
  { label: 'SLIDE IMAGE 2' },
  { label: 'SLIDE IMAGE 3' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="top" className={styles.hero}>
      <div className={styles.heroSlide}>
        <ul className={styles.heroSlideBlur}>
          <li>
            <div className={styles.heroSlideImg}>
              <div className="placeholder" style={{ height: '100%' }}>
                {slides[current].label}
              </div>
            </div>
          </li>
        </ul>
        <ul className={styles.heroSlidePc}>
          <li>
            <div className={styles.heroSlideImg}>
              <div className="placeholder" style={{ height: '100%' }}>
                {slides[current].label}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.heroCatch}>
        <h2 className={styles.heroTitle}>創業40年以上の確かな技術で、<br />あなたの住まいをもっと美しく。</h2>
        <p className={styles.heroText}>
          確かな塗装技術で、地域の暮らしを守り続ける。
          <br />
          この街の住まいを守ることは、そこで暮らす人の未来を守ること。
          <br />
          まつ塗研は、地域に根ざした技術と責任で
          <br />
          安心できる住まいづくりに貢献し続けます。
        </p>
        <div className={styles.ctaButtons}>
          <a className={`${styles.ctaBtn} ${styles.ctaBtnGreen}`} href="#contact">まずはお見積り</a>
          <a className={`${styles.ctaBtn} ${styles.ctaBtnBlue}`} href="#contact">個人のお客様はこちら</a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <p>SCROLL</p>
        <span className={styles.scrollLine}></span>
      </div>
    </div>
  );
}
