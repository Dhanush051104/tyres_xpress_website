'use client';

import React from 'react';
import Link from 'next/link';
import { TyresXpressLogo } from '@/components/common/TyresXpressLogo';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, SHOWROOMS, BRANDS } from '@/data/business';

export function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 border-t border-neutral-800 transition-colors">
      {/* Top Banner: Multi-Brand Trust Bar */}
      <div className="border-b border-neutral-800/80 bg-neutral-900/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-lg bg-red-600/10 dark:bg-[#F28C28]/10 border border-red-500/20 dark:border-[#F28C28]/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-red-500 dark:text-[#F28C28]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                100% Genuine Tyres & Factory Warranty
              </p>
              <p className="text-xs text-neutral-400">
                Authorized dealer supply with authentic digital warranty registration.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-400">
            <span className="font-semibold text-neutral-300">Authorized Brands:</span>
            {BRANDS.slice(0, 8).map((b) => (
              <span
                key={b.name}
                className="px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-300 text-[11px] font-medium"
              >
                {b.name}
              </span>
            ))}
            <Link
              href="/catalogue"
              className="text-red-400 dark:text-[#F28C28] hover:underline text-[11px] font-semibold ml-1 inline-flex items-center"
            >
              +6 more brands <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Brand Info & Story */}
          <div className="lg:col-span-2 space-y-4">
            <TyresXpressLogo size="md" variant="dark" />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
              Established in {BUSINESS_INFO.establishedYear}, {BUSINESS_INFO.name} is Bengaluru&apos;s
              trusted multi-brand tyre and automotive service destination. Delivering genuine tyres,
              laser-calibrated 3D wheel alignment, computerized dynamic balancing, and certified rim repairs
              across 3 premier locations in Bengaluru.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <Mail className="w-4 h-4 text-red-500 dark:text-[#F28C28] flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white underline underline-offset-4"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Clock className="w-4 h-4 text-red-500 dark:text-[#F28C28] flex-shrink-0" />
                <span>{BUSINESS_INFO.hoursCommon}</span>
              </div>
            </div>

            <div className="pt-3">
              <span className="inline-block px-3 py-1 text-[11px] font-mono font-semibold rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                Domain: {BUSINESS_INFO.domain}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About TyresXpress
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-colors">
                  Automotive Services
                </Link>
              </li>
              <li>
                <Link href="/showrooms" className="text-neutral-400 hover:text-white transition-colors">
                  Our Showrooms (3)
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-neutral-400 hover:text-white transition-colors">
                  Tyre Guide & Markings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Precision Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <Link href="/services#multi-brand-tyres" className="hover:text-white transition-colors">
                  Multi-Brand Tyres
                </Link>
              </li>
              <li>
                <Link href="/services#alloy-wheels" className="hover:text-white transition-colors">
                  Premium Alloy Wheels
                </Link>
              </li>
              <li>
                <Link href="/services#3d-wheel-alignment" className="hover:text-white transition-colors">
                  3D Wheel Alignment
                </Link>
              </li>
              <li>
                <Link href="/services#computerized-wheel-balancing" className="hover:text-white transition-colors">
                  Wheel Balancing
                </Link>
              </li>
              <li>
                <Link href="/services#nitrogen-filling" className="hover:text-white transition-colors">
                  Nitrogen Tyre Inflation
                </Link>
              </li>
              <li>
                <Link href="/services#wheel-bend-repair" className="hover:text-white transition-colors">
                  Wheel Bend Rim Repair
                </Link>
              </li>
              <li>
                <Link href="/services#professional-car-wash" className="hover:text-white transition-colors">
                  Foam Car Wash (Horamavu)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: 3 Bengaluru Showrooms Quick Dial */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Bengaluru Showrooms
            </h3>
            <div className="space-y-4 text-xs">
              {SHOWROOMS.map((s) => (
                <div key={s.id} className="border-l-2 border-red-600 dark:border-[#F28C28] pl-3 py-0.5">
                  <p className="font-bold text-white">{s.shortName}</p>
                  <p className="text-neutral-400 text-[11px] line-clamp-1 mt-0.5">{s.address}</p>
                  <a
                    href={`tel:${s.phone}`}
                    className="inline-flex items-center gap-1.5 font-mono font-bold text-red-400 dark:text-[#F28C28] hover:underline mt-1"
                  >
                    <Phone className="w-3 h-3" />
                    {s.displayPhone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Future Roadmap Line */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © 2026 {BUSINESS_INFO.legalName}. All rights reserved. Operating since {BUSINESS_INFO.establishedYear} in Bengaluru, India.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Phase 1 Official Customer Website</span>
            <span>•</span>
            <span className="text-neutral-500">tyresxpress.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
