import { footerInfoArray } from '@/consts';
import { FooterItemT } from '@/types';
import React from 'react';
import FooterInfoItem from './FooterInfoItem';

const FooterInfos = () => {
  return (
    <div className='flex flex-col items-center justify-end gap-[51.24px] sm:h-[251.54px] sm:flex-row-reverse sm:gap-64'>
      {footerInfoArray.map((footerItem: FooterItemT) => (
        <FooterInfoItem key={footerItem.title} footerItem={footerItem} />
      ))}
    </div>
  );
};

export default FooterInfos;
