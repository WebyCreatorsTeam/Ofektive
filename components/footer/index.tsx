import React from 'react';
import FooterItem from './FooterItem';
import { footerItems } from '@/consts';
import { FooterItemInterface } from '@/interfaces';

const Footer = () => {
  return (
    <div className='mt-14 flex h-full flex-col items-center gap-10'>
      <h2 className='text-center text-3xl'>צור קשר</h2>

      {footerItems.map((footerItem: FooterItemInterface) => (
        <FooterItem
          key={footerItem.title}
          svg_source={footerItem.svg_source}
          svg_alt={footerItem.svg_alt}
          title={footerItem.title}
          text={footerItem.text}
          text_logo={footerItem.text_logo}
          link={footerItem.link}
        />
      ))}
    </div>
  );
};

export default Footer;
