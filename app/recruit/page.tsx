import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';
import RecruitPage from '@/components/Recruit/RecruitPage';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="採用情報" en="RECRUIT" current="採用情報" />
        <RecruitPage />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
