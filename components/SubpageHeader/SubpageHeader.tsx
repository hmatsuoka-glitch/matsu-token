import Link from 'next/link';
import styles from './SubpageHeader.module.css';

type Props = {
  titleEn: string;
  titleJp: string;
  breadcrumb: string;
};

export default function SubpageHeader({ titleEn, titleJp, breadcrumb }: Props) {
  return (
    <div className={styles.subpageHeader}>
      <div className={styles.inner}>
        <p className={styles.titleEn}>{titleEn}</p>
        <h1 className={styles.titleJp}>{titleJp}</h1>
      </div>
      <nav className={styles.breadcrumb}>
        <Link href="/">ホーム</Link>
        <span className={styles.separator}>&gt;</span>
        <span>{breadcrumb}</span>
      </nav>
    </div>
  );
}
