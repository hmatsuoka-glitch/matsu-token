import Link from 'next/link';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  en: string;
  current: string;
}

export default function PageHeader({ title, en, current }: PageHeaderProps) {
  return (
    <section className={styles.pageHeader}>
      <div className={styles.pageHeaderInner}>
        <p className={styles.pageHeaderEn}>{en}</p>
        <h1 className={styles.pageHeaderTitle}>{title}</h1>
        <nav className={styles.breadcrumb}>
          <Link href="/">ホーム</Link>
          <span className={styles.breadcrumbSep}> &gt; </span>
          <span>{current}</span>
        </nav>
      </div>
    </section>
  );
}
