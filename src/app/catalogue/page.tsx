'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { BRANDS, BUSINESS_INFO, BrandItem } from '@/data/business';
import { getBrandLogo } from '@/data/imageManifest';
import { trackPhoneClick } from '@/lib/analytics';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Gauge,
  HelpCircle,
  Info,
  MapPin,
  Phone,
  RotateCw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

const CATEGORIES = [
  'All Brands',
  'Passenger Cars',
  'SUVs & 4x4',
  'Two-Wheelers',
  'Commercial & Light Truck',
  'Performance & EV',
] as const;

interface SizeCodePart {
  id: string;
  token: string;
  label: string;
  shortDesc: string;
  fullExplanation: string;
  driverTip: string;
  color: string;
}

const SIZE_PARTS: SizeCodePart[] = [
  {
    id: 'width',
    token: '205',
    label: 'Tyre Section Width',
    shortDesc: '205 mm section width',
    fullExplanation:
      'The nominal linear width of the tyre measured from outer sidewall to inner sidewall in millimetres when mounted on its recommended rim and inflated to standard pressure. In this specification, the tyre section width spans exactly 205 mm across its widest points.',
    driverTip:
      'Wider tyres increase road contact patch and braking traction, but slightly increase rolling resistance; narrower tyres provide better aquaplaning resistance in heavy rain.',
    color: '#DC2626',
  },
  {
    id: 'profile',
    token: '55',
    label: 'Aspect Ratio (Profile)',
    shortDesc: '55% of width = 112.75 mm height',
    fullExplanation:
      'The dimensional ratio of the sidewall height to the tyre section width, expressed as a percentage. In this 205/55 tyre, the sidewall height is calculated as 55% of the 205 mm section width, resulting in an exact sidewall profile height of 112.75 mm.',
    driverTip:
      'Lower profile tyres (35–45) offer razor-sharp cornering and steering feedback for sports cars; higher profile tyres (55–70) provide vital rubber cushioning to absorb harsh Bengaluru potholes and expansion joints.',
    color: '#FF6B00',
  },
  {
    id: 'construction',
    token: 'R',
    label: 'Internal Construction',
    shortDesc: 'Radial ply construction',
    fullExplanation:
      'The letter "R" designates Radial ply construction — it does not represent the rim or tyre diameter. The internal carcass cord plies run radially at 90 degrees straight from bead to bead across the crown, stabilized by circumferential high-tensile steel belts beneath the tread to ensure flexible sidewalls and a flat, stable contact patch.',
    driverTip:
      'Radial tyres are standard on 99% of modern passenger cars and SUVs because they run significantly cooler, wear evenly, and deliver superior fuel economy compared to obsolete bias-ply tyres.',
    color: '#DC2626',
  },
  {
    id: 'rim',
    token: '16',
    label: 'Wheel Rim Diameter',
    shortDesc: '16-inch wheel rim diameter',
    fullExplanation:
      'The diameter of the metal wheel rim in inches measured from bead seat to bead seat where the tyre bead locks into place. It specifies a 16-inch wheel rim (406.4 mm) and refers exclusively to the wheel rim diameter, not the overall outer diameter of the inflated tyre (~24.9" / 632 mm).',
    driverTip:
      'Rim diameter must match your wheel rim size exactly. A 16-inch tyre can never be stretched or mounted on a 15-inch or 17-inch rim under any circumstance.',
    color: '#FF6B00',
  },
  {
    id: 'load',
    token: '91',
    label: 'Load Index Capacity',
    shortDesc: 'Index 91 = 615 kg per tyre',
    fullExplanation:
      'A standardized numerical code representing the maximum load capacity each individual tyre can carry when inflated to its maximum permissible cold pressure. Index 91 corresponds to exactly 615 kg (1,356 lbs) per tyre (2,460 kg total gross capacity across 4 tyres). Please note that this is the tyre\'s rated structural capacity under specified conditions, not a recommendation to exceed your vehicle\'s permitted gross vehicle weight (GVW).',
    driverTip:
      'Four tyres rated at 91 provide a total gross load capacity of 2,460 kg. Never fit tyres with a lower load index than the original equipment (OE) specified by your vehicle manufacturer.',
    color: '#DC2626',
  },
  {
    id: 'speed',
    token: 'V',
    label: 'Speed Rating Symbol',
    shortDesc: 'Up to 240 km/h (149 mph)',
    fullExplanation:
      'The speed rating symbol "V" corresponds to a rated maximum operational speed of 240 km/h (149 mph) under specified laboratory test and load conditions. This certifies the tyre\'s structural integrity and thermal heat dissipation capability; it does not mean the vehicle should ever be driven at that speed or in excess of posted highway speed limits.',
    driverTip:
      'Never down-rate speed ratings below factory OE specs. Modern vehicle stability controls (ABS, ESC) depend on the sidewall stiffness inherent to the specified speed rating class.',
    color: '#FF6B00',
  },
];

const SPEED_TABLE = [
  { symbol: 'T', speed: '190 km/h', category: 'Standard Passenger & Compact' },
  { symbol: 'H', speed: '210 km/h', category: 'Sedans & Highway Cruisers' },
  { symbol: 'V', speed: '240 km/h', category: 'Performance Sedans & Crossovers' },
  { symbol: 'W', speed: '270 km/h', category: 'High-Performance Sports' },
  { symbol: 'Y', speed: '300 km/h', category: 'Supercars & Track Vehicles' },
];

function getBrandSlug(name: string): string {
  const clean = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (clean === 'jk-tyre' || clean === 'jk-tyres' || clean === 'jk') {
    return 'jktyres';
  }
  return clean;
}

// Bounding boxes of actual visible artwork inside each brand logo PNG.
// Calculated by pixel analysis to eliminate excessive outer white margins,
// ensuring every logo fills the container with approx. 3 mm (~11-12px) margin.
const BRAND_LOGO_BOUNDS: Record<
  string,
  { imgW: number; imgH: number; minX: number; minY: number; contentW: number; contentH: number }
