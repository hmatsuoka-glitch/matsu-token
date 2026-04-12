'use client';
import { useState } from 'react';
import styles from './Works.module.css';

interface Work {
  year: string;
  title: string;
  buildingType: string;
  workType: string;
  area: string;
}

const works: Work[] = [
  {
    year: '2025年',
    title: '西区 Mマンション 外部改修工事',
    buildingType: '集合住宅',
    workType: '補修工事・足場工事・コーキング工事・防水工事・塗装・吹付け工事・その他',
    area: '名古屋市',
  },
  {
    year: '2025年',
    title: '東海市 倉庫 塗床工事',
    buildingType: '社屋・工場',
    workType: '塗床工事',
    area: '愛知県（名古屋市以外）',
  },
  {
    year: '2025年',
    title: '常滑市 アパート駐車場 ライン引き工事',
    buildingType: '集合住宅',
    workType: 'その他',
    area: '愛知県（名古屋市以外）',
  },
  {
    year: '2025年',
    title: '中区 オフィス タイル調特殊塗装工事',
    buildingType: 'オフィス',
    workType: 'その他',
    area: '名古屋市',
  },
  {
    year: '2024年',
    title: '碧南市 H高校 校舎改修工事',
    buildingType: '学校',
    workType: 'その他',
    area: '愛知県（名古屋市以外）',
  },
  {
    year: '2026年',
    title: '東海市 駐車場白線工事',
    buildingType: '店舗集合住宅',
    workType: 'その他',
    area: '愛知県（名古屋市以外）',
  },
];

export default function Works() {
  const [index, setIndex] = useState(0);
  const perPage = 3;
  const maxIndex = Math.max(0, works.length - perPage);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className={styles.homeWorks}>
      <p className={styles.homeTtlDeco}>YUTAKA PLUS</p>
      <div className={styles.ttlarea}>
        <h2 className={styles.homeTtl}>
          <span className={styles.fontEn}>WORKS</span>
          <span className={styles.fontJp}>施工実績</span>
        </h2>
        <div className={styles.worksSlideControl}>
          <button className={styles.controlBtn} aria-label="prev" onClick={prev}>
            <span className={`${styles.arrow} ${styles.arrowLeft}`}></span>
          </button>
          <button className={styles.controlBtn} aria-label="next" onClick={next}>
            <span className={styles.arrow}></span>
          </button>
        </div>
      </div>

      <div className={styles.worksSlide}>
        <div
          className={styles.slideTrack}
          style={{ transform: `translateX(-${index * (100 / perPage)}%)` }}
        >
          {works.map((work, i) => (
            <div key={i} className={styles.worksSlideItem}>
              <div className={styles.post}>
                <div className={styles.postImg}>
                  <div className={`${styles.postImgBox} placeholder`}>WORKS IMAGE</div>
                </div>
                <div className={styles.postTxtarea}>
                  <div className={styles.postInfo}>
                    <p>建物の種類</p>
                    <span className={styles.postInfoTag}>{work.buildingType}</span>
                  </div>
                  <div className={styles.postInfo}>
                    <p>工事の種類</p>
                    <span className={styles.postInfoTag}>{work.workType}</span>
                  </div>
                  <div className={styles.postInfo}>
                    <p>施工エリア</p>
                    <span className={`${styles.postInfoTag} ${styles.postInfoTagArea}`}>{work.area}</span>
                  </div>
                  <p className={styles.postDate}>{work.year}</p>
                  <h3 className={styles.postTtl}>
                    <a href="/works/">{work.title}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.btnWrap}>
        <a href="/works/">施工実績一覧を見る</a>
      </div>
    </section>
  );
}
