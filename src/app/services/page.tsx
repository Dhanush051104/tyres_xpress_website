import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, SHOWROOMS, BUSINESS_INFO } from '@/data/business';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import {
  Wrench,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Phone,
  ArrowRight,
  Sparkles,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automotive Services — 3D Alignment, Balancing, Tyres & Rim Repair',
  description:
    'Comprehensive automotive tyre and wheel services at TyresXpress Bengaluru: multi-brand tyres, alloy wheels, 3D wheel alignment, dynamic computerized balancing, nitrogen filling, rim bend straightening, car accessories, and professional car wash.',
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Services Header Banner */}
      <section className="py-14 sm:py-18 bg-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 dark:text-[#F28C28] border border-red-500/30">
              Precision Automotive Care
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-4">
              Comprehensive Wheel &amp; Tyre Engineering.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
              Equipped with calibrated 3D digital imaging, dynamic balancing rigs, and touchless mounting tools across all three Bengaluru showrooms. Serving cars, SUVs, luxury performance vehicles, and two-wheelers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Quick Navigation Anchor Bar */}
      <div className="sticky top-[58px] sm:top-[68px] z-30 w-full bg-white/95 dark:bg-[#151519]/95 backdrop-blur-md border-b border-neutral-200 dark:border-[#303036] py-3 px-4 sm:px-6 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 whitespace-nowrap text-xs">
          <span className="font-bold text-neutral-400 uppercase tracking-wider mr-2 hidden sm:inline">
            Jump to:
          </span>
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.slug}`}
              className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#202024] dark:hover:bg-[#303036] text-neutral-700 dark:text-neutral-300 font-semibold transition-colors"
            >
              {s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}
            </a>
          ))}
        </div>
      </div>

      {/* Detailed Services Breakdown */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-24">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-32 pt-4 border-t border-neutral-200/80 dark:border-[#202024] first:border-0 first:pt-0"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Image Placeholder Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative">
                      <ImagePlaceholder
                        id={service.imageId}
                        aspectRatio="4/3"
                        customLabel={service.title}
                        showDetails={true}
                      />

                      <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                        <span className="font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-[#F28C28]" />
                          {service.branches.join(', ')}
                        </span>
                        <span className="font-mono text-[11px] bg-neutral-100 dark:bg-[#151519] px-2 py-0.5 rounded border border-neutral-200 dark:border-[#303036]">
                          {service.imageId}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service Description Column */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                        Service #{index + 1}
                      </span>
                      {service.id === 'car-wash' && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white">
                          Horamavu Exclusive
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Features Grid */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Service Features &amp; Specifications:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Equipment & Recommended Frequency Box */}
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#151519] border border-neutral-200 dark:border-[#303036] space-y-2 text-xs">
                      <div className="flex items-start gap-2 text-neutral-800 dark:text-neutral-200">
                        <Wrench className="w-4 h-4 text-red-600 dark:text-[#F28C28] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold text-neutral-900 dark:text-white">
                            Machinery Utilized:{' '}
                          </strong>
                          {service.equipment}
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-neutral-800 dark:text-neutral-200">
                        <Clock className="w-4 h-4 text-neutral-500 dark:text-neutral-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold text-neutral-900 dark:text-white">
                            Recommended Frequency:{' '}
                          </strong>
                          {service.intervalRecommendation}
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={`tel:${BUSINESS_INFO.centralHotline}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] text-white dark:text-neutral-950 transition-colors shadow-sm"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Book Service: {BUSINESS_INFO.displayHotline}</span>
                      </a>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-neutral-300 dark:border-[#303036] text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-[#202024] transition-colors"
                      >
                        <span>Enquire Online</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Showroom Availability Callout */}
      <section className="py-14 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Sparkles className="w-8 h-8 text-red-500 dark:text-[#F28C28] mx-auto mb-3" />
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Drive in to Any TyresXpress Showroom Today
          </h2>
          <p className="text-sm text-neutral-300 mt-2">
            No long waiting lines. All 3 branches feature dedicated alignment bays, nitrogen stations, and multi-brand tyre inventory. Open Monday to Sunday, 9:00 AM – 8:00 PM.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/showrooms"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-white hover:bg-neutral-200 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>View Branch Addresses &amp; Directions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
