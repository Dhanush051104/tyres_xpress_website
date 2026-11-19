/**
 * TyresXpress SEO Keyword & Automotive Knowledge Database
 * Comprehensive compiled database covering Indian automotive market:
 * - Manufacturers & vehicle models (Cars, SUVs, EVs, 2-Wheelers)
 * - Tyre brand families, series & individual tyre models
 * - Aftermarket alloy wheel brands, models, PCDs & sizes
 * - Automotive accessories, lighting, audio, dash cams & wipers
 * - High-intent search combinations & Bengaluru micro-localities
 */

export interface VehicleModelEntry {
  manufacturer: string;
  model: string;
  segment: 'Hatchback' | 'Sedan' | 'Compact SUV' | 'Mid-size SUV' | 'Full-size SUV' | 'MPV / MUV' | 'EV' | 'Motorcycle' | 'Scooter';
  /**
   * Representative tyre sizes for this model across common variants and trims.
   * NOTE: Tyre sizes vary by vehicle variant (e.g. entry steel wheels vs top-spec alloys)
   * and manufacturing year. They are not universally identical across all variants.
   */
  popularTyreSizes: string[];
}

export interface AlloyBrandEntry {
  brand: string;
  origin: string;
  popularSeries: string[];
  sizes: string[];
  popularPCDs: string[];
  vehicleCompatibility: string[];
}

export interface TyreModelEntry {
  brand: string;
  series: string;
  models: string[];
  category: string;
  popularApplications: string;
}

export interface AccessoryBrandEntry {
  category: 'Dash Cam' | 'Car Audio & Infotainment' | 'Automotive Lighting' | 'Wipers' | 'Seat Covers' | 'Tyre & Wheel Hardware' | 'Car Care';
  brand: string;
  popularModels: string[];
  description: string;
}

// -------------------------------------------------------------
// 1. AUTOMOBILE MANUFACTURERS & VEHICLE MODELS (INDIA)
// -------------------------------------------------------------
export const AUTOMOBILE_MANUFACTURERS = [
  'Maruti Suzuki',
  'Hyundai',
  'Tata Motors',
  'Mahindra',
  'Kia',
  'Toyota',
  'Honda',
  'Volkswagen',
  'Skoda',
  'MG Motor',
  'Renault',
  'Nissan',
  'Jeep',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Volvo',
  'BYD',
  'Force Motors',
  'Citroen',
] as const;

export const TWO_WHEELER_MANUFACTURERS = [
  'Royal Enfield',
  'Hero MotoCorp',
  'Honda 2Wheelers',
  'TVS Motor',
  'Bajaj Auto',
  'Yamaha',
  'Suzuki Motorcycle',
  'KTM',
  'Ather Energy',
  'Ola Electric',
  'Kawasaki',
  'Jawa / Yezdi',
  'Triumph',
  'BMW Motorrad',
] as const;

