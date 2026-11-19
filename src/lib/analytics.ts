/**
 * TyresXpress Google Analytics 4 (GA4) Utility
 * Measurement ID: G-N9J92SW24V
 *
 * Implements GA4 standard and recommended events with strict privacy protection.
 * Ensures tracking errors never disrupt user interactions or application stability.
 */

export const GA_MEASUREMENT_ID = 'G-N9J92SW24V';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

/**
 * Safely dispatch an event to Google Analytics 4.
 * Fails silently to prevent any disruption to user navigation or actions.
 */
export function trackEvent(eventName: string, eventParams?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[GA4] Event dispatch error:', err);
    }
  }
}

/**
 * A. Contact Form Submission
 * Fires 'generate_lead' ONLY after Supabase confirms successful enquiry insertion.
 * Strictly non-PII: service category and showroom identifier only.
 */
export function trackGenerateLead({
  service,
  showroom,
}: {
  service: string;
  showroom: string;
}): void {
  trackEvent('generate_lead', {
    service_category: service,
    showroom_id: showroom,
  });
}

/**
 * B. Telephone Click
 * Fires 'phone_click' when a visitor clicks a showroom or central telephone link.
 * Strictly non-PII: showroom identifier and UI location only. The actual telephone number is NEVER transmitted.
 */
export function trackPhoneClick({
  showroom,
  location,
}: {
  showroom?: string;
  location: string;
}): void {
  trackEvent('phone_click', {
    showroom_id: showroom || 'central_hotline',
    link_location: location,
  });
}

/**
 * C. Showroom Directions
 * Fires 'get_directions' when a visitor clicks a Google Maps or directions link.
 * Strictly non-PII: showroom identifier and UI location only.
 */
export function trackGetDirections({
  showroom,
  location,
}: {
  showroom: string;
  location: string;
}): void {
  trackEvent('get_directions', {
    showroom_id: showroom,
    link_location: location,
  });
}

/**
 * D. Service Interaction
 * Fires 'service_interest' when a visitor interacts with a service enquiry CTA.
 * Strictly non-PII: service identifier and interaction action only.
 */
export function trackServiceInterest({
  service,
  action,
}: {
  service: string;
  action: string;
}): void {
  trackEvent('service_interest', {
    service_id: service,
    interaction_type: action,
  });
}
