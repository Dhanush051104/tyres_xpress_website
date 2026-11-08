'use client';

import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/data/business';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { ArrowRight, CheckCircle, Wrench } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-200 dark:border-[#303036] bg-white dark:bg-[#151519] shadow-sm hover:shadow-md transition-all duration-200 group">
      {/* Service Image Placeholder */}
      <div className="relative">
        <ImagePlaceholder
          id={service.imageId}
          aspectRatio="4/3"
          customLabel={service.title}
          showDetails={false}
        />
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-neutral-900/85 backdrop-blur-sm text-white border border-neutral-700/60">
            {service.branches.length === 3
              ? 'Available at All 3 Branches'
              : `${service.branches.join(', ')} Exclusive`}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-[#F28C28] transition-colors">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Key Benefits */}
          <div className="mt-3.5 space-y-1.5">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info: Recommended interval & CTA */}
        <div className="pt-4 border-t border-neutral-100 dark:border-[#202024] flex items-center justify-between">
          <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 line-clamp-1">
            <Wrench className="w-3 h-3 text-red-500 dark:text-[#F28C28] flex-shrink-0" />
            <span>{service.intervalRecommendation.split('or')[0]}</span>
          </span>

          <Link
            href={`/services#${service.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 dark:text-[#F28C28] dark:hover:text-[#FF9F43] group-hover:translate-x-0.5 transition-all"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
