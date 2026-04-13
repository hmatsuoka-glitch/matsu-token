import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import ContactSection from '@/components/ContactSection/ContactSection';
import styles from './Service.module.css';

export const metadata = {
  title: '事業内容 | まつ塗研',
  description:
    'まつ塗研の4つの塗装サービス（外壁塗装・屋根塗装・内装塗装・部分補修）をご紹介します。',
};

export default function ServicePage() {
  return (
    <>
      <Header />
      <main>
        <SubpageHeader titleEn="SERVICE" titleJp="事業内容" breadcrumb="事業内容" />

        {/* タブ切り替え風（静的） */}
        <section className={styles.serviceIntro}>
          <div className={styles.inner}>
            <div className={styles.tabs}>
              <span className={styles.tabActive}>塗装サービス一覧</span>
              <span className={styles.tab}>最近の施工事例</span>
            </div>

            <div className={styles.serviceOverview}>
              <h2 className={styles.serviceMainTitle}>
                <span className={styles.serviceEn}>SERVICE</span>
                住まいの塗装サービス
              </h2>
              <p className={styles.serviceText}>
                まつ塗研は、丁寧な診断と誠実な提案でお客様の住まいに最適な塗装を届けます。
                <br />
                &ldquo;ただ塗る&rdquo;だけではなく、住まいを長く守るために最適な施工をご提案します。
                <br />
                毎日見る景色に、美しい彩りと安心を。
              </p>
            </div>
          </div>
        </section>

        {/* 塗装の効果 */}
        <section className={styles.effects}>
          <div className={styles.inner}>
            <div className={styles.effectGrid}>
              <div className={styles.effectItem}>
                <h3>防水防錆</h3>
                <p>雨風の侵食によるサビや雨漏りを塗装によって防ぎます。</p>
              </div>
              <div className={styles.effectItem}>
                <h3>耐久性向上</h3>
                <p>塗装で建物の耐久性を上げ、老朽化を防ぎ安心できる環境を整えます。</p>
              </div>
              <div className={styles.effectItem}>
                <h3>保護・耐候性</h3>
                <p>外壁を保護し、住宅全体の耐候性が向上します。</p>
              </div>
              <div className={styles.effectItem}>
                <h3>美観維持</h3>
                <p>仕上げ塗装で見た目の印象を美しく生まれ変わらせます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* サービス詳細 4項目 */}
        <section className={styles.serviceDetail}>
          <div className={styles.inner}>
            <h2 className={styles.categoryTitle}>
              <span className={styles.categoryEn}>CATEGORY</span>
              サービス内容
            </h2>

            <div className={styles.serviceList}>
              <div className={styles.serviceCard}>
                <div className={styles.cardImg}>
                  <div className={styles.imgPlaceholder}>外壁塗装</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>01. 外壁塗装</h3>
                  <p>
                    外壁は住まいの印象だけでなく、雨風や紫外線から建物を守る大切な部分です。
                    まつ塗研では、外壁の状態を丁寧に診断し、山陰の気候に合った塗料で美観と耐久性を長く保つ施工をご提案します。
                  </p>
                  <p className={styles.sign}>
                    こんなサインが出たら：色あせ・汚れ・黒ずみ・ひび割れ・触ると白い粉がつく（チョーキング）
                  </p>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.cardImg}>
                  <div className={styles.imgPlaceholder}>屋根塗装</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>02. 屋根塗装</h3>
                  <p>
                    屋根は雨・雪・紫外線の影響を強く受けるため、定期的なメンテナンスが欠かせません。
                    まつ塗研では屋根の劣化状況や材質を見極め、サビやコケを防ぎながら住まい全体を長く守る塗装をご提供します。
                  </p>
                  <p className={styles.sign}>
                    こんなサインが出たら：色あせ・サビの発生・コケ・カビの付着・塗膜の剥がれ
                  </p>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.cardImg}>
                  <div className={styles.imgPlaceholder}>内装塗装</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>03. 内装塗装</h3>
                  <p>
                    内装塗装は、毎日過ごす空間を心地よく整えるサービスです。
                    壁・天井・木部などに対応し、クロスでは出せない質感や深みを演出できます。
                    イメージに合わせた色選びや、室内環境に配慮した塗料の選定も可能です。
                  </p>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.cardImg}>
                  <div className={styles.imgPlaceholder}>部分補修</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>04. 部分補修・鉄部塗装</h3>
                  <p>
                    雨樋・手すり・シャッター・鉄部などの部分的な劣化は、早めの対応が効果的です。
                    サビ落としからサビ止め塗料まで丁寧に施工し、美観と耐久性を回復させます。
                    「ここだけ直したい」というご相談も歓迎です。
                  </p>
                </div>
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
