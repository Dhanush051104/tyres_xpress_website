'use client';

import React from 'react';
import Link from 'next/link';

interface TyresXpressLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'adaptive' | 'light' | 'dark' | 'on-white';
  showTagline?: boolean;
  asLink?: boolean;
}

export function TyresXpressLogo({
  className = '',
  size = 'md',
  variant = 'adaptive',
  showTagline = true,
  asLink = true,
}: TyresXpressLogoProps) {
  // Dimensions based on size
  const heights = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  const isLightOnly = variant === 'on-white' || variant === 'light';

  const logoContent = (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Precision Engineered Alloy Wheel Icon */}
      <svg
        className={`${heights[size]} w-auto aspect-square flex-shrink-0 transition-transform duration-300 hover:rotate-12`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Metallic rim gradient */}
          <linearGradient id="txAlloyGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="35%" stopColor="#94A3B8" />
            <stop offset="65%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Spoke face metallic gradient */}
          <linearGradient id="txSpokeGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Deep wheel well barrel */}
          <radialGradient id="txBarrelGrad" cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
            <stop offset="65%" stopColor="#0B0B0E" />
            <stop offset="100%" stopColor="#1E2024" />
          </radialGradient>
        </defs>

        {/* 1. Outer Performance Tyre Silhouette */}
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="#0C0D0E"
          stroke="currentColor"
          strokeWidth="2.5"
          className={isLightOnly ? 'text-neutral-900' : 'text-neutral-900 dark:text-neutral-300'}
        />

        {/* 2. Perimeter Tyre Tread Siping */}
        <g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={isLightOnly ? 'text-neutral-600' : 'text-neutral-600 dark:text-neutral-500'}
        >
          <line x1="50" y1="3" x2="50" y2="7" />
          <line x1="72" y1="9" x2="70" y2="13" />
          <line x1="89" y1="25" x2="85" y2="28" />
          <line x1="97" y1="50" x2="93" y2="50" />
          <line x1="89" y1="75" x2="85" y2="72" />
          <line x1="72" y1="91" x2="70" y2="87" />
          <line x1="50" y1="97" x2="50" y2="93" />
          <line x1="28" y1="91" x2="30" y2="87" />
          <line x1="11" y1="75" x2="15" y2="72" />
          <line x1="3" y1="50" x2="7" y2="50" />
          <line x1="11" y1="25" x2="15" y2="28" />
          <line x1="28" y1="9" x2="30" y2="13" />
        </g>

        {/* 3. Recessed Wheel Barrel (Deep Well) */}
        <circle cx="50" cy="50" r="41.5" fill="url(#txBarrelGrad)" />

        {/* 4. Subtle Performance Brake Caliper Peek (TyresXpress Red Accent) */}
        <path
          d="M 68 24 A 36 36 0 0 1 85 46 L 78 48 A 29 29 0 0 0 64 30 Z"
          fill="#DC2626"
          opacity="0.95"
        />

        {/* 5. Precision Machined Outer Rim Lip */}
        <circle
          cx="50"
          cy="50"
          r="41"
          fill="none"
          stroke="url(#txAlloyGrad)"
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          r="37.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={isLightOnly ? 'text-neutral-700' : 'text-neutral-700 dark:text-neutral-400'}
        />

        {/* 6. Sculpted 5-Twin-Spoke Forged Alloy Wheel Architecture */}
        <g fill="url(#txSpokeGrad)" stroke="#475569" strokeWidth="0.5">
          {/* Spoke 0: Top (0°) */}
          <path d="M 47.5 36.5 L 43.5 14.5 L 47 14.2 L 49.5 34 Z" />
          <path d="M 52.5 36.5 L 56.5 14.5 L 53 14.2 L 50.5 34 Z" />

          {/* Spoke 1: Top-Right (72°) */}
          <path d="M 60.5 44.5 L 82.5 31.5 L 84 34.5 L 62.5 47 Z" />
          <path d="M 62 48.5 L 86 42.5 L 84 45.5 L 61 50 Z" />

          {/* Spoke 2: Bottom-Right (144°) */}
          <path d="M 58 58.5 L 75 75.5 L 72.5 78 L 56 61 Z" />
          <path d="M 54.5 61 L 67 82 L 64 83.5 L 52.5 62 Z" />

          {/* Spoke 3: Bottom-Left (216°) */}
          <path d="M 45.5 61 L 33 82 L 36 83.5 L 47.5 62 Z" />
          <path d="M 42 58.5 L 25 75.5 L 27.5 78 L 44 61 Z" />

          {/* Spoke 4: Top-Left (288°) */}
          <path d="M 38 48.5 L 14 42.5 L 16 45.5 L 39 50 Z" />
          <path d="M 39.5 44.5 L 17.5 31.5 L 16 34.5 L 37.5 47 Z" />
        </g>

        {/* 7. Precision Center Hub Collar */}
        <circle cx="50" cy="50" r="13" fill="#1E2024" stroke="url(#txAlloyGrad)" strokeWidth="1.5" />

        {/* 8. 5-Lug Bolt Pattern (Pentagonal PCD) */}
        <g fill="#CBD5E1">
          <circle cx="50" cy="41" r="1.4" />
          <circle cx="58.5" cy="47.2" r="1.4" />
          <circle cx="55.3" cy="57.1" r="1.4" />
          <circle cx="44.7" cy="57.1" r="1.4" />
          <circle cx="41.5" cy="47.2" r="1.4" />
        </g>

        {/* 9. Center Cap: TyresXpress Red Jewel with Metallic Bezel */}
        <circle cx="50" cy="50" r="5.5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="48.8" cy="48.8" r="1.5" fill="#FFFFFF" opacity="0.8" />
      </svg>

      {/* Typography: Bold, Italic Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight font-black italic uppercase">
          <span
            className={`tx-text-transition text-xl sm:text-2xl font-extrabold tracking-tighter ${
              isLightOnly ? 'text-neutral-950' : 'text-[var(--tx-text-primary)]'
            }`}
            style={{ fontStyle: 'italic', letterSpacing: '-0.03em' }}
          >
            TYRES
          </span>
          <span
            className="text-xl sm:text-2xl font-black italic ml-1 tracking-tight text-[var(--tx-brand-red)]"
            style={{ fontStyle: 'italic', letterSpacing: '-0.02em' }}
          >
            XPRESS
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`tx-text-transition text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase ${
                isLightOnly ? 'text-neutral-500' : 'text-[var(--tx-text-muted)]'
              }`}
            >
              MULTI-BRAND TYRE HUBS
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--tx-brand-red)] inline-block" />
            <span
              className={`tx-text-transition text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase ${
                isLightOnly ? 'text-neutral-400' : 'text-[var(--tx-text-muted)]'
              }`}
            >
              BENGALURU
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-0.5 transition-opacity hover:opacity-90 inline-block"
        aria-label="TyresXpress - Return to Homepage"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
