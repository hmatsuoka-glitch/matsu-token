import styles from './ServicePage.module.css';

const benefits = [
  {
    title: '防水防錆',
    text: '雨風の侵食によって発生してしまうサビや雨漏りを塗装によって防ぎます。',
  },
  {
    title: '安全性・環境整備',
    text: '塗装で建物の耐久性を上げ、サビによる老朽化を防ぎ、安心して利用できる環境を整えます。',
  },
  {
    title: '耐久性・防護性',
    text: '耐久性を維持し安全性を確保、塗装剥がれを保護しケガを防ぎます。',
  },
  {
    title: '保護・耐候性',
    text: '塗装で外壁を保護することで、マンションやビルなどの耐候性が向上します。',
  },
  {
    title: '遮熱・省エネ',
    text: '遮熱・断熱機能のある塗料で紫外線や太陽熱による劣化を防ぎ、省エネにつなげます。',
  },
  {
    title: '美観維持',
    text: '仕上げ塗装で見た目の印象をぐっと美しく生まれ変わらせます。',
  },
];

const categories = [
  '塗装・吹付け工事',
  '塗床工事',
  '防水工事',
  'コーキング工事',
  '足場工事',
  '補修工事（アスベスト除去）',
  '左官工事',
  '板金工事',
];

export default function ServicePage() {
  return (
    <>
      <div className={styles.tabButtons}>
        <button className={styles.tabBtn}>一般建築物内外塗装</button>
        <button className={styles.tabBtn}>最近の施工事例</button>
      </div>

      <section className={styles.serviceSection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>SERVICE</p>
          <h2 className={styles.fontJp}>一般建築物修繕工事</h2>
        </div>
        <p className={styles.serviceDesc}>
          ビルや工場の外壁塗装や防水工事から、公共施設や商業施設等の塗装改修工事など、
          塗装のプロフェッショナルとして様々なタイプの建築物の塗装に係る工事施工に携わっています。
          日々職人が技術の向上に励み、建物の状況に合わせた塗料と施工方法をご提案。
          建築物の耐候性を重視し、利用する人々が安心できる環境をご提供します。
        </p>

        <div className={styles.benefitGrid}>
          {benefits.map((b) => (
            <div key={b.title} className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>{b.title}</h3>
              <p className={styles.benefitText}>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.categorySection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>CATEGORY</p>
          <h2 className={styles.fontJp}>工事内容</h2>
        </div>
        <div className={styles.categoryGrid}>
          {categories.map((c) => (
            <div key={c} className={styles.categoryCard}>
              <div className={`${styles.categoryImg} placeholder`}>{c}</div>
              <p className={styles.categoryName}>{c}</p>
            </div>
          ))}
        </div>
        <div className={styles.btnWrap}>
          <a href="/works/">施工事例一覧を見る</a>
        </div>
      </section>
    </>
  );
}
