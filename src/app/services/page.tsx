'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { SERVICES, BUSINESS_INFO, ServiceItem } from '@/data/business';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { getImageMeta } from '@/data/imageManifest';
import { getServiceGallery } from '@/data/serviceGalleries';
import { ServiceImageCarousel } from '@/components/services/ServiceImageCarousel';
import { trackPhoneClick, trackServiceInterest } from '@/lib/analytics';
import {
  Wrench,
  CheckCircle2,
  Clock,
  Phone,
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronDown,
} from 'lucide-react';

function isHoverPointerDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

const SERVICE_IMAGE_ALTS: Record<string, string> = {
  'multi-brand-tyres': 'Multi-Brand Car & Two-Wheeler Tyre Fitting at TyresXpress Bengaluru',
  'alloy-wheels': 'Premium Alloy Wheels Collection & Fitment at TyresXpress Bengaluru',
  '3d-wheel-alignment': 'High-Precision 3D Computerized Wheel Alignment at TyresXpress Bengaluru',
  'computerized-wheel-balancing': 'Laser-Guided Dynamic Wheel Balancing at TyresXpress Bengaluru',
  'nitrogen-filling': '99.9% High-Purity Nitrogen Inflation & Mushroom Puncture Repair',
  'wheel-bend-repair': 'Hydraulic Alloy Wheel Bend & Rim Straightening at TyresXpress Bengaluru',
  'car-accessories': 'Automotive Accessories, Dash Cams, Wipers & Lighting Upgrades at TyresXpress',
  'professional-car-wash': 'Professional High-Pressure Foam Car Wash & Detailing at Horamavu Showroom',
};

