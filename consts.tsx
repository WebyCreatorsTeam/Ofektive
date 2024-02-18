import InstagramLogo from './components/footer/InstagramLogo';
import { ClientImageInterface, FooterItemInterface } from './interfaces';
import Image from 'next/image';
export const clients: ClientImageInterface[] = [
  {
    image_src: '/clients/client_1.jpeg',
    image_alt: 'client 1',
  },
  {
    image_src: '/clients/client_2.jpeg',
    image_alt: 'client 2',
  },
  {
    image_src: '/clients/client_3.jpeg',
    image_alt: 'client 3',
  },
  {
    image_src: '/clients/client_4.jpeg',
    image_alt: 'client 4',
  },
  {
    image_src: '/clients/client_5.jpeg',
    image_alt: 'client 5',
  },
  {
    image_src: '/clients/client_6.jpeg',
    image_alt: 'client 5',
  },
];

export const footerItems: FooterItemInterface[] = [
  {
    svg_source: '/location.svg',
    svg_alt: 'location',
    title: 'כתובת',
    text: 'קניון לב העיר, טירת כרמל ',
    link: 'https://maps.app.goo.gl/xCu44usS2bqbm3ah8',
  },
  {
    svg_source: '/phone.svg',
    svg_alt: 'phone',
    title: 'טלפון',
    text: '+972 5 111 1111',
    link: 'tel:+97251111111',
  },
  {
    svg_source: 'share.svg',
    svg_alt: 'share',
    title: 'עקבו אחרינו',
    text: 'ofektive',
    text_logo: <InstagramLogo />,
    link: 'https://www.instagram.com/ofektive/',
  },
];
