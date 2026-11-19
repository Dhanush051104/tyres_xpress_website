import React from 'react';
import { BUSINESS_INFO, SHOWROOMS, SERVICES, BRANDS } from '@/data/business';
import { BENGALURU_LOCALITIES } from '@/data/seoKeywords';

// Retain all 16 featured brands plus additional prominent tyre brands serviced/stocked
const ALL_STRUCTURED_BRANDS = Array.from(
  new Set([
    ...BRANDS.map((b) => b.name),
    'TVS Eurogrip',
    'Maxxis',
    'Hankook',
    'Kumho',
    'Falken',
    'Ralco',
  ])
);

// Showroom-specific locality mapping
function getShowroomLocalities(showroomId: string): string[] {
  switch (showroomId) {
    case 'siddapura':
      return Array.from(new Set(['Whitefield', ...BENGALURU_LOCALITIES.whitefieldCluster]));
    case 'horamavu':
      return Array.from(new Set(['Horamavu', ...BENGALURU_LOCALITIES.horamavuCluster]));
    case 'balagere':
      return Array.from(new Set(['Balagere', 'Panathur', ...BENGALURU_LOCALITIES.balagerePanathurCluster]));
    default:
      return ['Bengaluru'];
  }
}

export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AutomotiveBusiness', 'AutoPartsStore'],
        '@id': 'https://tyresxpress.com/#organization',
        name: BUSINESS_INFO.name,
        legalName: BUSINESS_INFO.legalName,
        url: 'https://tyresxpress.com',
        slogan: BUSINESS_INFO.tagline,
        email: BUSINESS_INFO.email,
        telephone: `+91${BUSINESS_INFO.centralHotline}`,
        foundingDate: `${BUSINESS_INFO.establishedYear}`,
        description:
          "Bengaluru's premier multi-brand tyre dealership and Yokohama Club Network (YCN) Pro Dealer across Siddapura (Whitefield), Horamavu, and Balagere (Panathur). Authorised Multi-Brand Tyre Dealership for 16+ Brands offering a 100% Genuine Tyres Guarantee with Direct Manufacturer Warranty, 3D wheel alignment, dynamic balancing, nitrogen filling, alloy rim bend repair, and certified automotive service.",
        image: 'https://tyresxpress.com/images/hero/homepage-hero.jpg',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: BUSINESS_INFO.city,
          addressRegion: BUSINESS_INFO.state,
          addressCountry: 'IN',
        },
        areaServed: Array.from(
          new Set([
            'Bengaluru',
            ...BENGALURU_LOCALITIES.whitefieldCluster,
            ...BENGALURU_LOCALITIES.horamavuCluster,
            ...BENGALURU_LOCALITIES.balagerePanathurCluster,
          ])
        ),
        memberOf: {
          '@type': 'Organization',
          name: 'Yokohama Club Network',
          alternateName: 'YCN',
          description: 'Official Yokohama Club Network (YCN) Pro Dealer in Bengaluru',
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Authorised Multi-Brand Tyre Dealership for 16+ Brands',
            credentialCategory: 'Dealership Authorization',
          },
        ],
        knowsAbout: [
          'Yokohama Club Network (YCN) Pro Dealer',
          'Authorised Multi-Brand Tyre Dealership for 16+ Brands',
          '100% Genuine Tyres Guarantee with Direct Manufacturer Warranty',
          'High-Precision 3D Wheel Alignment',
          'Computerized Dynamic Wheel Balancing',
          '99.9% High-Purity Nitrogen Inflation',
          'Hydraulic Wheel Bend & Alloy Rim Straightening',
          'Standard Tubeless & Mushroom Plug Tyre Puncture Repairs',
          'Premium Alloy Wheels & Car Accessories',
          'Vehicle Tyre Replacement: Hyundai Creta, Tata Nexon, Kia Seltos, Maruti Swift, Mahindra Thar, Toyota Innova, Fortuner',
          'Two-Wheeler Tyre Fitment: Royal Enfield Classic 350, Himalayan 450, Honda Activa, TVS Jupiter, KTM Duke',
          'Aftermarket Alloy Wheels: Neo Wheels, Lenso, Plati India, MOMO, Enkei, Fuel Off-Road',
          'Tyre Families: Yokohama BluEarth & Geolandar, Bridgestone Turanza & Sturdo, Michelin Primacy & Pilot Sport, Continental UltraContact, Apollo Alnac & Apterra, MRF ZLX & Wanderer, CEAT SecuraDrive',
          'Automotive Upgrades: 70mai & DDPAI Dash Cams, Blaupunkt & Sony Car Audio, Philips & Osram LED Headlights, Bosch Aerotwin Wipers, Triton Tubeless Valves',
        ],
        subOrganization: SHOWROOMS.map((showroom) => ({
          '@type': showroom.hasCarWash
            ? ['TireShop', 'AutoRepair', 'CarWash']
            : ['TireShop', 'AutoRepair'],
          '@id': `https://tyresxpress.com/showrooms#${showroom.id}`,
          name: showroom.name,
          url: `https://tyresxpress.com/showrooms#${showroom.id}`,
          telephone: `+91${showroom.phone}`,
          parentOrganization: { '@id': 'https://tyresxpress.com/#organization' },
          address: {
            '@type': 'PostalAddress',
            streetAddress: showroom.address,
            addressLocality: 'Bengaluru',
            addressRegion: 'Karnataka',
            postalCode: showroom.pinCode,
            addressCountry: 'IN',
          },
          areaServed: getShowroomLocalities(showroom.id),
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ],
              opens: '09:00',
              closes: '20:00',
            },
          ],
          hasMap: showroom.googleMapsUrl,
          // Branch-specific service offers preserving that Car Wash is exclusive to Horamavu
          makesOffer: showroom.services.map((serviceName) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: serviceName,
            },
            ...(serviceName.toLowerCase().includes('tyre')
              ? {
                  warranty: {
                    '@type': 'WarrantyPromise',
                    name: '100% Genuine Tyres Guarantee with Direct Manufacturer Warranty',
                    description:
                      '100% Genuine Tyres Guarantee with Direct Manufacturer Warranty',
                  },
                }
              : {}),
          })),
        })),
        brand: ALL_STRUCTURED_BRANDS.map((brandName) => ({
          '@type': 'Brand',
          name: brandName,
        })),
        // Comprehensive catalog of services offered across the business
        makesOffer: SERVICES.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.shortDesc,
          },
          ...(service.id === 'tyres'
            ? {
                warranty: {
                  '@type': 'WarrantyPromise',
                  name: '100% Genuine Tyres Guarantee with Direct Manufacturer Warranty',
                  description:
                    '100% Genuine Tyres Guarantee with Direct Manufacturer Warranty',
                },
              }
            : {}),
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
