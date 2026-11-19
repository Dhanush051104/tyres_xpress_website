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

export const IMAGE_MANIFEST: Record<string, ImageManifestEntry> = {
  'IMG-001': {
    id: 'IMG-001',
    title: 'TyresXpress Flagship Hero Showcase',
    section: 'Homepage Hero',
    page: 'Home',
    targetPath: '/images/hero/homepage-hero.jpg',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    description: 'Cinematic wide-angle view of a TyresXpress workshop showing multi-brand tyre inventory and precision fitting bays with customer car in service.',
    readyForUpload: true,
  },
  'IMG-002': {
    id: 'IMG-002',
    title: 'Multi-Brand Tyre Fitting & Supply',
    section: 'Services Overview',
    page: 'Services / Home',
    targetPath: '/images/services/tyre-fitting.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Technician fitting a new premium passenger car tyre using hydraulic rim-safe tyre changer.',
  },
  'IMG-003': {
    id: 'IMG-003',
    title: 'Alloy Wheels Collection',
    section: 'Services Overview',
    page: 'Services / Home',
    targetPath: '/images/services/alloy-wheels.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Showroom display wall of premium diamond-cut, matte black and gunmetal alloy wheels for cars and SUVs.',
  },
  'IMG-004': {
    id: 'IMG-004',
    title: 'High-Precision 3D Wheel Alignment',
    section: 'Services Overview',
    page: 'Services / Home',
    targetPath: '/images/services/wheel-alignment.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Vehicle mounted on 3D computer wheel alignment scissor lift with high-definition optical sensor targets on all four wheels.',
    readyForUpload: true,
  },
  'IMG-005': {
    id: 'IMG-005',
    title: 'Dynamic Computerized Wheel Balancing',
    section: 'Services Overview',
    page: 'Services / Home',
    targetPath: '/images/services/wheel-balancing.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Wheel mounted on high-precision digital wheel balancing machine with laser weight positioning indicator.',
    readyForUpload: true,
  },
  'IMG-006': {
    id: 'IMG-006',
    title: '99.9% High-Purity Nitrogen Tyre Filling',
    section: 'Services Overview',
    page: 'Services / Home',
    targetPath: '/images/services/nitrogen-filling.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Automated nitrogen generator station with digital pressure gauge and technician inflating tyre with green valve caps.',
    readyForUpload: true,
  },
  'IMG-007': {
    id: 'IMG-007',
    title: 'Hydraulic Wheel Bend & Rim Straightening',
    section: 'Services Overview',
    page: 'Services / Home',
    targetPath: '/images/services/wheel-bend-repair.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Precision hydraulic wheel straightening lathe measuring runout dial gauge and repairing alloy rim deformation.',
    readyForUpload: true,
  },
  'IMG-008': {
    id: 'IMG-008',
    title: 'Automotive Accessories & Care',
    section: 'Services Overview',
    page: 'Services / Home',
    targetPath: '/images/services/car-accessories.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'Curated showroom display of TPMS monitors, puncture repair kits, inflators, premium valve stems and wiper blades.',
  },
  'IMG-009': {
    id: 'IMG-009',
    title: 'Showroom 1 — Siddapura (Varthur Main Rd, Whitefield)',
    section: 'Showrooms',
    page: 'Showrooms / Home',
    targetPath: '/images/showrooms/siddapura-exterior.jpg',
    width: 1200,
    height: 800,
    aspectRatio: '3/2',
    description: 'Exterior storefront and service bays of TyresXpress Siddapura showroom on Varthur Main Road with customer parking.',
    readyForUpload: true,
  },
  'IMG-010': {
    id: 'IMG-010',
    title: 'Showroom 2 — Horamavu / Kalkere (Opp. Venkateshwara Hardware)',
    section: 'Showrooms',
    page: 'Showrooms / Home',
    targetPath: '/images/showrooms/horamavu-exterior.jpg',
    width: 1200,
    height: 800,
    aspectRatio: '3/2',
    description: 'Exterior view of TyresXpress Horamavu facility featuring tyre service bays and dedicated foam car wash bay.',
    readyForUpload: true,
  },
  'IMG-011': {
    id: 'IMG-011',
    title: 'Showroom 3 — Balagere (Panathur Main Rd, Sobha Dream Acres)',
    section: 'Showrooms',
    page: 'Showrooms / Home',
    targetPath: '/images/showrooms/balagere-exterior.jpg',
    width: 1200,
    height: 800,
    aspectRatio: '3/2',
    description: 'Modern storefront and tyre fitting bay of TyresXpress Balagere showroom near Sobha Dream Acres, Panathur.',
    readyForUpload: true,
  },
  'IMG-012': {
    id: 'IMG-012',
    title: 'Interactive Tyre Guide & Digital Catalogue Teaser',
    section: 'Tyre Guide Preview',
    page: 'Catalogue / Home',
    targetPath: '/images/catalogue/catalogue-preview.jpg',
    width: 1200,
    height: 700,
    aspectRatio: '16/9',
    description: 'Interface mockup preview of the upcoming TyresXpress digital product catalogue featuring tyre filter and tread comparison.',
  },
  'IMG-013': {
    id: 'IMG-013',
    title: 'Our Heritage & Expert Technical Team',
    section: 'About Us Story',
    page: 'About Us',
    targetPath: '/images/about/team-workshop.jpg',
    width: 1200,
    height: 800,
    aspectRatio: '3/2',
    description: 'The certified TyresXpress technician team in uniform standing by modern service equipment at the Bengaluru workshop.',
  },
  'IMG-014': {
    id: 'IMG-014',
    title: 'State-of-the-Art Optical Alignment Bay',
    section: 'Technology & Standards',
    page: 'About Us / Services',
    targetPath: '/images/about/alignment-bay.jpg',
    width: 1000,
    height: 650,
    aspectRatio: '16/10',
    description: 'Close-up of calibrated 3D alignment sensor beam and digital steering angle compensation monitor.',
  },
  'IMG-015': {
    id: 'IMG-015',
    title: 'Professional Foam Car Wash Bay (Horamavu)',
    section: 'Specialized Services',
    page: 'Services / Showrooms',
    targetPath: '/images/services/car-wash-bay.jpg',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
    description: 'High-pressure foam wash bay at Horamavu branch delivering paint-safe exterior wash and underbody jet cleaning.',
  },
  'IMG-016': {
    id: 'IMG-016',
    title: 'Tyre Sidewall Anatomy & Markings Diagram',
    section: 'Tyre Knowledge Base',
    page: 'Tyre Guide',
    targetPath: '/images/guide/sidewall-markings.jpg',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    description: 'Detailed diagram illustrating tyre width, aspect ratio, radial construction, rim diameter, load index and speed symbol.',
  },
  'IMG-017': {
    id: 'IMG-017',
    title: 'Cinematic Intro Background — Close-Up Front Wheel & Tyre',
    section: 'Cinematic Intro Animation',
    page: 'Home (Intro)',
    targetPath: '/images/intro/intro-vehicle-background.jpg',
    width: 1376,
    height: 768,
    aspectRatio: '16/9',
    description: 'Low-key studio close-up of a dark grey performance car facing right, dominated by a bronze multi-spoke alloy wheel and a plain, unbranded tyre sidewall. Dark negative space on the left for the animated wordmark. AI-generated image (no tyre brand, logos or text).',
    readyForUpload: true,
  },
};

export function getImageMeta(id: string): ImageManifestEntry {
  const meta = IMAGE_MANIFEST[id];
  if (!meta) {
    return {
      id,
      title: `Placeholder for ${id}`,
      section: 'General Section',
      page: 'Website',
      targetPath: `/images/placeholder/${id.toLowerCase()}.jpg`,
      width: 800,
      height: 600,
      aspectRatio: '4/3',
      description: `Intended future photograph for ${id}.`,
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

export function getBrandLogo(slug: string): BrandLogoEntry {
  // Normalize slug variations like jk-tyre to jktyres
  const normalized = slug === 'jk-tyre' || slug === 'jk tyre' || slug === 'jk' ? 'jktyres' : slug;
  return BRAND_LOGOS[normalized] || BRAND_LOGOS[slug] || {
    slug,
    name: slug,
    targetPath: `/images/brands/${slug}.png`,
    width: 400,
    height: 160,
    aspectRatio: '5/2',
    readyForUpload: true,
  };
}
