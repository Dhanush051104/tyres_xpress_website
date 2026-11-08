'use client';

import React, { useState } from 'react';
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
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 border ${
              selectedCategory === cat
                ? 'bg-neutral-900 text-white dark:bg-[#F28C28] dark:text-neutral-950 border-neutral-900 dark:border-[#F28C28] shadow-sm'
                : 'bg-white dark:bg-[#151519] text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-[#303036] hover:bg-neutral-100 dark:hover:bg-[#202024]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Clean Text-Based Brand Treatments */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
        {filteredBrands.map((brand) => (
          <div
            key={brand.name}
            className="group relative p-4 rounded-xl border border-neutral-200 dark:border-[#303036] bg-white dark:bg-[#151519] hover:border-red-500 dark:hover:border-[#F28C28] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] text-neutral-400 dark:text-neutral-500 mb-2">
                <span className="font-mono uppercase tracking-wider">{brand.origin}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-red-500 dark:group-hover:bg-[#F28C28] transition-colors" />
              </div>

              {/* Distinctive Automotive Typography for Brand Wordmark */}
              <h4 className="text-base sm:text-lg font-black tracking-tight text-neutral-900 dark:text-white uppercase group-hover:text-red-600 dark:group-hover:text-[#F28C28] transition-colors">
                {brand.name}
              </h4>

              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 italic line-clamp-1 mt-0.5">
                &ldquo;{brand.tagline}&rdquo;
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-neutral-100 dark:border-[#202024] text-[10px] text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-snug">
              {brand.popularFor}
            </div>
          </div>
        ))}
      </div>

      {/* Assurance Footer */}
      <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#151519] border border-neutral-200 dark:border-[#303036] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span>
            Every brand purchased at TyresXpress is 100% genuine with authentic direct manufacturer warranty.
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-red-600 dark:text-[#F28C28]" /> Fresh Production Stock
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-red-600 dark:text-[#F28C28]" /> Zero Scratches Mounting
          </span>
        </div>
      </div>
    </div>
  );
}
