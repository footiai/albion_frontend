import ClientOnly from '../components/ClientOnly';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Statistics from '../components/Statistics';
import Clients from '../components/Clients';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <ClientOnly>
        <Header />
      </ClientOnly>
      <main>
        <ClientOnly>
          <Hero />
        </ClientOnly>
        <ClientOnly>
          <About />
        </ClientOnly>
        <ClientOnly>
          <Services />
        </ClientOnly>
        <ClientOnly>
          <Statistics />
        </ClientOnly>
        <ClientOnly>
          <Clients />
        </ClientOnly>
        <ClientOnly>
          <WhyChooseUs />
        </ClientOnly>
        <ClientOnly>
          <Contact />
        </ClientOnly>
      </main>
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </>
  );
}
