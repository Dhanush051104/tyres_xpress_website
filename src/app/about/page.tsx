'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { BUSINESS_INFO, SHOWROOMS } from '@/data/business';
import { trackPhoneClick, trackGetDirections } from '@/lib/analytics';
import { ShieldCheck, Award, MapPin, Wrench, ArrowRight, Phone } from 'lucide-react';

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const cardHover = shouldReduceMotion
    ? undefined
    : { y: -3, transition: { type: 'spring' as const, stiffness: 360, damping: 26 } };

  const innerHover = shouldReduceMotion
    ? undefined
    : { y: -2.5, transition: { type: 'spring' as const, stiffness: 420, damping: 28 } };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="py-14 sm:py-18 bg-[#111111] text-white relative overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              whileHover={innerHover}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30 hover:border-[#FF6B00]/60 hover:text-[#FF6B00] transition-colors cursor-default"
            >
              Est. {BUSINESS_INFO.establishedYear} • Bengaluru Heritage
            </motion.span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-4">
              Pioneering Honest, Precision Automotive Care in Bengaluru.
            </h1>
            <p className="text-sm sm:text-base text-[var(--platinum-2)] mt-4 leading-relaxed">
              Founded in 2019 with a single mission: to provide vehicle owners with authentic multi-brand tyres, factory-grade 3D alignment, and uncompromised safety without dealership markups.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Image Section */}
      <section className="py-16 sm:py-20 bg-[var(--tx-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Our Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--tx-text-primary)]">
                From a Dedicated Workshop to 3 Prime Bengaluru Showrooms
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[var(--tx-text-secondary)] leading-relaxed">
                <p>
                  Bengaluru&apos;s roads present unique challenges to vehicles — unpredictable asphalt conditions, potholes, high flyover expansion joints, and stop-and-go commute traffic. In 2019, TyresXpress was established to give car and two-wheeler owners a trusted sanctuary for their wheel and tyre needs.
                </p>
                <p>
                  Over the past five years, we have grown from our flagship Siddapura (Whitefield) facility into three full-service showrooms across East and North-East Bengaluru — including Kalkere/Horamavu and Balagere (Panathur).
                </p>
                <p>
                  Unlike single-brand franchise tyre shops incentivized to push one compound, TyresXpress operates as a dedicated multi-brand tyre destination dealing with over 16 global tyre manufacturers — including Yokohama, Bridgestone, Continental, Michelin, Pirelli, Apollo, MRF, etc. — to provide neutral, transparent recommendations matching each customer&apos;s exact vehicle weight, driving habits, and budget.
                </p>
              </div>

              {/* 3 Milestone Stat Cards */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <motion.div
                  whileHover={cardHover}
                  className="group relative overflow-hidden p-4 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/60 bg-[var(--tx-card)] tx-card shadow-xs hover:shadow-[0_10px_24px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="text-2xl font-black font-mono text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                    2019
                  </div>
                  <div className="text-xs text-[var(--tx-text-muted)] mt-1">
                    Year Established
                  </div>
                </motion.div>

                <motion.div
                  whileHover={cardHover}
                  className="group relative overflow-hidden p-4 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/60 bg-[var(--tx-card)] tx-card shadow-xs hover:shadow-[0_10px_24px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="text-2xl font-black font-mono text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                    3 Hubs
                  </div>
                  <div className="text-xs text-[var(--tx-text-muted)] mt-1">
                    Across Bengaluru
                  </div>
                </motion.div>

                <motion.div
                  whileHover={cardHover}
                  className="col-span-2 sm:col-span-1 group relative overflow-hidden p-4 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/60 bg-[var(--tx-card)] tx-card shadow-xs hover:shadow-[0_10px_24px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="text-2xl font-black font-mono text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                    16+ Brands
                  </div>
                  <div className="text-xs text-[var(--tx-text-muted)] mt-1">
                    Multi-Brand Selection
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Placeholder IMG-013 */}
            <div className="lg:col-span-5">
              <ImagePlaceholder
                id="IMG-013"
                aspectRatio="3/2"
                customLabel="TyresXpress Technical Team & Workshop Bays"
                showDetails={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dealership Credentials & Brand Partnerships */}
      <section className="py-16 sm:py-20 bg-[var(--tx-surface-secondary)] border-t border-[var(--tx-border)] tx-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Dealership Credentials &amp; Brand Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--tx-text-primary)] mt-1">
              Yokohama Club Network (YCN) Pro Dealer &amp; Multi-Brand Expertise
            </h2>
            <p className="text-sm sm:text-base text-[var(--tx-text-secondary)] mt-2 leading-relaxed">
              TyresXpress combines the strength of an official Yokohama partnership with the freedom and objectivity of a 16+ brand tyre business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Primary Credential Card: Yokohama & YCN Pro Dealer */}
            <motion.div
              whileHover={cardHover}
              className="group/ycn relative overflow-hidden lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/55 bg-[var(--tx-card)] tx-card shadow-sm hover:shadow-[0_14px_34px_-8px_rgba(255,107,0,0.16)] dark:hover:shadow-[0_14px_38px_-8px_rgba(255,107,0,0.22)] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between space-y-6"
            >
              {/* Subtle mandarin-orange ambient background highlight on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover/ycn:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#FF6B00]/[0.07] via-[#FF6B00]/[0.03] to-red-600/[0.04] dark:from-[#FF6B00]/[0.12] dark:via-[#FF6B00]/[0.05] dark:to-red-600/[0.06]"
              />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/10 text-red-600 dark:bg-red-500/15 dark:text-red-400 border border-red-500/20 group-hover/ycn:border-[#FF6B00]/40 transition-colors">
                  <Award className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Yokohama Club Network • YCN Pro Dealer</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--tx-text-primary)]">
                  Official &amp; Biggest Yokohama Dealer in the Whitefield Area
                </h3>

                <div className="space-y-3 text-sm text-[var(--tx-text-secondary)] leading-relaxed">
                  <p>
                    TyresXpress is an associated partner of the <strong className="font-semibold text-[var(--tx-text-primary)]">Yokohama Club Network (YCN)</strong> and holds the status of a <strong className="font-semibold text-[var(--tx-text-primary)]">YCN Pro Dealer</strong>. We are an <strong className="font-semibold text-[var(--tx-text-primary)]">official Yokohama dealer in the Whitefield area</strong> and the <strong className="font-semibold text-[var(--tx-text-primary)]">biggest Yokohama dealer in the Whitefield area</strong>.
                  </p>
                  <p>
                    While our Siddapura showroom serves as the main branch for YCN operations, these credentials represent TyresXpress as a business — ensuring fresh Yokohama inventory across passenger car, SUV, and performance categories alongside direct manufacturer warranty support and specialist wheel care.
                  </p>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[var(--tx-border)]">
                <motion.div
                  whileHover={innerHover}
                  className="group/inner p-3.5 rounded-xl bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/60 tx-surface-secondary shadow-2xs hover:shadow-[0_6px_18px_-4px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow,background-color] duration-200 cursor-default"
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--tx-text-muted)]">
                    Network Association
                  </div>
                  <div className="text-sm font-bold text-[var(--tx-text-primary)] group-hover/inner:text-[#FF6B00] transition-colors mt-0.5">
                    Yokohama Club Network (YCN)
                  </div>
                  <div className="text-xs text-[var(--tx-text-secondary)] mt-0.5">
                    Associated Partner
                  </div>
                </motion.div>

                <motion.div
                  whileHover={innerHover}
                  className="group/inner p-3.5 rounded-xl bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/60 tx-surface-secondary shadow-2xs hover:shadow-[0_6px_18px_-4px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow,background-color] duration-200 cursor-default"
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--tx-text-muted)]">
                    Dealership Tier
                  </div>
                  <div className="text-sm font-bold text-red-600 group-hover/inner:text-[#FF6B00] transition-colors mt-0.5">
                    YCN Pro Dealer
                  </div>
                  <div className="text-xs text-[var(--tx-text-secondary)] mt-0.5">
                    Precision Fitment &amp; Service
                  </div>
                </motion.div>

                <motion.div
                  whileHover={innerHover}
                  className="group/inner p-3.5 rounded-xl bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/60 tx-surface-secondary shadow-2xs hover:shadow-[0_6px_18px_-4px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow,background-color] duration-200 cursor-default"
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--tx-text-muted)]">
                    Regional Standing
                  </div>
                  <div className="text-sm font-bold text-[var(--tx-text-primary)] group-hover/inner:text-[#FF6B00] transition-colors mt-0.5">
                    Official Yokohama Dealer
                  </div>
                  <div className="text-xs text-[var(--tx-text-secondary)] mt-0.5">
                    Whitefield Area
                  </div>
                </motion.div>

                <motion.div
                  whileHover={innerHover}
                  className="group/inner p-3.5 rounded-xl bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/60 tx-surface-secondary shadow-2xs hover:shadow-[0_6px_18px_-4px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow,background-color] duration-200 cursor-default"
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--tx-text-muted)]">
                    Market Presence
                  </div>
                  <div className="text-sm font-bold text-[var(--tx-text-primary)] group-hover/inner:text-[#FF6B00] transition-colors mt-0.5">
                    Biggest Yokohama Dealer
                  </div>
                  <div className="text-xs text-[var(--tx-text-secondary)] mt-0.5">
                    In the Whitefield Area
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Secondary Card: Multi-Brand Business Distinction */}
            <motion.div
              whileHover={cardHover}
              className="group/multi relative overflow-hidden lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/55 bg-[var(--tx-card)] tx-card shadow-sm hover:shadow-[0_14px_34px_-8px_rgba(255,107,0,0.16)] dark:hover:shadow-[0_14px_38px_-8px_rgba(255,107,0,0.22)] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between space-y-6"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover/multi:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--tx-surface-secondary)] text-[var(--tx-text-secondary)] border border-[var(--tx-border)] group-hover/multi:border-[#FF6B00]/40 transition-colors tx-surface-secondary">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-600 group-hover/multi:text-[#FF6B00] transition-colors" />
                  <span>Multi-Brand Independence</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--tx-text-primary)]">
                  16+ Global Tyre Manufacturers Under One Roof
                </h3>

                <div className="space-y-3 text-sm text-[var(--tx-text-secondary)] leading-relaxed">
                  <p>
                    Our Yokohama partnership strengthens our technical standards, but TyresXpress is never restricted to a single brand. We are a comprehensive multi-brand tyre business dealing with over 16 Indian and international tyre manufacturers.
                  </p>
                  <p>
                    Whether you drive a city commuter hatchback, a luxury German sedan, a 4x4 highway SUV, or a touring motorcycle, our advisors compare options across Bridgestone, Continental, Michelin, Pirelli, Apollo, Goodyear, MRF, CEAT, JK Tyre, Reise, Dunlop, TVS, BKT, Vredestein, and Firestone so you always get the right compound for your vehicle.
                  </p>
                </div>
              </div>

              <motion.div
                whileHover={innerHover}
                className="relative z-10 p-4 rounded-xl bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] border border-[var(--tx-border)] hover:border-[#FF6B00]/60 transition-[border-color,background-color] duration-200 tx-surface-secondary space-y-2"
              >
                <div className="text-xs font-bold text-[var(--tx-text-primary)]">
                  What This Means for Vehicle Owners:
                </div>
                <ul className="space-y-1.5 text-xs text-[var(--tx-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0" />
                    <span>Side-by-side tread, comfort, and mileage comparisons across 16+ brands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 flex-shrink-0" />
                    <span>Full YCN Pro Dealer support and deep Yokohama inventory in Whitefield</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0" />
                    <span>100% genuine tyres with direct manufacturer warranty registration</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Standards & Equipment */}
      <section className="py-16 sm:py-20 bg-[var(--tx-bg)] border-t border-b border-[var(--tx-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Placeholder IMG-014 */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ImagePlaceholder
                id="IMG-014"
                aspectRatio="16/10"
                customLabel="Calibrated Optical 3D Wheel Alignment Sensor System"
                showDetails={true}
              />
            </div>

            {/* Standards Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Precision Technology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--tx-text-primary)]">
                Factory-Calibrated Precision Machinery
              </h2>
              <p className="text-sm sm:text-base text-[var(--tx-text-secondary)] leading-relaxed">
                A premium tyre performs only as well as the fitment and alignment machinery supporting it. We equip our showrooms with calibrated 3D digital imaging alignment racks, microprocessor dynamic wheel balancers, and pneumatic touchless rim changers that guarantee zero scratches to expensive alloy wheels.
              </p>

              <div className="space-y-3">
                <motion.div
                  whileHover={innerHover}
                  className="group relative overflow-hidden flex items-start gap-3 p-3.5 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/60 bg-[var(--tx-card)] tx-card shadow-2xs hover:shadow-[0_8px_22px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-red-600 to-[#FF6B00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-250"
                  />
                  <Wrench className="w-5 h-5 text-red-600 group-hover:text-[#FF6B00] transition-colors flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                      Laser &amp; Sonar Dynamic Balancers
                    </h3>
                    <p className="text-xs text-[var(--tx-text-muted)] mt-0.5">
                      Accurate to within 1 gram, eliminating high-speed steering vibration and premature tire cupping.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={innerHover}
                  className="group relative overflow-hidden flex items-start gap-3 p-3.5 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/60 bg-[var(--tx-card)] tx-card shadow-2xs hover:shadow-[0_8px_22px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-red-600 to-[#FF6B00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-250"
                  />
                  <Award className="w-5 h-5 text-red-600 group-hover:text-[#FF6B00] transition-colors flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                      Touchless Pneumatic Tyre Changers
                    </h3>
                    <p className="text-xs text-[var(--tx-text-muted)] mt-0.5">
                      Synthetic polymer mounting heads ensure delicate diamond-cut and powder-coated rims are never gouged.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={innerHover}
                  className="group relative overflow-hidden flex items-start gap-3 p-3.5 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/60 bg-[var(--tx-card)] tx-card shadow-2xs hover:shadow-[0_8px_22px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-250 cursor-default"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-red-600 to-[#FF6B00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-250"
                  />
                  <ShieldCheck className="w-5 h-5 text-red-600 group-hover:text-[#FF6B00] transition-colors flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[var(--tx-text-primary)] group-hover:text-red-600 dark:group-hover:text-[#FF6B00] transition-colors">
                      Automated 99.9% Membrane Nitrogen Station
                    </h3>
                    <p className="text-xs text-[var(--tx-text-muted)] mt-0.5">
                      Purges moisture and atmospheric contaminants to maintain rock-solid tyre inflation pressure across seasons.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showrooms Network Overview */}
      <section className="py-16 sm:py-20 bg-[var(--tx-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Convenient Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--tx-text-primary)] mt-1">
              Serving You Across Bengaluru
            </h2>
            <p className="text-sm text-[var(--tx-text-secondary)] mt-2">
              All three showrooms are open 7 days a week from 9:00 AM to 8:00 PM with customer parking and dedicated service bays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SHOWROOMS.map((s) => (
              <motion.div
                key={s.id}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -4, transition: { type: 'spring', stiffness: 360, damping: 25 } }
                }
                className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/65 bg-[var(--tx-card)] tx-card flex flex-col justify-between space-y-4 shadow-sm hover:shadow-[0_12px_30px_-6px_rgba(255,107,0,0.2)] transition-[border-color,box-shadow] duration-300"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#FF6B00]/[0.06] via-transparent to-transparent dark:from-[#FF6B00]/[0.1] dark:via-transparent dark:to-transparent"
                />

                <div className="relative z-10">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-600 group-hover:text-[#FF6B00] transition-colors">
                    {s.locality}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--tx-text-primary)] mt-1">
                    {s.name}
                  </h3>
                  <p className="text-xs text-[var(--tx-text-secondary)] mt-2 leading-relaxed">
                    {s.address}
                  </p>
                  <p className="text-xs text-[var(--tx-text-muted)] mt-2">
                    Hours: {s.hours} ({s.openDays})
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-[var(--tx-border)] flex items-center justify-between">
                  <a
                    href={`tel:${s.phone}`}
                    onClick={() => trackPhoneClick({ showroom: s.id, location: 'about_page_showroom' })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-[#FF6B00] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{s.phone}</span>
                  </a>
                  <a
                    href={s.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackGetDirections({ showroom: s.id, location: 'about_page_showroom' })}
                    className="text-xs font-semibold text-[var(--tx-text-secondary)] hover:text-[#FF6B00] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Maps</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/showrooms"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>Explore Complete Showroom Facilities &amp; Directions</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
