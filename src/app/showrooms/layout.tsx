import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Showrooms — Whitefield, Horamavu & Balagere',
  description:
    'Visit TyresXpress across 3 prime Bengaluru locations: Siddapura (Varthur Main Road), Horamavu (Kalkere Main Road), and Balagere (Panathur Main Road). Drive-in service bays open 7 days a week from 9:00 AM to 8:00 PM.',
  alternates: {
    canonical: 'https://tyresxpress.com/showrooms',
  },
  keywords: [
    'TyresXpress Siddapura',
    'TyresXpress Horamavu',
    'TyresXpress Balagere',
    'Tyre shop Varthur Main Road',
    'Tyre showroom Whitefield Bengaluru',
    'Tyre fitting Kalkere Horamavu',
    'Tyre dealer Panathur Main Road',
    'Tyre shop near Sobha Dream Acres',
    'Tyre shop near Marathahalli',
    'Tyre replacement Bellandur Kadubeesanahalli',
    'Tyre dealer Ramamurthy Nagar Kalyan Nagar',
    'Drive-in tyre fitting bay Bengaluru',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tyresxpress.com/showrooms',
    siteName: 'TyresXpress',
    title: 'Our Showrooms — Whitefield, Horamavu & Balagere',
    description:
      'Visit TyresXpress across 3 prime Bengaluru locations: Siddapura (Varthur Main Road), Horamavu (Kalkere Main Road), and Balagere (Panathur Main Road). Drive-in service bays open 7 days a week from 9:00 AM to 8:00 PM.',
    images: [
      {
        url: '/images/hero/homepage-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'TyresXpress 3 Bengaluru Showrooms & Fitment Hubs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Showrooms — Whitefield, Horamavu & Balagere | TyresXpress',
    description:
      'Visit TyresXpress across 3 prime Bengaluru locations: Siddapura (Whitefield), Horamavu, and Balagere (Panathur). Open 7 days a week from 9 AM to 8 PM.',
    images: ['/images/hero/homepage-hero.jpg'],
  },
};

export default function ShowroomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
