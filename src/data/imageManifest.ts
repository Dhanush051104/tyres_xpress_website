export interface ImageManifestEntry {
  id: string;
  title: string;
  section: string;
  page: string;
  targetPath: string;
  width: number;
  height: number;
  aspectRatio: string;
  description: string;
  readyForUpload?: boolean;
}

/**
 * Standardized Image Manifest
 * Naming convention: pagename_imagesetnumber_imagenumber
 * Target path convention: /images/pagename/pagename_imagesetnumber_imagenumber.jpg
 */
export const IMAGE_MANIFEST: Record<string, ImageManifestEntry> = {
  // ==========================================
  // 1. HOME PAGE (home_...)
  // ==========================================
  'home_1_1': {
    id: 'home_1_1',
    title: 'Cinematic Intro Background — Close-Up Front Wheel & Tyre',
    section: 'Cinematic Intro Animation',
    page: 'Home',
    targetPath: '/images/home/home_1_1.jpg',
    width: 1376,
    height: 768,
    aspectRatio: '16/9',
    description: 'Low-key studio close-up of a dark grey performance car facing right, dominated by a bronze multi-spoke alloy wheel and a plain, unbranded tyre sidewall.',
    readyForUpload: true,
  },
  'home_2_1': {
    id: 'home_2_1',
    title: 'TyresXpress Flagship Hero Showcase',
    section: 'Homepage Hero',
    page: 'Home',
    targetPath: '/images/home/home_2_1.jpg',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    description: 'Cinematic wide-angle view of a TyresXpress workshop showing multi-brand tyre inventory and precision fitting bays with customer car in service.',
    readyForUpload: true,
  },

  // ==========================================
  // 2. ABOUT US PAGE (about_...)
  // ==========================================
  'about_1_1': {
    id: 'about_1_1',
    title: 'Flagship Workshop Bay & Hunter Alignment Pit',
    section: 'About Us Story',
    page: 'About Us',
    targetPath: '/images/about/about_1_1.jpg',
    width: 1280,
    height: 960,
    aspectRatio: '3/2',
    description: 'Hunter 3D digital wheel alignment bay, drive-over inspection pit, and high-capacity tyre inventory storage at TyresXpress.',
    readyForUpload: true,
  },
  'about_1_2': {
    id: 'about_1_2',
    title: 'Showroom Waiting Lounge & Multi-Tier Inventory',
    section: 'About Us Story',
    page: 'About Us',
    targetPath: '/images/about/about_1_2.jpg',
    width: 1280,
    height: 960,
    aspectRatio: '3/2',
    description: 'Air-conditioned customer waiting area, custom tyre-rim lounge table, and multi-tier manufacturer inventory wall.',
    readyForUpload: true,
  },
  'about_2_1': {
    id: 'about_2_1',
    title: 'State-of-the-Art Optical Alignment Bay in Action',
    section: 'Technology & Standards',
    page: 'About Us',
    targetPath: '/images/about/about_2_1.jpg',
    width: 1280,
    height: 960,
    aspectRatio: '16/10',
    description: 'TyresXpress technician operating Hunter 3D optical wheel alignment targets on a vehicle on the alignment rack.',
    readyForUpload: true,
  },

  // ==========================================
  // 3. SERVICES PAGE (service_...)
  // ==========================================
  // Set 1: Multi-Brand Car & Two-Wheeler Tyres Carousel
  'service_1_1': {
    id: 'service_1_1',
    title: 'TyresXpress Showroom Frontage & Service Bays',
    section: 'Multi-Brand Tyres Carousel',
    page: 'Services',
    targetPath: '/images/services/service_1_1.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Customer vehicle at our illuminated multi-brand showroom with Apollo and Yokohama authorized signage.',
    readyForUpload: true,
  },
  'service_1_2': {
    id: 'service_1_2',
    title: 'Dedicated 4x4 & SUV Tyre Fitting Hub',
    section: 'Multi-Brand Tyres Carousel',
    page: 'Services',
    targetPath: '/images/services/service_1_2.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Mahindra Thar 4x4 fleet undergoing tyre consultation outside the TyresXpress service centre.',
    readyForUpload: true,
  },
  'service_1_3': {
    id: 'service_1_3',
    title: 'Premium SUV Tyre Fitment',
    section: 'Multi-Brand Tyres Carousel',
    page: 'Services',
    targetPath: '/images/services/service_1_3.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Precision fitment of Yokohama Geolandar X-CV luxury SUV radial on diamond-cut alloy rim.',
    readyForUpload: true,
  },
  'service_1_4': {
    id: 'service_1_4',
    title: 'Touchless Pneumatic Rim Clamping Bay',
    section: 'Multi-Brand Tyres Carousel',
    page: 'Services',
    targetPath: '/images/services/service_1_4.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Master technician operating leverless pneumatic tyre changer ensuring zero rim damage.',
    readyForUpload: true,
  },
  'service_1_5': {
    id: 'service_1_5',
    title: 'Two-Wheeler & Superbike Tyre Service',
    section: 'Multi-Brand Tyres Carousel',
    page: 'Services',
    targetPath: '/images/services/service_1_5.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Precision mounting of all-weather Reise Moto radial tyre on motorcycle front alloy wheel.',
    readyForUpload: true,
  },
  'service_1_6': {
    id: 'service_1_6',
    title: 'Factory-Fresh DOT Tyre Replacements',
    section: 'Multi-Brand Tyres Carousel',
    page: 'Services',
    targetPath: '/images/services/service_1_6.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'White SUV in fitting bay with brand-new labeled Yokohama BluEarth-GT tyre ready for installation.',
    readyForUpload: true,
  },
  'service_1_8': {
    id: 'service_1_8',
    title: 'Luxury Sports Sedan Bay',
    section: 'Multi-Brand Tyres Carousel',
    page: 'Services',
    targetPath: '/images/services/service_1_8.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'White Porsche Panamera sports sedan undergoing specialized wheel and tyre servicing.',
    readyForUpload: true,
  },

  // Set 2: Premium Alloy Wheels Carousel
  'service_2_1': {
    id: 'service_2_1',
    title: 'Neo Wheels Machined-Face Alloy Wheel',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_1.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Display collection of Neo Wheels blue and black precision machined alloy rim with protective rim packaging.',
    readyForUpload: true,
  },
  'service_2_2': {
    id: 'service_2_2',
    title: 'LX Multi-Spoke Gunmetal Alloy Wheel',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_2.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Gunmetal grey multi-spoke LX alloy wheel paired with Continental UltraContact UC6 touring tyre.',
    readyForUpload: true,
  },
  'service_2_3': {
    id: 'service_2_3',
    title: 'Weld Forged 5-Spoke Deep-Dish Wheel',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_3.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Showroom display of Weld Forged 5-spoke gloss black centre wheel with high-sheen mirror chrome polished lip.',
    readyForUpload: true,
  },
  'service_2_4': {
    id: 'service_2_4',
    title: 'Weld Forged 5-Spoke Vehicle Fitment',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_4.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Custom 5-spoke Weld Forged alloy wheel fitted on black vehicle with Yokohama S.drive tyre and red performance brake caliper.',
    readyForUpload: true,
  },
  'service_2_5': {
    id: 'service_2_5',
    title: 'Incubus Alloys Multi-Spoke Matte Black',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_5.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Multi-spoke matte black Incubus Alloys rim fitted on vehicle with Yokohama S.drive tyre and red caliper accent.',
    readyForUpload: true,
  },
  'service_2_6': {
    id: 'service_2_6',
    title: 'JT Beadlock-Style Rugged Off-Road Alloy',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_6.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Heavy-duty matte black beadlock-style rally alloy wheel with JT center cap engineered for Thar and 4x4 vehicles.',
    readyForUpload: true,
  },
  'service_2_7': {
    id: 'service_2_7',
    title: 'Split-Y Gloss Black Performance Alloy',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_7.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Split-Y spoke gloss black performance alloy wheel paired with Michelin Primacy 4 radial tyre.',
    readyForUpload: true,
  },
  'service_2_8': {
    id: 'service_2_8',
    title: 'Dual-Spoke Black Machined Alloy Wheel',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_8.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Precision dual-spoke black alloy wheel mounted on vehicle with high-grip Yokohama S.drive tyre.',
    readyForUpload: true,
  },
  'service_2_9': {
    id: 'service_2_9',
    title: 'Neo Wheels Dual-Tone Directional Swirl Alloy',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_9.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Diamond-cut face and gloss black directional swirl alloy wheel fitted with Yokohama BluEarth-GT tyre.',
    readyForUpload: true,
  },
  'service_2_10': {
    id: 'service_2_10',
    title: 'BBS-Style Bronze Lightweight Alloy Wheel',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_10.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Ultra-lightweight track-inspired BBS-style bronze Y-spoke alloy wheel exhibited in TyresXpress workshop.',
    readyForUpload: true,
  },
  'service_2_11': {
    id: 'service_2_11',
    title: 'Bronze BBS-Style Wheel on White Sedan',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_11.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Bronze BBS-style alloy wheel installed on white Honda City sedan paired with Bridgestone Sturdo tyre.',
    readyForUpload: true,
  },
  'service_2_12': {
    id: 'service_2_12',
    title: 'Silver Cross-Spoke Mesh Tuner Wheel',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_12.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Classic motorsport silver cross-spoke mesh alloy wheel fitted with Yokohama radial tyre on customer vehicle.',
    readyForUpload: true,
  },
  'service_2_13': {
    id: 'service_2_13',
    title: 'SSW Diamond-Cut & Gloss Black Mesh Alloy',
    section: 'Alloy Wheels Carousel',
    page: 'Services',
    targetPath: '/images/services/service_2_13.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Precision multi-mesh diamond-cut alloy wheel with SSW/PRO center cap fitted with MRF ZV2K tyre on black car.',
    readyForUpload: true,
  },

  // Set 3: High-Precision 3D Wheel Alignment Carousel
  'service_3_1': {
    id: 'service_3_1',
    title: 'Hunter Engineering 3D Optical Alignment System',
    section: 'Services Overview',
    page: 'Services',
    targetPath: '/images/services/service_3_1.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Digital imaging wheel alignment console with high-definition optical camera boom and precision target sensors.',
    readyForUpload: true,
  },
  'service_3_2': {
    id: 'service_3_2',
    title: 'SUV & 4x4 Off-Road Alignment Bay',
    section: 'Services Overview',
    page: 'Services',
    targetPath: '/images/services/service_3_2.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'High-precision computerized alignment on rugged 4x4 Mahindra Thar with all-terrain wheel targets.',
    readyForUpload: true,
  },
  'service_3_3': {
    id: 'service_3_3',
    title: 'Commercial & Heavy Utility Vehicle Alignment',
    section: 'Services Overview',
    page: 'Services',
    targetPath: '/images/services/service_3_3.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Precision alignment turntable setup for heavy commercial vans, pickups, and all-terrain fleet vehicles.',
    readyForUpload: true,
  },
  'service_3_4': {
    id: 'service_3_4',
    title: 'Luxury Performance Sedan Alignment',
    section: 'Services Overview',
    page: 'Services',
    targetPath: '/images/services/service_3_4.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Laser-calibrated camber, caster, and toe geometry alignment for luxury vehicles like the Jaguar XF.',
    readyForUpload: true,
  },

  // Set 4: Dynamic Computerized Wheel Balancing Carousel
  'service_4_1': {
    id: 'service_4_1',
    title: 'Dynamic Computerized Wheel Balancing Rig',
    section: 'Wheel Balancing Carousel',
    page: 'Services',
    targetPath: '/images/services/service_4_1.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Wheel mounted on high-precision digital wheel balancing machine with laser weight positioning indicator.',
    readyForUpload: true,
  },
  'service_4_2': {
    id: 'service_4_2',
    title: 'Precision Wheel Clamping & Weight Calibration',
    section: 'Wheel Balancing Carousel',
    page: 'Services',
    targetPath: '/images/services/service_4_2.jpg',
    width: 642,
    height: 1279,
    aspectRatio: '4/3',
    description: 'Technician calibrating and clamping wheel on dynamic balancer for precision weight application.',
    readyForUpload: true,
  },

  // Set 5: 99.9% High-Purity Nitrogen Tyre Filling
  'service_5_1': {
    id: 'service_5_1',
    title: '99.9% High-Purity Nitrogen Tyre Filling',
    section: 'Services Overview',
    page: 'Services',
    targetPath: '/images/services/service_5_1.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Automated nitrogen generator station with digital pressure gauge and technician inflating tyre with green valve caps.',
    readyForUpload: true,
  },

  // Set 6: Hydraulic Wheel Bend & Rim Straightening
  'service_6_1': {
    id: 'service_6_1',
    title: 'Hydraulic Wheel Bend & Rim Straightening',
    section: 'Services Overview',
    page: 'Services',
    targetPath: '/images/services/service_6_1.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Precision hydraulic wheel straightening lathe measuring runout dial gauge and repairing alloy rim deformation.',
    readyForUpload: true,
  },

  // Set 7: Automotive Accessories & Care
  'service_7_1': {
    id: 'service_7_1',
    title: 'Automotive Accessories & Care',
    section: 'Services Overview',
    page: 'Services',
    targetPath: '/images/services/service_7_1.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Curated showroom display of TPMS monitors, puncture repair kits, inflators, premium valve stems and wiper blades.',
  },

  // Set 8: Professional Foam Car Wash Bay (Horamavu)
  'service_8_1': {
    id: 'service_8_1',
    title: 'Professional Foam Car Wash Bay (Horamavu)',
    section: 'Specialized Services',
    page: 'Services',
    targetPath: '/images/services/service_8_1.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'High-pressure foam wash bay at Horamavu branch delivering paint-safe exterior wash and underbody jet cleaning.',
  },

  // ==========================================
  // 4. SHOWROOMS PAGE (showroom_...)
  // ==========================================
  'showroom_1_1': {
    id: 'showroom_1_1',
    title: 'Showroom 1 — Siddapura (Varthur Main Rd, Whitefield)',
    section: 'Showrooms Showcase',
    page: 'Showrooms',
    targetPath: '/images/showrooms/showroom_1_1.jpg',
    width: 1200,
    height: 800,
    aspectRatio: '3/2',
    description: 'Exterior storefront and service bays of TyresXpress Siddapura showroom on Varthur Main Road with customer parking.',
    readyForUpload: true,
  },
  'showroom_1_2': {
    id: 'showroom_1_2',
    title: 'Showroom 2 — Horamavu / Kalkere (Opp. Venkateshwara Hardware)',
    section: 'Showrooms Showcase',
    page: 'Showrooms',
    targetPath: '/images/showrooms/showroom_1_2.jpg',
    width: 1200,
    height: 800,
    aspectRatio: '3/2',
    description: 'Exterior view of TyresXpress Horamavu facility featuring tyre service bays and dedicated foam car wash bay.',
    readyForUpload: true,
  },
  'showroom_1_3': {
    id: 'showroom_1_3',
    title: 'Showroom 3 — Balagere (Panathur Main Rd, Sobha Dream Acres)',
    section: 'Showrooms Showcase',
    page: 'Showrooms',
    targetPath: '/images/showrooms/showroom_1_3.jpg',
    width: 1200,
    height: 800,
    aspectRatio: '3/2',
    description: 'Modern storefront and tyre fitting bay of TyresXpress Balagere showroom near Sobha Dream Acres, Panathur.',
    readyForUpload: true,
  },

  // ==========================================
  // 5. CATALOGUE & TYRE GUIDE PAGE (catalogue_...)
  // ==========================================
  'catalogue_1_1': {
    id: 'catalogue_1_1',
    title: 'Interactive Tyre Guide & Digital Catalogue Teaser',
    section: 'Tyre Guide Preview',
    page: 'Catalogue',
    targetPath: '/images/catalogue/catalogue_1_1.jpg',
    width: 1200,
    height: 700,
    aspectRatio: '16/9',
    description: 'Interface mockup preview of the upcoming TyresXpress digital product catalogue featuring tyre filter and tread comparison.',
  },
  'catalogue_2_1': {
    id: 'catalogue_2_1',
    title: 'Tyre Sidewall Anatomy & Markings Diagram',
    section: 'Tyre Knowledge Base',
    page: 'Catalogue',
    targetPath: '/images/catalogue/catalogue_2_1.jpg',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    description: 'Detailed diagram illustrating tyre width, aspect ratio, radial construction, rim diameter, load index and speed symbol.',
  },
};

