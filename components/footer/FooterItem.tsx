import { FooterItemInterface } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterItem = ({
  svg_source,
  svg_alt,
  title,
  text,
  text_logo,
  link,
}: FooterItemInterface) => {
  return (
    <span className='flex flex-col items-center gap-3'>
      <Image src={svg_source} width={32} height={32} alt={svg_alt} />
      <h3 className='text-xl text-ofektive-red'>{title}</h3>
      <Link
        href={link}
        className='flex cursor-pointer gap-1.5 lg:text-7xl'
        target='_blank'
        rel='noopener noreferrer'
      >
        {text_logo} {text}
      </Link>
    </span>
  );
};

export default FooterItem;
