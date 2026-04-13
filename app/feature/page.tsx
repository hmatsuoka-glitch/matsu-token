import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import ContactSection from '@/components/ContactSection/ContactSection';
import styles from './Feature.module.css';

export const metadata = {
  title: 'まつ塗研の特徴 | まつ塗研',
  description:
    '創業40年以上、山陰の住まいに寄り添い続けてきたまつ塗研の5つの特徴をご紹介します。',
};

export default function FeaturePage() {
  return (
    <>
      <Header />
      <main>
        <SubpageHeader
          titleEn="FEATURE"
          titleJp="まつ塗研の強み"
          breadcrumb="まつ塗研の特徴"
        />

        {/* イントロ */}
        <section className={styles.intro}>
          <div className={styles.inner}>
            <p className={styles.introText}>
              創業40年以上、山陰の住まいに寄り添い続けてきたまつ塗研。
              <br />
              丁寧な仕事を大切にする職人たちが、住まいに真摯に向き合い、
              <br />
              細部まで心を配った確かな仕上がりをお届けします。
            </p>
            <div className={styles.featureNav}>
              <span>事前無料診断</span>
              <span>明瞭価格</span>
              <span>下地補修へのこだわり</span>
              <span>山陰の気候を知り尽くした施工</span>
              <span>地域密着の信頼</span>
            </div>
          </div>
        </section>

        {/* Feature 01 */}
        <section className={styles.featureItem}>
          <div className={styles.inner}>
            <div className={styles.featureContent}>
              <div className={styles.featureTextArea}>
                <span className={styles.featureNum}>01</span>
                <h2 className={styles.featureTitle}>事前無料診断</h2>
                <p className={styles.featureText}>
                  お住まいの状態を丁寧に診断いたします。
                  屋根や外壁の劣化状況を専門の目でチェックし、最適な塗装プランを無料でご提案。
                  お客様にわかりやすく説明し、安心してお任せいただけるよう心がけています。
                </p>
              </div>
              <div className={styles.featureImgArea}>
                <div className={styles.imgPlaceholder}>診断イメージ</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 02 */}
        <section className={styles.featureItem}>
          <div className={styles.inner}>
            <div className={`${styles.featureContent} ${styles.reverse}`}>
              <div className={styles.featureTextArea}>
                <span className={styles.featureNum}>02</span>
                <h2 className={styles.featureTitle}>明瞭価格</h2>
                <p className={styles.featureText}>
                  お見積りは詳細な内訳を明記。施工後に追加費用が発生しない明瞭な価格設定。
                  「何にいくらかかるのか」を事前にしっかりご説明します。
                </p>
              </div>
              <div className={styles.featureImgArea}>
                <div className={styles.imgPlaceholder}>見積りイメージ</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 03 */}
        <section className={styles.featureItem}>
          <div className={styles.inner}>
            <div className={styles.featureContent}>
              <div className={styles.featureTextArea}>
                <span className={styles.featureNum}>03</span>
                <h2 className={styles.featureTitle}>下地補修へのこだわり</h2>
                <p className={styles.featureText}>
                  外壁塗装で最も大切な工程が「下地調整」です。
                  まつ塗研では、大工仕事や左官仕事を含む下地補修まで自社で丁寧に行います。
                  他社では省略されがちなこの工程こそ、塗装の仕上がりと耐久性を左右します。
                </p>
              </div>
              <div className={styles.featureImgArea}>
                <div className={styles.imgPlaceholder}>下地補修イメージ</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 04 */}
        <section className={styles.featureItem}>
          <div className={styles.inner}>
            <div className={`${styles.featureContent} ${styles.reverse}`}>
              <div className={styles.featureTextArea}>
                <span className={styles.featureNum}>04</span>
                <h2 className={styles.featureTitle}>山陰の気候を知り尽くした施工</h2>
                <p className={styles.featureText}>
                  雨や雪が多い山陰地方。地域の気候特性を40年以上見てきた経験から、
                  最適な塗料の選定と施工時期のアドバイスが可能です。
                </p>
              </div>
              <div className={styles.featureImgArea}>
                <div className={styles.imgPlaceholder}>施工イメージ</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 05 */}
        <section className={styles.featureItem}>
          <div className={styles.inner}>
            <div className={styles.featureContent}>
              <div className={styles.featureTextArea}>
                <span className={styles.featureNum}>05</span>
                <h2 className={styles.featureTitle}>地域密着の信頼</h2>
                <p className={styles.featureText}>
                  安来市・広瀬町を中心に、地域の皆さまとの信頼関係を築いてきました。
                  ご近所の方からのご紹介も多く、アフターフォローも安心です。
                </p>
              </div>
              <div className={styles.featureImgArea}>
                <div className={styles.imgPlaceholder}>地域密着イメージ</div>
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
