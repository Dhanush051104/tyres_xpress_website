import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BUSINESS_INFO } from '@/data/business';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0d' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BUSINESS_INFO.domain}`),
  title: {
    default: `${BUSINESS_INFO.name} — Multi-Brand Tyres & Automotive Services | Bengaluru`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    'Official website of TyresXpress. 3 Showrooms in Bengaluru: Siddapura (Whitefield), Horamavu, and Balagere (Panathur). Multi-brand car & bike tyres, alloy wheels, 3D alignment, computerized balancing, nitrogen filling, rim bend repair, and car wash.',
  keywords: [
    'TyresXpress',
    'Tyres Xpress',
    'Tyres Bangalore',
    'Tyres Bengaluru',
    'Tyres Whitefield',
    'Tyres Horamavu',
    'Tyres Balagere',
    'Wheel Alignment Bangalore',
    'Wheel Balancing Whitefield',
    'Alloy Wheels Bengaluru',
    'Nitrogen tyre filling Bangalore',
    'Yokohama tyres Bangalore',
    'Bridgestone tyres Bangalore',
    'Continental tyres Bengaluru',
    'Michelin tyres Whitefield',
  ],
  authors: [{ name: 'TyresXpress Automotive' }],
  creator: 'TyresXpress',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `https://${BUSINESS_INFO.domain}`,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} — Official Bengaluru Multi-Brand Tyre Showrooms`,
    description:
      '3 Premier Showrooms across Bengaluru. Authorized dealer for Yokohama, Bridgestone, Continental, Michelin, Apollo, MRF, CEAT, and Pirelli.',
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
        {/* Anti-FOUC (Flash of Unstyled Theme) inline script */}
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
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-[#0B0B0D] text-neutral-900 dark:text-[#F5F5F5] selection:bg-red-500 selection:text-white dark:selection:bg-[#F28C28] dark:selection:text-neutral-950 flex flex-col min-h-screen">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
