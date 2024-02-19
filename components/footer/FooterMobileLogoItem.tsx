import { FooterLogoT } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterMobileLogoItem = ({
  footerLogo: { svg_src, svg_alt, link, ratio, mobile_width },
}: {
  footerLogo: FooterLogoT;
}) => {
  return (
    <Link target='_blank' className='sm:hidden' href={link}>
      <Image
        width={mobile_width}
        height={mobile_width}
        className={`aspect-[${ratio}]`}
        src={svg_src}
        alt={svg_alt}
      />
    </Link>
  );
};

export default FooterMobileLogoItem;
