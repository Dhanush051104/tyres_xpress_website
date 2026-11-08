'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TyresXpressLogo } from '@/components/common/TyresXpressLogo';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Phone, MapPin, Menu, X, Clock, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, SHOWROOMS } from '@/data/business';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Showrooms', href: '/showrooms' },
  { name: 'Tyre Guide', href: '/catalogue' },
  { name: 'Contact Us', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Utility Bar */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-1.5 px-4 sm:px-6 border-b border-neutral-800 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-0.5 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 text-neutral-200 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Est. {BUSINESS_INFO.establishedYear} • 3 Showrooms in Bengaluru
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              Open Daily: 9:00 AM – 8:00 PM
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0 text-[11px] sm:text-xs">
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hidden lg:inline hover:text-white transition-colors"
            >
              {BUSINESS_INFO.email}
            </a>
            <a
              href={`tel:${BUSINESS_INFO.centralHotline}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-red-400 dark:hover:text-[#F28C28] transition-colors"
            >
              <Phone className="w-3 h-3 text-red-500 dark:text-[#F28C28]" />
              <span className="hidden sm:inline">Helpdesk:</span> {BUSINESS_INFO.displayHotline}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0B0B0D]/95 backdrop-blur-md shadow-sm border-neutral-200 dark:border-[#303036] py-2.5 sm:py-3'
            : 'bg-white dark:bg-[#0B0B0D] border-neutral-200 dark:border-[#202024] py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <TyresXpressLogo size="md" />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-red-600 dark:text-[#F28C28] bg-red-50 dark:bg-[#202024] font-bold'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-red-600 dark:hover:text-[#F28C28] hover:bg-neutral-100 dark:hover:bg-[#151519]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Actions: Theme Toggle + Showroom Finder Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <Link
              href="/showrooms"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold tracking-tight text-white bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] dark:text-neutral-950 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
            >
              <MapPin className="w-4 h-4" />
              <span>Find Showroom</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#151519] border border-neutral-200 dark:border-[#303036] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 dark:border-[#303036] bg-white dark:bg-[#0B0B0D] px-4 pt-3 pb-6 shadow-xl transition-all">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-red-600 dark:text-[#F28C28] bg-red-50 dark:bg-[#151519] font-bold'
                      : 'text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-[#151519]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Quick Showrooms Access */}
          <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-[#202024]">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2 px-1">
              Bengaluru Branches:
            </p>
            <div className="space-y-2">
              {SHOWROOMS.map((s) => (
                <a
                  key={s.id}
                  href={`tel:${s.phone}`}
                  className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 dark:bg-[#151519] border border-neutral-200 dark:border-[#202024] text-xs"
                >
                  <div>
                    <span className="font-semibold text-neutral-900 dark:text-white block">
                      {s.shortName}
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      9 AM – 8 PM
                    </span>
                  </div>
                  <span className="font-mono font-bold text-red-600 dark:text-[#F28C28] flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    {s.phone}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <Link
                href="/showrooms"
                className="flex-1 py-2.5 text-center text-xs font-bold rounded-lg text-white bg-red-600 dark:bg-[#F28C28] dark:text-neutral-950"
              >
                All Showrooms & Directions
              </Link>
              <Link
                href="/contact"
                className="flex-1 py-2.5 text-center text-xs font-bold rounded-lg border border-neutral-300 dark:border-[#303036] text-neutral-800 dark:text-neutral-200"
              >
                Book Inspection
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
