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
      className={`relative w-full overflow-hidden rounded-xl border border-dashed border-[var(--tx-border)] bg-[var(--tx-surface-secondary)] tx-surface-secondary group ${aspectClass} ${className}`}
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
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[var(--tx-border-strong)] pointer-events-none" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[var(--tx-border-strong)] pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[var(--tx-border-strong)] pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[var(--tx-border-strong)] pointer-events-none" />

      {/* Top Bar (Clean section tag when details enabled) */}
      {showDetails && meta.section && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase bg-[var(--tx-card)] text-[var(--tx-text-secondary)] border border-[var(--tx-border)] shadow-xs">
            {meta.section}
          </span>
        </div>
      )}

      {/* Target dimensions tag in top-right */}
      {showDetails && (
        <div className="absolute top-3 right-3 z-10 text-[11px] font-mono font-semibold text-[var(--tx-text-secondary)] bg-[var(--tx-card)] px-2 py-0.5 rounded border border-[var(--tx-border)] shadow-xs">
          {meta.width} × {meta.height} ({activeAspect})
        </div>
      )}

      {/* Center Content: Intentionally clean, automotive placeholder indicator */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
        {/* Stylized camera aperture / photographic reticle */}
        <div className="w-12 h-12 rounded-full border border-[var(--tx-border)] flex items-center justify-center mb-3 bg-[var(--tx-surface)] shadow-sm">
          <svg
            className="w-5 h-5 text-neutral-500 dark:text-neutral-300"
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

        <p className="text-xs sm:text-sm font-semibold text-[var(--tx-text-primary)] max-w-[85%] leading-tight">
          {customLabel || meta.title}
        </p>

        {showDetails && (
          <p className="mt-1 text-[11px] text-[var(--tx-text-secondary)] max-w-[80%] line-clamp-2">
            {meta.description}
          </p>
        )}
      </div>
    </div>
  );
}
