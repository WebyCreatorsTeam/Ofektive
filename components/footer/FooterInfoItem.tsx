import { FooterItemT } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterInfoItem = ({
  footerItem: { svg_source, svg_alt, title, text, link, header },
}: {
  footerItem: FooterItemT;
}) => {
  return (
    <div className='flex h-full flex-col justify-between gap-10 text-center lg:h-80 lg:min-h-full lg:justify-start'>
      <h2 className='hidden text-center text-5xl lg:block'>{header}</h2>
      <span className='flex flex-col items-center gap-3 lg:gap-[30px]'>
        {/* small screen */}
        <Image
          className='lg:hidden'
          src={svg_source}
          width={32}
          height={32}
          alt={svg_alt}
        />
        {/* medium and large screen */}
        <Image
          className='hidden lg:block'
          src={svg_source}
          width={50}
          height={50}
          alt={svg_alt}
        />
        <h3 className='text-xl text-ofektive-red lg:text-3xl'>{title}</h3>
        <Link
          href={link}
          className='flex cursor-pointer flex-col  gap-1.5 lg:text-balance lg:text-3xl'
          target='_blank'
          rel='noopener noreferrer'
        >
          {text}
        </Link>
      </span>
    </div>
  );
};

export default FooterInfoItem;
