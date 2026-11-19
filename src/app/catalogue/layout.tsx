import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Guide & 16+ Authorized Brands Showcase',
  description:
    'Explore our interactive educational tyre guide and 16+ authorized global tyre brands including Yokohama, Bridgestone, Continental, Michelin, and Pirelli. Decode tyre size markings, aspect ratio, radial plies, and speed ratings.',
  alternates: {
    canonical: 'https://tyresxpress.com/catalogue',
  },
  keywords: [
    'Tyre guide Bengaluru',
    'Tyre size markings explained',
    'Yokohama BluEarth Geolandar Earth-1',
    'Bridgestone Turanza Dueler Sturdo',
    'Michelin Primacy Pilot Sport Energy',
    'Continental UltraContact CrossContact',
    'Apollo Alnac 4G Apterra AT2',
    'MRF ZLX Wanderer Revz',
    'CEAT SecuraDrive CrossDrive',
    'Pirelli P Zero Cinturato Scorpion',
    'Reise Moto TrailR TourR',
    'TVS Eurogrip Protorq Extreme',
    'Car tyre catalogue Bengaluru',
    'Bike tyre sizes Bengaluru',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tyresxpress.com/catalogue',
    siteName: 'TyresXpress',
    title: 'Tyre Guide & 16+ Authorized Brands Showcase',
    description:
      'Explore our interactive educational tyre guide and 16+ authorized global tyre brands including Yokohama, Bridgestone, Continental, Michelin, and Pirelli. Decode tyre size markings, aspect ratio, radial plies, and speed ratings.',
    images: [
      {
        url: '/images/hero/homepage-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'TyresXpress Educational Tyre Guide and 16+ Authorized Brands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Guide & 16+ Authorized Brands Showcase | TyresXpress',
    description:
      'Interactive tyre sizing guide and 16+ authorized tyre manufacturers at TyresXpress Bengaluru.',
    images: ['/images/hero/homepage-hero.jpg'],
  },
};

export default function CatalogueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
