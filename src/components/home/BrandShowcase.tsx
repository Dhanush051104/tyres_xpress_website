'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BRANDS } from '@/data/business';
import { ShieldCheck, Check } from 'lucide-react';

const CATEGORIES = [
  'All Brands',
  'Passenger Cars',
  'SUVs & 4x4',
  'Two-Wheelers',
  'Commercial & Light Truck',
  'Performance & EV',
] as const;

export function BrandShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Brands');
  const shouldReduceMotion = useReducedMotion();

  const filteredBrands =
    selectedCategory === 'All Brands'
      ? BRANDS
      : BRANDS.filter((b) =>
          b.category.includes(selectedCategory as any)
        );

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            type="button"
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-red-600 text-white border-red-600 shadow-sm'
                : 'bg-[var(--tx-card)] text-[var(--tx-text-secondary)] border-[var(--tx-border)] hover:border-[#FF6B00]/50 hover:text-[var(--tx-text-primary)] hover:bg-[var(--tx-surface-secondary)] tx-surface-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of 16 Brand Cards with Cohesive Accent Sweep, Glow & Wordmark Motion */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
        {filteredBrands.map((brand) => {
          const isYokohama = brand.name === 'Yokohama';
          return (
            <motion.div
              key={brand.name}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.015,
                      transition: { type: 'spring', stiffness: 380, damping: 24 },
                    }
              }
              className="group relative overflow-hidden p-4 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] tx-card flex flex-col justify-between shadow-xs hover:shadow-[0_10px_28px_-6px_rgba(255,107,0,0.22)] dark:hover:shadow-[0_12px_32px_-6px_rgba(255,107,0,0.28)] transition-[border-color,box-shadow] duration-300 cursor-default"
            >
              {/* 1. Top Precision Laser Accent Sweep */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />

              {/* 2. Controlled Red / Mandarin-Orange Diagonal Surface Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#FF6B00]/[0.08] via-red-600/[0.03] to-transparent dark:from-[#FF6B00]/[0.14] dark:via-red-600/[0.06] dark:to-transparent"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-1 text-[10px] text-[var(--tx-text-muted)] mb-2">
                  <span className="font-mono uppercase tracking-wider group-hover:text-[var(--tx-text-secondary)] transition-colors">
                    {brand.origin}
                  </span>
                  {isYokohama ? (
                    <span
                      title="Yokohama Club Network (YCN) Pro Dealer"
                      className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider whitespace-nowrap bg-red-600/10 text-red-600 dark:bg-red-500/15 dark:text-red-400 border border-red-500/25 group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00] transition-colors leading-none"
                    >
                      YCN Pro
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--tx-border-strong)] group-hover:bg-[#FF6B00] group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(255,107,0,0.85)] transition-all duration-300" />
                  )}
                </div>

                {/* 3. Brand Wordmark with Sliding Accent Bar */}
                <div className="relative flex items-center">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 w-1 h-4 rounded-full bg-gradient-to-b from-red-600 to-[#FF6B00] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <h4 className="text-base sm:text-lg font-black tracking-tight text-[var(--tx-text-primary)] uppercase group-hover:translate-x-2.5 group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {brand.name}
                  </h4>
                </div>

                <p className="text-[11px] text-[var(--tx-text-muted)] italic line-clamp-1 mt-0.5">
                  &ldquo;{brand.tagline}&rdquo;
                </p>
              </div>

              <div className="relative z-10 mt-3 pt-2 border-t border-[var(--tx-border)] text-[10px] text-[var(--tx-text-muted)] group-hover:text-[var(--tx-text-secondary)] transition-colors line-clamp-2 leading-snug">
                {/* Animated divider accent sweep */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#FF6B00] via-red-600 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                {brand.popularFor}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Assurance Footer */}
      <div className="p-4 rounded-xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] tx-surface-secondary flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--tx-text-secondary)]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
          <span>
            Every brand purchased at TyresXpress is 100% genuine with authentic direct manufacturer warranty.
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-semibold text-[var(--tx-text-secondary)]">
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-red-600" /> Fresh Production Stock
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-[#FF6B00]" /> Zero Scratches Mounting
          </span>
        </div>
      </div>
    </div>
  );
}