> = {
  apollo: { imgW: 380, imgH: 159, minX: 75, minY: 31, contentW: 225, contentH: 89 },
  bkt: { imgW: 436, imgH: 226, minX: 71, minY: 46, contentW: 291, contentH: 139 },
  bridgestone: { imgW: 386, imgH: 146, minX: 46, minY: 43, contentW: 287, contentH: 43 },
  ceat: { imgW: 381, imgH: 168, minX: 60, minY: 40, contentW: 254, contentH: 79 },
  continental: { imgW: 375, imgH: 154, minX: 47, minY: 50, contentW: 280, contentH: 53 },
  dunlop: { imgW: 1600, imgH: 900, minX: 11, minY: 270, contentW: 1577, contentH: 360 },
  firestone: { imgW: 379, imgH: 167, minX: 47, minY: 55, contentW: 284, contentH: 47 },
  goodyear: { imgW: 373, imgH: 176, minX: 47, minY: 54, contentW: 275, contentH: 62 },
  jktyres: { imgW: 382, imgH: 175, minX: 50, minY: 53, contentW: 277, contentH: 56 },
  michelin: { imgW: 357, imgH: 214, minX: 97, minY: 50, contentW: 164, contentH: 91 },
  mrf: { imgW: 990, imgH: 606, minX: 96, minY: 75, contentW: 801, contentH: 407 },
  pirelli: { imgW: 379, imgH: 169, minX: 50, minY: 51, contentW: 276, contentH: 64 },
  reise: { imgW: 341, imgH: 200, minX: 61, minY: 53, contentW: 215, contentH: 107 },
  tvs: { imgW: 385, imgH: 187, minX: 52, minY: 55, contentW: 281, contentH: 57 },
  vredestein: { imgW: 359, imgH: 168, minX: 56, minY: 26, contentW: 234, contentH: 79 },
  yokohama: { imgW: 392, imgH: 157, minX: 66, minY: 54, contentW: 271, contentH: 47 },
};

