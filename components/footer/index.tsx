import React from 'react';
import FooterLogos from './FooterLogos';
import FooterInfos from './FooterInfos';

const Footer = () => {
  return (
    <div className='flex h-full w-full flex-col items-center gap-14 pb-[88px] pt-14 lg:gap-36 lg:pt-32'>
      <h2 className='text-center text-3xl lg:hidden'>צור קשר</h2>
      <FooterInfos />
      <FooterLogos />
    </div>
  );
};

export default Footer;
