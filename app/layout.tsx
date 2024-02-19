import type { Metadata, Viewport } from 'next';
import { Noto_Sans_Hebrew } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'סטודיו OFEKTIVE',
  description:
    'סטודיו OFEKTIVE בטירת הכרמל הינו סטודיו לאימוני כושר אישיים וקבוצתיים',

  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#614e54',
};

const noto_sans_hebrew = Noto_Sans_Hebrew({
  weight: '700',
  subsets: ['hebrew'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${noto_sans_hebrew.className}`}>{children}</body>
    </html>
  );
}