export const POPULAR_VEHICLE_DATABASE: VehicleModelEntry[] = [
  // Maruti Suzuki
  { manufacturer: 'Maruti Suzuki', model: 'Swift', segment: 'Hatchback', popularTyreSizes: ['165/80 R14', '185/65 R15'] },
  { manufacturer: 'Maruti Suzuki', model: 'Dzire', segment: 'Sedan', popularTyreSizes: ['165/80 R14', '185/65 R15'] },
  { manufacturer: 'Maruti Suzuki', model: 'Baleno', segment: 'Hatchback', popularTyreSizes: ['185/65 R15', '195/55 R16'] },
  { manufacturer: 'Maruti Suzuki', model: 'Brezza', segment: 'Compact SUV', popularTyreSizes: ['215/60 R16'] },
  { manufacturer: 'Maruti Suzuki', model: 'Fronx', segment: 'Compact SUV', popularTyreSizes: ['195/60 R16'] },
  { manufacturer: 'Maruti Suzuki', model: 'Grand Vitara', segment: 'Mid-size SUV', popularTyreSizes: ['215/60 R17'] },
  { manufacturer: 'Maruti Suzuki', model: 'Ertiga', segment: 'MPV / MUV', popularTyreSizes: ['185/65 R15'] },
  { manufacturer: 'Maruti Suzuki', model: 'XL6', segment: 'MPV / MUV', popularTyreSizes: ['185/65 R15', '195/60 R16'] },
  { manufacturer: 'Maruti Suzuki', model: 'WagonR', segment: 'Hatchback', popularTyreSizes: ['155/80 R13', '165/70 R14'] },
  { manufacturer: 'Maruti Suzuki', model: 'Alto K10', segment: 'Hatchback', popularTyreSizes: ['145/80 R12', '145/80 R13'] },
  { manufacturer: 'Maruti Suzuki', model: 'Celerio', segment: 'Hatchback', popularTyreSizes: ['165/70 R14', '175/60 R15'] },
  { manufacturer: 'Maruti Suzuki', model: 'Ignis', segment: 'Hatchback', popularTyreSizes: ['175/65 R15'] },
  { manufacturer: 'Maruti Suzuki', model: 'Ciaz', segment: 'Sedan', popularTyreSizes: ['185/65 R15', '195/55 R16'] },
  { manufacturer: 'Maruti Suzuki', model: 'Jimny', segment: 'Mid-size SUV', popularTyreSizes: ['195/80 R15'] },
  { manufacturer: 'Maruti Suzuki', model: 'Invicto', segment: 'MPV / MUV', popularTyreSizes: ['215/60 R17', '225/50 R18'] },

  // Hyundai
  { manufacturer: 'Hyundai', model: 'Creta', segment: 'Mid-size SUV', popularTyreSizes: ['205/65 R16', '215/60 R17', '215/55 R18'] },
  { manufacturer: 'Hyundai', model: 'Venue', segment: 'Compact SUV', popularTyreSizes: ['195/65 R15', '215/60 R16'] },
  { manufacturer: 'Hyundai', model: 'i20', segment: 'Hatchback', popularTyreSizes: ['185/65 R15', '195/55 R16'] },
  { manufacturer: 'Hyundai', model: 'Grand i10 Nios', segment: 'Hatchback', popularTyreSizes: ['165/70 R14', '175/60 R15'] },
  { manufacturer: 'Hyundai', model: 'Exter', segment: 'Compact SUV', popularTyreSizes: ['165/70 R14', '175/65 R15'] },
  { manufacturer: 'Hyundai', model: 'Verna', segment: 'Sedan', popularTyreSizes: ['185/65 R15', '205/55 R16'] },
  { manufacturer: 'Hyundai', model: 'Alcazar', segment: 'Mid-size SUV', popularTyreSizes: ['215/60 R17', '215/55 R18'] },
  { manufacturer: 'Hyundai', model: 'Tucson', segment: 'Full-size SUV', popularTyreSizes: ['235/65 R17', '235/60 R18', '235/55 R19'] },
  { manufacturer: 'Hyundai', model: 'Ioniq 5', segment: 'EV', popularTyreSizes: ['255/45 R20'] },
  { manufacturer: 'Hyundai', model: 'Aura', segment: 'Sedan', popularTyreSizes: ['165/70 R14', '175/60 R15'] },
  { manufacturer: 'Hyundai', model: 'Santro', segment: 'Hatchback', popularTyreSizes: ['155/80 R13', '165/70 R14'] },

  // Tata Motors
  { manufacturer: 'Tata Motors', model: 'Nexon', segment: 'Compact SUV', popularTyreSizes: ['195/60 R16', '215/60 R16'] },
  { manufacturer: 'Tata Motors', model: 'Punch', segment: 'Compact SUV', popularTyreSizes: ['185/70 R15', '195/60 R16'] },
  { manufacturer: 'Tata Motors', model: 'Harrier', segment: 'Mid-size SUV', popularTyreSizes: ['235/65 R17', '235/60 R18', '245/55 R19'] },
  { manufacturer: 'Tata Motors', model: 'Safari', segment: 'Full-size SUV', popularTyreSizes: ['235/65 R17', '235/60 R18', '245/55 R19'] },
  { manufacturer: 'Tata Motors', model: 'Altroz', segment: 'Hatchback', popularTyreSizes: ['165/80 R14', '185/60 R16', '195/55 R16'] },
  { manufacturer: 'Tata Motors', model: 'Tiago', segment: 'Hatchback', popularTyreSizes: ['155/80 R13', '175/65 R14', '175/60 R15'] },
  { manufacturer: 'Tata Motors', model: 'Tigor', segment: 'Sedan', popularTyreSizes: ['175/65 R14', '175/60 R15'] },
  { manufacturer: 'Tata Motors', model: 'Curvv', segment: 'Mid-size SUV', popularTyreSizes: ['215/60 R17', '215/55 R18'] },
  { manufacturer: 'Tata Motors', model: 'Nexon EV', segment: 'EV', popularTyreSizes: ['215/60 R16'] },
  { manufacturer: 'Tata Motors', model: 'Punch EV', segment: 'EV', popularTyreSizes: ['195/60 R16'] },
  { manufacturer: 'Tata Motors', model: 'Tiago EV', segment: 'EV', popularTyreSizes: ['175/65 R14'] },

  // Mahindra
  { manufacturer: 'Mahindra', model: 'Scorpio-N', segment: 'Full-size SUV', popularTyreSizes: ['245/65 R17', '255/60 R18'] },
  { manufacturer: 'Mahindra', model: 'Scorpio Classic', segment: 'Full-size SUV', popularTyreSizes: ['235/65 R17'] },
  { manufacturer: 'Mahindra', model: 'Thar', segment: 'Mid-size SUV', popularTyreSizes: ['245/75 R16', '255/65 R18'] },
  { manufacturer: 'Mahindra', model: 'Thar Roxx', segment: 'Full-size SUV', popularTyreSizes: ['255/65 R18', '255/60 R19'] },
  { manufacturer: 'Mahindra', model: 'XUV700', segment: 'Full-size SUV', popularTyreSizes: ['235/65 R17', '235/60 R18'] },
  { manufacturer: 'Mahindra', model: 'XUV 3XO', segment: 'Compact SUV', popularTyreSizes: ['205/65 R16', '215/55 R17'] },
  { manufacturer: 'Mahindra', model: 'Bolero', segment: 'MPV / MUV', popularTyreSizes: ['215/75 R15'] },
  { manufacturer: 'Mahindra', model: 'Bolero Neo', segment: 'Compact SUV', popularTyreSizes: ['215/75 R15'] },
  { manufacturer: 'Mahindra', model: 'XUV400 EV', segment: 'EV', popularTyreSizes: ['205/65 R16'] },

  // Kia
  { manufacturer: 'Kia', model: 'Seltos', segment: 'Mid-size SUV', popularTyreSizes: ['205/65 R16', '215/60 R17', '215/55 R18'] },
  { manufacturer: 'Kia', model: 'Sonet', segment: 'Compact SUV', popularTyreSizes: ['195/65 R15', '215/60 R16'] },
  { manufacturer: 'Kia', model: 'Carens', segment: 'MPV / MUV', popularTyreSizes: ['195/65 R15', '205/65 R16'] },
  { manufacturer: 'Kia', model: 'EV6', segment: 'EV', popularTyreSizes: ['235/55 R19', '255/45 R20'] },
  { manufacturer: 'Kia', model: 'Carnival', segment: 'MPV / MUV', popularTyreSizes: ['235/60 R18', '235/55 R19'] },

  // Toyota
  { manufacturer: 'Toyota', model: 'Innova Crysta', segment: 'MPV / MUV', popularTyreSizes: ['205/65 R16', '215/55 R17'] },
  { manufacturer: 'Toyota', model: 'Innova Hycross', segment: 'MPV / MUV', popularTyreSizes: ['205/65 R16', '215/60 R17', '225/50 R18'] },
  { manufacturer: 'Toyota', model: 'Fortuner', segment: 'Full-size SUV', popularTyreSizes: ['265/65 R17', '265/60 R18'] },
  { manufacturer: 'Toyota', model: 'Urban Cruiser Hyryder', segment: 'Mid-size SUV', popularTyreSizes: ['215/60 R17'] },
  { manufacturer: 'Toyota', model: 'Glanza', segment: 'Hatchback', popularTyreSizes: ['185/65 R15', '195/55 R16'] },
  { manufacturer: 'Toyota', model: 'Hilux', segment: 'Full-size SUV', popularTyreSizes: ['265/65 R17', '265/60 R18'] },
  { manufacturer: 'Toyota', model: 'Camry', segment: 'Sedan', popularTyreSizes: ['215/55 R17', '235/45 R18'] },
  { manufacturer: 'Toyota', model: 'Corolla Altis', segment: 'Sedan', popularTyreSizes: ['195/65 R15', '205/55 R16'] },

  // Honda
  { manufacturer: 'Honda', model: 'City', segment: 'Sedan', popularTyreSizes: ['175/65 R15', '185/60 R15', '185/55 R16'] },
  { manufacturer: 'Honda', model: 'Amaze', segment: 'Sedan', popularTyreSizes: ['175/65 R14', '175/65 R15'] },
  { manufacturer: 'Honda', model: 'Elevate', segment: 'Mid-size SUV', popularTyreSizes: ['215/60 R16', '215/55 R17'] },
  { manufacturer: 'Honda', model: 'WR-V', segment: 'Compact SUV', popularTyreSizes: ['195/60 R16'] },
  { manufacturer: 'Honda', model: 'Jazz', segment: 'Hatchback', popularTyreSizes: ['175/65 R15'] },
  { manufacturer: 'Honda', model: 'Civic', segment: 'Sedan', popularTyreSizes: ['215/55 R16', '215/50 R17'] },

  // Volkswagen & Skoda
  { manufacturer: 'Volkswagen', model: 'Taigun', segment: 'Mid-size SUV', popularTyreSizes: ['205/60 R16', '205/55 R17'] },
  { manufacturer: 'Volkswagen', model: 'Virtus', segment: 'Sedan', popularTyreSizes: ['205/60 R16', '205/55 R17'] },
  { manufacturer: 'Volkswagen', model: 'Polo', segment: 'Hatchback', popularTyreSizes: ['175/70 R14', '185/60 R15', '195/55 R16'] },
  { manufacturer: 'Volkswagen', model: 'Vento', segment: 'Sedan', popularTyreSizes: ['185/60 R15', '195/55 R16'] },
  { manufacturer: 'Volkswagen', model: 'Tiguan', segment: 'Full-size SUV', popularTyreSizes: ['235/55 R18', '235/50 R19'] },
  { manufacturer: 'Skoda', model: 'Kushaq', segment: 'Mid-size SUV', popularTyreSizes: ['205/60 R16', '205/55 R17'] },
  { manufacturer: 'Skoda', model: 'Slavia', segment: 'Sedan', popularTyreSizes: ['205/60 R16', '205/55 R17'] },
  { manufacturer: 'Skoda', model: 'Kodiaq', segment: 'Full-size SUV', popularTyreSizes: ['235/55 R18', '235/50 R19'] },
  { manufacturer: 'Skoda', model: 'Octavia', segment: 'Sedan', popularTyreSizes: ['205/55 R16', '225/45 R17'] },
  { manufacturer: 'Skoda', model: 'Superb', segment: 'Sedan', popularTyreSizes: ['215/55 R17', '235/45 R18'] },

  // MG Motor
  { manufacturer: 'MG Motor', model: 'Hector', segment: 'Mid-size SUV', popularTyreSizes: ['215/60 R17', '215/55 R18'] },
  { manufacturer: 'MG Motor', model: 'Astor', segment: 'Mid-size SUV', popularTyreSizes: ['215/60 R17'] },
  { manufacturer: 'MG Motor', model: 'ZS EV', segment: 'EV', popularTyreSizes: ['215/55 R17'] },
  { manufacturer: 'MG Motor', model: 'Comet EV', segment: 'EV', popularTyreSizes: ['145/70 R12'] },
  { manufacturer: 'MG Motor', model: 'Windsor EV', segment: 'EV', popularTyreSizes: ['215/60 R17', '215/55 R18'] },
  { manufacturer: 'MG Motor', model: 'Gloster', segment: 'Full-size SUV', popularTyreSizes: ['255/55 R19'] },

  // Renault & Nissan
  { manufacturer: 'Renault', model: 'Kwid', segment: 'Hatchback', popularTyreSizes: ['155/80 R13', '165/70 R14'] },
  { manufacturer: 'Renault', model: 'Kiger', segment: 'Compact SUV', popularTyreSizes: ['195/60 R16'] },
  { manufacturer: 'Renault', model: 'Triber', segment: 'MPV / MUV', popularTyreSizes: ['165/80 R14', '185/65 R15'] },
  { manufacturer: 'Renault', model: 'Duster', segment: 'Mid-size SUV', popularTyreSizes: ['215/65 R16'] },
  { manufacturer: 'Nissan', model: 'Magnite', segment: 'Compact SUV', popularTyreSizes: ['195/60 R16'] },

  // Jeep & Luxury
  { manufacturer: 'Jeep', model: 'Compass', segment: 'Mid-size SUV', popularTyreSizes: ['225/60 R17', '225/55 R18'] },
  { manufacturer: 'Jeep', model: 'Meridian', segment: 'Full-size SUV', popularTyreSizes: ['235/55 R18'] },
  { manufacturer: 'BMW', model: '3 Series', segment: 'Sedan', popularTyreSizes: ['225/50 R17', '225/45 R18'] },
  { manufacturer: 'BMW', model: 'X1', segment: 'Mid-size SUV', popularTyreSizes: ['225/55 R18', '225/50 R19'] },
  { manufacturer: 'Mercedes-Benz', model: 'C-Class', segment: 'Sedan', popularTyreSizes: ['225/50 R17', '225/45 R18'] },
  { manufacturer: 'Mercedes-Benz', model: 'GLC', segment: 'Full-size SUV', popularTyreSizes: ['235/55 R19'] },
  { manufacturer: 'Audi', model: 'A4', segment: 'Sedan', popularTyreSizes: ['225/50 R17', '245/40 R18'] },
  { manufacturer: 'Audi', model: 'Q3', segment: 'Mid-size SUV', popularTyreSizes: ['235/55 R18'] },

  // Two-Wheelers: Royal Enfield
  { manufacturer: 'Royal Enfield', model: 'Classic 350', segment: 'Motorcycle', popularTyreSizes: ['90/90-19', '120/80-18'] },
  { manufacturer: 'Royal Enfield', model: 'Hunter 350', segment: 'Motorcycle', popularTyreSizes: ['110/70-17', '140/70-17'] },
  { manufacturer: 'Royal Enfield', model: 'Bullet 350', segment: 'Motorcycle', popularTyreSizes: ['90/90-19', '120/80-18'] },
  { manufacturer: 'Royal Enfield', model: 'Meteor 350', segment: 'Motorcycle', popularTyreSizes: ['100/90-19', '140/70-17'] },
  { manufacturer: 'Royal Enfield', model: 'Himalayan 450', segment: 'Motorcycle', popularTyreSizes: ['90/90-21', '140/80-17'] },
  { manufacturer: 'Royal Enfield', model: 'Interceptor 650', segment: 'Motorcycle', popularTyreSizes: ['100/90-18', '130/70-18'] },
  { manufacturer: 'Royal Enfield', model: 'Continental GT 650', segment: 'Motorcycle', popularTyreSizes: ['100/90-18', '130/70-18'] },

  // Two-Wheelers: Hero MotoCorp
  { manufacturer: 'Hero MotoCorp', model: 'Splendor Plus', segment: 'Motorcycle', popularTyreSizes: ['80/100-18'] },
  { manufacturer: 'Hero MotoCorp', model: 'HF Deluxe', segment: 'Motorcycle', popularTyreSizes: ['2.75-18', '80/100-18'] },
  { manufacturer: 'Hero MotoCorp', model: 'Xpulse 200 4V', segment: 'Motorcycle', popularTyreSizes: ['90/90-21', '120/80-18'] },
  { manufacturer: 'Hero MotoCorp', model: 'Glamour', segment: 'Motorcycle', popularTyreSizes: ['80/100-18', '100/80-18'] },
  { manufacturer: 'Hero MotoCorp', model: 'Destini 125', segment: 'Scooter', popularTyreSizes: ['90/100-10'] },

  // Two-Wheelers: Honda 2Wheelers
  { manufacturer: 'Honda 2Wheelers', model: 'Activa 6G', segment: 'Scooter', popularTyreSizes: ['90/90-12', '90/100-10'] },
  { manufacturer: 'Honda 2Wheelers', model: 'Activa 125', segment: 'Scooter', popularTyreSizes: ['90/90-12', '90/100-10'] },
  { manufacturer: 'Honda 2Wheelers', model: 'Dio 125', segment: 'Scooter', popularTyreSizes: ['90/90-12', '90/100-10'] },
  { manufacturer: 'Honda 2Wheelers', model: 'Shine 125', segment: 'Motorcycle', popularTyreSizes: ['80/100-18'] },
  { manufacturer: 'Honda 2Wheelers', model: 'SP 125', segment: 'Motorcycle', popularTyreSizes: ['80/100-18', '100/80-18'] },
  { manufacturer: 'Honda 2Wheelers', model: 'Unicorn', segment: 'Motorcycle', popularTyreSizes: ['80/100-18', '100/90-18'] },
  { manufacturer: 'Honda 2Wheelers', model: "H'ness CB350", segment: 'Motorcycle', popularTyreSizes: ['100/90-19', '130/70-18'] },

  // Two-Wheelers: TVS Motor
  { manufacturer: 'TVS Motor', model: 'Jupiter 110', segment: 'Scooter', popularTyreSizes: ['90/90-12'] },
  { manufacturer: 'TVS Motor', model: 'Ntorq 125', segment: 'Scooter', popularTyreSizes: ['100/80-12', '110/80-12'] },
  { manufacturer: 'TVS Motor', model: 'Apache RTR 160 4V', segment: 'Motorcycle', popularTyreSizes: ['90/90-17', '130/70-17'] },
  { manufacturer: 'TVS Motor', model: 'Apache RTR 200 4V', segment: 'Motorcycle', popularTyreSizes: ['90/90-17', '130/70-17'] },
  { manufacturer: 'TVS Motor', model: 'Raider 125', segment: 'Motorcycle', popularTyreSizes: ['90/90-17', '100/90-17'] },
  { manufacturer: 'TVS Motor', model: 'Ronin', segment: 'Motorcycle', popularTyreSizes: ['110/70-17', '130/70-17'] },

  // Two-Wheelers: Bajaj Auto
  { manufacturer: 'Bajaj Auto', model: 'Pulsar 150', segment: 'Motorcycle', popularTyreSizes: ['90/90-17', '120/80-17'] },
  { manufacturer: 'Bajaj Auto', model: 'Pulsar NS200', segment: 'Motorcycle', popularTyreSizes: ['100/80-17', '130/70-17'] },
  { manufacturer: 'Bajaj Auto', model: 'Dominar 400', segment: 'Motorcycle', popularTyreSizes: ['110/70-17', '150/60-17'] },
  { manufacturer: 'Bajaj Auto', model: 'Platina 100', segment: 'Motorcycle', popularTyreSizes: ['2.75-17', '3.00-17'] },

  // Two-Wheelers: Yamaha & Suzuki & KTM
  { manufacturer: 'Yamaha', model: 'R15 V4', segment: 'Motorcycle', popularTyreSizes: ['100/80-17', '140/70-17'] },
  { manufacturer: 'Yamaha', model: 'MT-15 V2', segment: 'Motorcycle', popularTyreSizes: ['100/80-17', '140/70-17'] },
  { manufacturer: 'Yamaha', model: 'Aerox 155', segment: 'Scooter', popularTyreSizes: ['110/80-14', '140/70-14'] },
  { manufacturer: 'Suzuki Motorcycle', model: 'Access 125', segment: 'Scooter', popularTyreSizes: ['90/90-12', '90/100-10'] },
  { manufacturer: 'Suzuki Motorcycle', model: 'Burgman Street', segment: 'Scooter', popularTyreSizes: ['90/90-12', '100/80-12'] },
  { manufacturer: 'KTM', model: 'Duke 390', segment: 'Motorcycle', popularTyreSizes: ['110/70-17', '150/60-17'] },
  { manufacturer: 'KTM', model: 'Adventure 390', segment: 'Motorcycle', popularTyreSizes: ['100/90-19', '130/80-17'] },
];

