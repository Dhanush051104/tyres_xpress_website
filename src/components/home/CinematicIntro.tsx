'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { getImageMeta } from '@/data/imageManifest';

const STORAGE_KEY = 'tx_cinematic_intro_seen';
const WORD_TYRES = 'TYRES';
const WORD_XPRESS = 'XPRESS';

export function CinematicIntro() {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [quickFade, setQuickFade] = useState(false);

  // Progressive letter reveal counts
  const [tyresChars, setTyresChars] = useState(0);
  const [xpressChars, setXpressChars] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const isCompletingRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const imgMeta = getImageMeta('home_1_1');

  // Complete intro and transition smoothly into homepage
  const completeIntro = useCallback((isSkip = false) => {
    // Prevent duplicate callbacks or premature unmounting
    if (isCompletingRef.current) return;
    isCompletingRef.current = true;

    // Clear any pending timers
    if (timerRef.current) clearTimeout(timerRef.current);
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Save session storage flag immediately so page refreshes are guarded
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        sessionStorage.setItem(STORAGE_KEY, 'true');
      }
    } catch {
      // Storage unavailable or restricted (private browsing, quota exceeded)
    }

    if (isSkip) {
      setQuickFade(true);
    }
    setFadingOut(true);

    // Unmount from DOM strictly after the opacity fade transition completes
    // Normal fade: 1200ms -> unmount at 1250ms
    // Skip fade: 300ms -> unmount at 350ms
    const fadeDuration = isSkip ? 350 : 1250;
    setTimeout(() => {
      // Add pre-hydration anti-flash class once fade is fully done
      try {
        if (typeof document !== 'undefined') {
          document.documentElement.classList.add('tx-intro-played');
        }
      } catch {
        // Safe fallback
      }
      setDismissed(true);
    }, fadeDuration);
  }, []);

  const handleSkip = useCallback(() => {
    completeIntro(true);
  }, [completeIntro]);

  // Keyboard shortcut listener (ESC to skip)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSkip]);

  // Client mounting tracking
  useEffect(() => {
    setMounted(true);
  }, []);

  // Main lifecycle & animation orchestrator
  useEffect(() => {
    // 1. Session check: if already completed this session, dismiss immediately
    let hasSeen = false;
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        hasSeen = sessionStorage.getItem(STORAGE_KEY) === 'true';
      }
    } catch {
      hasSeen = false;
    }

    if (hasSeen) {
      setDismissed(true);
      return;
    }

    // 2. Accessibility: respect reduced-motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          sessionStorage.setItem(STORAGE_KEY, 'true');
        }
        if (typeof document !== 'undefined') {
          document.documentElement.classList.add('tx-intro-played');
        }
      } catch {
        // Safe fallback
      }
      setDismissed(true);
      return;
    }

    // 3. Absolute safety fallback: guarantee intro completes within 6.0s no matter what
    safetyTimeoutRef.current = setTimeout(() => {
      completeIntro(false);
    }, 6000);

    // 4. Smooth, measured letter-reveal cadence
    const startTimer = setTimeout(() => {
      let tCount = 0;
      let xCount = 0;

      // Phase 1: Reveal TYRES
      intervalRef.current = setInterval(() => {
        tCount++;
        setTyresChars(tCount);

        if (tCount >= WORD_TYRES.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);

          // Phase 2: Pause before XPRESS
          timerRef.current = setTimeout(() => {
            intervalRef.current = setInterval(() => {
              xCount++;
              setXpressChars(xCount);

              if (xCount >= WORD_XPRESS.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsTypingComplete(true);

                // Phase 3: Hold complete logo for 800ms, then initiate smooth 1200ms fade-out
                timerRef.current = setTimeout(() => {
                  completeIntro(false);
                }, 800);
              }
            }, 120);
          }, 180);
        }
      }, 120);
    }, 350);

    return () => {
      clearTimeout(startTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [completeIntro]);

  // If already dismissed, remove completely from DOM
  if (dismissed) {
    return null;
  }

  const displayedTyres = WORD_TYRES.slice(0, tyresChars);
  const displayedXpress = WORD_XPRESS.slice(0, xpressChars);
  const showTyresCursor = tyresChars < WORD_TYRES.length;
  const showXpressCursor = tyresChars >= WORD_TYRES.length && !isTypingComplete;

  const introContent = (
    <div
      id="tx-cinematic-intro"
      role="banner"
      aria-label="TyresXpress Introductory Presentation"
      style={{
        transitionProperty: 'opacity',
        transitionDuration: quickFade ? '300ms' : '1200ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      className={`fixed inset-0 z-[9999] w-screen h-screen overflow-hidden bg-[#070709] select-none ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* ============================================================== */}
      {/* Cinematic Background Photograph (home_1_1 / formerly IMG-017) */}
      {/* Close-up front alloy wheel & tyre, vehicle facing right        */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        aria-hidden="true"
        data-image-id="home_1_1"
      >
        <div className="absolute inset-0 bg-[#070709]" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgMeta.targetPath}
          alt=""
          fetchPriority="high"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-right opacity-90"
        />

        {/* Dark falloff on the left and centre keeps the wordmark legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/70 to-transparent w-full md:w-[70%]" />
        <div className="absolute inset-0 bg-[#070709]/25" />
      </div>

      {/* ============================================================== */}
      {/* Center Stage: Authentic Bold Italic TyresXpress Wordmark       */}
      {/* Clean, smooth letter-reveal animation                          */}
      {/* ============================================================== */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 sm:px-8">
        <div className="flex flex-col items-center justify-center select-none text-center">
          {/* Main Brand Wordmark */}
          <div className="flex items-baseline tracking-tight font-black italic uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            {/* Word 1: TYRES (Pure White, Bold Italic) */}
            <div className="inline-flex items-baseline">
              <span
                className="text-white font-black italic tracking-tighter drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]"
                style={{ fontStyle: 'italic', letterSpacing: '-0.03em' }}
              >
                {displayedTyres}
              </span>
              {showTyresCursor && (
                <span className="inline-block w-1 sm:w-1.5 h-7 sm:h-12 md:h-14 lg:h-16 ml-1 bg-white/90 animate-pulse align-middle" />
              )}
            </div>

            {/* Word 2: XPRESS (Signature Brand Red, Bold Italic) */}
            <div className="inline-flex items-baseline ml-3 sm:ml-5 md:ml-6">
              <span
                className="text-[#DC2626] font-black italic tracking-tight drop-shadow-[0_2px_16px_rgba(220,38,38,0.35)]"
                style={{ fontStyle: 'italic', letterSpacing: '-0.02em' }}
              >
                {displayedXpress}
              </span>
              {showXpressCursor && (
                <span className="inline-block w-1 sm:w-1.5 h-7 sm:h-12 md:h-14 lg:h-16 ml-1 bg-[#DC2626] animate-pulse align-middle" />
              )}
            </div>
          </div>

          {/* Sub-Brand Tagline: Fades in cleanly upon wordmark completion */}
          <div
            className={`flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 transition-all duration-700 ease-out ${
              isTypingComplete
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="h-px w-6 sm:w-12 bg-neutral-700" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-neutral-300">
              MULTI-BRAND TYRE HUBS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-neutral-400">
              BENGALURU
            </span>
            <div className="h-px w-6 sm:w-12 bg-neutral-700" />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* Bottom Control Bar: Skip Intro Button & Keyboard Hint          */}
      {/* ============================================================== */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
        <button
          onClick={handleSkip}
          type="button"
          aria-label="Skip introductory presentation"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider text-neutral-400 hover:text-white bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800/80 hover:border-neutral-700 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg"
        >
          <span>Skip intro</span>
          <span className="px-1.5 py-0.5 rounded bg-neutral-800 text-[10px] font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors">
            ESC
          </span>
        </button>
      </div>
    </div>
  );

  // When mounted in browser, portal directly into document.body to ensure it floats above everything without stacking context interference
  if (mounted && typeof document !== 'undefined') {
    return createPortal(introContent, document.body);
  }

  // Pre-hydration SSR fallback
  return introContent;
}
