import ClientImages from '../components/client-images';
import Footer from '../components/footer';
import HeroSection from '../components/hero-section';

export default function Home() {
  return (
    <main className='flex min-h-fit w-full flex-col items-center bg-background-gradient font-bold text-white lg:h-fit'>
      <div className='flex h-full w-full flex-col items-center gap-3'>
        <HeroSection />
        <ClientImages />
        <Footer />
      </div>
    </main>
  );
}
