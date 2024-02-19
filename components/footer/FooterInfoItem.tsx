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
    <div className='flex h-full flex-col justify-between gap-10 text-center sm:h-80 sm:min-h-full sm:justify-start'>
      <h2 className='hidden text-center text-5xl sm:block'>{header}</h2>
      <span className='flex flex-col items-center gap-3 sm:gap-[30px]'>
        {/* small screen */}
        <Image
          className='sm:hidden'
          src={svg_source}
          width={32}
          height={32}
          alt={svg_alt}
        />
        {/* medium and large screen */}
        <Image
          className='hidden sm:block'
          src={svg_source}
          width={50}
          height={50}
          alt={svg_alt}
        />
        <h3 className='text-xl text-ofektive-red sm:text-4xl'>{title}</h3>
        <Link
          href={link}
          className='flex cursor-pointer flex-col gap-1.5 sm:text-4xl'
          target='_blank'
          rel='noopener noreferrer'
        >
          {text
            .toString()
            .split(',')
            .map((text, index) => (
              <span key={index}>{text}</span>
            ))}
        </Link>
      </span>
    </div>
  );
};

export default FooterInfoItem;
