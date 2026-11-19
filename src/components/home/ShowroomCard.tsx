'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { Showroom } from '@/data/business';
import { getImageMeta } from '@/data/imageManifest';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { trackPhoneClick, trackGetDirections } from '@/lib/analytics';
import { Phone, MapPin, Clock, Navigation, CheckCircle2, Sparkles } from 'lucide-react';

interface ShowroomCardProps {
  showroom: Showroom;
  priority?: boolean;
}

export function ShowroomCard({ showroom, priority }: ShowroomCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const meta = getImageMeta(showroom.imageId);
  const imageSrc = meta?.readyForUpload ? meta.targetPath : null;

  return (
    <motion.div
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -3,
              transition: { type: 'spring', stiffness: 350, damping: 25 },
            }
      }
      className="flex flex-col rounded-2xl overflow-hidden tx-card border border-[var(--tx-border)] bg-[var(--tx-card)] hover:border-red-500/50 hover:shadow-md group"
    >
      {/* Showroom Image Header */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${showroom.name} — Multi-Brand Tyre Showroom & Workshop Facility in Bengaluru`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <ImagePlaceholder
            id={showroom.imageId}
            aspectRatio="16/9"
            customLabel={showroom.name}
            showDetails={false}
          />
        )}

        {/* Feature Badges: Mandarin Orange used for Flagship premium detail */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 items-end pointer-events-none">
          {showroom.isFlagship && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FF6B00] text-white shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Flagship
            </span>
          )}
          {showroom.hasCarWash && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-neutral-900/90 dark:bg-neutral-800/90 text-white shadow-sm border border-neutral-700/60">
              Car Wash Bay
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-red-600 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{showroom.locality}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[var(--tx-text-primary)] mt-1">
            {showroom.name}
          </h3>

          <p className="text-xs sm:text-sm text-[var(--tx-text-secondary)] mt-2 leading-relaxed">
            {showroom.address}
          </p>

          {showroom.landmark && (
            <p className="text-[11px] font-medium text-[var(--tx-text-muted)] mt-1 italic">
              Landmark: {showroom.landmark}
            </p>
          )}

          {/* Operating Hours */}
          <div className="flex items-center gap-2 text-xs text-[var(--tx-text-secondary)] mt-3 pt-3 border-t border-[var(--tx-border)]">
            <Clock className="w-4 h-4 text-neutral-400 flex-shrink-0" />
            <span>
              <strong className="font-semibold text-[var(--tx-text-primary)]">{showroom.hours}</strong> • {showroom.openDays}
            </span>
          </div>

          {/* Services Available at this Showroom */}
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--tx-text-muted)] mb-2">
              Available at this branch:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {showroom.services.map((svc) => (
                <span
                  key={svc}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--tx-surface-secondary)] text-[var(--tx-text-secondary)] border border-[var(--tx-border)]"
                >
                  <CheckCircle2 className="w-3 h-3 text-red-600" />
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons: Phone & Directions with Motion Feedback */}
        <div className="pt-4 border-t border-[var(--tx-border)] flex items-center gap-2">
          <motion.a
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            href={`tel:${showroom.phone}`}
            onClick={() => trackPhoneClick({ showroom: showroom.id, location: 'homepage_showroom_card' })}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold bg-red-600 hover:bg-red-700 text-white transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call {showroom.phone}</span>
          </motion.a>

          <motion.a
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            href={showroom.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGetDirections({ showroom: showroom.id, location: 'homepage_showroom_card' })}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border border-[var(--tx-border)] hover:bg-[var(--tx-surface-secondary)] text-[var(--tx-text-primary)] transition-colors"
            title="Open in Google Maps"
          >
            <Navigation className="w-4 h-4 text-red-600" />
            <span className="hidden sm:inline">Directions</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