// -------------------------------------------------------------
// 2. ALLOY WHEEL BRANDS, PRODUCT SERIES & MODELS (INDIA)
// -------------------------------------------------------------
export const ALLOY_WHEEL_DATABASE: AlloyBrandEntry[] = [
  {
    brand: 'Neo Wheels',
    origin: 'India (ARAI, ISO & BIS Certified)',
    popularSeries: ['Torque', 'Blade', 'Crystal', 'Atom', 'Spider', 'Pulse', 'Stryker', 'Cruz', 'Falcon', 'Raptor', 'Wave', 'Trident', 'Matrix'],
    sizes: ['12 inch', '13 inch', '14 inch', '15 inch', '16 inch', '17 inch', '18 inch', '20 inch'],
    popularPCDs: ['4x100', '4x108', '5x114.3', '5x112', '5x139.7', '5x160'],
    vehicleCompatibility: ['Maruti Swift/Brezza', 'Hyundai Creta/i20', 'Tata Nexon/Punch', 'Mahindra Thar/Scorpio', 'Kia Seltos'],
  },
  {
    brand: 'Lenso Wheels',
    origin: 'Thailand (Flow-Formed & Low Pressure Cast)',
    popularSeries: ['Project D (D1-SF, D1-CS, D1-SE, D1-FC)', 'Spec-Q', 'Venom', 'RT-G Off-Road', 'Conquista', 'Jager', 'Samurai', 'Maxx'],
    sizes: ['15 inch', '16 inch', '17 inch', '18 inch', '19 inch', '20 inch'],
    popularPCDs: ['4x100', '5x114.3', '5x112', '5x139.7', '6x139.7'],
    vehicleCompatibility: ['Honda City', 'Hyundai Creta', 'Kia Seltos', 'Mahindra Thar', 'Toyota Fortuner', 'Skoda Slavia', 'VW Virtus'],
  },
  {
    brand: 'Plati India',
    origin: 'India / International',
    popularSeries: ['PY Series (PY-038, PY-032, PY-045, PY-056, PY-061)', 'Diamond Cut Black', 'Machined Face Concave', 'Hyper Silver Split-Spoke'],
    sizes: ['14 inch', '15 inch', '16 inch', '17 inch', '18 inch', '20 inch', '22 inch'],
    popularPCDs: ['4x100', '4x108', '5x114.3', '5x139.7', '6x139.7'],
    vehicleCompatibility: ['Mahindra Thar', 'Scorpio Classic / Scorpio-N', 'Toyota Innova Crysta', 'Tata Harrier', 'Hyundai Venue'],
  },
  {
    brand: 'MOMO Wheels',
    origin: 'Italy (Motorsport & European Styling)',
    popularSeries: ['MOMO Revenge', 'Revenge EVO', 'Massimo', 'Quantum', 'Hyperstar', 'RF Series Flow-Formed', 'Heritage 6'],
    sizes: ['15 inch', '16 inch', '17 inch', '18 inch', '19 inch'],
    popularPCDs: ['4x100', '5x112', '5x114.3', '5x120'],
    vehicleCompatibility: ['Volkswagen Polo/Virtus/Taigun', 'Skoda Rapid/Slavia/Kushaq', 'Hyundai Verna', 'Honda City', 'BMW 3 Series'],
  },
  {
    brand: 'Enkei Wheels',
    origin: 'Japan (MAT Technology Flow-Formed)',
    popularSeries: ['RPF1 Lightweight Track', 'NT03RR', 'GTC01RR', 'Tuning Series', 'Performance Luxury Line'],
    sizes: ['15 inch', '16 inch', '17 inch', '18 inch'],
    popularPCDs: ['4x100', '5x114.3', '5x112'],
    vehicleCompatibility: ['Honda Civic/City', 'VW Polo/Vento', 'Maruti Baleno/Swift RS', 'Skoda Octavia'],
  },
  {
    brand: 'Fuel Off-Road & Black Rhino',
    origin: 'USA (Heavy-Duty 4x4 & Off-Road Concave)',
    popularSeries: ['Fuel Covert', 'Fuel Rebel', 'Fuel Beast', 'Fuel Vapor', 'Black Rhino Boxer', 'Black Rhino Arsenal', 'Black Rhino Barstow'],
    sizes: ['16 inch', '17 inch', '18 inch', '20 inch'],
    popularPCDs: ['5x139.7', '6x139.7', '5x127'],
    vehicleCompatibility: ['Mahindra Thar / Thar Roxx', 'Toyota Fortuner', 'Toyota Hilux', 'Isuzu D-Max V-Cross', 'Force Gurkha'],
  },
  {
    brand: 'BBS & Konig',
    origin: 'Germany / USA (Performance Tuning)',
    popularSeries: ['Konig Hypergram', 'Konig Dekagram', 'Konig Ampliform', 'BBS CH-R', 'BBS Super RS'],
    sizes: ['15 inch', '16 inch', '17 inch', '18 inch', '19 inch'],
    popularPCDs: ['4x100', '5x112', '5x114.3', '5x120'],
    vehicleCompatibility: ['Skoda Octavia vRS', 'VW Virtus GT', 'Audi A4', 'BMW 3 Series', 'MINI Cooper'],
  },
  {
    brand: 'Inforged & HRS (HDesigns)',
    origin: 'Taiwan / International',
    popularSeries: ['Inforged IFG39', 'IFG40', 'IFG41', 'HRS H546', 'HRS H792', 'HRS Multi-Spoke concave'],
    sizes: ['15 inch', '16 inch', '17 inch', '18 inch', '19 inch', '20 inch'],
    popularPCDs: ['4x100', '5x114.3', '5x112'],
    vehicleCompatibility: ['Hyundai Creta', 'Kia Seltos', 'Toyota Innova Hycross', 'Tata Harrier', 'MG Hector'],
  },
];

