'use client';

import React from 'react';
import Link from 'next/link';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { MapPin, Wrench, Shield, Award, Phone, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, COMPANY_STATS } from '@/data/business';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-24">
      {/* Background radial automotive glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-500/10 dark:bg-[#F28C28]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Left Column: Headings & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Automotive Heritage Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-neutral-100 dark:bg-[#151519] border border-neutral-200 dark:border-[#303036] text-neutral-800 dark:text-neutral-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-[#F28C28]" />
              Official Customer Portal • Est. {BUSINESS_INFO.establishedYear}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Bengaluru&apos;s Multi-Brand{' '}
              <span className="text-red-600 dark:text-[#F28C28] italic">
                Tyre &amp; Precision
              </span>{' '}
              Automotive Hub.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Operating three dedicated automotive service showrooms across Bengaluru —{' '}
              <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">
                Siddapura (Whitefield)
              </strong>
              ,{' '}
              <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">
                Horamavu
              </strong>
              , and{' '}
              <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">
                Balagere (Panathur)
              </strong>
              . Genuine tyres from 14+ world-class manufacturers paired with laser-calibrated 3D wheel alignment, dynamic balancing, and certified alloy rim repair.
            </p>

            {/* Primary Calls to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href="/showrooms"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] dark:text-neutral-950 transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
              >
                <MapPin className="w-5 h-5" />
                <span>Find a Showroom</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-neutral-900 dark:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-[#151519] dark:hover:bg-[#202024] border border-neutral-300 dark:border-[#303036] transition-all"
              >
                <Wrench className="w-5 h-5 text-red-600 dark:text-[#F28C28]" />
                <span>Explore Services</span>
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.centralHotline}`}
                className="sm:hidden w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border border-neutral-200 dark:border-[#303036] text-neutral-700 dark:text-neutral-300"
              >
                <Phone className="w-4 h-4 text-red-600 dark:text-[#F28C28]" />
                <span>Call Helpline: {BUSINESS_INFO.displayHotline}</span>
              </a>
            </div>

            {/* Highlights List */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-[#151519] border border-neutral-200 dark:border-[#303036]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white">
                  <Shield className="w-3.5 h-3.5 text-red-600 dark:text-[#F28C28]" />
                  100% Genuine
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Direct brand warranty
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-[#151519] border border-neutral-200 dark:border-[#303036]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white">
                  <Award className="w-3.5 h-3.5 text-red-600 dark:text-[#F28C28]" />
                  Precision 3D
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Optical camera aligners
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-neutral-50 dark:bg-[#151519] border border-neutral-200 dark:border-[#303036]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white">
                  <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-[#F28C28]" />
                  3 Bengaluru Hubs
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Open 7 Days (9am-8pm)
                </p>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Numbered Placeholder IMG-001 */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-red-600/30 via-neutral-300/20 to-neutral-500/20 dark:from-[#F28C28]/30 dark:via-[#202024] dark:to-neutral-800/20 blur-sm -z-10" />

              <ImagePlaceholder
                id="IMG-001"
                aspectRatio="16/9"
                customLabel="TyresXpress Flagship Workshop & Fitting Bay"
                showDetails={true}
              />
            </div>
          </div>
        </div>

        {/* Quick Stats Banner */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-neutral-200 dark:border-[#202024] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-900 dark:text-white font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
