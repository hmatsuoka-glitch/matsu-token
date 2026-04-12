import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';
import WorksPage from '@/components/Works/WorksPage';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="施工実績" en="WORKS" current="施工実績" />
        <WorksPage />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
