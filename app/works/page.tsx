import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import ContactSection from '@/components/ContactSection/ContactSection';
import styles from './Works.module.css';

export const metadata = {
  title: '施工実績 | まつ塗研',
  description: 'まつ塗研の施工実績一覧です。安来市を中心に山陰地方で多数の実績があります。',
};

const worksData = [
  { title: '戸建住宅 外壁・屋根塗装工事', building: '戸建住宅', category: '外壁塗装・屋根塗装', area: '安来市' },
  { title: 'アパート外壁塗装工事', building: '集合住宅', category: '外壁塗装', area: '安来市' },
  { title: '戸建住宅 屋根塗装工事', building: '戸建住宅', category: '屋根塗装', area: '安来市広瀬町' },
  { title: '倉庫 鉄骨塗装工事', building: 'その他', category: '鉄部塗装', area: '安来市' },
  { title: '店舗 内装塗装工事', building: '店舗', category: '内装塗装', area: '安来市' },
  { title: '戸建住宅 外壁・防水工事', building: '戸建住宅', category: '外壁塗装・防水工事', area: '松江市' },
];

export default function WorksPage() {
  return (
    <>
      <Header />
      <main>
        <SubpageHeader titleEn="WORKS" titleJp="施工実績" breadcrumb="施工実績" />

        <section className={styles.worksSection}>
          <div className={styles.inner}>
            <div className={styles.worksLayout}>
              <aside className={styles.sidebar}>
                <div className={styles.filterGroup}>
                  <h3>建物の種類</h3>
                  <ul>
                    <li>
                      <span className={styles.filterActive}>すべて</span>
                    </li>
                    <li>
                      <span>戸建住宅</span>
                    </li>
                    <li>
                      <span>集合住宅</span>
                    </li>
                    <li>
                      <span>店舗</span>
                    </li>
                    <li>
                      <span>その他</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.filterGroup}>
                  <h3>工事の種類</h3>
                  <ul>
                    <li>
                      <span>外壁塗装</span>
                    </li>
                    <li>
                      <span>屋根塗装</span>
                    </li>
                    <li>
                      <span>内装塗装</span>
                    </li>
                    <li>
                      <span>防水工事</span>
                    </li>
                    <li>
                      <span>鉄部塗装</span>
                    </li>
                    <li>
                      <span>その他</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.filterGroup}>
                  <h3>施工エリア</h3>
                  <ul>
                    <li>
                      <span>安来市</span>
                    </li>
                    <li>
                      <span>松江市</span>
                    </li>
                    <li>
                      <span>その他（山陰地方）</span>
                    </li>
                  </ul>
                </div>
              </aside>

              <div className={styles.worksList}>
                {worksData.map((work, i) => (
                  <div key={i} className={styles.workCard}>
                    <div className={styles.workImg}>
                      <div className={styles.imgPlaceholder}>施工写真</div>
                    </div>
                    <div className={styles.workBody}>
                      <h3>{work.title}</h3>
                      <div className={styles.workMeta}>
                        <span>建物の種類: {work.building}</span>
                        <span>工事の種類: {work.category}</span>
                        <span>施工エリア: {work.area}</span>
                      </div>
                    </div>
                  </div>
                ))}
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
