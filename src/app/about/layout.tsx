import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Multi-Brand Heritage & YCN Pro Dealer',
  description:
    'Learn about TyresXpress, established in 2019 in Bengaluru. 3 multi-brand tyre showrooms in Siddapura, Horamavu, and Balagere providing 100% genuine tyres, Yokohama Club Network Pro Dealer credentials, and certified automotive service.',
  alternates: {
    canonical: 'https://tyresxpress.com/about',
  },
  keywords: [
    'About TyresXpress',
    'Yokohama Club Network Pro Dealer Bengaluru',
    'YCN Pro Dealer Whitefield',
    'Authorised multi-brand tyre dealer Bengaluru',
    '100% genuine tyres guarantee',
    'TyresXpress history est 2019',
    'Certified tyre technicians Bengaluru',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tyresxpress.com/about',
    siteName: 'TyresXpress',
    title: 'About Us — Multi-Brand Heritage & YCN Pro Dealer | TyresXpress',
    description:
      'Learn about TyresXpress, established in 2019 in Bengaluru. 3 multi-brand tyre showrooms in Siddapura, Horamavu, and Balagere providing 100% genuine tyres, YCN Pro Dealer credentials, and certified automotive service.',
    images: [
      {
        url: '/images/hero/homepage-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'TyresXpress Flagship Workshop and Multi-Brand Fitting Bays',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us — Multi-Brand Heritage & YCN Pro Dealer | TyresXpress',
    description:
      'Learn about TyresXpress, established in 2019 in Bengaluru. 3 multi-brand tyre showrooms across Siddapura, Horamavu, and Balagere.',
    images: ['/images/hero/homepage-hero.jpg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
