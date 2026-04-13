import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import ContactSection from '@/components/ContactSection/ContactSection';
import styles from './Company.module.css';

export const metadata = {
  title: '会社概要 | まつ塗研',
  description: 'まつ塗研の会社概要、代表メッセージ、スタッフ紹介、沿革をご紹介します。',
};

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        <SubpageHeader titleEn="COMPANY" titleJp="会社概要" breadcrumb="会社概要" />

        {/* ビジョン */}
        <section className={styles.vision}>
          <div className={styles.inner}>
            <p className={styles.visionEn}>ABOUT MATSUTOKEN</p>
            <h2 className={styles.visionTitle}>
              皆様に塗装のことをわかりやすく、安心して、
              <br />
              お任せいただけるように
            </h2>
            <p className={styles.visionText}>
              私たちの暮らしを取り巻く住環境は、時代とともに大きく変化しています。
              気候や生活スタイルの変化によって、住まいにはこれまで以上に「安心」と「快適さ」が求められるようになりました。
              まつ塗研は、創業40年以上。地域に根ざした職人として、
              長年培ってきた確かな技術と経験で、変わりゆく住まいの課題に誠実に向き合い、
              お客様の不安をひとつずつ取り除くことを使命としています。
            </p>
          </div>
        </section>

        {/* 代表メッセージ */}
        <section className={styles.message}>
          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionEn}>MESSAGE</span>
              代表メッセージ
            </h2>
            <div className={styles.messageContent}>
              <div className={styles.messageImg}>
                <div className={styles.imgPlaceholder}>代表写真</div>
              </div>
              <div className={styles.messageText}>
                <p>
                  まつ塗研は、島根県安来市に拠点を置く塗装会社です。
                  屋根の塗装、外壁の塗装、リフォームを中心にお客様のご要望をしっかりとお聞きし、
                  わかりやすくご説明させていただくことを大切にしています。
                </p>
                <p>
                  創業以来38年以上、塗装一筋で歩んでまいりました。
                  「お客様に安心してお任せいただける塗装会社でありたい」という想いを胸に、
                  これからも地域の皆さまの住まいを守り続けてまいります。
                </p>
                <p className={styles.messageName}>
                  まつ塗研 代表
                  <br />
                  <strong>松岡 正</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* スタッフ紹介 */}
        <section className={styles.staff}>
          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionEn}>STAFF</span>
              スタッフ紹介
            </h2>
            <div className={styles.staffGrid}>
              <div className={styles.staffCard}>
                <div className={styles.staffImg}>
                  <div className={styles.imgPlaceholder}>写真</div>
                </div>
                <h3>
                  松岡 正<span>（まつおか ただし）</span>
                </h3>
                <p className={styles.staffRole}>代表 / 経験38年以上</p>
                <p>
                  「お客様に安心してお任せいただける塗装を」をモットーに創業。趣味はギターと音楽。
                </p>
              </div>
              <div className={styles.staffCard}>
                <div className={styles.staffImg}>
                  <div className={styles.imgPlaceholder}>写真</div>
                </div>
                <h3>
                  小山 浩二<span>（こやま こうじ）</span>
                </h3>
                <p className={styles.staffRole}>職人 / 経験31年</p>
                <p>信頼と実直さで仲間からもお客様からも頼りにされる存在。</p>
              </div>
              <div className={styles.staffCard}>
                <div className={styles.staffImg}>
                  <div className={styles.imgPlaceholder}>写真</div>
                </div>
                <h3>
                  松岡 拳<span>（まつおか けん）</span>
                </h3>
                <p className={styles.staffRole}>職人 / 経験21年</p>
                <p>塗装一筋の職人。元高校球児で、現在は少年野球のコーチも務める。</p>
              </div>
              <div className={styles.staffCard}>
                <div className={styles.staffImg}>
                  <div className={styles.imgPlaceholder}>写真</div>
                </div>
                <h3>
                  奥名 敬太<span>（おくな けいた）</span>
                </h3>
                <p className={styles.staffRole}>職人 / 経験20年</p>
                <p>「言い訳は絶対にしたくない」が信条。趣味は釣りと料理。</p>
              </div>
              <div className={styles.staffCard}>
                <div className={styles.staffImg}>
                  <div className={styles.imgPlaceholder}>写真</div>
                </div>
                <h3>
                  成相 謙吾<span>（なりあい けんご）</span>
                </h3>
                <p className={styles.staffRole}>職人 / 経験5年</p>
                <p>若手のホープ。最近お父さんになり、より一層仕事に励む。</p>
              </div>
              <div className={styles.staffCard}>
                <div className={styles.staffImg}>
                  <div className={styles.imgPlaceholder}>写真</div>
                </div>
                <h3>
                  松岡 渉<span>（まつおか わたる）</span>
                </h3>
                <p className={styles.staffRole}>営業・見積担当 / 経験15年</p>
                <p>様々な業界を経験した後、家業に戻る。お客様との窓口役。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 会社概要テーブル */}
        <section className={styles.companyInfo}>
          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionEn}>COMPANY</span>
              会社概要
            </h2>
            <table className={styles.companyTable}>
              <tbody>
                <tr>
                  <th>会社名</th>
                  <td>まつ塗研</td>
                </tr>
                <tr>
                  <th>代表者</th>
                  <td>松岡 正</td>
                </tr>
                <tr>
                  <th>創業</th>
                  <td>1982年（昭和57年）</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>〒692-0402 島根県安来市広瀬町町帳94-2</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>0854-32-3181</td>
                </tr>
                <tr>
                  <th>FAX番号</th>
                  <td>0854-32-3181</td>
                </tr>
                <tr>
                  <th>従業員数</th>
                  <td>6名</td>
                </tr>
                <tr>
                  <th>取引銀行</th>
                  <td>山陰合同銀行</td>
                </tr>
                <tr>
                  <th>事業内容</th>
                  <td>屋根塗装・外壁塗装・内装塗装・防水工事・鉄部塗装・リフォーム全般</td>
                </tr>
                <tr>
                  <th>対応エリア</th>
                  <td>島根県安来市を中心に山陰地方全域</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 沿革 */}
        <section className={styles.history}>
          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionEn}>HISTORY</span>
              沿革
            </h2>
            <dl className={styles.historyList}>
              <div className={styles.historyItem}>
                <dt>1982年</dt>
                <dd>まつ塗研 創業（松岡 正が独立）</dd>
              </div>
              <div className={styles.historyItem}>
                <dt>2017年</dt>
                <dd>ホームページ開設</dd>
              </div>
              <div className={styles.historyItem}>
                <dt>2025年</dt>
                <dd>ホームページリニューアル</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* まつ塗研のこだわり */}
        <section className={styles.policy}>
          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionEn}>OUR POLICY</span>
              まつ塗研のこだわり
            </h2>
            <div className={styles.policyGrid}>
              <div className={styles.policyItem}>
                <h3>事前無料診断</h3>
                <p>塗装前にお住まいの状態を丁寧にチェック</p>
              </div>
              <div className={styles.policyItem}>
                <h3>明瞭価格</h3>
                <p>追加費用のない、わかりやすい見積り</p>
              </div>
              <div className={styles.policyItem}>
                <h3>下地補修</h3>
                <p>仕上がりと耐久性を左右する工程を省略しない</p>
              </div>
              <div className={styles.policyItem}>
                <h3>アフターフォロー</h3>
                <p>施工後も安心のサポート体制</p>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
