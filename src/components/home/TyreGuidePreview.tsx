'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { Layers, HelpCircle, ArrowRight, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

const MARKINGS = [
  {
    part: '205',
    title: 'Tyre Section Width',
    value: '205 mm',
    meaning: 'The overall nominal width of the tyre measured from sidewall to sidewall in millimeters.',
  },
  {
    part: '55',
    title: 'Aspect Ratio (Profile)',
    value: '55%',
    meaning: 'The sidewall height is 55% of the total tyre section width. Lower profile offers sharper handling; taller profile offers plush cushioning over bumps.',
  },
  {
    part: 'R',
    title: 'Radial Construction',
    value: 'Radial Ply',
    meaning: 'The tyre internal cord plies run radially at 90 degrees to the direction of travel, offering superior road adherence and fuel economy.',
  },
  {
    part: '16',
    title: 'Wheel Rim Diameter',
    value: '16 Inches',
    meaning: 'The exact diameter of the wheel rim in inches on which this tyre must be mounted.',
  },
  {
    part: '91',
    title: 'Load Index',
    value: '615 kg / tyre',
    meaning: 'The maximum load rating each individual tyre can safely carry at full recommended inflation pressure.',
  },
  {
    part: 'V',
    title: 'Speed Rating Symbol',
    value: 'Up to 240 km/h',
    meaning: 'The maximum certified sustained speed capability of this tyre compound and carcass construction under full load.',
  },
];

export function TyreGuidePreview() {
  const [activeMarking, setActiveMarking] = useState<number>(0);

  return (
    <div className="rounded-3xl border border-neutral-200 dark:border-[#303036] bg-gradient-to-b from-white to-neutral-50 dark:from-[#151519] dark:to-[#0B0B0D] p-6 sm:p-10 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Future Catalogue Roadmap & Purpose */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-red-100 dark:bg-[#F28C28]/15 text-red-700 dark:text-[#F28C28] border border-red-200 dark:border-[#F28C28]/30">
            <Sparkles className="w-3.5 h-3.5" /> Phase 1 Preview • Interactive Knowledge Base
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Future Digital Catalogue & Tyre Sizing Guide
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            In our upcoming Phase 2 release, TyresXpress will launch an interactive multi-brand digital tyre catalogue. It will feature genuine sidewall &amp; tread photography, vehicle size finder, compound comparisons, and direct ERP inventory availability.
          </p>

          {/* Planned Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-[#F28C28] flex-shrink-0" />
              <span>Real sidewall &amp; tread macro photography</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-[#F28C28] flex-shrink-0" />
              <span>Make &amp; model tyre size matching engine</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-[#F28C28] flex-shrink-0" />
              <span>Side-by-side compound &amp; wet-grip comparisons</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-[#F28C28] flex-shrink-0" />
              <span>Direct ERP stock query across 3 showrooms</span>
            </div>
          </div>

          {/* Interactive Tyre Marking Decoder */}
          <div className="pt-4 border-t border-neutral-200 dark:border-[#202024]">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-red-600 dark:text-[#F28C28]" />
              Interactive Tyre Marking Decoder — Tap any number below:
            </p>

            {/* Interactive Marking Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-3 rounded-2xl bg-neutral-100 dark:bg-[#202024] border border-neutral-200 dark:border-[#303036]">
              {MARKINGS.map((m, idx) => (
                <button
                  key={m.part}
                  onClick={() => setActiveMarking(idx)}
                  className={`px-3 py-2 rounded-xl font-mono text-base sm:text-lg font-black transition-all ${
                    activeMarking === idx
                      ? 'bg-red-600 dark:bg-[#F28C28] text-white dark:text-neutral-950 scale-105 shadow-md'
                      : 'bg-white dark:bg-[#151519] text-neutral-800 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-[#303036]'
                  }`}
                  aria-label={`Decode tyre marking ${m.part}`}
                >
                  {m.part}
                </button>
              ))}
            </div>

            {/* Active Explanation Box */}
            <div className="mt-3 p-4 rounded-xl bg-white dark:bg-[#151519] border border-neutral-200 dark:border-[#303036]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                  {MARKINGS[activeMarking].title}
                </span>
                <span className="text-xs font-mono font-bold text-neutral-900 dark:text-white px-2 py-0.5 rounded bg-neutral-100 dark:bg-[#202024]">
                  {MARKINGS[activeMarking].value}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
                {MARKINGS[activeMarking].meaning}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] dark:text-neutral-950 transition-colors shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Complete Tyre Maintenance Guide</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Numbered Placeholder IMG-012 */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full">
            <ImagePlaceholder
              id="IMG-012"
              aspectRatio="16/9"
              customLabel="Tyre Guide & Catalogue Interface Preview"
              showDetails={true}
            />
          </div>

          <div className="mt-4 p-3 rounded-xl bg-neutral-100 dark:bg-[#151519] border border-neutral-200 dark:border-[#303036] text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center gap-2 w-full">
            <Layers className="w-4 h-4 text-neutral-400 flex-shrink-0" />
            <span>
              Image placeholder reserved for the official digital catalogue UI mockup and tyre tread viewer.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
