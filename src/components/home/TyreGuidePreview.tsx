'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
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
  const shouldReduceMotion = useReducedMotion();

  const innerHover = shouldReduceMotion
    ? undefined
    : { y: -2, transition: { type: 'spring' as const, stiffness: 420, damping: 28 } };

  return (
    <div className="group/guide relative overflow-hidden rounded-3xl border border-[var(--tx-border)] hover:border-[#FF6B00]/55 bg-[var(--tx-card)] p-6 sm:p-10 shadow-sm hover:shadow-[0_14px_34px_-8px_rgba(255,107,0,0.15)] transition-[border-color,box-shadow] duration-300 tx-card">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover/guide:scale-x-100 origin-left transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Future Catalogue Roadmap & Purpose */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            whileHover={innerHover}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-red-600/10 dark:bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/20 hover:border-[#FF6B00]/50 transition-colors cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" /> Phase 1 Preview • Interactive Knowledge Base
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--tx-text-primary)]">
            Future Digital Catalogue &amp; Tyre Sizing Guide
          </h2>

          <p className="text-sm sm:text-base text-[var(--tx-text-secondary)] leading-relaxed">
            In our upcoming Phase 2 release, TyresXpress will launch an interactive multi-brand digital tyre catalogue. It will feature genuine sidewall &amp; tread photography, vehicle size finder, compound comparisons, and direct ERP inventory availability.
          </p>

          {/* Planned Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[var(--tx-text-secondary)]">
            <motion.div
              whileHover={innerHover}
              className="group/feat flex items-center gap-2 p-2.5 rounded-xl bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/50 transition-colors cursor-default tx-surface-secondary"
            >
              <CheckCircle2 className="w-4 h-4 text-red-600 group-hover/feat:text-[#FF6B00] transition-colors flex-shrink-0" />
              <span>Real sidewall &amp; tread macro photography</span>
            </motion.div>
            <motion.div
              whileHover={innerHover}
              className="group/feat flex items-center gap-2 p-2.5 rounded-xl bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/50 transition-colors cursor-default tx-surface-secondary"
            >
              <CheckCircle2 className="w-4 h-4 text-red-600 group-hover/feat:text-[#FF6B00] transition-colors flex-shrink-0" />
              <span>Make &amp; model tyre size matching engine</span>
            </motion.div>
            <motion.div
              whileHover={innerHover}
              className="group/feat flex items-center gap-2 p-2.5 rounded-xl bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/50 transition-colors cursor-default tx-surface-secondary"
            >
              <CheckCircle2 className="w-4 h-4 text-red-600 group-hover/feat:text-[#FF6B00] transition-colors flex-shrink-0" />
              <span>Side-by-side compound &amp; wet-grip comparisons</span>
            </motion.div>
            <motion.div
              whileHover={innerHover}
              className="group/feat flex items-center gap-2 p-2.5 rounded-xl bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/50 transition-colors cursor-default tx-surface-secondary"
            >
              <CheckCircle2 className="w-4 h-4 text-red-600 group-hover/feat:text-[#FF6B00] transition-colors flex-shrink-0" />
              <span>Direct ERP stock query across 3 showrooms</span>
            </motion.div>
          </div>

          {/* Interactive Tyre Marking Decoder */}
          <div className="pt-4 border-t border-[var(--tx-border)]">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--tx-text-muted)] mb-3 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
              Interactive Tyre Marking Decoder — Tap any number below:
            </p>

            {/* Interactive Marking Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-3 rounded-2xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] tx-surface-secondary">
              {MARKINGS.map((m, idx) => (
                <motion.button
                  key={m.part}
                  whileHover={shouldReduceMotion ? undefined : { y: -2.5, scale: 1.04 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                  onClick={() => setActiveMarking(idx)}
                  type="button"
                  className={`px-3.5 py-2 rounded-xl font-mono text-base sm:text-lg font-black transition-all cursor-pointer ${
                    activeMarking === idx
                      ? 'bg-red-600 text-white border border-[#FF6B00] shadow-[0_6px_16px_-3px_rgba(220,38,38,0.45)]'
                      : 'bg-[var(--tx-card)] text-[var(--tx-text-primary)] hover:text-red-600 dark:hover:text-[#FF6B00] hover:bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] hover:border-[#FF6B00]/60 tx-surface-primary'
                  }`}
                  aria-label={`Decode tyre marking ${m.part}`}
                  aria-pressed={activeMarking === idx}
                >
                  {m.part}
                </motion.button>
              ))}
            </div>

            {/* Active Explanation Box */}
            <motion.div
              key={MARKINGS[activeMarking].part}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              whileHover={innerHover}
              className="group/exp relative overflow-hidden mt-3 p-4 rounded-xl bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/60 shadow-2xs hover:shadow-[0_8px_20px_-4px_rgba(255,107,0,0.16)] transition-[border-color,box-shadow] duration-200 tx-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#FF6B00]">
                  {MARKINGS[activeMarking].title}
                </span>
                <span className="text-xs font-mono font-bold text-[var(--tx-text-primary)] px-2.5 py-0.5 rounded-md bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)]">
                  {MARKINGS[activeMarking].value}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--tx-text-secondary)] mt-1.5 leading-relaxed">
                {MARKINGS[activeMarking].meaning}
              </p>
            </motion.div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}>
              <Link
                href="/catalogue"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Complete Tyre Maintenance Guide</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Numbered Placeholder catalogue_1_1 */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full">
            <ImagePlaceholder
              id="catalogue_1_1"
              aspectRatio="16/9"
              customLabel="Tyre Guide & Catalogue Interface Preview"
              showDetails={true}
            />
          </div>

          <div className="mt-4 p-3 rounded-xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] text-[11px] text-[var(--tx-text-muted)] flex items-center gap-2 w-full tx-surface-secondary">
            <Layers className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
            <span>
              Image placeholder reserved for the official digital catalogue UI mockup and tyre tread viewer.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
