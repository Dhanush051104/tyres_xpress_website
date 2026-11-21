/**
 * Service Image Gallery Registry
 * Independent multi-image collections for services and facilities with interactive carousels.
 * Designed to easily support an unlimited number of authentic photographs as they become available.
 */

export interface ServiceSlide {
  id: string;
  title: string;
  caption: string;
  targetPath: string;
  alt: string;
  placeholderId: string;
  badge?: string;
  fit?: 'contain' | 'cover';
}

export interface ServiceGallery {
  serviceId: string;
  serviceSlug: string;
  serviceTitle: string;
  aspectRatio: string;
  slides: ServiceSlide[];
}

export const ABOUT_GALLERY: ServiceGallery = {
  serviceId: 'about-us',
  serviceSlug: 'about-us',
  serviceTitle: 'TyresXpress Bengaluru Facilities & Customer Lounge',
  aspectRatio: '3/2',
  slides: [
    {
      id: 'about_1_1',
      title: 'Flagship Workshop Bay & Hunter Alignment Pit',
      caption: 'Hunter 3D digital wheel alignment bay, drive-over inspection pit, and high-capacity tyre inventory storage',
      targetPath: '/images/about/about_1_1.jpg',
      alt: 'TyresXpress Flagship Workshop Bay and Hunter 3D Wheel Alignment Facility in Bengaluru',
      placeholderId: 'about_1_1',
    },
    {
      id: 'about_1_2',
      title: 'Showroom Waiting Lounge & Multi-Tier Inventory',
      caption: 'Air-conditioned customer waiting area, custom tyre-rim lounge table, and multi-tier manufacturer inventory wall',
      targetPath: '/images/about/about_1_2.jpg',
      alt: 'TyresXpress Air-Conditioned Customer Lounge and Multi-Brand Tyre Showroom Racks',
      placeholderId: 'about_1_2',
    },
  ],
};

