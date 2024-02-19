import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <span className='py-[25px] lg:py-[50px]'>
      <div className='relative aspect-[1/0.23] w-[180px] sm:w-[300px] md:w-[500px] lg:w-[610px]'>
        <Image
          src='/main_logo.svg'
          fill
          className='object-cover'
          alt='logo'
          priority
        />
      </div>
    </span>
  );
};

export default Logo;
