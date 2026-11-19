import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automotive Services — 3D Alignment, Balancing & Fitting',
  description:
    'Precision automotive services across Bengaluru: multi-brand car & bike tyre fitting, 3D wheel alignment, dynamic balancing, nitrogen filling, mushroom puncture repairs, alloy wheel bend repair, and foam car wash.',
  alternates: {
    canonical: 'https://tyresxpress.com/services',
  },
  keywords: [
    '3D wheel alignment Bengaluru',
    'Computerized dynamic wheel balancing',
    'Nitrogen tyre inflation Whitefield',
    'Mushroom plug puncture repair Bengaluru',
    'Alloy wheel bend repair Horamavu',
    'Hydraulic rim straightening Balagere',
    'Neo Lenso Plati alloy wheels fitting',
    'Car dashcam installation 70mai DDPAI',
    'Bosch wiper blades replacement',
    'Philips LED headlight upgrade',
    'Triton tubeless tyre valves',
    'Foam car wash Horamavu',
    'Tyre replacement Whitefield',
    'Car bike tyre fitting Bengaluru',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tyresxpress.com/services',
    siteName: 'TyresXpress',
    title: 'Automotive Services — 3D Alignment, Balancing & Fitting',
    description:
      'Precision automotive services across Bengaluru: multi-brand car & bike tyre fitting, 3D wheel alignment, dynamic balancing, nitrogen filling, mushroom puncture repairs, alloy wheel bend repair, and foam car wash.',
    images: [
      {
        url: '/images/hero/homepage-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'TyresXpress Precision Automotive Services & Fitting Bays',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automotive Services — 3D Alignment, Balancing & Fitting | TyresXpress',
    description:
      'Precision tyre fitting, 3D wheel alignment, dynamic balancing, nitrogen filling, puncture repair, and rim repair across 3 Bengaluru showrooms.',
    images: ['/images/hero/homepage-hero.jpg'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