/**
 * Legacy ID to standardized ID mapping for backwards compatibility
 */
export const IMAGE_ALIASES: Record<string, string> = {
  // Legacy IMG-xxx mappings
  'IMG-001': 'home_2_1',
  'IMG-002': 'service_1_1',
  'IMG-002-1': 'service_1_1',
  'IMG-002-2': 'service_1_2',
  'IMG-002-2W': 'service_1_2',
  'IMG-002-3': 'service_1_3',
  'IMG-002-SUV': 'service_1_3',
  'IMG-002-4': 'service_1_4',
  'IMG-002-COMM': 'service_1_4',
  'IMG-003': 'service_2_1',
  'IMG-003-1': 'service_2_1',
  'IMG-003-2': 'service_2_2',
  'IMG-003-PCD': 'service_2_2',
  'IMG-003-3': 'service_2_3',
  'IMG-003-SUV': 'service_2_3',
  'IMG-003-4': 'service_2_4',
  'IMG-003-FORGED': 'service_2_4',
  'IMG-004': 'service_3_1',
  'IMG-005': 'service_4_1',
  'IMG-006': 'service_5_1',
  'IMG-007': 'service_6_1',
  'IMG-008': 'service_7_1',
  'IMG-009': 'showroom_1_1',
  'IMG-010': 'showroom_1_2',
  'IMG-011': 'showroom_1_3',
  'IMG-012': 'catalogue_1_1',
  'IMG-013': 'about_1_1',
  'IMG-014': 'about_2_1',
  'IMG-015': 'service_8_1',
  'IMG-016': 'catalogue_2_1',
  'IMG-017': 'home_1_1',

  // Convenience aliases for showroom sets
  'showroom_2_1': 'showroom_1_2',
  'showroom_3_1': 'showroom_1_3',
};

