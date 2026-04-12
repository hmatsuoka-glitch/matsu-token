import styles from './Feature.module.css';

const features = [
  {
    num: '01',
    title: '事前無料診断',
    desc: '塗装前にお住まいの状態を丁寧に診断いたします。屋根や外壁の劣化状況を専門の目でチェックし、最適な塗装プランを無料でご提案します。',
  },
  {
    num: '02',
    title: '明瞭価格',
    desc: 'お見積りは詳細な内訳を明記し、追加費用が発生しない明瞭な価格設定を徹底しています。安心してご依頼いただけるよう、誠実な価格をお約束します。',
  },
  {
    num: '03',
    title: '下地補修へのこだわり',
    desc: '塗装の仕上がりと耐久性を左右する「下地調整」。まつ塗研では、大工仕事や左官仕事を含む下地補修を丁寧に行い、長持ちする塗装を実現します。',
  },
  {
    num: '04',
    title: '山陰の気候を知り尽くした施工',
    desc: '雨や雪が多い山陰地方の気候に合わせた塗料選定と施工方法で、地域の住まいを長く守ります。40年以上の経験が活きる確かな判断力。',
  },
  {
    num: '05',
    title: '地域密着の信頼',
    desc: '安来市を中心に、地域の皆さまとの信頼関係を大切にしてきました。ご近所の方からのご紹介も多く、長くお付き合いいただけるのが私たちの誇りです。',
  },
];

export default function Feature() {
  return (
    <section className={styles.homeFeature}>
      <p className={styles.homeTtlDeco}>OUR FEATURE</p>
      <div className={styles.inner}>
        <h2 className={`${styles.homeTtl} ${styles.homeTtlCtr}`}>
          <span className={styles.fontEn}>FEATURE</span>
          <span className={styles.fontJp}>まつ塗研の特徴</span>
        </h2>
        <p className={`${styles.homeTxt} ${styles.txtCtr}`}>
          創業40年以上、山陰の住まいに寄り添い続けてきたまつ塗研では、
          丁寧な仕事を大切にする職人たちが、細部まで心を配った確かな施工を行っています。
          まずはお気軽にご相談ください。
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
