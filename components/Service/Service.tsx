import styles from './Service.module.css';

const services = [
  { num: '01', text: '外壁塗装' },
  { num: '02', text: '屋根塗装' },
  { num: '03', text: '内装塗装' },
  { num: '04', text: '部分補修・鉄部塗装' },
];

export default function Service() {
  return (
    <section id="service" className={styles.homeService}>
      <div className={styles.serviceContent}>
        <div className={styles.cercleList}>
          <div className={styles.cercleTtlBox}>
            <h3 className={styles.cercleTtl}>4つのサービスで住まいをトータルサポート</h3>
          </div>
          <ul>
            {services.map((s) => (
              <li key={s.num}>
                <p className={styles.num}>{s.num}</p>
                <p className={styles.cercleTxt}>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.txtarea}>
          <h2 className={styles.homeTtl}>
            <span className={styles.fontEn}>SERVICE</span>
            <span className={styles.fontJp}>事業内容</span>
          </h2>
          <p className={styles.serviceText}>
            まつ塗研は、丁寧な診断と誠実な提案でお客様の住まいに最適な塗装を届けます。
            &quot;ただ塗る&quot;だけではなく、住まいを長く守るために最適な施工をご提案します。
            毎日見る景色に、美しい彩りと安心を。
          </p>
          <div className={styles.btn}>
            <a href="#contact">お問い合わせはこちら</a>
          </div>
        </div>
      </div>
      <p className={`${styles.homeTtlDeco} ${styles.homeTtlDecoVertical}`}>SERVICE</p>
    </section>
  );
}
