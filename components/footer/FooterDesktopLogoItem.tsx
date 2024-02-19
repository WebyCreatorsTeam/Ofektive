import { FooterLogoT } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterDesktopLogoItem = ({
  footerLogo: { svg_src, svg_alt, link, ratio, desktop_width },
}: {
  footerLogo: FooterLogoT;
}) => {
  return (
    <Link target='_blank' className='hidden lg:block' href={link}>
      <Image
        width={desktop_width}
        height={desktop_width}
        className={`aspect-[${ratio}]`}
        src={svg_src}
        alt={svg_alt}
      />
    </Link>
  );
};

export default FooterDesktopLogoItem;
