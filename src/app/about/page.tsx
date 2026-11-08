import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { BUSINESS_INFO, SHOWROOMS, WHY_US_PILLARS } from '@/data/business';
import { ShieldCheck, Award, MapPin, Wrench, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Heritage, Standards & Expertise',
  description:
    'Learn about TyresXpress, established in 2019 in Bengaluru. 3 multi-brand tyre showrooms in Siddapura, Horamavu, and Balagere providing genuine tyres, 3D wheel alignment, dynamic balancing, and certified automotive services.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="py-14 sm:py-18 bg-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 dark:text-[#F28C28] border border-red-500/30">
              Est. {BUSINESS_INFO.establishedYear} • Bengaluru Heritage
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-4">
              Pioneering Honest, Precision Automotive Care in Bengaluru.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
              Founded in 2019 with a single mission: to provide vehicle owners with authentic multi-brand tyres, factory-grade 3D alignment, and uncompromised safety without dealership markups.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Image Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                Our Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                From a Dedicated Workshop to 3 Prime Bengaluru Showrooms
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  Bengaluru&apos;s roads present unique challenges to vehicles — unpredictable asphalt conditions, potholes, high flyover expansion joints, and stop-and-go commute traffic. In 2019, TyresXpress was established to give car and two-wheeler owners a trusted sanctuary for their wheel and tyre needs.
                </p>
                <p>
                  Over the past five years, we have grown from our flagship Siddapura (Whitefield) facility into three full-service showrooms across East and North-East Bengaluru — including Kalkere/Horamavu and Balagere (Panathur).
                </p>
                <p>
                  Unlike single-brand franchise tyre shops incentivized to push one compound, TyresXpress operates as an authorized multi-brand destination. We partner with over 14 global tyre manufacturers including Yokohama, Bridgestone, Continental, Michelin, Pirelli, Apollo, and MRF to provide neutral, transparent recommendations matching each customer&apos;s exact vehicle weight, driving habits, and budget.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#151519] border border-neutral-200 dark:border-[#303036]">
                  <div className="text-2xl font-black font-mono text-neutral-900 dark:text-white">
                    2019
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Year Established
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#151519] border border-neutral-200 dark:border-[#303036]">
                  <div className="text-2xl font-black font-mono text-neutral-900 dark:text-white">
                    3 Hubs
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Across Bengaluru
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-neutral-50 dark:bg-[#151519] border border-neutral-200 dark:border-[#303036]">
                  <div className="text-2xl font-black font-mono text-neutral-900 dark:text-white">
                    14+ Brands
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Authorized Retailer
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder IMG-013 */}
            <div className="lg:col-span-5">
              <ImagePlaceholder
                id="IMG-013"
                aspectRatio="3/2"
                customLabel="TyresXpress Technical Team & Workshop Bays"
                showDetails={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Standards & Equipment */}
      <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-[#151519]/50 border-t border-b border-neutral-200 dark:border-[#202024]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Placeholder IMG-014 */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ImagePlaceholder
                id="IMG-014"
                aspectRatio="16/10"
                customLabel="Calibrated Optical 3D Wheel Alignment Sensor System"
                showDetails={true}
              />
            </div>

            {/* Standards Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                Precision Technology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                Factory-Calibrated Precision Machinery
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                A premium tyre performs only as well as the fitment and alignment machinery supporting it. We equip our showrooms with calibrated 3D digital imaging alignment racks, microprocessor dynamic wheel balancers, and pneumatic touchless rim changers that guarantee zero scratches to expensive alloy wheels.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#202024] border border-neutral-200 dark:border-[#303036]">
                  <Wrench className="w-5 h-5 text-red-600 dark:text-[#F28C28] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Laser &amp; Sonar Dynamic Balancers
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Accurate to within 1 gram, eliminating high-speed steering vibration and premature tire cupping.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#202024] border border-neutral-200 dark:border-[#303036]">
                  <Award className="w-5 h-5 text-red-600 dark:text-[#F28C28] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Touchless Pneumatic Tyre Changers
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Synthetic polymer mounting heads ensure delicate diamond-cut and powder-coated rims are never gouged.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#202024] border border-neutral-200 dark:border-[#303036]">
                  <ShieldCheck className="w-5 h-5 text-red-600 dark:text-[#F28C28] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Automated 99.9% Membrane Nitrogen Station
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Purges moisture and atmospheric contaminants to maintain rock-solid tyre inflation pressure across seasons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showrooms Network Overview */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
              Convenient Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
              Serving You Across Bengaluru
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              All three showrooms are open 7 days a week from 9:00 AM to 8:00 PM with customer parking and dedicated service bays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SHOWROOMS.map((s) => (
              <div
                key={s.id}
                className="p-6 rounded-2xl border border-neutral-200 dark:border-[#303036] bg-neutral-50 dark:bg-[#151519] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                    {s.locality}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mt-1">
                    {s.name}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                    {s.address}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                    Hours: {s.hours} ({s.openDays})
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-[#202024] flex items-center justify-between">
                  <a
                    href={`tel:${s.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-[#F28C28] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{s.phone}</span>
                  </a>
                  <a
                    href={s.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white inline-flex items-center gap-1"
                  >
                    <span>Maps</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/showrooms"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] dark:text-neutral-950 transition-colors shadow-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>Explore Complete Showroom Facilities &amp; Directions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
