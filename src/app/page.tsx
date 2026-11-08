import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/home/Hero';
import { ServiceCard } from '@/components/home/ServiceCard';
import { ShowroomCard } from '@/components/home/ShowroomCard';
import { BrandShowcase } from '@/components/home/BrandShowcase';
import { TyreGuidePreview } from '@/components/home/TyreGuidePreview';
import { SERVICES, SHOWROOMS, WHY_US_PILLARS, BUSINESS_INFO } from '@/data/business';
import { Wrench, MapPin, Award, ArrowRight, Phone, ShieldCheck, Mail, Calendar } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section (Includes IMG-001) */}
      <Hero />

      {/* 2. Services Overview Section (Includes IMG-002 through IMG-008) */}
      <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-[#0B0B0D] border-t border-b border-neutral-200 dark:border-[#202024]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                <Wrench className="w-4 h-4" />
                Precision Automotive Services
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
                Engineered for Road Safety &amp; Longevity
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
                From touchless tyre replacement and optical 3D steering alignment to computerized balancing and alloy wheel bend straightening.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700 dark:text-[#F28C28] dark:hover:text-[#FF9F43] group flex-shrink-0"
            >
              <span>View All 8 Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 8).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Brands Section (14 Multi-Brand Manufacturers) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#151519]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
              <Award className="w-4 h-4" /> Authorized Multi-Brand Retailer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
              14+ Global Tyre Manufacturers Under One Roof
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2">
              We stock authentic tyres from Japan, Germany, France, Italy, and India. Every tyre comes with manufacturer-backed warranty and fresh manufacturing date codes.
            </p>
          </div>

          <BrandShowcase />
        </div>
      </section>

      {/* 4. Why TyresXpress Section (Heritage, Est. 2019, 3 Showrooms) */}
      <section className="py-16 sm:py-20 bg-neutral-900 text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 dark:bg-[#F28C28]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-red-600/20 text-red-400 dark:text-[#F28C28] border border-red-500/30">
              Bengaluru Automotive Trust
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mt-3">
              Why Bengaluru Drivers Choose TyresXpress
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2">
              Established in {BUSINESS_INFO.establishedYear}, we bridge the gap between dealership pricing and roadside workshops with calibrated precision equipment and transparent advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_US_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 rounded-2xl bg-neutral-800/60 border border-neutral-700/60 hover:border-red-500/50 dark:hover:border-[#F28C28]/50 transition-colors"
              >
                <div className="text-2xl font-mono font-black text-red-500 dark:text-[#F28C28] mb-3">
                  {pillar.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors"
            >
              <span>Learn More About Our Team &amp; Equipment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Tyre Guide & Catalogue Preview Section (Includes IMG-012) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TyreGuidePreview />
        </div>
      </section>

      {/* 6. Three Showroom Locations Cards (Includes IMG-009, IMG-010, IMG-011) */}
      <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-[#151519]/50 border-t border-neutral-200 dark:border-[#202024]" id="showrooms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                <MapPin className="w-4 h-4" />
                Bengaluru Network
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
                Visit Our 3 Bengaluru Showrooms
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
                Open 7 days a week from 9:00 AM to 8:00 PM with drive-in service bays, experienced tyre fitters, and air-conditioned lounges.
              </p>
            </div>

            <Link
              href="/showrooms"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700 dark:text-[#F28C28] dark:hover:text-[#FF9F43] group flex-shrink-0"
            >
              <span>Showroom Full Details &amp; Directions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SHOWROOMS.map((showroom) => (
              <ShowroomCard key={showroom.id} showroom={showroom} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Section & Quick Assistance CTA */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 dark:border-[#303036] bg-neutral-900 text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 dark:bg-[#F28C28] text-white dark:text-neutral-950">
                  <Phone className="w-3.5 h-3.5" /> Direct Support &amp; Bookings
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                  Need Tyre Advice or Urgent Inspection?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
                  Connect directly with our branch managers in Siddapura, Horamavu, or Balagere. We offer quick tyre inspections, honest tread health checks, and transparent quotes.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Free 10-Point Tyre &amp; Tread Inspection</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-red-400 dark:text-[#F28C28]" />
                    <span>Open 7 Days (9:00 AM – 8:00 PM)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.centralHotline}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] text-white dark:text-neutral-950 transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.displayHotline}</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Enquiry Form</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
