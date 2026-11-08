'use client';

import React from 'react';
import { Showroom } from '@/data/business';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { Phone, MapPin, Clock, Navigation, CheckCircle2, Sparkles } from 'lucide-react';

interface ShowroomCardProps {
  showroom: Showroom;
  priority?: boolean;
}

export function ShowroomCard({ showroom }: ShowroomCardProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-200 dark:border-[#303036] bg-white dark:bg-[#151519] shadow-sm hover:shadow-md transition-all duration-200 group">
      {/* Showroom Image Placeholder */}
      <div className="relative">
        <ImagePlaceholder
          id={showroom.imageId}
          aspectRatio="16/9"
          customLabel={showroom.name}
          showDetails={false}
        />

        {/* Feature Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {showroom.isFlagship && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-600 text-white shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Flagship
            </span>
          )}
          {showroom.hasCarWash && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-sm">
              Car Wash Bay
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-[#F28C28] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{showroom.locality}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mt-1">
            {showroom.name}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
            {showroom.address}
          </p>

          {showroom.landmark && (
            <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mt-1 italic">
              Landmark: {showroom.landmark}
            </p>
          )}

          {/* Operating Hours */}
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 mt-3 pt-3 border-t border-neutral-100 dark:border-[#202024]">
            <Clock className="w-4 h-4 text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
            <span>
              <strong className="font-semibold text-neutral-900 dark:text-white">{showroom.hours}</strong> • {showroom.openDays}
            </span>
          </div>

          {/* Services Available at this Showroom */}
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Available at this branch:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {showroom.services.map((svc) => (
                <span
                  key={svc}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-[#202024] text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-[#303036]/60"
                >
                  <CheckCircle2 className="w-3 h-3 text-red-600 dark:text-[#F28C28]" />
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons: Phone & Directions */}
        <div className="pt-4 border-t border-neutral-100 dark:border-[#202024] flex items-center gap-2">
          <a
            href={`tel:${showroom.phone}`}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] text-white dark:text-neutral-950 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call {showroom.phone}</span>
          </a>

          <a
            href={showroom.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border border-neutral-300 dark:border-[#303036] hover:bg-neutral-100 dark:hover:bg-[#202024] text-neutral-800 dark:text-neutral-200 transition-colors"
            title="Open in Google Maps"
          >
            <Navigation className="w-4 h-4 text-red-600 dark:text-[#F28C28]" />
            <span className="hidden sm:inline">Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
}
