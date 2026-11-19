import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Showroom Phone Numbers & Service Enquiries',
  description:
    'Get in touch with TyresXpress showrooms in Siddapura (Whitefield), Horamavu, and Balagere (Panathur). Call our service desks directly or submit an online callback enquiry for tyre replacements and 3D wheel alignment bookings.',
  alternates: {
    canonical: 'https://tyresxpress.com/contact',
  },
  keywords: [
    'Contact TyresXpress',
    'TyresXpress phone number Bengaluru',
    'Tyre shop contact Whitefield',
    'Tyre shop phone Horamavu',
    'Tyre shop contact Balagere Panathur',
    'Tyre replacement appointment Bengaluru',
    '3D wheel alignment booking',
    'Emergency tyre service enquiry',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tyresxpress.com/contact',
    siteName: 'TyresXpress',
    title: 'Contact Us — Showroom Phone Numbers & Service Enquiries',
    description:
      'Get in touch with TyresXpress showrooms in Siddapura (Whitefield), Horamavu, and Balagere (Panathur). Call our service desks directly or submit an online callback enquiry for tyre replacements and 3D wheel alignment bookings.',
    images: [
      {
        url: '/images/hero/homepage-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Contact TyresXpress Bengaluru Multi-Brand Tyre Showrooms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Showroom Phone Numbers & Service Enquiries | TyresXpress',
    description:
      'Connect with TyresXpress showrooms across Bengaluru: direct showroom phone lines, operating hours, and online callback enquiry.',
    images: ['/images/hero/homepage-hero.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
