import Image from 'next/image';
import ClientImages from '../components/client-images';
import Footer from '../components/footer';
import HeroSection from '../components/hero-section';

export default function Home() {
  return (
    <main className='flex min-h-full w-full flex-col items-center bg-background-gradient font-bold text-white lg:h-full'>
      <div className='flex h-full w-full flex-col items-center gap-3'>
        <Image
          priority
          src='/mainLogo.svg'
          width={180}
          className='sm:hidden'
          height={180}
          alt='logo'
        />
        <Image
          priority
          src='/mainLogo.svg'
          width={680}
          className='hidden sm:block'
          height={680}
          alt='logo'
        />
        <HeroSection />
        <ClientImages />
        <Footer />
      </div>
    </main>
  );
}