function BrandLogoSlot({
  brand,
}: {
  brand: BrandItem;
}) {
  const [loadError, setLoadError] = useState(false);
  const slug = getBrandSlug(brand.name);
  const logoMeta = getBrandLogo(slug);
  const targetPath = logoMeta.targetPath;
  const bounds = BRAND_LOGO_BOUNDS[slug];

  return (
    <div
      className="relative w-full h-20 sm:h-24 rounded-xl bg-white border border-neutral-200/90 dark:border-neutral-700/80 p-2.5 sm:p-3 flex items-center justify-center overflow-hidden shadow-2xs group-hover:border-[#FF6B00]/50 transition-[border-color,box-shadow] duration-200"
      data-brand-slug={slug}
      data-target-path={targetPath}
      aria-label={`${brand.name} Brand Logo`}
    >
      {!loadError && bounds ? (
        <svg
          viewBox={`${bounds.minX} ${bounds.minY} ${bounds.contentW} ${bounds.contentH}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full select-none transition-transform duration-300 ease-out group-hover:scale-105 pointer-events-none"
          role="img"
          aria-label={`${brand.name} Official Logo`}
        >
          <image
            href={targetPath}
            width={bounds.imgW}
            height={bounds.imgH}
            x={0}
            y={0}
            onError={() => setLoadError(true)}
          />
        </svg>
      ) : !loadError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={targetPath}
          alt={`${brand.name} Official Logo`}
          onError={() => setLoadError(true)}
          className="max-h-full max-w-full w-auto h-auto object-contain select-none transition-transform duration-300 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-1 select-none">
          <span className="text-base font-black tracking-tight text-neutral-900">
            {brand.name}
          </span>
          <span className="text-[10px] font-mono text-neutral-500 mt-0.5">
            Logo Unavailable
          </span>
        </div>
      )}
    </div>
  );
}

export default function CataloguePage() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>('All Brands');
  const [activeCodeId, setActiveCodeId] = useState<string>('width');

  const cardHover = shouldReduceMotion
    ? undefined
    : { y: -4, transition: { type: 'spring' as const, stiffness: 360, damping: 25 } };

  const innerHover = shouldReduceMotion
    ? undefined
    : { y: -2, transition: { type: 'spring' as const, stiffness: 420, damping: 28 } };

  const filteredBrands =
    selectedCategory === 'All Brands'
      ? BRANDS
      : BRANDS.filter((b) => b.category.includes(selectedCategory as any));

  const activePart =
    SIZE_PARTS.find((p) => p.id === activeCodeId) || SIZE_PARTS[0];

  return (
    <div className="w-full">
      {/* 1. Header Banner */}
      <section className="py-14 sm:py-20 bg-[#111111] text-white relative overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              whileHover={innerHover}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30 hover:border-[#FF6B00]/60 hover:text-[#FF6B00] transition-colors cursor-default"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Customer Educational Hub • Knowledge Base</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-4">
              Tyre Guide &amp; Markings Explained.
            </h1>

            <p className="text-sm sm:text-base text-[var(--platinum-2)] mt-4 leading-relaxed">
              Understand the numbers printed on your tyre sidewall, explore our 16+ authorized tyre manufacturers, and learn practical maintenance rules to extend tread life and ensure maximum safety on Bengaluru roads.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[var(--platinum-2)]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                16 Authorized Brands
              </span>
              <span className="text-[rgba(255,255,255,0.25)]">•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#FF6B00]" />
                YCN Pro Dealership
              </span>
              <span className="text-[rgba(255,255,255,0.25)]">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                100% Genuine Direct Warranty
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tyre Brand Showcase */}
      <section id="brands" className="py-14 sm:py-20 bg-[var(--tx-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
                <Award className="w-4 h-4" /> Authorized Dealer Network
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--tx-text-primary)] mt-1">
                Authorized Tyre Brands Available at TyresXpress
              </h2>
              <p className="text-sm sm:text-base text-[var(--tx-text-secondary)] mt-2 max-w-3xl">
                We supply genuine passenger car, SUV, 2-wheeler, and commercial tyres with direct manufacturer warranty support from 16 authorized global and domestic tyre leaders.
              </p>
            </div>

            <div className="text-xs text-[var(--tx-text-muted)] font-mono flex-shrink-0">
              Showing {filteredBrands.length} of {BRANDS.length} Brands
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white border-red-600 shadow-sm'
                    : 'bg-[var(--tx-card)] text-[var(--tx-text-secondary)] border-[var(--tx-border)] hover:border-[#FF6B00]/50 hover:text-[var(--tx-text-primary)] hover:bg-[var(--tx-surface-secondary)] tx-surface-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Brands Grid with Authentic PNG Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredBrands.map((brand) => {
              const isYokohama = brand.name === 'Yokohama';

              return (
                <motion.div
                  key={brand.name}
                  whileHover={cardHover}
                  className="group relative overflow-hidden p-5 sm:p-5.5 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/60 bg-[var(--tx-card)] tx-card flex flex-col justify-between shadow-xs hover:!shadow-[0_18px_38px_-8px_rgba(0,0,0,0.14),0_4px_12px_-2px_rgba(0,0,0,0.06)] dark:hover:!shadow-[0_22px_44px_-8px_rgba(0,0,0,0.7),0_0_20px_-2px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-300 cursor-default"
                >
                  {/* Top Laser Accent Sweep */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
                  />

                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--tx-text-muted)] group-hover:text-[var(--tx-text-secondary)] transition-colors">
                        Origin: {brand.origin}
                      </span>
                      {isYokohama ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-600/10 text-red-600 dark:bg-red-500/15 dark:text-red-400 border border-red-500/25 group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00] transition-colors">
                          YCN Pro Dealer
                        </span>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--tx-border-strong)] group-hover:bg-[#FF6B00] transition-colors" />
                      )}
                    </div>

                    {/* Logo Slot with Clean Background and Object-Contain */}
                    <BrandLogoSlot brand={brand} />

                    {/* Brand Information: Refined Metallic Motto & Description (Brand name omitted to avoid repetition) */}
                    <div className="mt-3.5 space-y-2.5">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-neutral-100/90 via-neutral-50/90 to-neutral-100/90 dark:from-neutral-800/90 dark:via-neutral-800/60 dark:to-neutral-800/90 border border-neutral-300/80 dark:border-neutral-600/70 shadow-2xs">
                        <span className="w-1.5 h-3.5 rounded-full bg-gradient-to-b from-neutral-400 via-neutral-300 to-neutral-500 dark:from-neutral-300 dark:via-neutral-400 dark:to-neutral-500 flex-shrink-0" />
                        <span className="text-xs sm:text-[13px] font-semibold italic tracking-wide text-neutral-800 dark:text-neutral-100 font-serif leading-snug">
                          &ldquo;{brand.tagline}&rdquo;
                        </span>
                      </div>

                      <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                        {brand.popularFor}
                      </p>
                    </div>
                  </div>

                  {/* Highlights and Categories */}
                  <div className="pt-4 mt-4 border-t border-[var(--tx-border)] space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {brand.category.map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[var(--tx-surface-secondary)] text-[var(--tx-text-secondary)] border border-[var(--tx-border)] tx-surface-secondary"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <div className="text-[11px] text-[var(--tx-text-muted)] flex items-center gap-1.5 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                      <span className="truncate">{brand.highlights[0]}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Educational Section: How to Read a Tyre */}
      <section
        id="how-to-read-a-tyre"
        className="py-14 sm:py-20 bg-[var(--tx-surface-secondary)] border-t border-b border-[var(--tx-border)] tx-section-alt"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
              <Compass className="w-4 h-4" /> Educational Sidewall Guide
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--tx-text-primary)] mt-1">
              How to Read Your Tyre Sidewall Markings
            </h2>
            <p className="text-sm sm:text-base text-[var(--tx-text-secondary)] mt-2">
              Every tyre carries an internationally standardized code that specifies its exact dimensions, internal structure, maximum load capacity, and certified top speed.
            </p>
          </div>

          {/* Interactive Tyre Diagram & Token Highlight Suite */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Interactive Visual Tyre Marking Inspector */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative overflow-hidden rounded-3xl border border-[var(--tx-border)] bg-[#0d0d10] text-white p-5 sm:p-7 shadow-xl">
                {/* Header with Title and Prominent Interactive Size Marking */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(255,255,255,0.08)]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--platinum-2)]">
                      Interactive Sidewall Inspector
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <span>Specification:</span>
                      <span className="font-mono text-red-500 font-extrabold">205/55 R16 91V</span>
                    </h3>
                  </div>
                  <div className="text-xs text-[var(--tx-text-muted)] font-mono flex items-center gap-1.5 self-start sm:self-auto">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                    <span>Select any marking below</span>
                  </div>
                </div>

                {/* Prominent Clickable Size Code Display */}
                <div className="py-4">
                  <div className="p-2 sm:p-2.5 rounded-2xl bg-[#141418] border border-[rgba(255,255,255,0.08)] flex items-center justify-center flex-wrap gap-1 sm:gap-2">
                    {/* 205 */}
                    <button
                      type="button"
                      data-marking-id="width"
                      onClick={() => setActiveCodeId('width')}
                      aria-label="Inspect 205 Section Width"
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-mono text-base sm:text-xl font-black transition-all cursor-pointer flex flex-col items-center ${
                        activeCodeId === 'width'
                          ? 'bg-gradient-to-r from-red-600 to-[#FF6B00] text-white shadow-[0_0_16px_rgba(255,107,0,0.45)] scale-105'
                          : 'bg-[#1b1b22] text-neutral-300 hover:text-white hover:border-[#FF6B00]/50 border border-[rgba(255,255,255,0.08)]'
                      }`}
                    >
                      <span>205</span>
                      <span className="text-[9px] font-sans font-medium opacity-80 uppercase tracking-wider">Width</span>
                    </button>

                    <span className="text-xl sm:text-2xl font-mono font-bold text-neutral-600 select-none">/</span>

                    {/* 55 */}
                    <button
                      type="button"
                      data-marking-id="profile"
                      onClick={() => setActiveCodeId('profile')}
                      aria-label="Inspect 55 Aspect Ratio"
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-mono text-base sm:text-xl font-black transition-all cursor-pointer flex flex-col items-center ${
                        activeCodeId === 'profile'
                          ? 'bg-gradient-to-r from-red-600 to-[#FF6B00] text-white shadow-[0_0_16px_rgba(255,107,0,0.45)] scale-105'
                          : 'bg-[#1b1b22] text-neutral-300 hover:text-white hover:border-[#FF6B00]/50 border border-[rgba(255,255,255,0.08)]'
                      }`}
                    >
                      <span>55</span>
                      <span className="text-[9px] font-sans font-medium opacity-80 uppercase tracking-wider">Aspect</span>
                    </button>

                    <span className="text-neutral-600 select-none px-0.5">•</span>

                    {/* R */}
                    <button
                      type="button"
                      data-marking-id="construction"
                      onClick={() => setActiveCodeId('construction')}
                      aria-label="Inspect R Radial Construction"
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-mono text-base sm:text-xl font-black transition-all cursor-pointer flex flex-col items-center ${
                        activeCodeId === 'construction'
                          ? 'bg-gradient-to-r from-red-600 to-[#FF6B00] text-white shadow-[0_0_16px_rgba(255,107,0,0.45)] scale-105'
                          : 'bg-[#1b1b22] text-neutral-300 hover:text-white hover:border-[#FF6B00]/50 border border-[rgba(255,255,255,0.08)]'
                      }`}
                    >
                      <span>R</span>
                      <span className="text-[9px] font-sans font-medium opacity-80 uppercase tracking-wider">Radial</span>
                    </button>

                    {/* 16 */}
                    <button
                      type="button"
                      data-marking-id="rim"
                      onClick={() => setActiveCodeId('rim')}
                      aria-label="Inspect 16 Rim Diameter"
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-mono text-base sm:text-xl font-black transition-all cursor-pointer flex flex-col items-center ${
                        activeCodeId === 'rim'
                          ? 'bg-gradient-to-r from-red-600 to-[#FF6B00] text-white shadow-[0_0_16px_rgba(255,107,0,0.45)] scale-105'
                          : 'bg-[#1b1b22] text-neutral-300 hover:text-white hover:border-[#FF6B00]/50 border border-[rgba(255,255,255,0.08)]'
                      }`}
                    >
                      <span>16</span>
                      <span className="text-[9px] font-sans font-medium opacity-80 uppercase tracking-wider">Rim Ø</span>
                    </button>

                    <span className="text-neutral-600 select-none px-0.5">•</span>

                    {/* 91 */}
                    <button
                      type="button"
                      data-marking-id="load"
                      onClick={() => setActiveCodeId('load')}
                      aria-label="Inspect 91 Load Index"
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-mono text-base sm:text-xl font-black transition-all cursor-pointer flex flex-col items-center ${
                        activeCodeId === 'load'
                          ? 'bg-gradient-to-r from-red-600 to-[#FF6B00] text-white shadow-[0_0_16px_rgba(255,107,0,0.45)] scale-105'
                          : 'bg-[#1b1b22] text-neutral-300 hover:text-white hover:border-[#FF6B00]/50 border border-[rgba(255,255,255,0.08)]'
                      }`}
                    >
                      <span>91</span>
                      <span className="text-[9px] font-sans font-medium opacity-80 uppercase tracking-wider">Load</span>
                    </button>

                    {/* V */}
                    <button
                      type="button"
                      data-marking-id="speed"
                      onClick={() => setActiveCodeId('speed')}
                      aria-label="Inspect V Speed Rating"
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-mono text-base sm:text-xl font-black transition-all cursor-pointer flex flex-col items-center ${
                        activeCodeId === 'speed'
                          ? 'bg-gradient-to-r from-red-600 to-[#FF6B00] text-white shadow-[0_0_16px_rgba(255,107,0,0.45)] scale-105'
                          : 'bg-[#1b1b22] text-neutral-300 hover:text-white hover:border-[#FF6B00]/50 border border-[rgba(255,255,255,0.08)]'
                      }`}
                    >
                      <span>V</span>
                      <span className="text-[9px] font-sans font-medium opacity-80 uppercase tracking-wider">Speed</span>
                    </button>
                  </div>
                </div>

                {/* SVG Visualisation Canvas (Fixed Height for zero layout shift) */}
                <div className="w-full h-[290px] sm:h-[330px] relative rounded-2xl bg-[#09090c] border border-[rgba(255,255,255,0.06)] overflow-hidden flex items-center justify-center select-none">
                  <AnimatePresence mode="wait">
                    {/* Width State */}
                    {activeCodeId === 'width' && (
                      <motion.div
                        key="width"
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="w-full h-full flex items-center justify-center p-2"
                      >
                        <svg viewBox="0 0 600 320" className="w-full h-full">
                          <defs>
                            <linearGradient id="rubberGrad" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#1c1c22" />
                              <stop offset="15%" stopColor="#2d2d36" />
                              <stop offset="50%" stopColor="#1e1e24" />
                              <stop offset="85%" stopColor="#2d2d36" />
                              <stop offset="100%" stopColor="#1c1c22" />
                            </linearGradient>
                            <marker id="arrowL" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto">
                              <path d="M 7,1 L 1,4 L 7,7 Z" fill="#FF6B00" />
                            </marker>
                            <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                              <path d="M 1,1 L 7,4 L 1,7 Z" fill="#FF6B00" />
                            </marker>
                          </defs>

                          {/* Technical Grid Guidelines */}
                          <line x1="60" y1="160" x2="540" y2="160" stroke="rgba(255,255,255,0.05)" strokeDasharray="4,4" />
                          <line x1="300" y1="30" x2="300" y2="290" stroke="rgba(255,255,255,0.05)" strokeDasharray="4,4" />

                          {/* Tyre Front Cross-Section Body */}
                          <path
                            d="M 195,260 C 145,220 140,165 170,95 C 190,75 240,70 300,70 C 360,70 410,75 430,95 C 460,165 455,220 405,260 L 390,260 C 430,215 430,165 405,115 C 385,100 345,95 300,95 C 255,95 215,100 195,115 C 170,165 170,215 210,260 Z"
                            fill="url(#rubberGrad)"
                            stroke="#3a3a44"
                            strokeWidth="2"
                          />

                          {/* Tread Crown Blocks & Longitudinal Grooves */}
                          <rect x="235" y="70" width="12" height="24" fill="#0c0c0e" rx="2" />
                          <rect x="275" y="70" width="12" height="25" fill="#0c0c0e" rx="2" />
                          <rect x="313" y="70" width="12" height="25" fill="#0c0c0e" rx="2" />
                          <rect x="353" y="70" width="12" height="24" fill="#0c0c0e" rx="2" />

                          {/* Left Measurement Bracket Line */}
                          <line x1="145" y1="35" x2="145" y2="210" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.85" />
                          <line x1="145" y1="160" x2="160" y2="160" stroke="#FF6B00" strokeWidth="2" />
                          <circle cx="145" cy="160" r="3.5" fill="#FF6B00" />

                          {/* Right Measurement Bracket Line */}
                          <line x1="455" y1="35" x2="455" y2="210" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.85" />
                          <line x1="440" y1="160" x2="455" y2="160" stroke="#FF6B00" strokeWidth="2" />
                          <circle cx="455" cy="160" r="3.5" fill="#FF6B00" />

                          {/* Horizontal Measurement Caliper Arrow */}
                          <line x1="150" y1="45" x2="450" y2="45" stroke="#FF6B00" strokeWidth="2.5" markerStart="url(#arrowL)" markerEnd="url(#arrowR)" />

                          {/* Measurement Central Badge */}
                          <rect x="220" y="28" width="160" height="34" rx="8" fill="#141418" stroke="#FF6B00" strokeWidth="2" />
                          <text x="300" y="50" fontFamily="monospace" fontSize="16" fontWeight="900" fill="#FFFFFF" textAnchor="middle">205 mm</text>
                          <text x="300" y="292" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#aaa" textAnchor="middle">Nominal Section Width • Outer Sidewall to Inner Sidewall</text>
                        </svg>
                      </motion.div>
                    )}

                    {/* Profile State */}
                    {activeCodeId === 'profile' && (
                      <motion.div
                        key="profile"
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="w-full h-full flex items-center justify-center p-2"
                      >
                        <svg viewBox="0 0 600 320" className="w-full h-full">
                          <defs>
                            <marker id="arrowL" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto">
                              <path d="M 7,1 L 1,4 L 7,7 Z" fill="#FF6B00" />
                            </marker>
                            <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                              <path d="M 1,1 L 7,4 L 1,7 Z" fill="#FF6B00" />
                            </marker>
                          </defs>

                          {/* Side view tyre */}
                          <circle cx="280" cy="160" r="130" fill="#18181c" stroke="#2c2c34" strokeWidth="18" />
                          <circle cx="280" cy="160" r="139" fill="none" stroke="#FF6B00" strokeWidth="3" strokeDasharray="8,6" opacity="0.4" />

                          {/* Sidewall highlight sector */}
                          <path d="M 280,30 A 130 130 0 0 1 370,67 L 335,103 A 80 80 0 0 0 280,80 Z" fill="rgba(255,107,0,0.3)" stroke="#FF6B00" strokeWidth="2" />

                          {/* Rim */}
                          <circle cx="280" cy="160" r="80" fill="#202026" stroke="#4a4a56" strokeWidth="4" />
                          <line x1="280" y1="80" x2="280" y2="240" stroke="#383842" strokeWidth="8" />
                          <line x1="200" y1="160" x2="360" y2="160" stroke="#383842" strokeWidth="8" />
                          <circle cx="280" cy="160" r="30" fill="#18181e" stroke="#FF6B00" strokeWidth="2" />

                          {/* Sidewall Height Caliper on Left Side */}
                          <line x1="90" y1="30" x2="160" y2="30" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="3,3" />
                          <line x1="160" y1="80" x2="200" y2="80" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="3,3" />
                          <line x1="110" y1="33" x2="110" y2="77" stroke="#FF6B00" strokeWidth="2.5" markerStart="url(#arrowL)" markerEnd="url(#arrowR)" />

                          {/* Formula Card on Right Side */}
                          <rect x="390" y="45" width="195" height="100" rx="10" fill="#141418" stroke="#FF6B00" strokeWidth="1.5" />
                          <text x="405" y="70" fontFamily="monospace" fontSize="12" fontWeight="900" fill="#FF6B00">SIDEWALL HEIGHT</text>
                          <text x="405" y="96" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="#FFFFFF">112.75 mm</text>
                          <text x="405" y="118" fontFamily="monospace" fontSize="11" fill="#bbb">55% of 205 mm width</text>
                          <text x="405" y="134" fontFamily="sans-serif" fontSize="9" fill="#888">Aspect Ratio = 55</text>

                          <text x="280" y="305" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#aaa" textAnchor="middle">Aspect Ratio = (Sidewall Height ÷ Section Width) × 100</text>
                        </svg>
                      </motion.div>
                    )}

                    {/* Construction State */}
                    {activeCodeId === 'construction' && (
                      <motion.div
                        key="construction"
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="w-full h-full flex items-center justify-center p-2"
                      >
                        <svg viewBox="0 0 600 320" className="w-full h-full">
                          <rect x="60" y="45" width="480" height="210" rx="14" fill="#141418" stroke="#33333c" />

                          {/* Tread rubber outer */}
                          <rect x="75" y="60" width="450" height="30" rx="4" fill="#282830" stroke="#444" />
                          <text x="95" y="80" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#ddd">1. Outer Tread Compound Layer</text>

                          {/* Steel Belts Layer */}
                          <rect x="75" y="100" width="450" height="28" rx="4" fill="#1c2430" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x="95" y="119" fontFamily="sans-serif" fontSize="11" fontWeight="800" fill="#60a5fa">2. Circumferential Stabilizing Steel Belts (0° &amp; Cross-Angle)</text>

                          {/* 90 deg Radial Plies Layer */}
                          <rect x="75" y="138" width="450" height="48" rx="4" fill="#2d1c1c" stroke="#FF6B00" strokeWidth="2" />
                          {Array.from({ length: 24 }).map((_, i) => (
                            <line key={i} x1={95 + i * 18} y1={142} x2={95 + i * 18} y2={182} stroke="#FF6B00" strokeWidth="2.5" />
                          ))}
                          <text x="95" y="202" fontFamily="sans-serif" fontSize="11" fontWeight="800" fill="#FF6B00">3. 90° Radial Body Plies (Cords run straight from bead to bead)</text>

                          {/* Inner Liner */}
                          <rect x="75" y="215" width="450" height="24" rx="4" fill="#18181c" stroke="#555" />
                          <text x="95" y="231" fontFamily="sans-serif" fontSize="10" fill="#aaa">4. Airtight Synthetic Inner Liner (Replaces inner tube)</text>

                          <text x="300" y="285" fontFamily="sans-serif" fontSize="12" fontWeight="900" fill="#FF6B00" textAnchor="middle">
                            &quot;R&quot; = RADIAL Construction • NOT Rim or Tyre Diameter
                          </text>
                        </svg>
                      </motion.div>
                    )}

                    {/* Rim State */}
                    {activeCodeId === 'rim' && (
                      <motion.div
                        key="rim"
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="w-full h-full flex items-center justify-center p-2"
                      >
                        <svg viewBox="0 0 600 320" className="w-full h-full">
                          <defs>
                            <marker id="arrowL" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto">
                              <path d="M 7,1 L 1,4 L 7,7 Z" fill="#FF6B00" />
                            </marker>
                            <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                              <path d="M 1,1 L 7,4 L 1,7 Z" fill="#FF6B00" />
                            </marker>
                          </defs>

                          {/* Outer tyre shown dimmed / dashed */}
                          <circle cx="260" cy="160" r="130" fill="none" stroke="#25252c" strokeWidth="16" strokeDasharray="6,4" />
                          <text x="260" y="20" fontFamily="sans-serif" fontSize="10" fill="#666" textAnchor="middle">
                            Total Tyre Outer Diameter: ~24.9&quot; (632 mm) [EXCLUDED]
                          </text>

                          {/* Highlighted Rim Circle */}
                          <circle cx="260" cy="160" r="80" fill="#1c1c24" stroke="#FF6B00" strokeWidth="4" strokeDasharray="10,4" />
                          <circle cx="260" cy="160" r="76" fill="rgba(255,107,0,0.12)" />

                          {/* Spokes in Rim */}
                          <line x1="260" y1="80" x2="260" y2="240" stroke="#FF6B00" strokeWidth="4" opacity="0.8" />
                          <line x1="180" y1="160" x2="340" y2="160" stroke="#FF6B00" strokeWidth="4" opacity="0.8" />
                          <circle cx="260" cy="160" r="24" fill="#101014" stroke="#FF6B00" strokeWidth="2" />

                          {/* Diameter Line and Calipers across Rim */}
                          <line x1="260" y1="84" x2="260" y2="236" stroke="#FFFFFF" strokeWidth="2" markerStart="url(#arrowL)" markerEnd="url(#arrowR)" />

                          {/* Callout Card */}
                          <rect x="375" y="100" width="210" height="115" rx="10" fill="#141418" stroke="#FF6B00" strokeWidth="2" />
                          <text x="390" y="125" fontFamily="monospace" fontSize="12" fontWeight="900" fill="#FF6B00">RIM DIAMETER</text>
                          <text x="390" y="155" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="#FFFFFF">16 Inches</text>
                          <text x="390" y="178" fontFamily="monospace" fontSize="12" fill="#bbb">406.4 mm across beads</text>
                          <text x="390" y="198" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="#FF6B00">Wheel Rim Only (No Tyre Rubber)</text>

                          <text x="260" y="305" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#aaa" textAnchor="middle">
                            Bead seat to bead seat diameter of the metal wheel rim
                          </text>
                        </svg>
                      </motion.div>
                    )}

                    {/* Load State */}
                    {activeCodeId === 'load' && (
                      <motion.div
                        key="load"
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="w-full h-full flex items-center justify-center p-2"
                      >
                        <svg viewBox="0 0 600 320" className="w-full h-full">
                          <defs>
                            <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                              <path d="M 1,1 L 7,4 L 1,7 Z" fill="#DC2626" />
                            </marker>
                          </defs>

                          {/* Road Surface */}
                          <line x1="70" y1="260" x2="470" y2="260" stroke="#555" strokeWidth="3" />
                          <circle cx="240" cy="150" r="110" fill="#18181c" stroke="#2c2c34" strokeWidth="14" />
                          <circle cx="240" cy="150" r="65" fill="#1c1c22" stroke="#444" strokeWidth="3" />

                          {/* Embossed marking 91 highlighted on sidewall */}
                          <rect x="170" y="180" width="46" height="26" rx="6" fill="#FF6B00" />
                          <text x="193" y="198" fontFamily="monospace" fontSize="15" fontWeight="900" fill="#FFFFFF" textAnchor="middle">91</text>

                          {/* Downward load vector arrows */}
                          <line x1="240" y1="40" x2="240" y2="120" stroke="#DC2626" strokeWidth="4" markerEnd="url(#arrowR)" />
                          <text x="240" y="32" fontFamily="sans-serif" fontSize="11" fontWeight="800" fill="#DC2626" textAnchor="middle">VEHICLE LOAD FORCE</text>

                          {/* Contact patch highlight */}
                          <ellipse cx="240" cy="260" rx="35" ry="5" fill="#FF6B00" opacity="0.6" />

                          {/* Load Stats Badge */}
                          <rect x="360" y="65" width="225" height="150" rx="12" fill="#141418" stroke="#DC2626" strokeWidth="2" />
                          <text x="375" y="93" fontFamily="monospace" fontSize="12" fontWeight="900" fill="#DC2626">LOAD INDEX: 91</text>
                          <text x="375" y="125" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="#FFFFFF">615 kg / tyre</text>
                          <text x="375" y="148" fontFamily="sans-serif" fontSize="11" fill="#bbb">1,356 lbs rated maximum capacity</text>
                          <text x="375" y="174" fontFamily="sans-serif" fontSize="12" fontWeight="800" fill="#FF6B00">4-Tyre Gross: 2,460 kg</text>
                          <text x="375" y="196" fontFamily="sans-serif" fontSize="9" fill="#888">Rated capacity under specified conditions</text>

                          <text x="280" y="295" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#aaa" textAnchor="middle">
                            Rated structural capacity • Never exceed vehicle manufacturer GVW
                          </text>
                        </svg>
                      </motion.div>
                    )}

                    {/* Speed State */}
                    {activeCodeId === 'speed' && (
                      <motion.div
                        key="speed"
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="w-full h-full flex items-center justify-center p-2"
                      >
                        <svg viewBox="0 0 600 320" className="w-full h-full">
                          {/* Tyre with motion blur arcs */}
                          <circle cx="230" cy="160" r="110" fill="#18181c" stroke="#2c2c34" strokeWidth="14" />
                          <circle cx="230" cy="160" r="65" fill="#1c1c22" stroke="#444" strokeWidth="3" />
                          <path d="M 110,100 A 130 130 0 0 1 230,30" fill="none" stroke="#FF6B00" strokeWidth="3" strokeDasharray="10,6" opacity="0.8" />
                          <path d="M 270,32 A 130 130 0 0 1 360,120" fill="none" stroke="#DC2626" strokeWidth="3" strokeDasharray="14,6" opacity="0.8" />

                          {/* Embossed marking V highlighted on sidewall */}
                          <rect x="170" y="180" width="36" height="26" rx="6" fill="#DC2626" />
                          <text x="188" y="198" fontFamily="monospace" fontSize="15" fontWeight="900" fill="#FFFFFF" textAnchor="middle">V</text>

                          {/* Speedometer arc on Right */}
                          <rect x="350" y="55" width="235" height="175" rx="12" fill="#141418" stroke="#FF6B00" strokeWidth="2" />
                          <text x="365" y="83" fontFamily="monospace" fontSize="12" fontWeight="900" fill="#FF6B00">SPEED RATING: V</text>
                          <text x="365" y="117" fontFamily="sans-serif" fontSize="24" fontWeight="900" fill="#FFFFFF">240 km/h</text>
                          <text x="365" y="140" fontFamily="sans-serif" fontSize="12" fill="#bbb">149 mph certified top speed</text>

                          {/* Speed ladder */}
                          <text x="365" y="172" fontFamily="monospace" fontSize="10" fill="#888">S: 180 | T: 190 | H: 210</text>
                          <text x="365" y="190" fontFamily="monospace" fontSize="11" fontWeight="800" fill="#FF6B00">► V: 240 km/h (Active Rating)</text>
                          <text x="365" y="208" fontFamily="monospace" fontSize="10" fill="#888">W: 270 | Y: 300 km/h</text>

                          <text x="280" y="295" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#aaa" textAnchor="middle">
                            Thermal dissipation certification • Does not mean vehicle should be driven at that speed
                          </text>
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Quick Select Pill Row */}
                <div className="pt-4 border-t border-[rgba(255,255,255,0.08)]">
                  <div className="text-[11px] text-[var(--platinum-2)] mb-2 font-medium">
                    Tap a marking below to highlight its explanation:
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center font-mono">
                    {SIZE_PARTS.map((p) => {
                      const isSelected = activeCodeId === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setActiveCodeId(p.id)}
                          aria-label={`Select ${p.label}`}
                          className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-red-600 text-white border-red-600 shadow-md ring-2 ring-[#FF6B00]/40'
                              : 'bg-[#18181a] text-[var(--platinum-2)] border-[rgba(255,255,255,0.1)] hover:border-[#FF6B00]/50 hover:text-white'
                          }`}
                        >
                          <span className="block text-sm">{p.token}</span>
                          <span className="block text-[9px] font-sans opacity-75 truncate">{p.id}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Active Component Deep Dive + Comprehensive 6-Card Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              {/* Highlighted Active Part Focus Box */}
              <motion.div
                key={activePart.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl border-2 border-[#FF6B00] bg-[var(--tx-card)] tx-card shadow-md space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-red-600 text-white">
                    Token: {activePart.token}
                  </span>
                  <span className="text-xs font-semibold text-[#FF6B00] font-mono">
                    {activePart.shortDesc}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[var(--tx-text-primary)]">
                  {activePart.label}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--tx-text-secondary)] leading-relaxed">
                  {activePart.fullExplanation}
                </p>

                <div className="p-3 rounded-xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] tx-surface-secondary text-xs text-[var(--tx-text-secondary)] flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="font-bold text-[var(--tx-text-primary)]">TyresXpress Advisor Tip: </strong>
                    {activePart.driverTip}
                  </p>
                </div>
              </motion.div>

              {/* All 6 Markings Quick List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SIZE_PARTS.map((part) => {
                  const isSelected = activeCodeId === part.id;
                  return (
                    <button
                      key={part.id}
                      type="button"
                      onClick={() => setActiveCodeId(part.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-red-600 bg-[var(--tx-card)] shadow-xs tx-card'
                          : 'border-[var(--tx-border)] bg-[var(--tx-card)] hover:border-[#FF6B00]/50 tx-card'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-black text-sm text-red-600 dark:text-red-400">
                          {part.token}
                        </span>
                        <span className="text-[11px] font-semibold text-[var(--tx-text-muted)]">
                          {part.label}
                        </span>
                      </div>
                      <div className="text-[11px] text-[var(--tx-text-secondary)] mt-1 truncate">
                        {part.shortDesc}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Speed Rating Reference Table Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[var(--tx-border)] bg-[var(--tx-card)] tx-card space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[var(--tx-text-primary)] flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#FF6B00]" />
                    Common Speed Rating Benchmarks
                  </span>
                  <span className="text-[11px] text-[var(--tx-text-muted)] font-mono">ECE R30 Standard</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
                  {SPEED_TABLE.map((item) => (
                    <div
                      key={item.symbol}
                      className="p-2 rounded-lg bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] tx-surface-secondary"
                    >
                      <div className="font-mono font-black text-red-600 dark:text-red-500 text-sm">
                        {item.symbol}
                      </div>
                      <div className="font-bold text-[var(--tx-text-primary)] text-[11px]">
                        {item.speed}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Additional Sidewall Markings Section */}
      <section id="additional-markings" className="py-14 sm:py-20 bg-[var(--tx-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
              <ShieldCheck className="w-4 h-4" /> Safety, Age &amp; Direction Markings
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--tx-text-primary)] mt-1">
              Vital Sidewall Markings Beyond Tyre Size
            </h2>
            <p className="text-sm sm:text-base text-[var(--tx-text-secondary)] mt-2">
              Tyre manufacturers mould critical manufacturing dates, inflation safety boundaries, and rotation directions into every tyre carcass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. DOT Date Code */}
            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] space-y-3.5 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />

              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-red-600/10 text-red-600 dark:bg-red-500/15 dark:text-red-400 border border-red-500/20">
                  DOT Code
                </span>
                <Calendar className="w-4 h-4 text-[#FF6B00]" />
              </div>

              <h3 className="text-lg font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                Manufacturing Date (DOT Date Code)
              </h3>

              <div className="p-3 rounded-xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] tx-surface-secondary font-mono text-center">
                <span className="text-xs text-[var(--tx-text-muted)] block mb-1">Example Sidewall Stamp</span>
                <span className="text-base font-black tracking-wider text-[var(--tx-text-primary)]">
                  DOT 10X7 1824
                </span>
                <div className="mt-1 text-[11px] text-[#FF6B00]">
                  18 = 18th Week • 24 = Year 2024
                </div>
              </div>

              <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                The final four digits inside the oval stamp reveal the exact production week and year. Rubber compounds oxidize and harden over time. TyresXpress strictly supplies fresh, recent production inventory with full warranty.
              </p>
            </motion.div>

            {/* 2. Tubeless vs Tube-Type */}
            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] space-y-3.5 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />

              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-red-600/10 text-red-600 dark:bg-red-500/15 dark:text-red-400 border border-red-500/20">
                  TUBELESS / TT
                </span>
                <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
              </div>

              <h3 className="text-lg font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                Tubeless vs. Tube-Type Tyres
              </h3>

              <div className="p-3 rounded-xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] tx-surface-secondary text-xs space-y-1.5">
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-[var(--tx-text-primary)]">TUBELESS (TL)</span>
                  <span className="text-red-600 font-bold">Standard for Modern Cars</span>
                </div>
                <div className="flex items-center justify-between text-[var(--tx-text-muted)]">
                  <span>TUBE TYPE (TT)</span>
                  <span>Spoked Wheels / Older 2W</span>
                </div>
              </div>

              <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                Tubeless tyres have an airtight inner halobutyl rubber liner. If penetrated by a nail, the liner seals around the object, preventing explosive blowouts and allowing gradual, controlled deflation so you can safely drive to our service bay.
              </p>
            </motion.div>

            {/* 3. Rotation Direction & Asymmetric Tread */}
            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] space-y-3.5 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />

              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-red-600/10 text-red-600 dark:bg-red-500/15 dark:text-red-400 border border-red-500/20">
                  ROTATION ➔
                </span>
                <RotateCw className="w-4 h-4 text-[#FF6B00]" />
              </div>

              <h3 className="text-lg font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                Directional &amp; Asymmetrical Patterns
              </h3>

              <div className="p-3 rounded-xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] tx-surface-secondary text-xs space-y-1.5">
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-[var(--tx-text-primary)]">ROTATION Arrow</span>
                  <span className="text-[#FF6B00]">Forward Roll Direction</span>
                </div>
                <div className="flex items-center justify-between text-[var(--tx-text-muted)]">
                  <span>OUTSIDE / INSIDE</span>
                  <span>Face Mounting Rule</span>
                </div>
              </div>

              <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                Directional tyres use V-shaped grooves designed to channel water outward; mounting them backwards severely increases aquaplaning risks. Asymmetric tyres feature specialized outer tread blocks for dry cornering and inner blocks for wet braking.
              </p>
            </motion.div>

            {/* 4. Maximum Pressure Distinction */}
            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] space-y-3.5 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />

              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-red-600/10 text-red-600 dark:bg-red-500/15 dark:text-red-400 border border-red-500/20">
                  MAX PRESS vs OE
                </span>
                <Gauge className="w-4 h-4 text-[#FF6B00]" />
              </div>

              <h3 className="text-lg font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                Maximum Pressure vs. Door Placard
              </h3>

              <div className="p-3 rounded-xl bg-red-600/5 dark:bg-red-500/10 border border-red-500/20 text-xs space-y-1">
                <div className="font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Common Driver Misconception:
                </div>
                <div className="text-[11px] text-[var(--tx-text-secondary)]">
                  The sidewall &quot;44 PSI MAX&quot; is the structural bursting limit, NOT your recommended driving pressure!
                </div>
              </div>

              <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                Always follow the vehicle manufacturer cold pressure sticker found on your driver-side B-pillar door jamb (typically 30–35 PSI). Over-inflating to the sidewall maximum causes harsh ride quality, center tread wear, and reduced braking grip.
              </p>
            </motion.div>

            {/* 5. Tread Wear Indicators (TWI) */}
            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] space-y-3.5 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />

              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-red-600/10 text-red-600 dark:bg-red-500/15 dark:text-red-400 border border-red-500/20">
                  TWI Bars
                </span>
                <Clock className="w-4 h-4 text-[#FF6B00]" />
              </div>

              <h3 className="text-lg font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                Tread Wear Indicators (TWI)
              </h3>

              <div className="p-3 rounded-xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] tx-surface-secondary text-xs space-y-1">
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-[var(--tx-text-primary)]">Legal Minimum:</span>
                  <span className="text-red-600">1.6 mm depth</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[var(--tx-text-muted)]">
                  <span>TyresXpress Wet Safety Recommendation:</span>
                  <span className="text-[#FF6B00] font-bold">2.5 mm depth</span>
                </div>
              </div>

              <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                Small triangular arrows (▲) or &quot;TWI&quot; stamps on the shoulder indicate the location of raised 1.6 mm rubber bars within the tread grooves. When the outer tread surface becomes flush with these bars, the tyre is legally bald and must be replaced immediately.
              </p>
            </motion.div>

            {/* 6. UTQG Grading (Treadwear, Traction, Temperature) */}
            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] space-y-3.5 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />

              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-red-600/10 text-red-600 dark:bg-red-500/15 dark:text-red-400 border border-red-500/20">
                  UTQG Rating
                </span>
                <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              </div>

              <h3 className="text-lg font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                UTQG Performance Ratings
              </h3>

              <div className="p-3 rounded-xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] tx-surface-secondary text-xs grid grid-cols-3 gap-2 text-center font-mono">
                <div>
                  <span className="block text-[10px] text-[var(--tx-text-muted)]">TREADWEAR</span>
                  <span className="font-bold text-[var(--tx-text-primary)]">300 – 500</span>
                </div>
                <div>
                  <span className="block text-[10px] text-[var(--tx-text-muted)]">TRACTION</span>
                  <span className="font-bold text-red-600">AA / A</span>
                </div>
                <div>
                  <span className="block text-[10px] text-[var(--tx-text-muted)]">TEMP</span>
                  <span className="font-bold text-[#FF6B00]">A</span>
                </div>
              </div>

              <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                Uniform Tyre Quality Grading (UTQG) rates treadwear (longevity multiplier versus a baseline tyre of 100), wet straight-line braking traction (AA, A, B, C), and high-speed heat dissipation resistance (A, B, C).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Tyre Maintenance Best Practices Guide */}
      <section className="py-14 sm:py-20 bg-[var(--tx-surface-secondary)] border-t border-b border-[var(--tx-border)] tx-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Maintenance Rules
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--tx-text-primary)] mt-1">
              4 Golden Rules of Tyre Health
            </h2>
            <p className="text-sm text-[var(--tx-text-secondary)] mt-2">
              Extend tyre lifespan by up to 20,000 km while safeguarding your braking grip on Bengaluru roads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] space-y-3 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />
              <div className="w-8 h-8 rounded-lg bg-red-600/10 dark:bg-red-500/15 group-hover:bg-[#FF6B00] flex items-center justify-center text-red-600 dark:text-red-400 group-hover:text-white font-mono font-bold text-sm transition-colors">
                01
              </div>
              <h3 className="text-base font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                Check Pressure Monthly
              </h3>
              <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                Under-inflation by just 5 PSI increases fuel consumption and causes excessive outer shoulder wear. We recommend checking cold tire pressure once every 3-4 weeks.
              </p>
            </motion.div>

            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] space-y-3 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />
              <div className="w-8 h-8 rounded-lg bg-red-600/10 dark:bg-red-500/15 group-hover:bg-[#FF6B00] flex items-center justify-center text-red-600 dark:text-red-400 group-hover:text-white font-mono font-bold text-sm transition-colors">
                02
              </div>
              <h3 className="text-base font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                Rotate Every 5,000 km
              </h3>
              <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                Front tyres wear nearly twice as fast as rear tyres on front-wheel-drive cars. Regular cross-rotation equalizes wear and doubles usable tire life.
              </p>
            </motion.div>

            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] space-y-3 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />
              <div className="w-8 h-8 rounded-lg bg-red-600/10 dark:bg-red-500/15 group-hover:bg-[#FF6B00] flex items-center justify-center text-red-600 dark:text-red-400 group-hover:text-white font-mono font-bold text-sm transition-colors">
                03
              </div>
              <h3 className="text-base font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                Inspect 3D Alignment
              </h3>
              <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                If your steering pulls sideways or shows feathering wear on the inner tread edge, your alignment is out of spec. Inspect every 5,000 km or after hitting deep potholes.
              </p>
            </motion.div>

            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] space-y-3 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />
              <div className="w-8 h-8 rounded-lg bg-red-600/10 dark:bg-red-500/15 group-hover:bg-[#FF6B00] flex items-center justify-center text-red-600 dark:text-red-400 group-hover:text-white font-mono font-bold text-sm transition-colors">
                04
              </div>
              <h3 className="text-base font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                Tread Depth Safety Limit
              </h3>
              <p className="text-xs text-[var(--tx-text-secondary)] leading-relaxed">
                While 1.6 mm is the legal limit, wet-surface braking performance degrades steeply below 2.5 mm. Check built-in tread wear indicators (TWI) regularly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Complimentary Inspection Callout */}
      <section className="py-14 sm:py-16 bg-[#111111] text-white border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Unsure of Your Current Tyre Condition?
          </h2>
          <p className="text-sm text-[var(--platinum-2)] mt-2">
            Drive in to our Siddapura, Horamavu, or Balagere showroom for a complimentary 10-point tyre health inspection with digital depth measurement.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              href={`tel:${BUSINESS_INFO.centralHotline}`}
              onClick={() => trackPhoneClick({ showroom: 'central_hotline', location: 'catalogue_page_helpline' })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-700 text-white transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: {BUSINESS_INFO.displayHotline}</span>
            </motion.a>

            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/showrooms"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#1a1a1c] hover:bg-[#222226] border border-[rgba(255,255,255,0.12)] text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#FF6B00]" />
                <span>Visit Our 3 Showrooms</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
