import styles from './FeaturePage.module.css';

const features = [
  {
    num: '01',
    title: '愛知県を中心に豊富な実績があります',
    text: '地域生活のなかで欠かせない鉄道や高速道路の施設、地域の人々の憩いとなる動物園や水族館、そして学校や病院、工場など、愛知県を中心に、東海地方で幅広い施工実績があります。建築物の新築から修繕工事全般のほか、鉄道や高速道路の施設、公園、学校、工場までその施工範囲は多岐にわたります。',
    img: 'FEATURE IMAGE 01',
  },
  {
    num: '02',
    title: '安全管理を徹底し、品質向上に努めます',
    text: '安全訓練を徹底し、協力業者も含めて新規入作業者教育を実施。安全意識の向上を努めてまいります。また、環境に応じた安全な材料の選定にも力を入れています。',
    img: 'FEATURE IMAGE 02',
  },
  {
    num: '03',
    title: '柔軟かつスピーディーな対応力に自信があります',
    text: '扉１枚の塗装からマンションの大規模改修まで、大小問わずあらゆる工事のニーズに合わせたプランで対応します。高所作業や、夜間作業なども承っております。',
    img: 'FEATURE IMAGE 03',
  },
  {
    num: '04',
    title: 'キャリアアップシステムやグリーンサイトに登録しています',
    text: '「建設キャリアアップシステム」と「グリーンサイト」に登録しているので、安心してご依頼ください。また、高齢化が進む塗装業において資格保有の若手職人が活躍。末永くお付き合いできます。',
    img: 'FEATURE IMAGE 04',
  },
  {
    num: '05',
    title: 'ニーズにあったコスト管理でお役にたります',
    text: '急な施工案件や技術的な知見が必要な案件にも対応可能です。お客様のニーズに合わせた最適なコストプランをご提案いたします。',
    img: 'FEATURE IMAGE 05',
  },
];

export default function FeaturePage() {
  return (
    <>
      <div className={styles.featureIntro}>
        <p>
          公共施設からインフラ設備、オフィスビルまで幅広い現場を担ってきたユタカプラスでは、
          資格保有の職人が安全面・品質面で常に最善を尽くし、環境に留意した施工を行っています。
          夜間やお急ぎの場合も柔軟に対応いたしますので、お気軽にご相談ください。
        </p>
      </div>

      {features.map((f) => (
        <section key={f.num} className={styles.featureSection}>
          <div className={styles.featureImg}>
            <div className={`${styles.featureImgBox} placeholder`}>{f.img}</div>
          </div>
          <div className={styles.featureContent}>
            <p className={styles.featureNum}>{f.num}</p>
            <h2 className={styles.featureTitle}>{f.title}</h2>
            <p className={styles.featureText}>{f.text}</p>
          </div>
        </section>
      ))}
    </>
  );
}
