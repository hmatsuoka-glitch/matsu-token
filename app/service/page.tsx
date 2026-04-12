import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServicePage from '@/components/Service/ServicePage';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="事業内容" en="SERVICE" current="事業内容" />
        <ServicePage />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
