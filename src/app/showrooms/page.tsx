import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SHOWROOMS, BUSINESS_INFO } from '@/data/business';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  CheckCircle2,
  Calendar,
  Sparkles,
  Car,
  Mail,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Showrooms — 3 Bengaluru Locations',
  description:
    'Visit TyresXpress showrooms in Siddapura (Whitefield), Horamavu/Kalkere, and Balagere (Panathur). Multi-brand tyres, 3D wheel alignment, dynamic balancing, rim repair, and car wash. Open 7 days a week from 9 AM to 8 PM.',
};

export default function ShowroomsPage() {
  return (
    <div className="w-full">
      {/* Showrooms Header Banner */}
      <section className="py-14 sm:py-18 bg-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 dark:text-[#F28C28] border border-red-500/30">
              3 Bengaluru Locations
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-4">
              Convenient Showrooms Across Bengaluru.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
              Strategically situated in Whitefield, Horamavu, and Panathur/Balagere. Every showroom is equipped with drive-in service bays, high-precision alignment racks, and certified technicians. Open 7 days a week from 9:00 AM to 8:00 PM.
            </p>
          </div>
        </div>
      </section>

      {/* Showroom Deep Dive List */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {SHOWROOMS.map((showroom, idx) => (
            <div
              key={showroom.id}
              id={showroom.id}
              className="scroll-mt-28 rounded-3xl border border-neutral-200 dark:border-[#303036] bg-white dark:bg-[#151519] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Placeholder Column (IMG-009, IMG-010, IMG-011) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-neutral-50 dark:bg-[#0B0B0D] border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-[#303036]">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white dark:bg-[#F28C28] dark:text-neutral-950">
                        Showroom #{idx + 1}
                      </span>
                      {showroom.isFlagship && (
                        <span className="text-xs font-bold text-red-600 dark:text-[#F28C28] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" /> Flagship Hub
                        </span>
                      )}
                      {showroom.hasCarWash && (
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                          <Car className="w-3.5 h-3.5" /> Wash Bay Available
                        </span>
                      )}
                    </div>

                    <ImagePlaceholder
                      id={showroom.imageId}
                      aspectRatio="3/2"
                      customLabel={`${showroom.name} Facility`}
                      showDetails={true}
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-[#202024] text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
                    <span>Pin Code: {showroom.pinCode}</span>
                    <span className="font-mono">{showroom.imageId}</span>
                  </div>
                </div>

                {/* Showroom Details Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{showroom.locality}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
                      {showroom.name}
                    </h2>

                    <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <p className="font-medium text-neutral-800 dark:text-neutral-200">
                        <strong className="text-neutral-900 dark:text-white font-semibold">Address: </strong>
                        {showroom.address}
                      </p>
                      {showroom.landmark && (
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                          <strong className="font-semibold text-neutral-700 dark:text-neutral-300">Landmark: </strong>
                          {showroom.landmark}
                        </p>
                      )}
                    </div>

                    {/* Operational Timings */}
                    <div className="mt-5 p-4 rounded-xl bg-neutral-50 dark:bg-[#202024] border border-neutral-200 dark:border-[#303036] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                        <Clock className="w-4 h-4 text-red-600 dark:text-[#F28C28] flex-shrink-0" />
                        <div>
                          <strong className="font-semibold text-neutral-900 dark:text-white">Hours: </strong>
                          {showroom.hours}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                        <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>{showroom.openDays}</span>
                      </div>
                    </div>

                    {/* Services Offered At this branch */}
                    <div className="mt-5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2.5">
                        Services Provided At This Showroom:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {showroom.services.map((svc) => (
                          <div
                            key={svc}
                            className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-[#F28C28] flex-shrink-0" />
                            <span>{svc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact & Directions Buttons */}
                  <div className="pt-6 border-t border-neutral-100 dark:border-[#202024] flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`tel:${showroom.phone}`}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] text-white dark:text-neutral-950 transition-colors shadow-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Manager: {showroom.phone}</span>
                    </a>

                    <a
                      href={showroom.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold border border-neutral-300 dark:border-[#303036] text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-[#202024] transition-colors"
                    >
                      <Navigation className="w-4 h-4 text-red-600 dark:text-[#F28C28]" />
                      <span>Get GPS Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Central Helpdesk Banner */}
      <section className="py-12 bg-neutral-100 dark:bg-[#151519] border-t border-neutral-200 dark:border-[#303036]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              Not sure which branch is closest to you?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Call our central Bangalore helpline or email our customer care team.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.centralHotline}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-neutral-900 text-white dark:bg-[#202024] dark:text-neutral-100 border border-neutral-700 hover:border-neutral-500 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500 dark:text-[#F28C28]" />
              <span>{BUSINESS_INFO.displayHotline}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-neutral-300 dark:border-[#303036] text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-[#202024] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
