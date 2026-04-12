import styles from './RecruitPage.module.css';

const abouts = [
  { title: '求める人材像', text: '責任感と向上心を持った方' },
  { title: 'スキルアップ', text: '資格取得費用を会社が全額負担' },
  { title: 'やりがい', text: '常に新しい挑戦と成長' },
  { title: '社風', text: '若い社員が多く、社員旅行や温泉旅行も' },
  { title: '仕事の魅力', text: '建物が生まれ変わる達成感、地域貢献' },
  { title: '福利厚生', text: '社会保険完備、育休取得可能、残業なし、有給休暇、退職金制度' },
];

const interviews = [
  { name: 'K・S', year: '2018年入社', text: '飲食業から転職、現在は管理職として複数案件を担当' },
  { name: 'S・U', year: '2014年入社', text: '塗装歴9年、現在は現場リーダー、1級塗装技能士' },
  { name: 'T・K', year: '2014年入社', text: '大工出身、完成時の達成感が魅力' },
  { name: 'T・O', year: '2022年入社', text: '工場鉄骨塗装から建築塗装へ転身、資格11個保有' },
  { name: 'T・N', year: '2024年入社', text: '40代後半で異業種から転職、急速にスキル向上' },
];

const requirements = [
  {
    title: '施工管理（経験者）',
    rows: [
      ['月給', '350,000円〜'],
      ['基本給', '264,000円 + 固定残業代: 86,000円（42時間分）'],
      ['必須', '普通自動車免許'],
      ['資格', '塗装経験5年以上 or 施工管理経験3年以上 or 2級施工管理技士以上'],
      ['勤務時間', '8:30〜17:30（休憩60分）'],
      ['休日', '年間105日、有給休暇、年末年始休暇'],
      ['試用期間', '1〜3ヶ月'],
    ],
  },
  {
    title: '施工管理（未経験）',
    rows: [
      ['月給', '要相談'],
      ['必須', '普通自動車免許'],
      ['勤務時間', '8:30〜17:30（休憩60分）'],
      ['休日', '年間105日、有給休暇、年末年始休暇'],
      ['試用期間', '1〜3ヶ月'],
    ],
  },
  {
    title: '塗装工',
    rows: [
      ['月給', '要相談'],
      ['必須', '普通自動車免許'],
      ['勤務時間', '8:30〜17:30（休憩60分）'],
      ['休日', '年間105日、有給休暇、年末年始休暇'],
      ['試用期間', '1〜3ヶ月'],
    ],
  },
];

export default function RecruitPage() {
  return (
    <>
      <section className={styles.recruitMessage}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>MESSAGE</p>
          <h2>2023年、新社屋誕生！</h2>
        </div>
        <p>
          私たちと一緒にユタカプラスで働きませんか？
          <br />
          責任感と向上心を持った方、未経験でも歓迎します。
          <br />
          資格取得費用の会社負担、社員旅行、充実した福利厚生であなたの成長をサポートします。
        </p>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>ABOUT</p>
          <h2 className={styles.fontJp}>ユタカプラスについて</h2>
        </div>
        <div className={styles.aboutGrid}>
          {abouts.map((a) => (
            <div key={a.title} className={styles.aboutCard}>
              <h3 className={styles.aboutTitle}>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.interviewSection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>INTERVIEW</p>
          <h2 className={styles.fontJp}>社員インタビュー</h2>
        </div>
        <div className={styles.interviewGrid}>
          {interviews.map((i) => (
            <div key={i.name} className={styles.interviewCard}>
              <div className={`${styles.interviewImg} placeholder`}>INTERVIEW</div>
              <div className={styles.interviewBody}>
                <p className={styles.interviewName}>{i.name}</p>
                <p className={styles.interviewYear}>{i.year}</p>
                <p>{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.requirementsSection}>
        <div className={styles.ttlWrap}>
          <p className={styles.fontEn}>REQUIREMENTS</p>
          <h2 className={styles.fontJp}>募集要項</h2>
        </div>
        {requirements.map((r) => (
          <div key={r.title} className={styles.requirementBlock}>
            <h3 className={styles.requirementTitle}>【{r.title}】</h3>
            <table className={styles.requirementTable}>
              <tbody>
                {r.rows.map(([k, v]) => (
                  <tr key={k}>
                    <th>{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <p className={styles.contactNote}>担当: 内野 052-693-9169</p>
      </section>
    </>
  );
}
