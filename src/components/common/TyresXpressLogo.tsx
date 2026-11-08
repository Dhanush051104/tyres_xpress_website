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

  const logoContent = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Tyre Icon / Vector Illustration */}
      <svg
        className={`${heights[size]} w-auto aspect-square flex-shrink-0 transition-transform duration-300 hover:rotate-12`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer tyre tread silhouette */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="currentColor"
          strokeWidth="6"
          className={
            variant === 'on-white'
              ? 'text-neutral-900'
              : 'text-neutral-900 dark:text-neutral-100'
          }
        />

        {/* Aggressive angled tyre tread lugs around perimeter */}
        <g
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          className={
            variant === 'on-white'
              ? 'text-red-600'
              : 'text-red-600 dark:text-[#F28C28]'
          }
        >
          {/* 12 radial tread grooves angled for dynamic motion */}
          <line x1="50" y1="4" x2="52" y2="12" />
          <line x1="73" y1="10" x2="71" y2="18" />
          <line x1="90" y1="27" x2="84" y2="33" />
          <line x1="96" y1="50" x2="88" y2="52" />
          <line x1="90" y1="73" x2="84" y2="67" />
          <line x1="73" y1="90" x2="71" y2="82" />
          <line x1="50" y1="96" x2="48" y2="88" />
          <line x1="27" y1="90" x2="29" y2="82" />
          <line x1="10" y1="73" x2="16" y2="67" />
          <line x1="4" y1="50" x2="12" y2="48" />
          <line x1="10" y1="27" x2="16" y2="33" />
          <line x1="27" y1="10" x2="29" y2="18" />
        </g>

        {/* Inner rim ring */}
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="currentColor"
          strokeWidth="4"
          className={
            variant === 'on-white'
              ? 'text-neutral-800'
              : 'text-neutral-800 dark:text-neutral-300'
          }
        />

        {/* Alloy wheel 5-split spoke design */}
        <g
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          className={
            variant === 'on-white'
              ? 'text-neutral-900'
              : 'text-neutral-900 dark:text-neutral-100'
          }
        >
          <line x1="50" y1="50" x2="50" y2="22" />
          <line x1="50" y1="50" x2="76" y2="41" />
          <line x1="50" y1="50" x2="66" y2="73" />
          <line x1="50" y1="50" x2="34" y2="73" />
          <line x1="50" y1="50" x2="24" y2="41" />
        </g>

        {/* Center hub with brand red / mandarin orange accent */}
        <circle
          cx="50"
          cy="50"
          r="10"
          className={
            variant === 'on-white'
              ? 'fill-red-600'
              : 'fill-red-600 dark:fill-[#F28C28]'
          }
        />
        <circle cx="50" cy="50" r="4" fill="#FFFFFF" />

        {/* Dynamic speed motion streaks */}
        <path
          d="M12 20 L28 20 M8 26 L22 26 M14 14 L24 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={
            variant === 'on-white'
              ? 'text-red-500 opacity-90'
              : 'text-red-600 dark:text-[#FF9F43] opacity-90'
          }
        />
      </svg>

      {/* Typography: Bold, Italic Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight font-black italic uppercase">
          <span
            className={`transition-colors text-xl sm:text-2xl font-extrabold tracking-tighter ${
              variant === 'on-white'
                ? 'text-neutral-950'
                : 'text-neutral-950 dark:text-white'
            }`}
            style={{ fontStyle: 'italic', letterSpacing: '-0.03em' }}
          >
            TYRES
          </span>
          <span
            className={`transition-colors text-xl sm:text-2xl font-black italic ml-1 tracking-tight ${
              variant === 'on-white'
                ? 'text-red-600'
                : 'text-red-600 dark:text-[#F28C28]'
            }`}
            style={{ fontStyle: 'italic', letterSpacing: '-0.02em' }}
          >
            XPRESS
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase ${
                variant === 'on-white'
                  ? 'text-neutral-500'
                  : 'text-neutral-500 dark:text-neutral-400'
              }`}
            >
              MULTI-BRAND TYRE HUBS
            </span>
            <span className="w-1 h-1 rounded-full bg-red-600 dark:bg-[#F28C28] inline-block" />
            <span
              className={`text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase ${
                variant === 'on-white'
                  ? 'text-neutral-400'
                  : 'text-neutral-400 dark:text-neutral-500'
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
