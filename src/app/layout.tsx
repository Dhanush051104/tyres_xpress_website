import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StructuredData } from '@/components/seo/StructuredData';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { BUSINESS_INFO } from '@/data/business';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BUSINESS_INFO.domain}`),
  title: {
    default: `${BUSINESS_INFO.name} — Multi-Brand Tyres & Automotive Services in Bengaluru`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    'TyresXpress is Bengaluru\'s premier multi-brand tyre hub. Authorized dealer for 16+ global tyre brands across 3 showrooms in Siddapura (Whitefield), Horamavu, and Balagere (Panathur). 3D wheel alignment, dynamic balancing, nitrogen filling, and alloy rim repair.',
  alternates: {
    canonical: `https://${BUSINESS_INFO.domain}`,
  },
  keywords: [
    'TyresXpress Bengaluru',
    'Tyre shop in Bengaluru',
    'Multi-brand tyre dealer Whitefield',
    'Tyre fitting Horamavu',
    'Tyre showroom Balagere Panathur',
    'Yokohama Club Network Pro Dealer Bengaluru',
    'Yokohama BluEarth Geolandar tyres',
    'Bridgestone Turanza Sturdo tyres Bengaluru',
    'Michelin Primacy Pilot Sport tyres',
    'Continental UltraContact UC6',
    'Apollo Alnac 4G Apterra AT2',
    'MRF ZLX Wanderer tyres',
    'CEAT SecuraDrive CrossDrive',
    'Neo alloy wheels Bengaluru',
    'Lenso alloy wheels Whitefield',
    'Plati alloy wheels Thar Scorpio Creta',
    'Hyundai Creta tyre replacement',
    'Tata Nexon tyres Bengaluru',
    'Kia Seltos tyre size',
    'Mahindra Thar all-terrain tyres',
    'Toyota Innova Fortuner tyres',
    'Royal Enfield Classic 350 tyres',
    '3D wheel alignment Bengaluru',
    'Dynamic wheel balancing Whitefield',
    'Nitrogen tyre filling Horamavu',
    'Alloy wheel bend repair Bengaluru',
    '70mai dash cam installation Bengaluru',
    'Bosch wiper blades Bengaluru',
  ],
  authors: [{ name: 'TyresXpress Automotive' }],
  creator: 'TyresXpress',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `https://${BUSINESS_INFO.domain}`,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} — Multi-Brand Tyres & Automotive Services in Bengaluru`,
    description:
      '3 Premier Showrooms across Bengaluru: Siddapura (Whitefield), Horamavu, and Balagere (Panathur). Authorized dealer for 16+ tyre brands, 3D wheel alignment, and certified rim repair.',
    images: [
      {
        url: '/images/hero/homepage-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'TyresXpress Flagship Workshop & Fitting Bay in Bengaluru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_INFO.name} — Multi-Brand Tyres & Automotive Services in Bengaluru`,
    description:
      '3 Premier Showrooms across Bengaluru: Siddapura (Whitefield), Horamavu, and Balagere (Panathur). 16+ Authorized tyre brands & 3D wheel alignment.',
    images: ['/images/hero/homepage-hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Anti-FOUC (Flash of Unstyled Theme & Intro Flash Prevention) inline script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('tx-theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  if (sessionStorage.getItem('tx_cinematic_intro_seen') === 'true') {
                    document.documentElement.classList.add('tx-intro-played');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <StructuredData />
      </head>
      <body className="font-sans antialiased bg-[var(--tx-bg)] text-[var(--tx-text-primary)] selection:bg-red-600 selection:text-white flex flex-col min-h-screen">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