function DetailedServiceBlock({
  service,
  index,
  shouldReduceMotion,
}: {
  service: ServiceItem;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const isReversed = index % 2 === 1;
  const [isOpen, setIsOpen] = useState(false);
  const gallery = getServiceGallery(service.id);
  const meta = getImageMeta(service.imageId);
  const imageSrc = meta?.readyForUpload ? meta.targetPath : null;
  const isContainedImage =
    service.imageId === 'service_4_1' ||
    service.imageId === 'service_5_1' ||
    service.imageId === 'IMG-005' ||
    service.imageId === 'IMG-006';

  const handleMouseEnter = () => {
    if (isHoverPointerDevice()) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isHoverPointerDevice()) {
      setIsOpen(false);
    }
  };

  const handleToggleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // On touch/coarse-pointer devices or keyboard activation (e.detail === 0), toggle open/closed.
    // On desktop mouse click, do not lock state so leaving the card always collapses it cleanly.
    if (!isHoverPointerDevice() || e.detail === 0) {
      setIsOpen((prev) => !prev);
    }
  };

  const innerHover = shouldReduceMotion
    ? undefined
    : { y: -2, transition: { type: 'spring' as const, stiffness: 420, damping: 28 } };

  return (
    <div
      id={service.slug}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden scroll-mt-32 p-6 sm:p-8 lg:p-9 rounded-3xl border bg-[var(--tx-card)] tx-card transition-[border-color,box-shadow] duration-200 ${
        isOpen
          ? 'border-[#FF6B00]/60 shadow-[0_12px_32px_-8px_rgba(255,107,0,0.16)] dark:shadow-[0_12px_36px_-8px_rgba(255,107,0,0.24)]'
          : 'border-[var(--tx-border)] hover:border-[#FF6B00]/50 shadow-sm'
      }`}
    >
      {/* Top Precision Laser Accent Sweep */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 origin-left transition-transform duration-200 ease-out ${
          isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />

      <div
        className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:min-h-[464px] items-stretch ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Visual Image Placeholder Column */}
        <div
          className={`lg:col-span-5 flex flex-col justify-center ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="relative">
            {gallery ? (
              <ServiceImageCarousel gallery={gallery} priority={index === 0} />
            ) : imageSrc ? (
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[var(--tx-border)] shadow-sm group/img ${
                  isContainedImage
                    ? 'bg-[#FFFFFF] flex items-center justify-center p-2 sm:p-2.5'
                    : 'bg-neutral-900'
                }`}
              >
                <Image
                  src={imageSrc}
                  alt={SERVICE_IMAGE_ALTS[service.slug] || `${service.title} at TyresXpress`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className={`transition-transform duration-500 ease-out group-hover/img:scale-105 ${
                    isContainedImage
                      ? 'object-contain p-2 sm:p-2.5 select-none'
                      : 'object-cover object-center'
                  }`}
                />
              </div>
            ) : (
              <ImagePlaceholder
                id={service.imageId}
                aspectRatio="4/3"
                customLabel={service.title}
                showDetails={true}
              />
            )}

            <div className="mt-3 flex items-center text-xs text-[var(--tx-text-muted)]">
              <span className="font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                {service.branches.join(', ')}
              </span>
            </div>
          </div>
        </div>

        {/* Service Description & Controlled Reveal Column */}
        <div
          className={`lg:col-span-7 flex flex-col justify-between ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Service #{index + 1}
              </span>
              {service.id === 'car-wash' && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30">
                  Horamavu Exclusive
                </span>
              )}
            </div>

            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-200 ${
                isOpen
                  ? 'text-red-600 dark:text-[#FF6B00]'
                  : 'text-[var(--tx-text-primary)]'
              }`}
            >
              {service.title}
            </h2>

            <p className="text-sm text-[var(--tx-text-secondary)] leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Interactive Specifications & Machinery Drawer (Fast CSS Grid 0fr -> 1fr transition) */}
            <div className="pt-1">
              <button
                type="button"
                onClick={handleToggleClick}
                aria-expanded={isOpen}
                className={`w-full flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
                  isOpen
                    ? 'bg-[#FF6B00]/10 text-red-600 dark:text-[#FF6B00] border-[#FF6B00]/40'
                    : 'bg-[var(--tx-surface-secondary)] text-[var(--tx-text-secondary)] border-[var(--tx-border)] hover:border-[#FF6B00]/50 hover:text-[var(--tx-text-primary)] tx-surface-secondary'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-red-600" />
                  <span>Service Specifications, Features &amp; Machinery</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ease-out ${
                    isOpen ? 'rotate-180 text-[#FF6B00]' : 'text-[var(--tx-text-muted)]'
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pt-2.5 space-y-2.5">
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[var(--tx-text-secondary)]">
                      {service.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 px-2.5 py-1.5 rounded-lg bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] tx-surface-secondary leading-snug"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Equipment & Recommended Frequency Inner Card */}
                    <div className="p-2.5 rounded-xl border border-[var(--tx-border)] bg-[var(--tx-surface-secondary)] tx-surface-secondary space-y-1 text-xs">
                      <div className="flex items-start gap-2 text-[var(--tx-text-secondary)]">
                        <Wrench className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold text-[var(--tx-text-primary)]">
                            Machinery Utilized:{' '}
                          </strong>
                          {service.equipment}
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-[var(--tx-text-secondary)]">
                        <Clock className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold text-[var(--tx-text-primary)]">
                            Recommended Frequency:{' '}
                          </strong>
                          {service.intervalRecommendation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar pinned cleanly at the bottom of the right column */}
          <div className="pt-4 mt-2 border-t border-[var(--tx-border)] flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              href={`tel:${BUSINESS_INFO.centralHotline}`}
              onClick={() => {
                trackPhoneClick({ showroom: 'central_hotline', location: `services_page_${service.id}` });
                trackServiceInterest({ service: service.id, action: 'call_to_book' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-red-600 hover:bg-red-700 text-white transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Book Service: {BUSINESS_INFO.displayHotline}</span>
            </motion.a>

            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/contact"
                onClick={() => trackServiceInterest({ service: service.id, action: 'enquire_online' })}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-[var(--tx-border)] hover:border-[#FF6B00]/60 text-[var(--tx-text-primary)] bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-surface)] transition-colors tx-surface-secondary"
              >
                <span>Enquire Online</span>
                <ArrowRight className="w-4 h-4 text-red-600" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeHash, setActiveHash] = useState<string>('');

  useEffect(() => {
    const updateHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        setActiveHash(window.location.hash.replace('#', ''));
      }
    };
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const innerHover = shouldReduceMotion
    ? undefined
    : { y: -2, transition: { type: 'spring' as const, stiffness: 420, damping: 28 } };

  return (
    <div className="w-full">
      {/* Services Header Banner */}
      <section className="py-14 sm:py-18 bg-[#111111] text-white relative overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              whileHover={innerHover}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30 hover:border-[#FF6B00]/60 hover:text-[#FF6B00] transition-colors cursor-default"
            >
              Precision Automotive Care
            </motion.span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-4">
              Comprehensive Wheel &amp; Tyre Engineering.
            </h1>
            <p className="text-sm sm:text-base text-[var(--platinum-2)] mt-4 leading-relaxed">
              Equipped with calibrated 3D digital imaging, dynamic balancing rigs, and touchless mounting tools across all three Bengaluru showrooms. Serving cars, SUVs, luxury performance vehicles, and two-wheelers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Quick Navigation Anchor Bar */}
      <div className="sticky top-[52px] sm:top-[60px] z-30 w-full bg-[var(--tx-bg)]/95 backdrop-blur-md border-b border-[var(--tx-border)] py-3 px-4 sm:px-6 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 whitespace-nowrap text-xs">
          <span className="font-bold text-[var(--tx-text-muted)] uppercase tracking-wider mr-2 hidden sm:inline">
            Jump to:
          </span>
          {SERVICES.map((s) => (
            <motion.a
              key={s.id}
              whileHover={innerHover}
              href={`#${s.slug}`}
              onClick={() => setActiveHash(s.slug)}
              className={`px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                activeHash === s.slug
                  ? 'bg-red-600 text-white border-red-600 shadow-xs'
                  : 'bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] text-[var(--tx-text-secondary)] hover:text-red-600 dark:hover:text-[#FF6B00] border-[var(--tx-border)] hover:border-[#FF6B00]/60 tx-surface-secondary'
              }`}
            >
              {s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Detailed Services Breakdown */}
      <section className="py-14 sm:py-20 bg-[var(--tx-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {SERVICES.map((service, index) => (
            <DetailedServiceBlock
              key={service.id}
              service={service}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </section>

      {/* Showroom Availability Callout */}
      <section className="py-14 bg-[#111111] text-white border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Sparkles className="w-8 h-8 text-[#FF6B00] mx-auto mb-3" />
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Drive in to Any TyresXpress Showroom Today
          </h2>
          <p className="text-sm text-[var(--platinum-2)] mt-2">
            No long waiting lines. All 3 branches feature dedicated alignment bays, nitrogen stations, and multi-brand tyre inventory. Open Monday to Sunday, 9:00 AM – 8:00 PM.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/showrooms"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-white hover:bg-neutral-100 transition-colors"
              >
                <MapPin className="w-4 h-4 text-red-600" />
                <span>View Branch Addresses &amp; Directions</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