/**
 * Maps page names or prefixes to the exact public/images subfolder.
 */
function getPageFolder(pageName: string): string {
  const map: Record<string, string> = {
    home: 'home',
    about: 'about',
    service: 'services',
    services: 'services',
    showroom: 'showrooms',
    showrooms: 'showrooms',
    catalogue: 'catalogue',
    contact: 'contact',
  };
  return map[pageName.toLowerCase()] || pageName.toLowerCase();
}

/**
 * Retrieves metadata for an image identifier.
 * Supports canonical standardized IDs (`pagename_set_number`), legacy IDs (`IMG-xxx`),
 * and dynamically resolves newly added images adhering to the naming convention.
 */
export function getImageMeta(id: string): ImageManifestEntry {
  const canonicalId = IMAGE_ALIASES[id] || id;
  const meta = IMAGE_MANIFEST[canonicalId] || IMAGE_MANIFEST[id];

  if (!meta) {
    // Dynamically derive human-readable metadata for any future pagename_set_number identifier
    const parts = id.split('_');
    const pageName = parts.length >= 3 ? parts[0] : 'website';
    const setNumber = parts.length >= 3 ? parts[1] : '1';
    const imageNumber = parts.length >= 3 ? parts[2] : '1';
    const capitalizedPage = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    const folder = getPageFolder(pageName);

    return {
      id,
      title: `${capitalizedPage} Image (Set ${setNumber}, #${imageNumber})`,
      section: `${capitalizedPage} Section ${setNumber}`,
      page: capitalizedPage,
      targetPath: `/images/${folder}/${id.toLowerCase()}.jpg`,
      width: 800,
      height: 600,
      aspectRatio: '4/3',
      description: `Future photograph for ${id} on the ${capitalizedPage} page.`,
    };
  }

  return meta;
}

