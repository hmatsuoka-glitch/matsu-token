import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import styles from './Contact.module.css';

export const metadata = {
  title: 'お問い合わせ | まつ塗研',
  description: 'まつ塗研へのお問い合わせはこちらから。お見積り無料です。',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <SubpageHeader
          titleEn="CONTACT"
          titleJp="お問い合わせ"
          breadcrumb="お問い合わせ"
        />

        <section className={styles.contactSection}>
          <div className={styles.inner}>
            <p className={styles.introText}>
              まつ塗研にご興味を持っていただきありがとうございます。
              <br />
              下記フォームまたはお電話にて、お気軽にお問い合わせください。
            </p>

            <div className={styles.telArea}>
              <span className={styles.telLabel}>TEL.</span>
              <a href="tel:0854323181" className={styles.telNum}>
                0854-32-3181
              </a>
              <p className={styles.telTime}>［受付時間］ 月〜金 9:00〜17:00</p>
            </div>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.required}>お問い合わせ内容</label>
                <div className={styles.radioGroup}>
                  <label>
                    <input type="radio" name="type" value="見積り依頼" defaultChecked /> 見積り依頼
                  </label>
                  <label>
                    <input type="radio" name="type" value="採用について" /> 採用について
                  </label>
                  <label>
                    <input type="radio" name="type" value="その他" /> その他
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.required}>
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="山田 太郎"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.required}>
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="example@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="tel" className={styles.required}>
                  電話番号
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  className={styles.input}
                  placeholder="000-0000-0000"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">備考</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  rows={6}
                  placeholder="お問い合わせ内容をご記入ください。"
                ></textarea>
              </div>

              <div className={styles.formSubmit}>
                <button type="submit" className={styles.submitBtn}>
                  送信する
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
