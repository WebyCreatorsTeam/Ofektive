import Image from 'next/image';
import React from 'react';
import Introduction from './Introduction';
import imageUrl from '../../public/gym_picture.png';
const HeroSection = () => {
  return (
    <div className='flex h-full w-full flex-col items-center gap-5'>
      {/* welcome text */}
      <div className='flex flex-col items-center gap-2 lg:gap-9'>
        {/* title */}
        <h1 dir='rtl' className='text-xl leading-[22.5px] lg:text-[64px]'>
          סטודיו OFEKTIVE
        </h1>
        {/* description */}
        <div dir='rtl' className='text-center lg:text-4xl'>
          <p>סטודיו OFEKTIVE בטירת הכרמל הינו סטודיו</p>
          <p>לאימוני כושר אישיים וקבוצתיים</p>
        </div>
      </div>
      {/* gym image */}
      <div className='relative aspect-[1.36] w-full border-black lg:w-full lg:max-w-[988px] lg:border-4'>
        <Image
          src={imageUrl}
          sizes='100vw'
          placeholder='blur'
          fill
          priority
          className='object-cover'
          alt='gym'
        />
      </div>
      <Introduction />
    </div>
  );
};

export default HeroSection;
