import Image from 'next/image';
import React from 'react';
import Introduction from './Introduction';
import imageUrl from '../../public/gym_picture.png';
const HeroSection = () => {
  return (
    <div className='flex h-full w-full flex-col items-center gap-5'>
      {/* welcome text */}
      <div className='flex flex-col items-center gap-2'>
        {/* title */}
        <h1 dir='rtl' className='mt-[104px] text-xl leading-[22.5px]'>
          סטודיו OFEKTIVE
        </h1>
        {/* description */}
        <p dir='rtl' className='text-center'>
          סטודיו OFEKTIVE בטירת הכרמל הינו סטודיו
          <br />
          לאימוני כושר אישיים וקבוצתיים
        </p>
      </div>
      {/* gym image */}
      <div className='relative aspect-[1.36] w-full'>
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
