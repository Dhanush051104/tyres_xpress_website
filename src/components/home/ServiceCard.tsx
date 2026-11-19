'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ServiceItem } from '@/data/business';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { trackServiceInterest } from '@/lib/analytics';
import { ArrowRight, CheckCircle, Wrench, ChevronDown } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const isExpanded = isHovered || isPinned;

  const handleToggle = () => {
    setIsPinned((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -3,
              transition: { type: 'spring', stiffness: 350, damping: 25 },
            }
      }
      className={`flex flex-col rounded-2xl overflow-hidden tx-card border bg-[var(--tx-card)] transition-[border-color,box-shadow] duration-250 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] group ${
        isExpanded
          ? 'border-[#FF6B00]/60 shadow-[0_12px_30px_-6px_rgba(255,107,0,0.18)] dark:shadow-[0_12px_34px_-6px_rgba(255,107,0,0.24)]'
          : 'border-[var(--tx-border)] hover:border-[#FF6B00]/50 shadow-xs'
      }`}
    >
      {/* Service Image */}
      <div className="relative overflow-hidden">
        <ImagePlaceholder
          id={service.imageId}
          aspectRatio="4/3"
          customLabel={service.title}
          showDetails={false}
        />
        {/* Subtle bottom accent line that ignites on expansion */}
        <div
          aria-hidden="true"
          className={`h-0.5 w-full bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 transition-opacity duration-300 ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Card Body: Compact Heading by Default, Smoothly Expands on Hover / Tap */}
      <div className="p-4 sm:p-5 flex flex-col">
        <div className="flex items-center justify-between gap-2 min-h-[2.75rem] sm:min-h-[3.25rem]">
          <h3
            className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
              isExpanded
                ? 'text-red-600 dark:text-[#FF6B00]'
                : 'text-[var(--tx-text-primary)] group-hover:text-red-600'
            }`}
          >
            {service.title}
          </h3>
          <ChevronDown
            className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isExpanded
                ? 'rotate-180 text-[#FF6B00]'
                : 'text-[var(--tx-text-muted)] group-hover:text-red-600'
            }`}
          />
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="details"
              initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.2, ease: 'easeOut' },
              }}
              className="overflow-hidden"
            >
              <div className="pt-3.5 space-y-3.5">
                {/* Branch Availability Tag */}
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-600/10 text-red-600 dark:bg-[#FF6B00]/15 dark:text-[#FF6B00] border border-red-500/20 dark:border-[#FF6B00]/30">
                    {service.branches.length === 3
                      ? 'Available at All 3 Branches'
                      : `${service.branches.join(', ')} Exclusive`}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--tx-text-secondary)] leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Benefits */}
                <div className="space-y-1.5">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[var(--tx-text-secondary)]"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Footer info: Recommended interval & Details Link */}
                <div className="pt-3.5 border-t border-[var(--tx-border)] flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium text-[var(--tx-text-muted)] flex items-center gap-1.5 line-clamp-1">
                    <Wrench className="w-3 h-3 text-red-600 flex-shrink-0" />
                    <span>{service.intervalRecommendation.split('or')[0]}</span>
                  </span>

                  <Link
                    href={`/services#${service.slug}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      trackServiceInterest({ service: service.id, action: 'view_details' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-[#FF6B00] transition-colors flex-shrink-0"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