// -------------------------------------------------------------
// 3. TYRE BRANDS, SERIES & INDIVIDUAL MODELS (INDIA)
// -------------------------------------------------------------
export const TYRE_CATALOGUE_DATABASE: TyreModelEntry[] = [
  // Yokohama
  {
    brand: 'Yokohama',
    series: 'BluEarth',
    models: ['BluEarth-GT AE51', 'BluEarth RV-02', 'BluEarth-Es ES32', 'BluEarth-XT AE61', 'BluEarth FE AE30'],
    category: 'Passenger Car & Crossover Luxury Touring',
    popularApplications: 'Quiet expressway touring, low rolling resistance, fuel efficiency, wet grip',
  },
  {
    brand: 'Yokohama',
    series: 'Geolandar',
    models: ['Geolandar A/T G015', 'Geolandar X-AT G016', 'Geolandar M/T G003', 'Geolandar SUV G055', 'Geolandar CV G058'],
    category: 'All-Terrain & SUV Highway / Off-Road',
    popularApplications: 'Mahindra Thar, Toyota Fortuner, Scorpio-N, Tata Harrier, Duster, Jimny',
  },
  {
    brand: 'Yokohama',
    series: 'Earth-1',
    models: ['Earth-1 E400'],
    category: 'India-Pothole Reinforced City & Highway Tyre',
    popularApplications: 'Maruti Swift/Dzire, Hyundai i20/Creta, Honda City, Honda Amaze',
  },
  {
    brand: 'Yokohama',
    series: 'ADVAN',
    models: ['ADVAN Sport V105', 'ADVAN Sport V107', 'ADVAN Fleva V701', 'ADVAN Neova AD08R'],
    category: 'Ultra-High Performance & Track Tuned',
    popularApplications: 'BMW, Mercedes, Audi, Skoda Octavia vRS, VW Virtus GT',
  },

  // Bridgestone
  {
    brand: 'Bridgestone',
    series: 'Turanza',
    models: ['Turanza T001', 'Turanza T005', 'Turanza 6', 'Turanza ER300'],
    category: 'Premium Acoustic Comfort Touring',
    popularApplications: 'Hyundai Creta, Kia Seltos, Toyota Innova Crysta, Honda City, VW Virtus',
  },
  {
    brand: 'Bridgestone',
    series: 'Dueler',
    models: ['Dueler D684', 'Dueler H/T 687', 'Dueler A/T D697', 'Dueler A/T 001'],
    category: 'Rugged SUV & 4x4 Heavy-Duty',
    popularApplications: 'Toyota Fortuner, Mahindra Scorpio, Mahindra Thar, Tata Safari',
  },
  {
    brand: 'Bridgestone',
    series: 'Sturdo',
    models: ['Sturdo Long-Life (up to 80,000+ km)'],
    category: 'High-Durability Mass Market Passenger',
    popularApplications: 'Maruti Dzire, WagonR, Baleno, Hyundai Grand i10, Tata Tiago',
  },
  {
    brand: 'Bridgestone',
    series: 'Ecopia',
    models: ['Ecopia EP150', 'Ecopia EP850'],
    category: 'Eco Friendly & Fuel-Saving',
    popularApplications: 'Maruti Ciaz, Hyundai Verna, Toyota Glanza, Honda Jazz',
  },
  {
    brand: 'Bridgestone',
    series: 'Potenza & B-Series',
    models: ['Potenza Sport', 'Potenza S001', 'B290', 'B250'],
    category: 'High Performance & Everyday Commuter',
    popularApplications: 'Enthusiast sedans, high-speed stability, urban durability',
  },

  // Michelin
  {
    brand: 'Michelin',
    series: 'Primacy',
    models: ['Primacy 4', 'Primacy 4 ST', 'Primacy SUV', 'e.Primacy'],
    category: 'Luxury Whisper-Quiet Passenger Comfort',
    popularApplications: 'Honda City, Hyundai Creta, Toyota Innova Hycross, Skoda Superb',
  },
  {
    brand: 'Michelin',
    series: 'Pilot Sport',
    models: ['Pilot Sport 4', 'Pilot Sport 4 SUV', 'Pilot Sport 5', 'Pilot Sport Cup 2'],
    category: 'Motorsport Grade Ultra-High Performance',
    popularApplications: 'BMW M Sport, Mercedes AMG, Audi RS, Porsche, high-powered sedans',
  },
  {
    brand: 'Michelin',
    series: 'Energy & LTX',
    models: ['Energy XM2+', 'LTX Trail All-Terrain', 'Latitude Cross', 'Latitude Sport 3'],
    category: 'Long-Life Commuter & Adventure SUV',
    popularApplications: 'Maruti Swift, Tata Altroz, Toyota Fortuner, Jeep Compass',
  },
  {
    brand: 'Michelin',
    series: 'Two-Wheeler (Motorcycle / Scooter)',
    models: ['City Pro', 'City Extra', 'Pilot Street 2', 'Road 5', 'Road 6', 'Anakee Adventure'],
    category: 'High-Grip Motorcycle & Scooter Radials',
    popularApplications: 'KTM Duke, Royal Enfield, Yamaha R15, TVS Apache, Honda Activa',
  },

  // Continental
  {
    brand: 'Continental',
    series: 'UltraContact',
    models: ['UltraContact UC6', 'UltraContact UC7'],
    category: 'German Engineering Wet Grip & Silence',
    popularApplications: 'Hyundai Creta, Kia Seltos, VW Taigun, Skoda Kushaq, Honda Elevate',
  },
  {
    brand: 'Continental',
    series: 'CrossContact',
    models: ['CrossContact LX2', 'CrossContact AX6', 'CrossContact AT'],
    category: 'Premium SUV All-Terrain & Highway',
    popularApplications: 'Tata Harrier, Mahindra XUV700, Jeep Compass, MG Hector',
  },
  {
    brand: 'Continental',
    series: 'SportContact & ContiComfortContact',
    models: ['SportContact 5', 'SportContact 6', 'ContiComfortContact CC6', 'MaxContact MC6'],
    category: 'Track Driving & Ultra Comfort',
    popularApplications: 'European performance cars, BMW, Mercedes, Skoda Octavia',
  },

  // Apollo
  {
    brand: 'Apollo',
    series: 'Alnac & Amazer',
    models: ['Alnac 4G', 'Alnac 4GS', 'Amazer 4G Life', 'Amazer XP'],
    category: 'Passenger Car Balanced Handling & Longevity',
    popularApplications: 'Maruti Swift/Baleno, Hyundai i20, Tata Altroz, Honda Amaze',
  },
  {
    brand: 'Apollo',
    series: 'Apterra',
    models: ['Apterra AT2', 'Apterra HT2', 'Apterra Cross', 'Apterra HP'],
    category: 'SUV Highway & Off-Road All-Terrain',
    popularApplications: 'Mahindra Thar, Tata Nexon, Kia Sonet, Brezza, Creta',
  },
  {
    brand: 'Apollo',
    series: 'Two-Wheeler (Alpha & Tramplr)',
    models: ['Alpha H1 (W-rated radial)', 'Alpha S1', 'Tramplr XR Dual-Sport', 'Tramplr ST', 'ActiGRIP R6'],
    category: 'Sportbike Steel Radial & Adventure Tyres',
    popularApplications: 'KTM Duke/RC 390, Yamaha R15, Royal Enfield Himalayan, Dominar',
  },

  // MRF
  {
    brand: 'MRF',
    series: 'ZLX & ZVTS',
    models: ['MRF ZLX', 'MRF ZVTS', 'MRF ZVTV', 'MRF ZV2K', 'MRF Perfinza Luxury'],
    category: 'India Toughest Pothole Resistant Passenger Tyres',
    popularApplications: 'Maruti Swift/Dzire, Hyundai Grand i10, Tata Tiago, Honda Amaze',
  },
  {
    brand: 'MRF',
    series: 'Wanderer',
    models: ['Wanderer Street', 'Wanderer A/T', 'Wanderer Sport'],
    category: 'SUV Rough Terrain & Heavy Hauling',
    popularApplications: 'Mahindra Scorpio, Thar, Bolero, Tata Safari, Duster',
  },
  {
    brand: 'MRF',
    series: 'Two-Wheeler (Nylogrip & Revz)',
    models: ['Nylogrip Zapper (Zapper C, Q, FY, Kurve)', 'Revz-S Radial', 'Revz-C', 'Revz-FD', 'Mogrip Meteor'],
    category: 'India #1 Motorcycle Commuter & Radial',
    popularApplications: 'Hero Splendor, Honda Activa, Pulsar, Apache, Yamaha FZ',
  },

  // CEAT
  {
    brand: 'CEAT',
    series: 'SecuraDrive & Milaze',
    models: ['SecuraDrive', 'SecuraDrive SUV', 'Milaze X3', 'FuelSmarrt'],
    category: 'Wet-Braking Safety & High Mileage Taxi/Personal',
    popularApplications: 'Hyundai Creta, Maruti Swift, Honda City, Tata Nexon',
  },
  {
    brand: 'CEAT',
    series: 'CrossDrive & Czar',
    models: ['CrossDrive AT', 'Czar HP', 'Czar AT', 'Czar Sport'],
    category: '4x4 Off-Road All-Terrain SUV Tyres',
    popularApplications: 'Mahindra Thar, Scorpio, Toyota Fortuner, Tata Harrier',
  },
  {
    brand: 'CEAT',
    series: 'Two-Wheeler (Zoom & Gripp)',
    models: ['Zoom Rad Steel Radial', 'Zoom Plus', 'Gripp X3', 'Gripp XL Adventure'],
    category: 'Commuter & Dual-Purpose Adventure Bike Tyres',
    popularApplications: 'Royal Enfield Classic 350, Himalayan, Honda Shine, TVS Jupiter',
  },

  // JK Tyre
  {
    brand: 'JK Tyre',
    series: 'UX Royale & Ranger',
    models: ['UX Royale Luxury', 'UX1', 'Ranger A/T', 'Ranger H/T', 'Elanzo-NXT', 'Taximax', 'Smart Tyre TPMS'],
    category: 'Pioneering Indian Radial & Connected Smart Tyres',
    popularApplications: 'Maruti Ertiga, Hyundai Creta, Mahindra Bolero, Tata Nexon',
  },
  {
    brand: 'JK Tyre',
    series: 'Two-Wheeler (Blaze)',
    models: ['Blaze BF32', 'Blaze BR41', 'Blaze RYDR Radial'],
    category: 'Performance Bike & Scooter Radials',
    popularApplications: 'Bajaj Pulsar, TVS Apache, Honda Activa, Suzuki Access',
  },

  // Goodyear
  {
    brand: 'Goodyear',
    series: 'Assurance & Wrangler',
    models: ['Assurance TripleMax 2', 'Assurance Duraplus 2', 'Assurance ComfortTred', 'Wrangler AT SilentTrac', 'Wrangler Duratrac'],
    category: 'HydroGrip Monsoon Braking & Kevlar Reinforced SUV',
    popularApplications: 'Honda City, Maruti Baleno, Toyota Innova, Mahindra Thar, Ford EcoSport',
  },

  // Pirelli
  {
    brand: 'Pirelli',
    series: 'P Zero, Cinturato & Scorpion',
    models: ['P Zero', 'Cinturato P7', 'Cinturato Rosso', 'Scorpion ATR', 'Scorpion All Terrain Plus', 'Scorpion Verde'],
    category: 'Formula 1 Heritage Luxury & Performance SUV',
    popularApplications: 'BMW, Mercedes, Audi, Jaguar, Range Rover, Volvo, Porsche',
  },
  {
    brand: 'Pirelli',
    series: 'Two-Wheeler (Diablo & Angel)',
    models: ['Diablo Rosso II', 'Diablo Rosso III', 'Diablo Rosso IV', 'Angel City', 'Angel GT', 'Scorpion Rally STR'],
    category: 'Supersport Motorcycle & Sport Touring',
    popularApplications: 'KTM 390, Kawasaki Ninja, Triumph Street Triple, BMW G310R, Ducati',
  },

  // Reise Moto
  {
    brand: 'Reise',
    series: 'Adventure & Touring Dual-Sport',
    models: ['TrailR (50/50 Dual-Sport with Mitas)', 'TourR High Mileage', 'TraceR Street Sport', 'TripR Scooter'],
    category: 'Premium Motorcycle & Scooter Adventure Tyres',
    popularApplications: 'Royal Enfield Himalayan 411/450, Scram 411, KTM Adventure 390, BMW GS',
  },

  // TVS / TVS Eurogrip
  {
    brand: 'TVS Eurogrip',
    series: 'Protorq & Remora',
    models: ['Protorq Extreme Zero-Degree Steel Radial', 'Remora Sport', 'Dragon High Mileage', 'Durapro', 'Terrabite'],
    category: 'Superbike Steel Belt Radials & Commuter Tyres',
    popularApplications: 'KTM 390, TVS Apache RR310, Yamaha R15, Bajaj Dominar, Honda Activa',
  },

  // Vredestein
  {
    brand: 'Vredestein',
    series: 'Ultrac & Pinza',
    models: ['Ultrac', 'Ultrac Vorti', 'Pinza AT', 'Centaur Two-Wheeler'],
    category: 'European High-Performance & Premium SUV',
    popularApplications: 'Skoda Kodiaq, VW Tiguan, BMW, Audi, Mercedes, Toyota Fortuner',
  },

  // Firestone
  {
    brand: 'Firestone',
    series: 'Destination & Roadhawk',
    models: ['Destination LE2 SUV', 'Roadhawk Passenger', 'Firehawk Wide Oval', 'FR500'],
    category: 'Century-Old American Mileage & Stability',
    popularApplications: 'Mahindra Scorpio, Toyota Innova, Maruti Brezza, Hyundai Creta',
  },

  // Additional Market Brands
  {
    brand: 'Hankook',
    series: 'Ventus & Dynapro',
    models: ['Ventus Prime 4', 'Ventus S1 evo3', 'Dynapro AT2', 'Dynapro HP2', 'Kinergy Eco2'],
    category: 'Korean Global OEM Benchmark',
    popularApplications: 'Hyundai Tucson, Kia EV6, Creta, Seltos, Mercedes-Benz OEM',
  },
  {
    brand: 'Maxxis',
    series: 'Bravo & Victra',
    models: ['Bravo AT-771 Off-Road', 'Bravo AT-980 Rugged', 'Victra i-PRO', 'MA-P1', 'M6024 Scooter Off-Road'],
    category: 'Extreme 4x4 Off-Road & Grippy Scooters',
    popularApplications: 'Mahindra Thar, Gypsy, Isuzu V-Cross, Aprilia SR150, Honda Dio',
  },
  {
    brand: 'Kumho',
    series: 'Ecsta & Crugen',
    models: ['Ecsta PS71 Performance', 'Crugen HP71 SUV', 'Solus 4S HA32'],
    category: 'High-Value Performance & SUV Touring',
    popularApplications: 'Kia, Hyundai, VW, Skoda passenger cars and crossovers',
  },
  {
    brand: 'Falken',
    series: 'Wildpeak & Ziex',
    models: ['Wildpeak A/T AT3W', 'Ziex ZE914 Ecorun', 'Sincera SN832i'],
    category: 'All-Terrain 4x4 & Low Rolling Resistance',
    popularApplications: 'Thar, Fortuner, Duster, Swift, i20',
  },
  {
    brand: 'Ralco',
    series: 'Blaster & Motocross',
    models: ['Blaster Tubeless', 'Speed Blaster', 'Ralco Motocross', 'Dynamo'],
    category: 'Rough-Road Two-Wheeler & Light Commercial',
    popularApplications: 'Hero Splendor, Bajaj Pulsar, Royal Enfield, commercial delivery bikes',
  },
  {
    brand: 'BKT',
    series: 'Off-Highway & Industrial',
    models: ['Agrimax Radial', 'Commander Farm', 'Multimax Utility', 'AT 171 Deep Mud'],
    category: 'Heavy-Duty Commercial, Off-Highway & Agricultural',
    popularApplications: 'Commercial fleets, light trucks, tractors, industrial haulers',
  },
  {
    brand: 'Dunlop',
    series: 'Grandtrek & SP Sport',
    models: ['Grandtrek AT20', 'Grandtrek AT5', 'Grandtrek PT3', 'SP Sport Maxx 050+', 'Enasave EC300+'],
    category: 'Japanese Engineered SUV & Sports Car Tyres',
    popularApplications: 'Toyota Fortuner, Land Cruiser, Innova, Lexus, Honda CR-V',
  },
];

