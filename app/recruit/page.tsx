import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import ContactSection from '@/components/ContactSection/ContactSection';
import styles from './Recruit.module.css';

export const metadata = {
  title: '採用情報 | まつ塗研',
  description: 'まつ塗研の採用情報です。塗装工を募集しています。',
};

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main>
        <SubpageHeader titleEn="RECRUIT" titleJp="採用情報" breadcrumb="採用情報" />

        {/* メッセージ */}
        <section className={styles.recruitMessage}>
          <div className={styles.inner}>
            <h2 className={styles.messageTitle}>
              <span className={styles.messageEn}>MESSAGE</span>
            </h2>
            <p className={styles.messageText}>
              わたしたちは個のちからを最大限に活かしたチーム戦を実践しています。
              チームのビジョンに共感し、共に前進できる仲間を探しています。
              未来の自分と、未来の暮らしをわたしたちと一緒につくりませんか？
            </p>
          </div>
        </section>

        {/* 会社の特徴 */}
        <section className={styles.aboutCompany}>
          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionEn}>ABOUT</span>
              まつ塗研はこんな会社です
            </h2>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <div className={styles.iconPlaceholder}>01</div>
                </div>
                <h3>求める人材</h3>
                <p>真面目にコツコツ取り組める方、塗装に興味のある方歓迎</p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <div className={styles.iconPlaceholder}>02</div>
                </div>
                <h3>スキルアップ</h3>
                <p>先輩職人が丁寧に指導。未経験からでも一人前の職人に</p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <div className={styles.iconPlaceholder}>03</div>
                </div>
                <h3>やりがい</h3>
                <p>建物が美しく生まれ変わる瞬間の達成感</p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <div className={styles.iconPlaceholder}>04</div>
                </div>
                <h3>社風</h3>
                <p>少人数だからこそのアットホームな雰囲気</p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <div className={styles.iconPlaceholder}>05</div>
                </div>
                <h3>仕事の魅力</h3>
                <p>地域の住まいを守る社会貢献</p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <div className={styles.iconPlaceholder}>06</div>
                </div>
                <h3>福利厚生</h3>
                <p>社会保険完備</p>
              </div>
            </div>
          </div>
        </section>

        {/* 社員インタビュー */}
        <section className={styles.interview}>
          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionEn}>INTERVIEW</span>
              先輩社員の声
            </h2>
            <div className={styles.interviewList}>
              <div className={styles.interviewCard}>
                <div className={styles.interviewImg}>
                  <div className={styles.imgPlaceholder}>写真</div>
                </div>
                <div className={styles.interviewBody}>
                  <h3>松岡 拳（職人・経験21年）</h3>
                  <p>
                    「塗装一筋でやってきました。建物が綺麗になっていく過程が一番のやりがいです。」
                  </p>
                </div>
              </div>
              <div className={styles.interviewCard}>
                <div className={styles.interviewImg}>
                  <div className={styles.imgPlaceholder}>写真</div>
                </div>
                <div className={styles.interviewBody}>
                  <h3>小山 浩二（職人・経験31年）</h3>
                  <p>「この仕事は信頼が命。お客様に喜んでもらえた時が何より嬉しい。」</p>
                </div>
              </div>
              <div className={styles.interviewCard}>
                <div className={styles.interviewImg}>
                  <div className={styles.imgPlaceholder}>写真</div>
                </div>
                <div className={styles.interviewBody}>
                  <h3>成相 謙吾（職人・経験5年）</h3>
                  <p>
                    「先輩方に教えてもらいながら、日々成長を実感しています。最近父親になり、より責任感を持って仕事に取り組んでいます。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 募集要項 */}
        <section className={styles.requirements}>
          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionEn}>REQUIREMENTS</span>
              募集要項
            </h2>
            <table className={styles.reqTable}>
              <tbody>
                <tr>
                  <th>職種名</th>
                  <td>塗装工</td>
                </tr>
                <tr>
                  <th>仕事内容</th>
                  <td>戸建住宅・集合住宅の外壁塗装、屋根塗装、内装塗装、鉄部塗装など</td>
                </tr>
                <tr>
                  <th>勤務地</th>
                  <td>島根県安来市およびその周辺</td>
                </tr>
                <tr>
                  <th>勤務時間</th>
                  <td>8:00〜17:00（休憩60分）</td>
                </tr>
                <tr>
                  <th>給与</th>
                  <td>経験・能力に応じて優遇（詳細は面談にて）</td>
                </tr>
                <tr>
                  <th>休日</th>
                  <td>日曜・祝日、GW、お盆、年末年始</td>
                </tr>
                <tr>
                  <th>応募資格</th>
                  <td>普通自動車免許（必須）、塗装経験者優遇、未経験者歓迎</td>
                </tr>
                <tr>
                  <th>待遇</th>
                  <td>社会保険完備、車通勤可</td>
                </tr>
                <tr>
                  <th>採用担当</th>
                  <td>松岡 0854-32-3181</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
