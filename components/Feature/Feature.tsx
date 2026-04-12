import styles from './Feature.module.css';

const features = [
  {
    num: '01',
    title: '豊富な実績',
    desc: '地域生活のなかで欠かせない鉄道や高速道路の施設、地域の人々の憩いとなる動物園や水族館、そして学校や病院、工場など、愛知県を中心に、東海地方で幅広い施工実績があります。',
  },
  {
    num: '02',
    title: '安全管理と品質管理',
    desc: '安全訓練を徹底し、協力業者も含めて新規入作業者教育を実施。安全意識の向上を努めてまいります。また、環境に応じた安全な材料の選定にも力を入れています。',
  },
  {
    num: '03',
    title: '柔軟な対応力',
    desc: '扉１枚の塗装からマンションの大規模改修まで、大小問わずあらゆる工事のニーズに合わせたプランで対応します。高所作業や、夜間作業なども承っております。',
  },
  {
    num: '04',
    title: 'キャリアアップ＆グリーンサイトに登録',
    desc: '「建設キャリアアップシステム」と「グリーンサイト」に登録しているので、安心してご依頼ください。また、高齢化が進む塗装業において資格保有の若手職人が活躍。末永くお付き合いできます。',
  },
  {
    num: '05',
    title: 'ニーズにあったコスト管理',
    desc: '急な施工案件や技術的な知見が必要な案件にも対応可能です。',
  },
];

export default function Feature() {
  return (
    <section className={styles.homeFeature}>
      <p className={styles.homeTtlDeco}>OUR FEATURE</p>
      <div className={styles.inner}>
        <h2 className={`${styles.homeTtl} ${styles.homeTtlCtr}`}>
          <span className={styles.fontEn}>FEATURE</span>
          <span className={styles.fontJp}>ユタカプラスの特徴</span>
        </h2>
        <p className={`${styles.homeTxt} ${styles.txtCtr}`}>
          公共施設からインフラ設備、オフィスビルまで幅広い現場を担ってきたユタカプラスでは、
          資格保有の職人が安全面・品質面で常に最善を尽くし、環境に留意した施工を行っています。
          夜間やお急ぎの場合も柔軟に対応いたしますので、お気軽にご相談ください。
        </p>
      </div>
      <div className={styles.featureBox}>
        <ul className={styles.featureList}>
          {features.map((f) => (
            <li key={f.num} className={styles.featureItem}>
              <div className={styles.featureNumDeco}>
                <p className={styles.featureNum}>{f.num}</p>
                <p className={styles.featureLabel}>FEATURE{f.num}</p>
              </div>
              <dl className={styles.featureDtl}>
                <dt>{f.title}</dt>
                <dd>{f.desc}</dd>
              </dl>
            </li>
          ))}
          <li className={styles.featureBtn}>
            <a href="/feature/">特徴をもっと詳しく見る</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
