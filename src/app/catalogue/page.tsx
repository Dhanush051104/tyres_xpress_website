import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TyreGuidePreview } from '@/components/home/TyreGuidePreview';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { BUSINESS_INFO, BRANDS } from '@/data/business';
import {
  BookOpen,
  Info,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Phone,
  Layers,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tyre Guide & Catalogue — Future Product Explorer & Safety Guide',
  description:
    'Educational tyre guide from TyresXpress Bengaluru. Decode tyre size markings, understand tread depth limits, wheel alignment schedules, and preview the upcoming Phase 2 digital tyre catalogue.',
};

export default function CataloguePage() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="py-14 sm:py-18 bg-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 dark:text-[#F28C28] border border-red-500/30">
              Customer Knowledge Base • Phase 1
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-4">
              Tyre Guide &amp; Upcoming Digital Catalogue.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
              We are preparing a comprehensive, ERP-connected product catalogue with authentic sidewall and tread photography for our next release. In the meantime, use our expert tyre guide below to decode sizes, check tyre health, and maintain optimal driving safety.
            </p>
          </div>
        </div>
      </section>

      {/* Official Roadmap Notice */}
      <section className="py-8 bg-amber-50 dark:bg-[#1f1a14] border-b border-amber-200 dark:border-[#382d20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 dark:text-[#F28C28] flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <strong className="font-bold">Phase 1 Catalogue Notice: </strong>
              To uphold our commitment to authentic representations, TyresXpress does not publish fabricated tyre listings, synthetic prices, or artificial performance ratings. Our future digital catalogue will display authentic manufacturer stock directly synchronized with our Bengaluru showroom ERP inventory. For immediate model availability and price quotes, please contact any of our three showrooms.
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sizing Decoder Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TyreGuidePreview />
        </div>
      </section>

      {/* Sidewall Anatomy Diagram & Placeholders */}
      <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-[#151519]/50 border-t border-b border-neutral-200 dark:border-[#202024]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                Visual Anatomy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
                Understanding Tyre Markings &amp; Compound Layers
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Modern radial tyres feature high-tensile steel belts, spiral nylon cap plies, polyester body cords, and silica-rich tread polymers. This reserved visual placeholder is configured for our detailed technical anatomy diagram.
              </p>

              <div className="p-4 rounded-xl bg-white dark:bg-[#202024] border border-neutral-200 dark:border-[#303036] space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-red-600 dark:text-[#F28C28]" />
                  <span>Key Elements On Every Sidewall:</span>
                </div>
                <ul className="space-y-1 text-neutral-600 dark:text-neutral-400 list-disc list-inside">
                  <li>DOT Production Code (e.g. 1824 = 18th week of 2024)</li>
                  <li>Treadwear, Traction &amp; Temperature UTQG grades</li>
                  <li>Maximum cold inflation pressure (PSI)</li>
                  <li>Rotation directional arrow (for directional tread patterns)</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ImagePlaceholder
                id="IMG-016"
                aspectRatio="16/9"
                customLabel="Tyre Sidewall Markings & Cross-Section Schematic"
                showDetails={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tyre Maintenance Best Practices Guide */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
              Maintenance Rules
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
              4 Golden Rules of Tyre Health
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Extend tyre lifespan by up to 20,000 km while safeguarding your braking grip on Bengaluru roads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-[#303036] bg-neutral-50 dark:bg-[#151519] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-[#F28C28]/20 flex items-center justify-center text-red-600 dark:text-[#F28C28] font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Check Pressure Monthly
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Under-inflation by just 5 PSI increases fuel consumption and causes excessive outer shoulder wear. We recommend checking cold tire pressure once every 3-4 weeks.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-[#303036] bg-neutral-50 dark:bg-[#151519] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-[#F28C28]/20 flex items-center justify-center text-red-600 dark:text-[#F28C28] font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Rotate Every 5,000 km
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Front tyres wear nearly twice as fast as rear tyres on front-wheel-drive cars. Regular cross-rotation equalizes wear and doubles usable tire life.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-[#303036] bg-neutral-50 dark:bg-[#151519] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-[#F28C28]/20 flex items-center justify-center text-red-600 dark:text-[#F28C28] font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Inspect 3D Alignment
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                If your steering pulls sideways or shows feathering wear on the inner tread edge, your alignment is out of spec. Inspect every 5,000 km or after hitting deep potholes.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-[#303036] bg-neutral-50 dark:bg-[#151519] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-[#F28C28]/20 flex items-center justify-center text-red-600 dark:text-[#F28C28] font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Tread Depth Safety Limit
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                While 1.6 mm is the legal limit, wet-surface braking performance degrades steeply below 2.5 mm. Check built-in tread wear indicators (TWI) regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Inspection Callout */}
      <section className="py-14 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Unsure of Your Current Tyre Condition?
          </h2>
          <p className="text-sm text-neutral-300 mt-2">
            Drive in to our Siddapura, Horamavu, or Balagere showroom for a complimentary 10-point tyre health inspection with digital depth measurement.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.centralHotline}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] text-white dark:text-neutral-950 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: {BUSINESS_INFO.displayHotline}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
