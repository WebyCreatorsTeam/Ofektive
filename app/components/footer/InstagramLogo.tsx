import Image from 'next/image';
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className='relative h-4 w-4 lg:h-16 lg:w-16'>
      <Image
        fill
        className='object-contain'
        src='/instagram_logo.svg'
        alt='instagram_logo'
      />
    </div>
  );
};

export default InstagramLogo;
