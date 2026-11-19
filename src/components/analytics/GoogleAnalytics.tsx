import React from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';

/**
 * Google Analytics 4 (GA4) Script Component
 * Loads gtag.js and initializes the Google tag with Enhanced Measurement support.
 * Uses strategy="afterInteractive" to prevent render-blocking.
 * Initializes the data layer before the external Google tag script loads.
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <Script
        id="ga4-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
    </>
  );
}
