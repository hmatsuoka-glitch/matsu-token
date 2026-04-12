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
    year: '施工実績',
    title: '戸建住宅 外壁・屋根塗装工事',
    buildingType: '一般住宅',
    workType: '外壁塗装・屋根塗装',
    area: '安来市',
  },
  {
    year: '施工実績',
    title: 'アパート外壁塗装工事',
    buildingType: '集合住宅',
    workType: '外壁塗装',
    area: '安来市',
  },
  {
    year: '施工実績',
    title: '戸建住宅 屋根塗装工事',
    buildingType: '一般住宅',
    workType: '屋根塗装',
    area: '安来市広瀬町',
  },
  {
    year: '施工実績',
    title: '倉庫 鉄骨塗装工事',
    buildingType: 'その他',
    workType: '鉄部塗装',
    area: '安来市',
  },
  {
    year: '施工実績',
    title: '店舗 内装塗装工事',
    buildingType: '店舗',
    workType: '内装塗装',
    area: '安来市',
  },
  {
    year: '施工実績',
    title: '戸建住宅 外壁・防水工事',
    buildingType: '一般住宅',
    workType: '外壁塗装・防水工事',
    area: '松江市',
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
      <p className={styles.homeTtlDeco}>MATSUTOKEN</p>
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