// -------------------------------------------------------------
// 4. OTHER AUTOMOTIVE PRODUCT BRANDS (ACCESSORIES, AUDIO, LIGHTING, WIPERS)
// -------------------------------------------------------------
export const ACCESSORIES_DATABASE: AccessoryBrandEntry[] = [
  // Dash Cameras
  {
    category: 'Dash Cam',
    brand: '70mai',
    popularModels: ['70mai A500S Pro Plus+', '70mai A810 4K HDR', '70mai A800S 4K Dual', '70mai M300 Entry HD', '70mai Omni 360 Rotation'],
    description: 'Premier car dash cams with Sony Starvis sensors, built-in GPS, ADAS alerts and 24-hour parking surveillance.',
  },
  {
    category: 'Dash Cam',
    brand: 'DDPAI',
    popularModels: ['DDPAI Z40 Dual', 'DDPAI Z50 4K', 'DDPAI M500 4G Cloud', 'DDPAI Mini Pro', 'DDPAI N1 Dual'],
    description: 'Ultra-capacitor heat-resistant dash cameras engineered for Indian summer temperatures with D2save emergency storage.',
  },
  {
    category: 'Dash Cam',
    brand: 'Qubo (Hero Electronix)',
    popularModels: ['Qubo Smart Dashcam Pro 4K', 'Qubo Dashcam Pro GPS', 'Qubo Dashcam Trio 3-Channel'],
    description: 'Made-for-India dash cameras with temperature resistance up to 70C, voice control and localized cloud app.',
  },
  {
    category: 'Dash Cam',
    brand: 'Blaupunkt & Philips',
    popularModels: ['Blaupunkt BP 2.5 FHD', 'Blaupunkt BP 3.0 WiFi', 'Philips GoSure ADR820', 'Philips CVR208'],
    description: 'European brand automotive video recorders with wide-angle night recording and G-sensor collision lock.',
  },

  // Car Lighting
  {
    category: 'Automotive Lighting',
    brand: 'Philips Automotive Lighting',
    popularModels: ['Philips Ultinon Pro9000 LED', 'Philips Ultinon Pro5000 LED', 'Philips X-tremeVision Pro150', 'Philips DiamondVision 5000K'],
    description: 'High-intensity automotive LED retrofit bulbs, H4/H7/H11 projector bulbs with 5800K daylight white color temperature.',
  },
  {
    category: 'Automotive Lighting',
    brand: 'Osram Lighting',
    popularModels: ['Osram Night Breaker 200', 'Osram LEDriving HL Gen2', 'Osram Cool Blue Intense', 'Osram CBI Xenon D2S/D4S'],
    description: 'German high-performance automotive headlight bulbs offering up to 200% more road brightness and 150-meter beam range.',
  },
  {
    category: 'Automotive Lighting',
    brand: 'Bosch & Hella',
    popularModels: ['Bosch Gigalight Plus 120', 'Bosch Clear White LED', 'Hella ValueFit LED Light Bars', 'Hella Bi-LED Projector Fog Lamps', 'Hella Comet 500 Aux Lamps'],
    description: 'Heavy-duty projector fog lamps, auxiliary driving lights, and long-range monsoon beam bulbs for highways and off-road.',
  },

  // Car Audio & Infotainment
  {
    category: 'Car Audio & Infotainment',
    brand: 'Blaupunkt Car Multimedia',
    popularModels: ['Blaupunkt Santa Monica 900', 'Blaupunkt San Diego 530', 'Blaupunkt Key Largo 980 Android OS', 'Velocity Series Component Speakers', 'XLf 8A Underseat Subwoofer'],
    description: 'German engineered car touchscreen Android receivers with wireless Apple CarPlay, DSP equalizer, and active underseat subwoofers.',
  },
  {
    category: 'Car Audio & Infotainment',
    brand: 'Sony Car Audio',
    popularModels: ['Sony XAV-AX3200', 'Sony XAV-AX5500', 'Sony XAV-AX8100 8.95-inch', 'Sony XS-GS1621C Component Speakers', 'Sony XS-NW1200 Bass Tube'],
    description: 'Audiophile head units with capacitive touchscreens, WebLink, dynamic stage organizer, and high-excursion subwoofers.',
  },
  {
    category: 'Car Audio & Infotainment',
    brand: 'Pioneer & JBL',
    popularModels: ['Pioneer DMH-Z5350BT', 'Pioneer TS-A1607C Components', 'JBL Club 602CTP', 'JBL BassPro SL2 Underseat Sub', 'Infinity Reference 6530cx'],
    description: 'Reference studio quality car audio systems, high-efficiency tweeters, 2-way crossovers and compact active subwoofers.',
  },

  // Wipers
  {
    category: 'Wipers',
    brand: 'Bosch Wipers',
    popularModels: ['Bosch Aerotwin Frameless Flat Blades', 'Bosch Clear Advantage Hybrid', 'Bosch Eco Conventional Blades'],
    description: 'India #1 windshield wipers featuring dual precision-tensioned steel springs and graphite-treated natural rubber wiping edge.',
  },
  {
    category: 'Wipers',
    brand: 'Michelin & Hella Wipers',
    popularModels: ['Michelin RainForce Conventional', 'Michelin HydroEdge Hybrid', 'Hella Dynablade Frameless', 'Hella Razor Hybrid'],
    description: 'All-weather streak-free monsoon wiper blades providing silent wiping and wind-spoiler aerodynamic downforce.',
  },

  // Seat Covers & Styling
  {
    category: 'Seat Covers',
    brand: 'Autoform & Elegant',
    popularModels: ['Autoform Bucket-Fit Leatherette', 'Autoform U-Form Ergonomic Cushions', 'Elegant Corduroy & Nappa Grain', 'GFX 3D / 5D / 7D All-Weather Floor Mats'],
    description: 'Custom-tailored laser-measured bucket seat covers, breathable anti-sweat perforations and heavy-duty 7D waterproof floor mats.',
  },

  // Tyre & Wheel Hardware
  {
    category: 'Tyre & Wheel Hardware',
    brand: 'Triton & OEM Wheel Hardware',
    popularModels: ['Triton Standard TR414 / TR413 Tubeless Valves', 'Chrome Sleeved Metallic Valves', 'Internal & External Solar TPMS Sensors', 'Billet Aluminum Hub-Centric Rings', 'Forged Alloy Lug Nuts & Anti-Theft Wheel Locks'],
    description: 'High-pressure brass tubeless tyre valves, air-tight green nitrogen caps, calibrated wheel-centering rings and anti-vibration hardware.',
  },
];

