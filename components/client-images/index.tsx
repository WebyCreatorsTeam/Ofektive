import { clients } from '@/consts';
import Image from 'next/image';
import React from 'react';

const ClientImages = () => {
  return (
    <div className='flex h-fit w-full grow-0 flex-wrap justify-center gap-6 rounded-xl lg:pt-6'>
      {clients.map((client) => (
        <div
          key={`${client.image_src}-${client.image_alt}`}
          className='relative aspect-square size-[318px] lg:size-auto rounded-xl lg:basis-4/12'
        >
          <Image
            className='rounded-[75px] border-2 border-black object-contain'
            src={client.image_src}
            fill
            alt={client.image_alt}
          />
        </div>
      ))}
    </div>
  );
};

export default ClientImages;
