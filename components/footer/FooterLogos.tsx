import { footerLogoArray } from '@/consts';
import React from 'react';
import FooterMobileLogoItem from './FooterMobileLogoItem';
import FooterDesktopLogoItem from './FooterDesktopLogoItem';
import { FooterLogoT } from '@/types';

const FooterLogos = () => {
  return (
    <div className='flex w-full items-center justify-center gap-5 lg:gap-[30px]'>
      {footerLogoArray.map((footerLogo: FooterLogoT) => (
        <span key={footerLogo.svg_alt}>
          <FooterMobileLogoItem
            key={footerLogo.svg_alt}
            footerLogo={footerLogo}
          />
          <FooterDesktopLogoItem
            key={footerLogo.svg_alt}
            footerLogo={footerLogo}
          />
        </span>
      ))}
    </div>
  );
};

export default FooterLogos;
