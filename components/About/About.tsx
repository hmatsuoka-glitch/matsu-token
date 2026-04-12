import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.homeAbout}>
      <div className={styles.flex}>
        <div className={styles.imgarea}>
          <div className={styles.aboutImg01}>
            <div className={`${styles.aboutImg01Box} placeholder`}>ABOUT IMAGE 1</div>
          </div>
          <div className={`${styles.aboutImg02} placeholder`}>ABOUT IMAGE 2</div>
          <div className={`${styles.aboutImg03} placeholder`}>ABOUT IMAGE 3</div>
        </div>
        <div className={styles.txtarea}>
          <h2 className={styles.homeTtl}>
            <span className={styles.fontEn}>ABOUT US</span>
            <span className={styles.fontJp}>まつ塗研について</span>
          </h2>
          <p className={styles.aboutTxt}>
            私たちの暮らしを取り巻く住環境は、時代とともに大きく変化しています。
            気候や生活スタイルの変化によって、住まいにはこれまで以上に「安心」と「快適さ」が求められるようになりました。
            まつ塗研は、創業40年以上。地域に根ざした職人として、
            長年培ってきた確かな技術と経験で、変わりゆく住まいの課題に誠実に向き合い、
            お客様の不安をひとつずつ取り除くことを使命としています。
            山陰の気候を知り尽くした知識と、創業時から受け継いできた丁寧な姿勢で、
            住まいの美しさと安心をこれからも長く守り続けます。
          </p>
          <div className={styles.btn}>
            <a href="#feature">まつ塗研の特徴をみる</a>
          </div>
        </div>
      </div>
    </section>
  );
}
