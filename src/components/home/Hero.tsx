'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, Wrench, Shield, Award, Phone, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, COMPANY_STATS } from '@/data/business';
import { trackPhoneClick } from '@/lib/analytics';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants with graceful fallback for reduced motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : {
            staggerChildren: 0.08,
            delayChildren: 0.05,
          },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-2 pb-6 sm:pt-3 sm:pb-8 lg:pt-3 lg:pb-8 xl:pt-4 xl:pb-10">
      {/* Background radial automotive glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 dark:bg-red-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 xl:gap-10 items-center"
        >
          {/* Hero Left Column: Headings & CTAs */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3 lg:space-y-3 xl:space-y-3.5 text-center lg:text-left">
            {/* Automotive Heritage Tag */}
            <motion.div variants={itemFadeUp}>
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -2.5, transition: { type: 'spring', stiffness: 400, damping: 26 } }
                }
                className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] hover:border-[#FF6B00]/60 text-[var(--tx-text-secondary)] shadow-sm hover:shadow-[0_6px_20px_-4px_rgba(255,107,0,0.18)] dark:hover:shadow-[0_6px_24px_-4px_rgba(255,107,0,0.24)] transition-[border-color,box-shadow] duration-200 cursor-default tx-surface-secondary group"
              >
                <span className="w-2 h-2 rounded-full bg-red-600 group-hover:bg-[#FF6B00] transition-colors shadow-[0_0_6px_rgba(220,38,38,0.7)] group-hover:shadow-[0_0_8px_rgba(255,107,0,0.85)]" />
                Official Customer Portal • Est. {BUSINESS_INFO.establishedYear}
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemFadeUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[42px] font-black tracking-tight text-[var(--tx-text-primary)] leading-[1.14]"
            >
              Bengaluru&apos;s Multi-Brand{' '}
              <span className="text-red-600 italic">
                Tyre &amp; Precision
              </span>{' '}
              Automotive Hub.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemFadeUp}
              className="text-xs sm:text-sm text-[var(--tx-text-secondary)] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Operating three dedicated automotive service showrooms across Bengaluru —{' '}
              <strong className="text-[var(--tx-text-primary)] font-semibold">
                Siddapura (Whitefield)
              </strong>
              ,{' '}
              <strong className="text-[var(--tx-text-primary)] font-semibold">
                Horamavu
              </strong>
              , and{' '}
              <strong className="text-[var(--tx-text-primary)] font-semibold">
                Balagere (Panathur)
              </strong>
              . Genuine tyres from 16+ world-class manufacturers paired with laser-calibrated 3D wheel alignment, dynamic balancing, and certified alloy rim repair.
            </motion.p>

            {/* Primary Calls to Action - fully visible on initial viewport load */}
            <motion.div
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-0.5"
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/showrooms"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Find a Showroom</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold bg-[var(--tx-text-primary)] text-[var(--tx-bg)] hover:opacity-90 border border-[var(--tx-text-primary)] shadow-sm transition-opacity"
                >
                  <Wrench className="w-4 h-4 text-red-500" />
                  <span>Explore Services</span>
                </Link>
              </motion.div>

              <a
                href={`tel:${BUSINESS_INFO.centralHotline}`}
                onClick={() => trackPhoneClick({ showroom: 'central_hotline', location: 'hero_mobile_helpline' })}
                className="sm:hidden w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold border border-[var(--tx-border)] text-[var(--tx-text-secondary)]"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>Call Helpline: {BUSINESS_INFO.displayHotline}</span>
              </a>
            </motion.div>

            {/* Highlights List */}
            <motion.div
              variants={itemFadeUp}
              className="pt-1.5 sm:pt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 text-left"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -2.5, transition: { type: 'spring', stiffness: 400, damping: 26 } }
                }
                className="p-2 sm:p-2.5 rounded-xl border border-[var(--tx-border)] bg-[var(--tx-card)] tx-card hover:border-[#FF6B00]/60 shadow-xs hover:shadow-[0_6px_20px_-4px_rgba(255,107,0,0.16)] dark:hover:shadow-[0_6px_24px_-4px_rgba(255,107,0,0.22)] transition-[border-color,box-shadow] duration-200 cursor-default group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--tx-text-primary)]">
                  <Shield className="w-3.5 h-3.5 text-red-600 group-hover:text-[#FF6B00] transition-colors" />
                  100% Genuine
                </div>
                <p className="text-[11px] text-[var(--tx-text-muted)] mt-0.5">
                  Direct brand warranty
                </p>
              </motion.div>

              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -2.5, transition: { type: 'spring', stiffness: 400, damping: 26 } }
                }
                className="p-2 sm:p-2.5 rounded-xl border border-[var(--tx-border)] bg-[var(--tx-card)] tx-card hover:border-[#FF6B00]/60 shadow-xs hover:shadow-[0_6px_20px_-4px_rgba(255,107,0,0.16)] dark:hover:shadow-[0_6px_24px_-4px_rgba(255,107,0,0.22)] transition-[border-color,box-shadow] duration-200 cursor-default group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--tx-text-primary)]">
                  <Award className="w-3.5 h-3.5 text-red-600 group-hover:text-[#FF6B00] transition-colors" />
                  Precision 3D
                </div>
                <p className="text-[11px] text-[var(--tx-text-muted)] mt-0.5">
                  Optical camera aligners
                </p>
              </motion.div>

              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -2.5, transition: { type: 'spring', stiffness: 400, damping: 26 } }
                }
                className="col-span-2 sm:col-span-1 p-2 sm:p-2.5 rounded-xl border border-[var(--tx-border)] bg-[var(--tx-card)] tx-card hover:border-[#FF6B00]/60 shadow-xs hover:shadow-[0_6px_20px_-4px_rgba(255,107,0,0.16)] dark:hover:shadow-[0_6px_24px_-4px_rgba(255,107,0,0.22)] transition-[border-color,box-shadow] duration-200 cursor-default group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--tx-text-primary)]">
                  <MapPin className="w-3.5 h-3.5 text-red-600 group-hover:text-[#FF6B00] transition-colors" />
                  3 Bengaluru Hubs
                </div>
                <p className="text-[11px] text-[var(--tx-text-muted)] mt-0.5">
                  Open 7 Days (9am-8pm)
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Right Column: YCN Credential Header + Workshop Showcase Image */}
          <motion.div variants={itemFadeUp} className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            {/* Prominent, refined YCN credential aligned directly above the hero image */}
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -2.5, transition: { type: 'spring', stiffness: 400, damping: 26 } }
              }
              className="flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/60 bg-[var(--tx-surface-secondary)] tx-surface-secondary shadow-xs hover:shadow-[0_6px_20px_-4px_rgba(255,107,0,0.18)] dark:hover:shadow-[0_6px_24px_-4px_rgba(255,107,0,0.24)] transition-[border-color,box-shadow] duration-200 cursor-default group"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Award className="w-4 h-4 text-[#FF6B00] group-hover:text-red-600 transition-colors flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold tracking-tight text-[var(--tx-text-primary)] leading-snug">
                  Yokohama Club Network (YCN) — <span className="text-red-600 group-hover:text-[#FF6B00] transition-colors">YCN Pro Dealer</span>
                </span>
              </div>
              <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-[var(--tx-card)] text-[var(--tx-text-secondary)] border border-[var(--tx-border)] group-hover:border-[#FF6B00]/40 transition-colors flex-shrink-0">
                Official Partner
              </span>
            </motion.div>

            <div className="relative">
              {/* Outer decorative frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-red-600/30 via-neutral-300/20 to-neutral-500/20 dark:from-red-600/25 dark:via-neutral-800/20 dark:to-neutral-900/20 blur-sm -z-10" />

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--tx-border)] bg-neutral-900 shadow-sm group">
                <Image
                  src="/images/home/home_2_1.jpg"
                  alt="TyresXpress Flagship Workshop & Fitting Bay in Bengaluru"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Stats Banner - Fully visible in initial viewport */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-4 sm:mt-5 lg:mt-6 pt-3 sm:pt-4 border-t border-[var(--tx-border)] grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-center"
        >
          {COMPANY_STATS.map((stat) => (
            <div
              key={stat.label}
              tabIndex={0}
              className="group py-1.5 px-2 rounded-xl cursor-default outline-none focus-within:ring-1 focus-within:ring-[#FF6B00]/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-[var(--tx-text-primary)] font-mono tx-text-transition group-hover:text-[#FF6B00] group-focus-within:text-[#FF6B00]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[var(--tx-text-muted)] tx-text-transition group-hover:text-[#FF6B00] group-focus-within:text-[#FF6B00]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
