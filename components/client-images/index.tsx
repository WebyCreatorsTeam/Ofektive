import { clients } from '@/consts';
import Image from 'next/image';
import React from 'react';

const ClientImages = () => {
  return (
    <div className='flex h-fit w-full flex-wrap justify-center gap-6 rounded-xl'>
      {clients.map((client) => (
        <div
          key={`${client.image_src}-${client.image_alt}`}
          className='relative aspect-square w-[318px] rounded-xl'
        >
          <Image
            priority
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
