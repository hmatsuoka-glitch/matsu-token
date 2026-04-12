import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';
import CompanyPage from '@/components/Company/CompanyPage';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="会社概要" en="ABOUT YUTAKA PLUS" current="会社概要" />
        <CompanyPage />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
