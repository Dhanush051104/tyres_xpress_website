'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from 'motion/react';
import { TyresXpressLogo } from '@/components/common/TyresXpressLogo';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Phone, MapPin, Menu, X, Mail, ChevronRight } from 'lucide-react';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO, SHOWROOMS } from '@/data/business';
import { trackPhoneClick } from '@/lib/analytics';

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
  const shouldReduceMotion = useReducedMotion();

  // Coordinated scroll tracking with hysteresis to prevent threshold flicker
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y > 52) {
            setScrolled(true);
          } else if (y < 16) {
            setScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full select-none">
      <nav
        className={`w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-b ${scrolled
          ? 'h-14 sm:h-15 bg-[var(--tx-bg)]/90 backdrop-blur-md border-[var(--tx-border)] shadow-[var(--tx-shadow)]'
          : 'h-20 sm:h-22 bg-[var(--tx-bg)] border-[var(--tx-border)] shadow-none'
          }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4">
          {/* Brand Logo: Scaled smoothly without remounting */}
          <motion.div
            animate={{
              scale: scrolled ? (shouldReduceMotion ? 1 : 0.88) : 1,
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="origin-left flex-shrink-0"
          >
            <TyresXpressLogo size="md" />
          </motion.div>

          {/* Desktop Navigation Links: Dock with Fast Liquid Active Indicator */}
          <LayoutGroup id="desktop-nav-tabs">
            <div
              className={`hidden lg:flex items-center rounded-full bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.03)] flex-shrink-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'gap-0.5 p-0.5' : 'gap-1 p-1'
                }`}
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    prefetch={true}
                    className={`relative rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer ${scrolled ? 'px-3 py-1' : 'px-3.5 py-1.5'
                      } ${isActive
                        ? 'text-red-600 dark:text-neutral-950 font-bold'
                        : 'text-[var(--tx-text-secondary)] hover:text-[var(--tx-text-primary)]'
                      }`}
                  >
                    {/* Liquid Glass Active Pill Indicator - locked to pathname dependency to prevent scroll glitches */}
                    {isActive && (
                      <motion.div
                        layoutId="liquidActiveNavIndicator"
                        layoutDependency={pathname}
                        className="pointer-events-none absolute inset-0 rounded-full bg-white border border-neutral-200/90 dark:border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] -z-10"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0.05 }
                            : {
                              type: 'spring',
                              stiffness: 520,
                              damping: 38,
                              mass: 0.8,
                            }
                        }
                      />
                    )}
                    <span className="relative z-10 pointer-events-none whitespace-nowrap">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </LayoutGroup>

          {/* Right Header Cluster: Integrated Contact + Theme Toggle + Showrooms CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Contact Details (Integrated cleanly without wrapping) */}
            <div
              className={`hidden xl:flex items-center flex-shrink-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                scrolled ? 'gap-1.5 text-[11px]' : 'gap-2 text-xs'
              }`}
            >
              {/* Email Link: icon on xl, full address on 2xl */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                title={`Email: ${BUSINESS_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-[var(--tx-text-secondary)] hover:text-red-600 transition-colors py-1 px-2 rounded-lg hover:bg-[var(--tx-surface-secondary)] whitespace-nowrap flex-shrink-0"
              >
                <Mail className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                <span className="font-medium whitespace-nowrap hidden 2xl:inline">{BUSINESS_INFO.email}</span>
              </a>

              {/* Phone Link: always visible on xl+ */}
              <a
                href={`tel:${BUSINESS_INFO.centralHotline}`}
                onClick={() => trackPhoneClick({ showroom: 'central_hotline', location: 'header_desktop_hotline' })}
                title="Call TyresXpress Helpdesk"
                className="inline-flex items-center gap-1.5 font-bold text-[var(--tx-text-primary)] hover:text-red-600 transition-colors py-1 px-2 rounded-lg hover:bg-[var(--tx-surface-secondary)] whitespace-nowrap flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                <span className="whitespace-nowrap">{BUSINESS_INFO.displayHotline}</span>
              </a>

              {/* Instagram Logo: clickable, clearly visible, no handle text */}
              <a
                href={BUSINESS_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow TyresXpress on Instagram"
                aria-label="Follow TyresXpress on Instagram"
                className="inline-flex items-center justify-center text-[var(--tx-text-secondary)] hover:text-red-600 transition-colors p-1.5 rounded-lg hover:bg-[var(--tx-surface-secondary)] flex-shrink-0 group/insta"
              >
                <InstagramIcon className="w-5 h-5 text-red-600 flex-shrink-0 transition-transform duration-200 group-hover/insta:scale-110" />
              </a>
            </div>

            {/* Mobile / Tablet Quick Call Button */}
            <a
              href={`tel:${BUSINESS_INFO.centralHotline}`}
              onClick={() => trackPhoneClick({ showroom: 'central_hotline', location: 'header_mobile_quick_call' })}
              aria-label={`Call Helpdesk ${BUSINESS_INFO.displayHotline}`}
              title={`Call Helpdesk ${BUSINESS_INFO.displayHotline}`}
              className={`xl:hidden inline-flex items-center justify-center rounded-full border border-[var(--tx-border)] bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-card)] text-[var(--tx-text-primary)] hover:text-red-600 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex-shrink-0 ${
                scrolled ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9 h-9 sm:w-10 sm:h-10'
              }`}
            >
              <Phone className="w-4 h-4 text-red-600" />
            </a>

            {/* Theme Toggle */}
            <ThemeToggle className="flex-shrink-0" />

            {/* Showroom Finder CTA - Guaranteed Single Line */}
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
              className="flex-shrink-0"
            >
              <Link
                href="/showrooms"
                prefetch={true}
                className={`hidden sm:inline-flex items-center gap-1.5 rounded-xl font-bold tracking-tight text-white bg-red-600 hover:bg-red-700 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 cursor-pointer whitespace-nowrap flex-shrink-0 ${scrolled ? 'px-3 py-1.5 text-xs' : 'px-3.5 py-2 text-xs sm:text-sm'
                  }`}
              >
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="whitespace-nowrap">Find Showroom</span>
              </Link>
            </motion.div>

            {/* Mobile Hamburger Button */}
            <motion.button
              whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-[var(--tx-text-secondary)] hover:text-[var(--tx-text-primary)] hover:bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] focus:outline-none transition-colors cursor-pointer flex-shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:hidden border-b border-[var(--tx-border)] bg-[var(--tx-bg)]/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
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
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive
                      ? 'text-red-600 dark:text-white bg-red-50 dark:bg-white/[0.08] font-bold border border-red-100 dark:border-white/10'
                      : 'text-[var(--tx-text-primary)] hover:bg-[var(--tx-surface-secondary)]'
                      }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact & Showrooms Section */}
            <div className="mt-5 pt-4 border-t border-[var(--tx-border)] space-y-3">
              <div className="p-3 rounded-xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] space-y-2">
                <a
                  href={`tel:${BUSINESS_INFO.centralHotline}`}
                  onClick={() => trackPhoneClick({ showroom: 'central_hotline', location: 'header_mobile_menu_hotline' })}
                  className="flex items-center justify-between text-xs font-bold text-[var(--tx-text-primary)] hover:text-red-600"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-red-600" />
                    Helpdesk Hotline
                  </span>
                  <span className="font-mono text-red-600">{BUSINESS_INFO.displayHotline}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center justify-between text-xs text-[var(--tx-text-secondary)] hover:text-[var(--tx-text-primary)] pt-2 border-t border-[var(--tx-border)]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-red-600" />
                    Support Email
                  </span>
                  <span className="font-mono text-[11px] truncate max-w-[180px]">{BUSINESS_INFO.email}</span>
                </a>
                <a
                  href={BUSINESS_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs text-[var(--tx-text-secondary)] hover:text-[var(--tx-text-primary)] pt-2 border-t border-[var(--tx-border)] group/m-insta"
                  title="Follow TyresXpress on Instagram"
                  aria-label="Follow TyresXpress on Instagram"
                >
                  <span className="inline-flex items-center gap-2">
                    <InstagramIcon className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="font-medium text-[var(--tx-text-primary)]">Follow on Instagram</span>
                  </span>
                  <span className="text-[11px] text-red-600 font-semibold group-hover/m-insta:underline">Open Profile ↗</span>
                </a>
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-[var(--tx-text-muted)] px-1">
                Bengaluru Showrooms:
              </p>
              <div className="space-y-2">
                {SHOWROOMS.map((s) => (
                  <a
                    key={s.id}
                    href={`tel:${s.phone}`}
                    onClick={() => trackPhoneClick({ showroom: s.id, location: 'header_mobile_menu_showroom' })}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--tx-surface-secondary)] border border-[var(--tx-border)] text-xs transition-colors hover:border-red-500/50"
                  >
                    <div>
                      <span className="font-semibold text-[var(--tx-text-primary)] block">
                        {s.shortName}
                      </span>
                      <span className="text-[var(--tx-text-muted)] text-[11px]">
                        9 AM – 8 PM Daily
                      </span>
                    </div>
                    <span className="font-mono font-bold text-red-600 flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {s.phone}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <Link
                  href="/showrooms"
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 text-center text-xs font-bold rounded-xl text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm"
                >
                  All Showrooms & Directions
                </Link>
                <Link
                  href="/contact"
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 text-center text-xs font-bold rounded-xl border border-[var(--tx-border)] text-[var(--tx-text-primary)] hover:bg-[var(--tx-surface-secondary)] transition-colors"
                >
                  Book Inspection
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
