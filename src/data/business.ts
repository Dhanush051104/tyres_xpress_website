export interface Showroom {
  id: string;
  name: string;
  shortName: string;
  locality: string;
  address: string;
  pinCode: string;
  phone: string;
  displayPhone: string;
  hours: string;
  openDays: string;
  landmark?: string;
  mapQuery: string;
  googleMapsUrl: string;
  imageId: string;
  services: string[];
  isFlagship?: boolean;
  hasCarWash?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  benefits: string[];
  equipment: string;
  intervalRecommendation: string;
  imageId: string;
  branches: string[];
  slug: string;
}

export interface BrandItem {
  name: string;
  category: ('Passenger Cars' | 'SUVs & 4x4' | 'Two-Wheelers' | 'Commercial & Light Truck' | 'Performance & EV')[];
  origin: string;
  tagline: string;
  highlights: string[];
  popularFor: string;
}

export const BUSINESS_INFO = {
  name: 'TyresXpress',
  legalName: 'Tyres Xpress',
  tagline: 'Your Trusted Multi-Brand Tyre & Precision Automotive Hub',
  establishedYear: 2019,
  email: 'tyresxpress2019@gmail.com',
  domain: 'tyresxpress.com',
  centralHotline: '9845411995',
  displayHotline: '+91 98454 11995',
  city: 'Bengaluru',
  state: 'Karnataka',
  country: 'India',
  showroomsCount: 3,
  hoursCommon: '9:00 AM – 8:00 PM (Monday to Sunday)',
};

