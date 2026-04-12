import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';
import FeaturePage from '@/components/Feature/FeaturePage';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="ユタカプラスの強み" en="FEATURE" current="ユタカプラスの強み" />
        <FeaturePage />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
