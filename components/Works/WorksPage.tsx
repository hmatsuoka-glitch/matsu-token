'use client';
import { useState } from 'react';
import styles from './WorksPage.module.css';

const buildingFilters = ['公共施設', '社屋・工場', '店舗', '集合住宅', '一般住宅', 'その他'];
const workFilters = [
  '板金工事',
  '左官工事',
  '補修工事（アスベスト除去）',
  '足場工事',
  'コーキング工事',
  '防水工事',
  '塗床工事',
  '塗装・吹付け工事',
  'その他',
];
const areaFilters = ['名古屋市', '愛知県（名古屋市以外）', '岐阜・三重', 'その他'];

const works = [
  { year: '2024年', title: '碧南市 H高校 校舎改修工事', tags: ['学校', '塗装・吹付け工事'] },
  { year: '2026年', title: '東海市 駐車場白線工事', tags: ['その他', 'その他'] },
  { year: '2025年', title: '西区 Mマンション 外部改修工事', tags: ['集合住宅', '塗装・吹付け工事'] },
  { year: '2025年', title: '東海市 倉庫 塗床工事', tags: ['社屋・工場', '塗床工事'] },
  { year: '2025年', title: '常滑市 アパート駐車場 ライン引き工事', tags: ['集合住宅', 'その他'] },
  { year: '2025年', title: '中区 オフィス タイル調特殊塗装工事', tags: ['店舗', '塗装・吹付け工事'] },
  { year: '2025年', title: '清須市 天然温泉施設 軒天特殊塗装工事', tags: ['店舗', '塗装・吹付け工事'] },
  { year: '2025年', title: '名古屋市 門塀打放し特殊塗装', tags: ['一般住宅', '塗装・吹付け工事'] },
  { year: '2025年', title: '稲沢市 C小学校 給食室改修工事', tags: ['公共施設', '塗装・吹付け工事'] },
  { year: '2025年', title: '稲沢市 C中学校 給食室改修工事', tags: ['公共施設', '塗装・吹付け工事'] },
];

export default function WorksPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  return (
    <>
      <section className={styles.filterSection}>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>建物の種類</span>
          {buildingFilters.map((f) => (
            <span key={f} className={styles.filterTag}>{f}</span>
          ))}
        </div>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>工事の種類</span>
          {workFilters.map((f) => (
            <span key={f} className={styles.filterTag}>{f}</span>
          ))}
        </div>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>施工エリア</span>
          {areaFilters.map((f) => (
            <span key={f} className={styles.filterTag}>{f}</span>
          ))}
        </div>
      </section>

      <section className={styles.worksGrid}>
        {works.map((w, i) => (
          <article key={i} className={styles.workCard}>
            <div className={styles.workCardImg}>
              <div className="placeholder" style={{ height: '100%' }}>WORK IMAGE</div>
            </div>
            <div className={styles.workCardBody}>
              <p className={styles.workCardDate}>{w.year}</p>
              <h3 className={styles.workCardTitle}>{w.title}</h3>
              <div className={styles.workCardTags}>
                {w.tags.map((t) => (
                  <span key={t} className={styles.workCardTag}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            className={`${styles.pageNum} ${n === currentPage ? styles.active : ''}`}
            onClick={() => setCurrentPage(n)}
          >
            {n}
          </button>
        ))}
      </div>
    </>
  );
}
