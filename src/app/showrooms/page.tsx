'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { SHOWROOMS, BUSINESS_INFO } from '@/data/business';
import { getImageMeta } from '@/data/imageManifest';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { trackPhoneClick, trackGetDirections } from '@/lib/analytics';
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

export default function ShowroomsPage() {
  const shouldReduceMotion = useReducedMotion();

  const cardHover = shouldReduceMotion
    ? undefined
    : { y: -3, transition: { type: 'spring' as const, stiffness: 350, damping: 26 } };

  const innerHover = shouldReduceMotion
    ? undefined
    : { y: -2, transition: { type: 'spring' as const, stiffness: 420, damping: 28 } };

  return (
    <div className="w-full">
      {/* Showrooms Header Banner */}
      <section className="py-14 sm:py-18 bg-[#111111] text-white relative overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              whileHover={innerHover}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30 hover:border-[#FF6B00]/60 hover:text-[#FF6B00] transition-colors cursor-default"
            >
              3 Bengaluru Locations
            </motion.span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-4">
              Convenient Showrooms Across Bengaluru.
            </h1>
            <p className="text-sm sm:text-base text-[var(--platinum-2)] mt-4 leading-relaxed">
              Strategically located across Whitefield (Varthur Road and Balagere/Panathur) and Horamavu, Bengaluru. Every showroom is equipped with drive-in service bays, high-precision alignment racks, and experienced technicians. Open 7 days a week from 9:00 AM to 8:00 PM.
            </p>
          </div>
        </div>
      </section>

      {/* Showroom Deep Dive List */}
      <section className="py-16 sm:py-20 bg-[var(--tx-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {SHOWROOMS.map((showroom, idx) => {
            const meta = getImageMeta(showroom.imageId);
            const imageSrc = meta?.readyForUpload ? meta.targetPath : null;

            return (
              <motion.div
                key={showroom.id}
                id={showroom.id}
                whileHover={cardHover}
                className="group/showroom relative scroll-mt-28 rounded-3xl border border-[var(--tx-border)] hover:border-[#FF6B00]/60 bg-[var(--tx-card)] overflow-hidden shadow-sm hover:shadow-[0_16px_38px_-8px_rgba(255,107,0,0.16)] dark:hover:shadow-[0_16px_42px_-8px_rgba(255,107,0,0.24)] transition-[border-color,box-shadow] duration-300 tx-card"
              >
                {/* Top Precision Laser Accent Sweep */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 inset-x-0 z-20 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover/showroom:scale-x-100 origin-left transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Visual Column */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[var(--tx-surface-secondary)] border-b lg:border-b-0 lg:border-r border-[var(--tx-border)] tx-surface-secondary">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white shadow-sm">
                          Showroom #{idx + 1}
                        </span>
                        {showroom.isFlagship && (
                          <span className="text-xs font-bold text-[#FF6B00] flex items-center gap-1 bg-[#FF6B00]/15 px-2.5 py-0.5 rounded-full border border-[#FF6B00]/30">
                            <Sparkles className="w-3.5 h-3.5" /> Flagship Hub
                          </span>
                        )}
                        {showroom.hasCarWash && (
                          <span className="text-xs font-bold text-neutral-200 flex items-center gap-1 bg-neutral-900 px-2.5 py-0.5 rounded-full border border-neutral-700/60">
                            <Car className="w-3.5 h-3.5 text-[#FF6B00]" /> Wash Bay Available
                          </span>
                        )}
                      </div>

                      {imageSrc ? (
                        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[var(--tx-border)] group-hover/showroom:border-[#FF6B00]/40 bg-neutral-900 shadow-sm transition-colors duration-300">
                          <Image
                            src={imageSrc}
                            alt={`${showroom.name} — Multi-Brand Tyre Showroom & Workshop Facility in Bengaluru`}
                            fill
                            priority={idx === 0}
                            sizes="(max-width: 1024px) 100vw, 480px"
                            className="object-cover object-center group-hover/showroom:scale-105 transition-transform duration-500 ease-out"
                          />
                        </div>
                      ) : (
                        <ImagePlaceholder
                          id={showroom.imageId}
                          aspectRatio="3/2"
                          customLabel={`${showroom.name} Facility`}
                          showDetails={true}
                        />
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-[var(--tx-border)] text-xs text-[var(--tx-text-muted)] flex items-center justify-between">
                      <span>Pin Code: {showroom.pinCode}</span>
                    </div>
                  </div>

                  {/* Showroom Details Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 group-hover/showroom:text-[#FF6B00] transition-colors">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{showroom.locality}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--tx-text-primary)] mt-1">
                        {showroom.name}
                      </h2>

                      <div className="mt-4 space-y-2 text-sm text-[var(--tx-text-secondary)]">
                        <p className="font-medium text-[var(--tx-text-secondary)]">
                          <strong className="text-[var(--tx-text-primary)] font-semibold">Address: </strong>
                          {showroom.address}
                        </p>
                        {showroom.landmark && (
                          <p className="text-xs text-[var(--tx-text-muted)] italic">
                            <strong className="font-semibold text-[var(--tx-text-secondary)]">Landmark: </strong>
                            {showroom.landmark}
                          </p>
                        )}
                      </div>

                      {/* Operational Timings Inner Card */}
                      <motion.div
                        whileHover={innerHover}
                        className="group/inner mt-5 p-4 rounded-xl bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-2xs hover:shadow-[0_6px_18px_-4px_rgba(255,107,0,0.16)] transition-[border-color,box-shadow,background-color] duration-200 tx-surface-secondary"
                      >
                        <div className="flex items-center gap-2 text-[var(--tx-text-secondary)]">
                          <Clock className="w-4 h-4 text-red-600 group-hover/inner:text-[#FF6B00] transition-colors flex-shrink-0" />
                          <div>
                            <strong className="font-semibold text-[var(--tx-text-primary)]">Hours: </strong>
                            {showroom.hours}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[var(--tx-text-secondary)]">
                          <Calendar className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                          <span className="font-semibold text-[var(--tx-text-primary)]">{showroom.openDays}</span>
                        </div>
                      </motion.div>

                      {/* Services Offered At this branch */}
                      <div className="mt-5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--tx-text-muted)] mb-2.5">
                          Services Provided At This Showroom:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {showroom.services.map((svc) => (
                            <motion.div
                              key={svc}
                              whileHover={innerHover}
                              className="group/svc flex items-center gap-2 p-2 rounded-lg bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/50 text-xs text-[var(--tx-text-secondary)] hover:text-[var(--tx-text-primary)] transition-[border-color,background-color,color] duration-200 cursor-default tx-surface-secondary"
                            >
                              <CheckCircle2 className="w-4 h-4 text-red-600 group-hover/svc:text-[#FF6B00] transition-colors flex-shrink-0" />
                              <span>{svc}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact & Directions Buttons */}
                    <div className="pt-6 border-t border-[var(--tx-border)] flex flex-col sm:flex-row items-center gap-3">
                      <motion.a
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        href={`tel:${showroom.phone}`}
                        onClick={() => trackPhoneClick({ showroom: showroom.id, location: 'showrooms_page_card' })}
                        className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-700 text-white transition-colors shadow-sm"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Manager: {showroom.phone}</span>
                      </motion.a>

                      <motion.a
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        href={showroom.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackGetDirections({ showroom: showroom.id, location: 'showrooms_page_card' })}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold border border-[var(--tx-border)] hover:border-[#FF6B00]/60 text-[var(--tx-text-primary)] bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-surface)] transition-colors tx-surface-secondary"
                      >
                        <Navigation className="w-4 h-4 text-red-600" />
                        <span>Get GPS Directions</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Central Helpdesk Banner */}
      <section className="py-12 bg-[#111111] border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">
              Not sure which branch is closest to you?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--platinum-2)]">
              Call our central Bangalore helpline or email our customer care team.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              href={`tel:${BUSINESS_INFO.centralHotline}`}
              onClick={() => trackPhoneClick({ showroom: 'central_hotline', location: 'showrooms_page_helpdesk' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#161616] text-white border border-[rgba(255,255,255,0.12)] hover:border-[#FF6B00]/60 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>{BUSINESS_INFO.displayHotline}</span>
            </motion.a>
            <motion.a
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              href={`mailto:${BUSINESS_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-[rgba(255,255,255,0.08)] hover:border-[#FF6B00]/60 text-[var(--platinum-2)] hover:text-white hover:bg-[#161616] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FF6B00]" />
              <span>Email Us</span>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
