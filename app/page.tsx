import ClientImages from '../components/client-images';
import Footer from '../components/footer';
import HeroSection from '../components/hero-section';

export default function Home() {
  return (
    <main className='bg-background-gradient flex min-h-full w-full flex-col items-center font-bold text-white lg:h-full'>
      <div className='flex h-full w-full flex-col items-center gap-3'>
        <HeroSection />
        <ClientImages />
        <Footer />
      </div>
    </main>
  );
}