export const SHOWROOMS: Showroom[] = [
  {
    id: 'siddapura',
    name: 'Tyres Xpress, Siddapura',
    shortName: 'Siddapura / Whitefield',
    locality: 'Varthur Main Road, Whitefield',
    address: '26/2, Varthur Main Road, Siddapura, Bengaluru - 560066',
    pinCode: '560066',
    phone: '9845411995',
    displayPhone: '+91 98454 11995',
    hours: '9:00 AM – 8:00 PM',
    openDays: 'All 7 Days Open',
    landmark: 'Opposite Shell Fuel Station, Varthur Main Road',
    mapQuery: 'Tyres+Xpress+Siddapura+Bengaluru+560066',
    googleMapsUrl: 'https://maps.google.com/?q=26/2,+Varthur+Main+Road,+Siddapura,+Bengaluru+-+560066',
    imageId: 'IMG-009',
    isFlagship: true,
    services: [
      'Multi-brand car and two-wheeler tyres',
      'Alloy wheels',
      '3D Wheel alignment',
      'Computerized Wheel balancing',
      'Nitrogen filling',
      'Wheel bend repair',
      'Car accessories',
    ],
  },
  {
    id: 'horamavu',
    name: 'Tyres Xpress, Horamavu',
    shortName: 'Horamavu / Kalkere',
    locality: 'Kalkere / Horamavu',
    address: 'Kalkere Main Road, Jayanthi Nagar Extension, Kalkere / Horamavu, Bengaluru - 560113 (Opposite Venkateshwara Hardware)',
    pinCode: '560113',
    phone: '9740688995',
    displayPhone: '+91 97406 88995',
    hours: '9:00 AM – 8:00 PM',
    openDays: 'All 7 Days Open',
    landmark: 'Opposite Venkateshwara Hardware',
    mapQuery: 'Tyres+Xpress+Kalkere+Main+Road+Horamavu+Bengaluru+560113',
    googleMapsUrl: 'https://maps.google.com/?q=Kalkere+Main+Road,+Jayanthi+Nagar+Extension,+Kalkere+Horamavu,+Bengaluru+-+560113',
    imageId: 'IMG-010',
    hasCarWash: true,
    services: [
      'Multi-brand car and two-wheeler tyres',
      'Alloy wheels',
      '3D Wheel alignment',
      'Computerized Wheel balancing',
      'Nitrogen filling',
      'Wheel bend repair',
      'Car accessories',
      'Car wash',
    ],
  },
  {
    id: 'balagere',
    name: 'Tyres Xpress, Balagere',
    shortName: 'Balagere / Panathur',
    locality: 'Panathur Main Road, Varthur Hobli',
    address: '1st Gate, Sy No. 68 Balagere Village, Panathur Main Road, Varthur Hobli, near Sobha Dream Acres, Bengaluru - 560087',
    pinCode: '560087',
    phone: '9741688995',
    displayPhone: '+91 97416 88995',
    hours: '9:00 AM – 8:00 PM',
    openDays: 'All 7 Days Open',
    landmark: '1st Gate, Near Sobha Dream Acres',
    mapQuery: 'Tyres+Xpress+Balagere+Panathur+Main+Road+Sobha+Dream+Acres+Bengaluru',
    googleMapsUrl: 'https://maps.google.com/?q=1st+Gate,+Sy+No.+68+Balagere+Village,+Panathur+Main+Road,+Bengaluru+-+560087',
    imageId: 'IMG-011',
    services: [
      'Multi-brand car and two-wheeler tyres',
      'Alloy wheels',
      '3D Wheel alignment',
      'Computerized Wheel balancing',
      'Nitrogen filling',
      'Wheel bend repair',
      'Car accessories',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'tyres',
    slug: 'multi-brand-tyres',
    title: 'Multi-Brand Car & Two-Wheeler Tyres',
    shortDesc: 'Complete selection of genuine passenger car, SUV, motorcycle, and scooter tyres from 14+ world-class manufacturers.',
    fullDesc: 'We stock an extensive inventory of genuine, fresh-production tyres for hatchbacks, sedans, performance crossovers, heavy SUVs, and 2-wheelers. Our factory-trained tyre consultants evaluate your vehicle specifications, daily commute, highway usage, and budget to recommend the perfect compound.',
    features: [
      '100% Genuine manufacturer warranty with direct registration assistance',
      'Zero-scratch touchless rim mounting machinery',
      'Both tubeless and tube-type tyres for all vehicle categories',
      'Latest DOT date codes ensuring fresh, non-aged rubber compound',
    ],
    benefits: [
      'Superior braking performance and wet-grip traction',
      'Maximized fuel efficiency through low rolling resistance',
      'Optimized cabin noise reduction with comfort tread patterns',
    ],
    equipment: 'Pneumatic leverless tyre changers with synthetic rim-protector clamp jaws',
    intervalRecommendation: 'Inspect every 10,000 km or replace when tread depth drops below 2.5 mm / 5 years of age',
    imageId: 'IMG-002',
    branches: ['Siddapura', 'Horamavu', 'Balagere'],
  },
  {
    id: 'alloys',
    slug: 'alloy-wheels',
    title: 'Premium Alloy Wheels',
    shortDesc: 'Aesthetic and lightweight alloy wheels in diamond-cut, matte black, gloss machine face, and gunmetal finishes.',
    fullDesc: 'Transform the stance, handling, and visual appeal of your car with our certified alloy wheels. Sourced in precise PCD, offset (ET), and center bore specifications to match Indian road conditions without compromising suspension geometry.',
    features: [
      'Rigorous impact-tested, JWL / VIA certified designs',
      'Wide PCD options: 98, 100, 108, 112, 114.3 for Maruti, Hyundai, Kia, Tata, Mahindra, Skoda, VW & Honda',
      'Lightweight aluminum alloys that decrease unsprung mass',
      'Custom hub-centric rings and tapered tuner lug nuts available',
    ],
    benefits: [
      'Sharper steering response and improved cornering dynamics',
      'Enhanced brake cooling airflow preventing rotor heat fade',
      'Unmatched road presence with modern automotive styling',
    ],
    equipment: 'Digital wheel offset gauges and calibrated hub-centering tools',
    intervalRecommendation: 'Visual inspection during every tyre rotation or alignment',
    imageId: 'IMG-003',
    branches: ['Siddapura', 'Horamavu', 'Balagere'],
  },
  {
    id: 'alignment',
    slug: '3d-wheel-alignment',
    title: 'High-Precision 3D Wheel Alignment',
    shortDesc: 'Camera-based computerized 3D measurement aligning Camber, Caster, and Toe angles to exact manufacturer tolerances.',
    fullDesc: 'Bengaluru potholes, road construction, and speed breakers gradually knock your steering geometry out of spec. Our computer-guided 3D wheel alignment system uses ultra-high resolution digital optical cameras and OEM database profiles to restore factory-precise steering alignment.',
    features: [
      'Live HD 3D optical target sensor measurement',
      'Before-and-after comprehensive printout & digital report',
      'Precision steering wheel angle sensor zeroing',
      'Full 4-wheel geometric center-line thrust angle calculation',
    ],
    benefits: [
      'Eliminates vehicle pulling to the left or right',
      'Prevents premature inside/outside uneven tread wear',
      'Smooth, relaxed highway cruising with perfect steering wheel centering',
    ],
    equipment: 'Industrial 3D digital imaging alignment rack with high-definition optical beam cameras',
    intervalRecommendation: 'Every 5,000 km or immediately after heavy pothole impact / suspension work',
    imageId: 'IMG-004',
    branches: ['Siddapura', 'Horamavu', 'Balagere'],
  },
  {
    id: 'balancing',
    slug: 'computerized-wheel-balancing',
    title: 'Computerized Dynamic Wheel Balancing',
    shortDesc: 'Laser-guided dynamic weight balancing eliminating high-speed steering vibration and premature suspension wear.',
    fullDesc: 'Even a 15-gram weight imbalance can cause violent steering vibration at 70-100 km/h on expressways. Our computer-controlled balancing rigs spin the wheel, pinpoint exact static and dynamic weight deficiencies, and guide our technicians to apply zinc-coated weights at laser-targeted positions.',
    features: [
      'High-speed computerized dynamic spin analysis',
      'Laser indicator for inside-spoke hidden clip-on and stick-on adhesive weights',
      'Static and dynamic unbalance separation',
      'Wheel rim runout detection during rotation cycle',
    ],
    benefits: [
      'Rock-solid steering stability and zero wobble at 80-120 km/h',
      'Protects expensive steering rack, tie-rod ends, and shock absorbers',
      'Even tyre contact patch ensuring uniform tread longevity',
    ],
    equipment: 'Microprocessor-controlled digital balancer with automatic sonar distance & width gauge',
    intervalRecommendation: 'Every 5,000 km along with wheel rotation',
    imageId: 'IMG-005',
    branches: ['Siddapura', 'Horamavu', 'Balagere'],
  },
  {
    id: 'nitrogen',
    slug: 'nitrogen-filling',
    title: '99.9% High-Purity Nitrogen Tyre Filling',
    shortDesc: 'Automated nitrogen inflation station delivering stable tyre pressure, cooler running temperatures, and slower pressure loss.',
    fullDesc: 'Regular compressed air contains 21% oxygen and moisture, which expands dramatically under Bengaluru heat and oxidizes tyre inner liners. Our automated multi-stage membrane nitrogen generator purges contaminated air and fills tyres with dry 99.9% pure nitrogen.',
    features: [
      'Automated vacuum-assisted purge cycle before nitrogen fill',
      'High-purity membrane PSA generation eliminating moisture and oil vapor',
      'Distinctive green valve caps for nitrogen identification',
      'Free top-up checks across all TyresXpress showrooms',
    ],
    benefits: [
      'Pressure stays constant 3 to 4 times longer than regular air',
      'Reduces tyre running temperature on long highway drives by up to 20%',
      'Eliminates internal rim corrosion and tyre bead oxidation',
    ],
    equipment: 'Multi-stage industrial membrane PSA nitrogen generation station',
    intervalRecommendation: 'Check pressure monthly; complete refill every 6 months',
    imageId: 'IMG-006',
    branches: ['Siddapura', 'Horamavu', 'Balagere'],
  },
  {
    id: 'bend-repair',
    slug: 'wheel-bend-repair',
    title: 'Hydraulic Wheel Bend & Rim Repair',
    shortDesc: 'State-of-the-art hydraulic straightening lathe restoring bent, dented, or warped alloy wheels to true circularity.',
    fullDesc: 'Sharp impact with Bengaluru craters and elevated bridge expansion joints frequently bends alloy wheel lip edges, causing air leakage and wobbling. Rather than discarding expensive OEM alloys, our calibrated hydraulic rim repair lathe accurately presses and straightens the bend back to factory tolerances without cracking the rim.',
    features: [
      'Precision dial-gauge runout measurement before and after repair',
      'Controlled thermal stress relief preventing metal fatigue fractures',
      'Inner lip, outer lip, and radial barrel bend correction',
      'Air leak pressure chamber submerged testing post-repair',
    ],
    benefits: [
      'Saves up to 80% compared to purchasing a new OEM replacement alloy',
      'Stops slow tubeless bead air leaks permanently',
      'Restores smooth ride quality and flawless dynamic balancing',
    ],
    equipment: 'Electromechanical hydraulic alloy wheel straightening machine with dial gauge',
    intervalRecommendation: 'As needed following harsh pothole impacts or when slow bead leaks occur',
    imageId: 'IMG-007',
    branches: ['Siddapura', 'Horamavu', 'Balagere'],
  },
  {
    id: 'accessories',
    slug: 'car-accessories',
    title: 'Essential Automotive Accessories',
    shortDesc: 'Curated automotive accessories including digital tyre inflators, TPMS sensors, repair kits, valve caps, and wiper blades.',
    fullDesc: 'Complement your vehicle safety with trusted automotive essentials hand-selected by our technicians. From emergency tyre puncture strings and 12V metal-cylinder tyre inflators to aerodynamic frameless wiper blades and solar TPMS systems.',
    features: [
      'Solar-powered and Bluetooth digital TPMS systems with live tire pressure readout',
      'Heavy-duty dual-piston 12V portable emergency tyre inflators',
      'OEM frameless silicone wiper blades for all car makes',
      'Anti-theft aluminum tyre valve stem caps & core tools',
    ],
    benefits: [
      'Total road-trip preparedness against unexpected punctures',
      'Real-time tire temperature and pressure monitoring from inside your car',
      'Crystal clear windshield visibility during heavy monsoon showers',
    ],
    equipment: 'Display showcases and on-site fitment by workshop technicians',
    intervalRecommendation: 'Replace wiper blades annually before monsoon season',
    imageId: 'IMG-008',
    branches: ['Siddapura', 'Horamavu', 'Balagere'],
  },
  {
    id: 'car-wash',
    slug: 'professional-car-wash',
    title: 'Professional High-Pressure Foam Car Wash',
    shortDesc: 'Exclusive to our Horamavu showroom: Deep foam wash, high-pressure underbody rinse, and interior vacuum detailing.',
    fullDesc: 'Available exclusively at our Horamavu branch, our dedicated wash bay utilizes pH-neutral active snow foam, softened spot-free water, and high-pressure underchassis jet blasters to clean grime, brake dust, and Bengaluru traffic dust without swirl marks.',
    features: [
      'pH-balanced snow foam pre-wash lifting road grime safely',
      'High-pressure underbody chassis wash removing caked mud and salt',
      'Dedicated wheel rim and tyre sidewall deep scrub with degreaser',
      'Microfiber hand drying and tyre dresser silicone coating',
    ],
    benefits: [
      'Protects expensive clear coat paint from scratches and swirl marks',
      'Prevents underbody rust and chassis corrosion',
      'Leaves tyres with a deep satin black showroom finish',
    ],
    equipment: 'Commercial high-pressure washers, snow foam cannon, and heavy-duty industrial vacuum',
    intervalRecommendation: 'Every 2 to 3 weeks for optimal paint protection',
    imageId: 'IMG-015',
    branches: ['Horamavu'],
  },
];

export const BRANDS: BrandItem[] = [
  {
    name: 'Yokohama',
    category: ['Passenger Cars', 'SUVs & 4x4', 'Performance & EV'],
    origin: 'Japan',
    tagline: 'Excellence by Design',
    popularFor: 'Geolandar A/T for SUVs, Earth-1 for durable Indian city drives, BlueEarth-GT for silent touring.',
    highlights: ['Exceptional sidewall puncture resistance', 'Ultra-quiet ride engineering', 'Premium Japanese precision'],
  },
  {
    name: 'Bridgestone',
    category: ['Passenger Cars', 'SUVs & 4x4', 'Two-Wheelers'],
    origin: 'Japan',
    tagline: 'Solutions for your journey',
    popularFor: 'Turanza for whisper-quiet luxury, Dueler for highway SUVs, Sturdo for remarkable 80k+ km longevity.',
    highlights: ['Unmatched tread durability on rough roads', 'OEM choice for leading carmakers', 'Wet-surface braking safety'],
  },
  {
    name: 'Continental',
    category: ['Passenger Cars', 'SUVs & 4x4', 'Performance & EV'],
    origin: 'Germany',
    tagline: 'The Future in Motion',
    popularFor: 'UltraContact for city durability, CrossContact for premium SUVs, SportContact for German performance sedans.',
    highlights: ['German engineering with Yellow Chili compound', 'Shorter braking distances in wet conditions', 'Robust rim protection rib'],
  },
  {
    name: 'Michelin',
    category: ['Passenger Cars', 'SUVs & 4x4', 'Two-Wheelers', 'Performance & EV'],
    origin: 'France',
    tagline: 'A better way forward',
    popularFor: 'Primacy 4ST for benchmark luxury comfort, Pilot Sport for spirited driving, LTX Trail for rugged expeditions.',
    highlights: ['Benchmark acoustic damping', 'EverGrip technology maintaining traction as tread wears', 'Class-leading fuel economy'],
  },
  {
    name: 'Pirelli',
    category: ['Passenger Cars', 'SUVs & 4x4', 'Performance & EV'],
    origin: 'Italy',
    tagline: 'Power is nothing without control',
    popularFor: 'P Zero for sports cars and supercars, Scorpion for luxury SUVs, Cinturato for premium green touring.',
    highlights: ['Formula 1 motorsport heritage', 'Exceptional dry and wet lateral grip', 'Precise steering feedback'],
  },
  {
    name: 'Apollo',
    category: ['Passenger Cars', 'SUVs & 4x4', 'Two-Wheelers', 'Commercial & Light Truck'],
    origin: 'India',
    tagline: 'go the distance',
    popularFor: 'Alnac 4G for hatchbacks & compact sedans, Apterra AT2 for rugged off-roading, Alpha series for motorcycles.',
    highlights: ['Optimized for Indian potholes and asphalt', 'Generous unconditional warranty coverage', 'Superb value-to-performance ratio'],
  },
  {
    name: 'Goodyear',
    category: ['Passenger Cars', 'SUVs & 4x4', 'Commercial & Light Truck'],
    origin: 'USA',
    tagline: 'More Driven',
    popularFor: 'Assurance TripleMax for wet braking, Wrangler AT for 4x4 adventures, EfficientGrip Performance.',
    highlights: ['HydroGrip technology for monsoons', 'Reinforced DuPont Kevlar sidewalls on Wrangler', 'High fuel-efficiency compounds'],
  },
  {
    name: 'MRF',
    category: ['Passenger Cars', 'SUVs & 4x4', 'Two-Wheelers', 'Commercial & Light Truck'],
    origin: 'India',
    tagline: 'Tyres with Muscle',
    popularFor: 'ZLX for comfortable hatchbacks, Wanderer for SUVs, Zapper and Revz for commuter and sport motorcycles.',
    highlights: ['India’s most trusted tyre brand', 'Extremely high puncture resistance', 'Excellent high-mileage compound'],
  },
  {
    name: 'CEAT',
    category: ['Passenger Cars', 'SUVs & 4x4', 'Two-Wheelers', 'Commercial & Light Truck'],
    origin: 'India',
    tagline: 'Born Tough',
    popularFor: 'SecuraDrive for sedans, CrossDrive for compact SUVs, Zoom Rad for two-wheelers.',
    highlights: ['Wide longitudinal tread grooves', 'High-speed directional stability', 'Attractive puncture-safe guarantees'],
  },
  {
    name: 'JK Tyre',
    category: ['Passenger Cars', 'SUVs & 4x4', 'Two-Wheelers', 'Commercial & Light Truck'],
    origin: 'India',
    tagline: 'Total Control',
    popularFor: 'UX Royale for premium sedans, Ranger series for SUVs, Smart Tyre technology with built-in sensors.',
    highlights: ['Pioneer of radial tyres in India', 'Smart TPMS sensor integrated options', 'Heavy-duty carcass construction'],
  },
  {
    name: 'Reise',
    category: ['Two-Wheelers'],
    origin: 'India & Europe (Mitas)',
    tagline: 'Find your trail',
    popularFor: 'TrailR and TourR adventure dual-sport motorcycle tyres for Royal Enfield Himalayan, KTM Adventure, and BMW GS.',
    highlights: ['Co-developed with Mitas Europe', 'Exceptional gravel and tarmac dual-sport grip', 'Chevron tread geometry for mud ejection'],
  },
  {
    name: 'BKT',
    category: ['Commercial & Light Truck'],
    origin: 'India',
    tagline: 'Growing Together',
    popularFor: 'Heavy-duty agricultural, industrial, utility, and off-highway commercial tyres.',
    highlights: ['Extreme load-carrying capacity', 'High-tensile steel cord belts', 'Global leader in heavy-duty off-highway tyres'],
  },
  {
    name: 'Dunlop',
    category: ['Passenger Cars', 'Two-Wheelers'],
    origin: 'UK / Japan',
    tagline: 'Feel the road',
    popularFor: 'Enasave eco-tyres, Grandtrek for light SUVs, high-grip motorcycle road tyres.',
    highlights: ['Deep racing lineage', 'Silica-infused tread compound', 'Refined acoustic balance'],
  },
  {
    name: 'TVS',
    category: ['Two-Wheelers'],
    origin: 'India',
    tagline: 'Tyres for Life',
    popularFor: 'Eurogrip and Protorq extreme radial tyres for Indian commuter bikes and performance naked motorcycles.',
    highlights: ['Zero-degree steel belt radial construction', 'High mileage reliability in city commuting', 'Low rolling resistance design'],
  },
];

export const WHY_US_PILLARS = [
  {
    number: '01',
    title: 'Est. 2019 — Proven Bengaluru Heritage',
    description: 'Over 5 years of automotive service across Whitefield, Horamavu, and Balagere, serving over 25,000 satisfied car and bike owners.',
  },
  {
    number: '02',
    title: '14+ Authorized Multi-Brand Selection',
    description: 'We are completely brand-agnostic. Our certified advisors recommend what is best for your vehicle, driving style, and budget without bias.',
  },
  {
    number: '03',
    title: 'Calibrated Precision Machinery',
    description: 'Equipped with computerized 3D camera alignment, dynamic wheel balancers, and touchless rim changers that guarantee zero rim scratches.',
  },
  {
    number: '04',
    title: '3 Strategic Showrooms in Bengaluru',
    description: 'Easily accessible locations with ample drive-in service bays, air-conditioned customer lounges, and transparent invoice billing.',
  },
  {
    number: '05',
    title: '100% Genuine Direct Warranty',
    description: 'Every tyre comes with genuine manufacturer invoice warranty, complete with instant digital registration on official manufacturer apps.',
  },
  {
    number: '06',
    title: '7-Days Open (9 AM to 8 PM)',
    description: 'Convenient operating hours 365 days a year, making it effortless to service your tyres after office hours or over the weekend.',
  },
];

export const COMPANY_STATS = [
  { label: 'Bengaluru Showrooms', value: '3' },
  { label: 'Authorized Tyre Brands', value: '14+' },
  { label: 'Tyres Fitted Since 2019', value: '50,000+' },
  { label: 'Customer Google Rating', value: '4.8 ★' },
];
