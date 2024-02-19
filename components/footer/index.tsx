import React from 'react';
import FooterLogos from './FooterLogos';
import FooterInfos from './FooterInfos';

const Footer = () => {
  return (
    <div className='flex h-full w-full flex-col items-center gap-14 pb-[88px] pt-14 sm:gap-36 sm:pt-32'>
      <h2 className='text-center text-3xl sm:hidden'>צור קשר</h2>
      <FooterInfos />
      <FooterLogos />
    </div>
  );
};

export default Footer;