// -------------------------------------------------------------
// 5. BENGALURU SERVICE-AREA LOCALITIES & CATCHMENT CLUSTERS
// Represents customer catchment and potential service areas accessible to TyresXpress's
// 3 physical showrooms (Siddapura, Horamavu, and Balagere).
// These are service-area coverage references only, NOT physical showroom locations.
// -------------------------------------------------------------
export const BENGALURU_LOCALITIES = {
  whitefieldCluster: [
    'Whitefield',
    'Siddapura',
    'Varthur Main Road',
    'Varthur',
    'Palm Meadows',
    'Hope Farm',
    'ITPL (International Tech Park Bengaluru)',
    'Kadugodi',
    'Hoodi',
    'Brookefield',
    'AECS Layout',
    'Kundalahalli',
    'Marathahalli',
    'Channasandra',
    'Tubarahalli',
  ],
  horamavuCluster: [
    'Horamavu',
    'Kalkere Main Road',
    'Kalkere',
    'Jayanthi Nagar',
    'Ramamurthy Nagar',
    'Banaswadi',
    'Kalyan Nagar',
    'Kammanahalli',
    'Hennur Main Road',
    'HRBR Layout',
    'Kasturi Nagar',
    'Babusa Palya',
    'Chelekere',
    'Nagawara',
  ],
  balagerePanathurCluster: [
    'Balagere',
    'Balagere Village',
    'Panathur Main Road',
    'Panathur',
    'Sobha Dream Acres',
    'Varthur Hobli',
    'Kadubeesanahalli',
    'Bellandur',
    'Outer Ring Road (ORR)',
    'Devarabisanahalli',
    'Marathahalli-Sarjapur Link Road',
    'Carmelaram',
    'Gunjur',
    'Munnekolala',
  ],
} as const;

