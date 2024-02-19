import React from 'react';
import { footerInfoArray, footerLogoArray } from '@/consts';
import { FooterItemT, FooterLogoT } from '@/types';
import FooterInfo from './FooterInfo';
import FooterMobileLogo from './FooterMobileLogo';
import FooterDesktopLogo from './FooterDesktopLogo';

const Footer = () => {
  return (
    <div className='flex h-full w-full flex-col items-center gap-14 pb-[88px] pt-14 sm:gap-36 sm:pt-32'>
      <h2 className='text-center text-3xl sm:hidden'>צור קשר</h2>
      <div className='flex flex-col items-center justify-end gap-[51.24px] sm:h-[251.54px] sm:flex-row-reverse sm:gap-64'>
        {footerInfoArray.map((footerItem: FooterItemT) => (
          <FooterInfo key={footerItem.title} footerItem={footerItem} />
        ))}
      </div>
      <div className='flex w-full items-center justify-center gap-5 sm:gap-[30px]'>
        {footerLogoArray.map((footerLogo: FooterLogoT) => (
          <span key={footerLogo.svg_alt}>
            <FooterMobileLogo
              key={footerLogo.svg_alt}
              footerLogo={footerLogo}
            />
            <FooterDesktopLogo
              key={footerLogo.svg_alt}
              footerLogo={footerLogo}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
