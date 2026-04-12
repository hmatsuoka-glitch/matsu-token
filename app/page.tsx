import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Works from '@/components/Works/Works';
import Service from '@/components/Service/Service';
import Feature from '@/components/Feature/Feature';
import Recruit from '@/components/Recruit/Recruit';
import News from '@/components/News/News';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Service />
        <Feature />
        <Recruit />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