export const SERVICE_GALLERIES: Record<string, ServiceGallery> = {
  // 1. service_1: Multi-Brand Car & Two-Wheeler Tyres Carousel
  tyres: {
    serviceId: 'tyres',
    serviceSlug: 'multi-brand-tyres',
    serviceTitle: 'Multi-Brand Car & Two-Wheeler Tyres',
    aspectRatio: '4/3',
    slides: [
      {
        id: 'service_1_1',
        title: 'TyresXpress Showroom Frontage & Service Bays',
        caption: 'Customer vehicle at our illuminated multi-brand showroom with Apollo and Yokohama authorized signage',
        targetPath: '/images/services/service_1_1.jpg',
        alt: 'TyresXpress Multi-Brand Tyre Showroom and Fitting Bay at Night',
        placeholderId: 'service_1_1',
      },
      {
        id: 'service_1_2',
        title: 'Dedicated 4x4 & SUV Tyre Fitting Hub',
        caption: 'Mahindra Thar 4x4 fleet undergoing tyre consultation outside the TyresXpress service centre',
        targetPath: '/images/services/service_1_2.jpg',
        alt: 'Mahindra Thar 4x4 SUVs at TyresXpress Showroom Bengaluru',
        placeholderId: 'service_1_2',
      },
      {
        id: 'service_1_3',
        title: 'Premium SUV Tyre Fitment',
        caption: 'Precision fitment of Yokohama Geolandar X-CV luxury SUV radial on diamond-cut alloy rim',
        targetPath: '/images/services/service_1_3.jpg',
        alt: 'Yokohama Geolandar X-CV SUV Tyre Fitted on Hyundai Creta Alloy Wheel',
        placeholderId: 'service_1_3',
      },
      {
        id: 'service_1_4',
        title: 'Touchless Pneumatic Rim Clamping Bay',
        caption: 'Master technician operating leverless pneumatic tyre changer ensuring zero rim damage',
        targetPath: '/images/services/service_1_4.jpg',
        alt: 'Technician Mounting Radial Tyre on Leverless Changer at TyresXpress',
        placeholderId: 'service_1_4',
        fit: 'contain',
      },
      {
        id: 'service_1_5',
        title: 'Two-Wheeler & Superbike Tyre Service',
        caption: 'Precision mounting of all-weather Reise Moto radial tyre on motorcycle front alloy wheel',
        targetPath: '/images/services/service_1_5.jpg',
        alt: 'Reise Moto Motorcycle Tyre Fitted on Front Wheel at TyresXpress',
        placeholderId: 'service_1_5',
      },
      {
        id: 'service_1_6',
        title: 'Factory-Fresh DOT Tyre Replacements',
        caption: 'White SUV in fitting bay with brand-new labeled Yokohama BluEarth-GT tyre ready for installation',
        targetPath: '/images/services/service_1_6.jpg',
        alt: 'Factory-Fresh Yokohama BluEarth-GT Tyre Ready for Fitment on SUV',
        placeholderId: 'service_1_6',
        fit: 'contain',
      },
      {
        id: 'service_1_8',
        title: 'Luxury Sports Sedan Bay',
        caption: 'White Porsche Panamera sports sedan undergoing specialized wheel and tyre servicing',
        targetPath: '/images/services/service_1_8.jpg',
        alt: 'Porsche Panamera Luxury Sports Sedan in TyresXpress Workshop Bay',
        placeholderId: 'service_1_8',
      },
    ],
  },

  // 2. service_2: Premium Alloy Wheels Carousel
  alloys: {
    serviceId: 'alloys',
    serviceSlug: 'alloy-wheels',
    serviceTitle: 'Premium Alloy Wheels',
    aspectRatio: '4/3',
    slides: [
      {
        id: 'service_2_1',
        title: 'Neo Wheels Machined-Face Alloy Wheel',
        caption: 'Display collection of Neo Wheels blue and black precision machined alloy rim with protective rim packaging',
        targetPath: '/images/services/service_2_1.jpg',
        alt: 'Neo Wheels Machined Blue and Black Alloy Wheel at TyresXpress',
        placeholderId: 'service_2_1',
      },
      {
        id: 'service_2_2',
        title: 'LX Multi-Spoke Gunmetal Alloy Wheel',
        caption: 'Gunmetal grey multi-spoke LX alloy wheel paired with Continental UltraContact UC6 touring tyre',
        targetPath: '/images/services/service_2_2.jpg',
        alt: 'LX Multi-Spoke Gunmetal Alloy Wheel with Continental UltraContact UC6 Tyre',
        placeholderId: 'service_2_2',
      },
      {
        id: 'service_2_3',
        title: 'Weld Forged 5-Spoke Deep-Dish Wheel',
        caption: 'Showroom display of Weld Forged 5-spoke gloss black centre wheel with high-sheen mirror chrome polished lip',
        targetPath: '/images/services/service_2_3.jpg',
        alt: 'Weld Forged 5-Spoke Gloss Black and Chrome Lip Deep Dish Alloy Wheel',
        placeholderId: 'service_2_3',
      },
      {
        id: 'service_2_4',
        title: 'Weld Forged 5-Spoke Vehicle Fitment',
        caption: 'Custom 5-spoke Weld Forged alloy wheel fitted on black vehicle with Yokohama S.drive tyre and red performance brake caliper',
        targetPath: '/images/services/service_2_4.jpg',
        alt: 'Weld Forged Alloy Wheel Fitted on Vehicle with Yokohama S.drive Radial Tyre',
        placeholderId: 'service_2_4',
      },
      {
        id: 'service_2_5',
        title: 'Incubus Alloys Multi-Spoke Matte Black',
        caption: 'Multi-spoke matte black Incubus Alloys rim fitted on vehicle with Yokohama S.drive tyre and red caliper accent',
        targetPath: '/images/services/service_2_5.jpg',
        alt: 'Incubus Alloys Matte Black Multi-Spoke Wheel Fitted on Car',
        placeholderId: 'service_2_5',
      },
      {
        id: 'service_2_6',
        title: 'JT Beadlock-Style Rugged Off-Road Alloy',
        caption: 'Heavy-duty matte black beadlock-style rally alloy wheel with JT center cap engineered for Thar and 4x4 vehicles',
        targetPath: '/images/services/service_2_6.jpg',
        alt: 'JT Beadlock Style Rugged 4x4 Off-Road Alloy Wheel at TyresXpress',
        placeholderId: 'service_2_6',
      },
      {
        id: 'service_2_7',
        title: 'Split-Y Gloss Black Performance Alloy',
        caption: 'Split-Y spoke gloss black performance alloy wheel paired with Michelin Primacy 4 radial tyre',
        targetPath: '/images/services/service_2_7.jpg',
        alt: 'Gloss Black Split-Y Spoke Alloy Wheel Fitted with Michelin Primacy 4 Tyre',
        placeholderId: 'service_2_7',
      },
      {
        id: 'service_2_8',
        title: 'Dual-Spoke Black Machined Alloy Wheel',
        caption: 'Precision dual-spoke black alloy wheel mounted on vehicle with high-grip Yokohama S.drive tyre',
        targetPath: '/images/services/service_2_8.jpg',
        alt: 'Dual-Spoke Black Alloy Wheel on Vehicle with Yokohama S.drive',
        placeholderId: 'service_2_8',
      },
      {
        id: 'service_2_9',
        title: 'Neo Wheels Dual-Tone Directional Swirl Alloy',
        caption: 'Diamond-cut face and gloss black directional swirl alloy wheel fitted with Yokohama BluEarth-GT tyre',
        targetPath: '/images/services/service_2_9.jpg',
        alt: 'Neo Wheels Diamond-Cut Directional Swirl Alloy on Yokohama BluEarth-GT',
        placeholderId: 'service_2_9',
      },
      {
        id: 'service_2_10',
        title: 'BBS-Style Bronze Lightweight Alloy Wheel',
        caption: 'Ultra-lightweight track-inspired BBS-style bronze Y-spoke alloy wheel exhibited in TyresXpress workshop',
        targetPath: '/images/services/service_2_10.jpg',
        alt: 'BBS-Style Bronze Lightweight Y-Spoke Alloy Wheel on Display',
        placeholderId: 'service_2_10',
      },
      {
        id: 'service_2_11',
        title: 'Bronze BBS-Style Wheel on White Sedan',
        caption: 'Bronze BBS-style alloy wheel installed on white Honda City sedan paired with Bridgestone Sturdo tyre',
        targetPath: '/images/services/service_2_11.jpg',
        alt: 'Bronze BBS-Style Wheel Fitted on White Honda City with Bridgestone Sturdo',
        placeholderId: 'service_2_11',
      },
      {
        id: 'service_2_12',
        title: 'Silver Cross-Spoke Mesh Tuner Wheel',
        caption: 'Classic motorsport silver cross-spoke mesh alloy wheel fitted with Yokohama radial tyre on customer vehicle',
        targetPath: '/images/services/service_2_12.jpg',
        alt: 'Silver Cross-Spoke Mesh Tuner Alloy Wheel with Yokohama Tyre',
        placeholderId: 'service_2_12',
      },
      {
        id: 'service_2_13',
        title: 'SSW Diamond-Cut & Gloss Black Mesh Alloy',
        caption: 'Precision multi-mesh diamond-cut alloy wheel with SSW/PRO center cap fitted with MRF ZV2K tyre on black car',
        targetPath: '/images/services/service_2_13.jpg',
        alt: 'SSW Diamond-Cut and Gloss Black Mesh Alloy Wheel Fitted with MRF Tyre',
        placeholderId: 'service_2_13',
      },
    ],
  },

  // 3. service_3: High-Precision 3D Wheel Alignment Carousel (4 slides)
  alignment: {
    serviceId: 'alignment',
    serviceSlug: '3d-wheel-alignment',
    serviceTitle: 'High-Precision 3D Wheel Alignment',
    aspectRatio: '4/3',
    slides: [
      {
        id: 'service_3_1',
        title: 'Hunter Engineering 3D Optical Alignment System',
        caption: 'Digital imaging wheel alignment console with high-definition optical camera boom and precision target sensors',
        targetPath: '/images/services/service_3_1.jpg',
        alt: 'Hunter Engineering 3D Optical Wheel Alignment Console at TyresXpress',
        placeholderId: 'service_3_1',
      },
      {
        id: 'service_3_2',
        title: 'SUV & 4x4 Off-Road Alignment Bay',
        caption: 'High-precision computerized alignment on rugged 4x4 Mahindra Thar with all-terrain wheel targets',
        targetPath: '/images/services/service_3_2.jpg',
        alt: 'Mahindra Thar 4x4 Undergoing 3D Wheel Alignment at TyresXpress Workshop Bay',
        placeholderId: 'service_3_2',
      },
      {
        id: 'service_3_3',
        title: 'Commercial & Heavy Utility Vehicle Alignment',
        caption: 'Precision alignment turntable setup for heavy commercial vans, pickups, and all-terrain fleet vehicles',
        targetPath: '/images/services/service_3_3.jpg',
        alt: 'Heavy-Duty 4x4 Commercial Utility Pickup on 3D Alignment Turntable at TyresXpress',
        placeholderId: 'service_3_3',
      },
      {
        id: 'service_3_4',
        title: 'Luxury Performance Sedan Alignment',
        caption: 'Laser-calibrated camber, caster, and toe geometry alignment for luxury vehicles like the Jaguar XF',
        targetPath: '/images/services/service_3_4.jpg',
        alt: 'Luxury Jaguar XF Sedan Undergoing Laser-Calibrated 3D Wheel Alignment',
        placeholderId: 'service_3_4',
      },
    ],
  },


  // 5. about-us: About Us Carousel
  'about-us': ABOUT_GALLERY,
};

/**
 * Helper to check if a service or page section has a multi-image carousel configured.
 */
export function getServiceGallery(serviceIdOrSlug: string): ServiceGallery | undefined {
  return (
    SERVICE_GALLERIES[serviceIdOrSlug] ||
    Object.values(SERVICE_GALLERIES).find(
      (g) => g.serviceSlug === serviceIdOrSlug || g.serviceId === serviceIdOrSlug
    )
  );
}
