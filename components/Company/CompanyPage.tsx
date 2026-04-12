import styles from './CompanyPage.module.css';

const companyInfo: [string, string][] = [
  ['会社名', '株式会社ユタカプラス'],
  ['設立日', '2013年11月22日'],
  ['本社', '〒476-0002 東海市名和町吹付63番地'],
  ['名古屋支社', '〒459-8011 名古屋市緑区定納山2丁目1210番地'],
  ['電話番号', '052-693-9169'],
  ['FAX番号', '052-693-9168'],
  ['資本金', '2,000万円'],
  ['従業員数', '9名'],
  ['許可番号', '愛知県知事許可 （般-31）第107292号'],
];

const qualifications = [
  '一級塗装技能士: 3名',
  '一級塗装技能士 鋼橋塗装: 2名',
];

const history: [string, string][] = [
  ['2004年1月', 'ユタカペイント創業'],
  ['2013年11月', '株式会社ユタカペイントとして法人化'],
  ['2020年12月', '資本金を2,000万円に増資'],
  ['2023年3月', '本社を東海市に移転、株式会社ユタカプラスに社名変更'],
];

const sdgs = [
  'ワークライフバランスの実現',
  '質の高い雇用',
  '責任ある経営',
  'エコキャップリサイクル活動',
];

export default function CompanyPage() {
  return (
    <>
      <section className={styles.visionSection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>VISION</p>
          <h2 className={styles.fontJp}>ビジョン</h2>
        </div>
        <p className={styles.visionText}>
          もっと、もっと、をずっと、これからも追求し
          <br />
          お客様の未来をもっとユタカに
        </p>
      </section>

      <section className={styles.messageSection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>MESSAGE</p>
          <h2 className={styles.fontJp}>代表メッセージ</h2>
        </div>
        <div className={styles.messageBody}>
          <div className={`${styles.messageImg} placeholder`}>REPRESENTATIVE IMAGE</div>
          <div className={styles.messageText}>
            <p className={styles.messageName}>代表取締役 内野 豊</p>
            <p>
              お客様の建物・設備を長期にわたり守るため、徹底した安全管理と品質管理を軸に、
              お客様一人ひとりに寄り添った塗装工事をご提案しています。
              資格保有の職人が誠実な対応と確実な指揮を心がけ、
              これからもお客様の未来をもっとユタカにしていくことを追求してまいります。
            </p>
          </div>
        </div>
      </section>

      <section className={styles.companyInfoSection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>COMPANY</p>
          <h2 className={styles.fontJp}>会社概要</h2>
        </div>
        <table className={styles.companyTable}>
          <tbody>
            {companyInfo.map(([k, v]) => (
              <tr key={k}>
                <th>{k}</th>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.qualificationsSection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>QUALIFICATION</p>
          <h2 className={styles.fontJp}>保有資格</h2>
        </div>
        <ul className={styles.qualList}>
          {qualifications.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </section>

      <section className={styles.historySection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>HISTORY</p>
          <h2 className={styles.fontJp}>沿革</h2>
        </div>
        <table className={styles.companyTable}>
          <tbody>
            {history.map(([date, event]) => (
              <tr key={date}>
                <th>{date}</th>
                <td>{event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.sdgsSection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>SDGs</p>
          <h2 className={styles.fontJp}>SDGsへの取り組み</h2>
        </div>
        <ul className={styles.sdgsList}>
          {sdgs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
