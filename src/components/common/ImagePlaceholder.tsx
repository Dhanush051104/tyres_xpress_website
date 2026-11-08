'use client';

import React from 'react';
import { getImageMeta } from '@/data/imageManifest';

interface ImagePlaceholderProps {
  id: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string; // override if needed
  customLabel?: string;
  showDetails?: boolean;
}

export function ImagePlaceholder({
  id,
  className = '',
  aspectRatio,
  customLabel,
  showDetails = true,
}: ImagePlaceholderProps) {
  const meta = getImageMeta(id);
  const activeAspect = aspectRatio || meta.aspectRatio;

  // Convert aspect ratio format (e.g., '16/9' or '4/3')
  const aspectClass =
    activeAspect === '16/9'
      ? 'aspect-[16/9]'
      : activeAspect === '4/3'
      ? 'aspect-[4/3]'
      : activeAspect === '3/2'
      ? 'aspect-[3/2]'
      : activeAspect === '16/10'
      ? 'aspect-[16/10]'
      : 'aspect-[4/3]';

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-dashed border-neutral-300 dark:border-[#303036] bg-neutral-100/80 dark:bg-[#151519]/90 transition-all duration-200 group ${aspectClass} ${className}`}
      data-placeholder-id={id}
      data-target-path={meta.targetPath}
      aria-label={`${meta.title} (Placeholder ${id})`}
      role="img"
    >
      {/* Subtle background technical grid markings */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Crosshair precision marks in 4 corners */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-neutral-400 dark:border-neutral-600 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-neutral-400 dark:border-neutral-600 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-neutral-400 dark:border-neutral-600 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-neutral-400 dark:border-neutral-600 pointer-events-none" />

      {/* Top Bar with Clear ID Tag */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-bold tracking-wider bg-white dark:bg-[#202024] text-red-600 dark:text-[#F28C28] border border-neutral-200 dark:border-[#303036] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-[#F28C28] mr-1.5 animate-pulse" />
          {id}
        </span>
        <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-neutral-200/80 dark:bg-[#202024]/80 text-neutral-600 dark:text-neutral-400">
          {meta.section}
        </span>
      </div>

      {/* Target dimensions tag in top-right */}
      <div className="absolute top-3 right-3 z-10 text-[11px] font-mono font-semibold text-neutral-500 dark:text-neutral-500 bg-white/70 dark:bg-[#202024]/70 px-2 py-0.5 rounded border border-neutral-200/60 dark:border-[#303036]/60">
        {meta.width} × {meta.height} ({activeAspect})
      </div>

      {/* Center Content: Intentionally clean, automotive placeholder indicator */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
        {/* Stylized camera aperture / photographic reticle */}
        <div className="w-12 h-12 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center mb-3 bg-white/50 dark:bg-[#151519]/50 shadow-sm">
          <svg
            className="w-5 h-5 text-neutral-400 dark:text-neutral-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="14" x="3" y="5" rx="2" />
            <circle cx="12" cy="12" r="3" />
            <path d="M7 5V3" />
            <path d="M17 5V3" />
          </svg>
        </div>

        <p className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 max-w-[85%] leading-tight">
          {customLabel || meta.title}
        </p>

        {showDetails && (
          <p className="mt-1 text-[11px] text-neutral-500 dark:text-neutral-400 max-w-[80%] line-clamp-2">
            {meta.description}
          </p>
        )}

        {/* Manifest link hint */}
        <div className="mt-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-tight">
          Target: <code className="text-neutral-600 dark:text-neutral-400">{meta.targetPath}</code>
        </div>
      </div>
    </div>
  );
}