export interface BrandLogoEntry {
  slug: string;
  name: string;
  targetPath: string;
  width: number;
  height: number;
  aspectRatio: string;
  readyForUpload?: boolean;
}

export const BRAND_LOGOS: Record<string, BrandLogoEntry> = {
  yokohama: { slug: 'yokohama', name: 'Yokohama', targetPath: '/images/brands/yokohama.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  bridgestone: { slug: 'bridgestone', name: 'Bridgestone', targetPath: '/images/brands/bridgestone.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  continental: { slug: 'continental', name: 'Continental', targetPath: '/images/brands/continental.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  michelin: { slug: 'michelin', name: 'Michelin', targetPath: '/images/brands/michelin.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  pirelli: { slug: 'pirelli', name: 'Pirelli', targetPath: '/images/brands/pirelli.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  apollo: { slug: 'apollo', name: 'Apollo', targetPath: '/images/brands/apollo.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  goodyear: { slug: 'goodyear', name: 'Goodyear', targetPath: '/images/brands/goodyear.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  mrf: { slug: 'mrf', name: 'MRF', targetPath: '/images/brands/mrf.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  ceat: { slug: 'ceat', name: 'CEAT', targetPath: '/images/brands/ceat.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  'jk-tyre': { slug: 'jk-tyre', name: 'JK Tyre', targetPath: '/images/brands/jktyres.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  jktyres: { slug: 'jktyres', name: 'JK Tyre', targetPath: '/images/brands/jktyres.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  reise: { slug: 'reise', name: 'Reise', targetPath: '/images/brands/reise.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  bkt: { slug: 'bkt', name: 'BKT', targetPath: '/images/brands/bkt.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  dunlop: { slug: 'dunlop', name: 'Dunlop', targetPath: '/images/brands/dunlop.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  tvs: { slug: 'tvs', name: 'TVS', targetPath: '/images/brands/tvs.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  vredestein: { slug: 'vredestein', name: 'Vredestein', targetPath: '/images/brands/vredestein.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
  firestone: { slug: 'firestone', name: 'Firestone', targetPath: '/images/brands/firestone.png', width: 400, height: 160, aspectRatio: '5/2', readyForUpload: true },
};

export function getBrandLogo(slugOrName: string): BrandLogoEntry {
  const normalized = slugOrName.toLowerCase().trim().replace(/\s+/g, '-');
  return BRAND_LOGOS[normalized] || BRAND_LOGOS[slugOrName.toLowerCase().trim()] || {
    slug: normalized,
    name: slugOrName,
    targetPath: `/images/brands/${slugOrName.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`,
    width: 400,
    height: 160,
    aspectRatio: '5/2',
    readyForUpload: false,
  };
}
