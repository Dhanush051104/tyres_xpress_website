'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { CinematicIntro } from '@/components/home/CinematicIntro';
import { Hero } from '@/components/home/Hero';
import { ShowroomCard } from '@/components/home/ShowroomCard';
import { SHOWROOMS } from '@/data/business';
import { MapPin, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const sectionReveal = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: shouldReduceMotion ? 0.1 : 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  };

  return (
    <div className="w-full">
      {/* 0. Cinematic Full-Screen Intro (Preserved exactly as is, IMG-017) */}
      <CinematicIntro />

      {/* 1. Hero Section & Statistics Section (Includes IMG-001) */}
      <Hero />

      {/* 2. Three Showroom Locations Cards (Includes IMG-009, IMG-010, IMG-011) */}
      <motion.section
        {...sectionReveal}
        className="py-14 sm:py-20 bg-[var(--tx-surface-secondary)] border-t border-b border-[var(--tx-border)] tx-section-alt"
        id="showrooms"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
                <MapPin className="w-4 h-4" />
                Bengaluru Network
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--tx-text-primary)] mt-1">
                Visit Our 3 Bengaluru Showrooms
              </h2>
              <p className="text-sm sm:text-base text-[var(--tx-text-secondary)] mt-2 max-w-2xl">
                Open 7 days a week from 9:00 AM to 8:00 PM with drive-in service bays, experienced tyre fitters, and air-conditioned lounges.
              </p>
            </div>

            <Link
              href="/showrooms"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700 group flex-shrink-0"
            >
              <span>Showroom Full Details &amp; Directions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SHOWROOMS.map((showroom) => (
              <ShowroomCard key={showroom.id} showroom={showroom} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
