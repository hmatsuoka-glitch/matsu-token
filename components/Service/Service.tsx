import styles from './Service.module.css';

const services = [
  { num: '01', text: '塗装・吹付け工事' },
  { num: '02', text: '塗床工事' },
  { num: '03', text: '防水工事' },
  { num: '04', text: 'コーキング工事' },
  { num: '05', text: '足場工事' },
  { num: '06', text: '補修工事（アスベスト除去）' },
  { num: '07', text: '左官工事' },
  { num: '08', text: '板金工事' },
];

export default function Service() {
  return (
    <section className={styles.homeService}>
      <div className={styles.serviceContent}>
        <div className={styles.cercleList}>
          <div className={styles.cercleTtlBox}>
            <h3 className={styles.cercleTtl}>8つの事業を中心に一括対応</h3>
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
            建築物の新築や修繕工事全般を請け負っております。
            8つの事業を中心に建物に関するあらゆる工事を一括でお任せいただけます。
            耐候性を重視し、利用する人々の暮らしを豊かに、安心できる環境をご提供します。
          </p>
          <div className={styles.btn}>
            <a href="/service/">事業内容一覧</a>
          </div>
        </div>
      </div>
      <p className={`${styles.homeTtlDeco} ${styles.homeTtlDecoVertical}`}>SERVICE</p>
    </section>
  );
}
