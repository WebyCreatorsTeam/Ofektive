import { ClientImageT, FooterItemT, FooterLogoT } from './types';
export const clients: ClientImageT[] = [
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

export const footerInfoArray: FooterItemT[] = [
  {
    svg_source: '/phone.svg',
    svg_alt: 'phone',
    title: 'מספר טלפון',
    text: '052-8380789',
    link: 'tel:+972528380789',
    header: 'צור קשר',
  },
  {
    svg_source: '/location.svg',
    svg_alt: 'location',
    title: 'כתובת',
    text: 'קניון לב העיר, טירת כרמל ',
    link: 'https://maps.app.goo.gl/xCu44usS2bqbm3ah8',
    header: 'דרכי הגעה',
  },
];

export const footerLogoArray: FooterLogoT[] = [
  {
    svg_src: '/google_logo.svg',
    svg_alt: 'google logo',
    link: 'https://maps.app.goo.gl/xCu44usS2bqbm3ah8',
    ratio: '1/1.49',
    mobile_width: 23.42,
    desktop_width: 35.92,
  },
  {
    svg_src: '/waze_logo.svg',
    svg_alt: 'waze logo',
    link: 'https://waze.com/ul?ll=32.76460761164145,34.97085021026525&z=10&navigate=yes',
    ratio: '1.19/1',
    mobile_width: 37.77,
    desktop_width: 57.92,
  },
  {
    svg_src: '/instagram_logo.svg',
    svg_alt: 'instagram logo',
    link: 'https://www.instagram.com/ofekichia/',
    ratio: '1/1',
    mobile_width: 31.82,
    desktop_width: 48.8,
  },
  {
    svg_src: '/whatsapp_logo.svg',
    svg_alt: 'whatsapp logo',
    link: 'https://wa.me/972528380789?text=היי,%20התעניינתי%20באימון%20נא%20לחזור%20לאלי',
    ratio: '1/0.98',
    mobile_width: 31.82,
    desktop_width: 48.8,
  },
];