// -------------------------------------------------------------
// 6. HIGH-INTENT KEYWORD COMBINATIONS
// -------------------------------------------------------------
export const HIGH_INTENT_KEYWORD_COMBINATIONS = [
  // High-volume vehicle tyre queries in Bengaluru
  'Hyundai Creta tyre replacement Bengaluru',
  'Hyundai Creta 215/60 R17 tyres Whitefield',
  'Kia Seltos tyre size and price Bengaluru',
  'Tata Nexon tyre replacement Horamavu',
  'Maruti Swift tyres price in Bengaluru',
  'Maruti Brezza 215/60 R16 tyres Balagere',
  'Mahindra Thar 18 inch all terrain tyres Whitefield',
  'Mahindra Scorpio-N tyre replacement Bengaluru',
  'Toyota Innova Crysta tyres 205/65 R16 Horamavu',
  'Toyota Fortuner all terrain tyres Bengaluru',
  'Tata Punch tyres price Whitefield',
  'Maruti Fronx tyre size Balagere',
  'Royal Enfield Classic 350 tyres Bengaluru',
  'Royal Enfield Himalayan 450 dual sport tyres Whitefield',
  'Honda Activa tubeless tyres Horamavu',
  'TVS Jupiter tyre replacement Balagere',

  // Alloy wheels high intent
  'Alloy wheels in Bengaluru',
  'Aftermarket alloy wheels Whitefield',
  'Neo alloy wheels dealer Bengaluru',
  'Lenso alloy wheels Bengaluru price',
  'Plati alloy wheels for Thar Scorpio Creta',
  'MOMO alloy wheels dealer Bengaluru',
  '17 inch alloy wheels for Creta Seltos',
  '16 inch alloy wheels for Swift Baleno Nexon',
  'Alloy wheel bend repair in Bengaluru',
  'Hydraulic alloy rim straightening Whitefield',

  // Tyre brand & series searches
  'Yokohama BluEarth GT AE51 tyres Bengaluru',
  'Yokohama Geolandar AT G015 price Whitefield',
  'Yokohama Earth-1 tyres Bengaluru dealer',
  'Yokohama Club Network YCN dealer Bengaluru',
  'Bridgestone Turanza 6 tyres Bengaluru',
  'Bridgestone Sturdo 80000 km tyres Whitefield',
  'Michelin Primacy 4 ST tyres price Bengaluru',
  'Michelin Pilot Sport 4 tyres Whitefield',
  'Continental UltraContact UC6 tyres Horamavu',
  'Apollo Alnac 4G tyre replacement Bengaluru',
  'Apollo Apterra AT2 tyres for Thar Creta',
  'MRF ZLX car tyres price in Bengaluru',
  'CEAT SecuraDrive tyre shop near me',

  // Automotive services & upgrades
  '3D wheel alignment near me Bengaluru',
  'Computerized dynamic wheel balancing Whitefield',
  '99.9% nitrogen tyre filling station Horamavu',
  'Mushroom plug puncture repair Bengaluru',
  'Dashcam installation 70mai DDPAI Bengaluru',
  'Bosch Aerotwin wiper blades shop Bengaluru',
  'Blaupunkt car audio speakers Whitefield',
  'Philips LED headlight upgrade Bengaluru',
  'Triton chrome tyre valves shop near me',
  'Car wash bay Horamavu Kalkere',
] as const;
