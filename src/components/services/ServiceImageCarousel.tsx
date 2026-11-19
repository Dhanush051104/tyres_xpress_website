'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceGallery } from '@/data/serviceGalleries';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { getImageMeta } from '@/data/imageManifest';

interface ServiceImageCarouselProps {
  gallery: ServiceGallery;
  priority?: boolean;
  className?: string;
}

export function ServiceImageCarousel({
  gallery,
  priority = false,
  className = '',
}: ServiceImageCarouselProps) {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);

  const slides = gallery.slides;
  const slideCount = slides.length;

  // Touch gesture tracking references
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchMoveX = useRef<number | null>(null);
  const touchMoveY = useRef<number | null>(null);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (slideCount <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const handlePrev = useCallback(() => {
    if (slideCount <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const handleSelect = useCallback(
    (targetIndex: number) => {
      if (targetIndex === currentIndex) return;
      setDirection(targetIndex > currentIndex ? 1 : -1);
      setCurrentIndex(targetIndex);
    },
    [currentIndex]
  );

  // Visibility change listener (pause autoplay when tab is inactive)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Autoplay management:
  // - Runs every 5 seconds (5000ms)
  // - Automatically loops through all slides
  // - Pauses when hovered with mouse, when keyboard-focused, when tab is inactive, or if reduced motion is requested
  // - Clicking controls advances slides and immediately resets the 5s timer without freezing
  useEffect(() => {
    if (slideCount <= 1 || shouldReduceMotion || isHovered || isKeyboardFocused || !isTabActive) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [slideCount, shouldReduceMotion, isHovered, isKeyboardFocused, isTabActive, handleNext, currentIndex]);

  // Pointer hover handlers: only mouse/pen hovers pause, avoiding stuck states on touch devices
  const handlePointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== 'touch') {
      setIsHovered(true);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== 'touch') {
      setIsHovered(false);
    }
  };

  // Keyboard accessibility & focus handling:
  // Only pause autoplay when focus is received via keyboard navigation (:focus-visible).
  // Mouse clicks on controls do not trigger focus lock.
  const handleFocus = (e: React.FocusEvent) => {
    if (e.target.matches?.(':focus-visible')) {
      setIsKeyboardFocused(true);
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsKeyboardFocused(false);
    }
  };

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchMoveX.current = null;
    touchMoveY.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    touchMoveX.current = e.touches[0].clientX;
    touchMoveY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (
      touchStartX.current === null ||
      touchStartY.current === null ||
      touchMoveX.current === null ||
      touchMoveY.current === null
    ) {
      return;
    }

    const deltaX = touchMoveX.current - touchStartX.current;
    const deltaY = touchMoveY.current - touchStartY.current;

    // Only recognize swipe if horizontal movement is dominant (protecting vertical page scroll)
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) * 1.35;
    const swipeThreshold = 40; // minimum pixels to trigger swipe

    if (isHorizontalSwipe && Math.abs(deltaX) >= swipeThreshold) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchStartY.current = null;
    touchMoveX.current = null;
    touchMoveY.current = null;
  };

  // Keyboard navigation for carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  const currentSlide = slides[currentIndex] || slides[0];
  const slideMeta = getImageMeta(currentSlide.placeholderId);
  const slideImageSrc = slideMeta?.readyForUpload ? currentSlide.targetPath : null;

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 35 : -35,
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 30 },
        opacity: { duration: shouldReduceMotion ? 0.05 : 0.28 },
        scale: { duration: shouldReduceMotion ? 0.05 : 0.28 },
      },
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -35 : 35,
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 30 },
        opacity: { duration: shouldReduceMotion ? 0.05 : 0.2 },
      },
    }),
  };

  return (
    <div
      className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[var(--tx-border)] bg-neutral-900 shadow-sm group/carousel select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${className}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={() => {
        // Pointer interactions should clear keyboard focus pause
        setIsKeyboardFocused(false);
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${gallery.serviceTitle} gallery`}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
            role="group"
            aria-roledescription="slide"
            aria-label={`${currentIndex + 1} of ${slideCount}: ${currentSlide.title}`}
          >
            {slideImageSrc ? (
              <Image
                src={slideImageSrc}
                alt={currentSlide.alt}
                fill
                priority={priority && currentIndex === 0}
                sizes="(max-width: 1024px) 100vw, 440px"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/carousel:scale-102"
              />
            ) : (
              <ImagePlaceholder
                id={currentSlide.placeholderId}
                aspectRatio="4/3"
                customLabel={currentSlide.title}
                showDetails={true}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Discreet Previous Arrow Control */}
      {slideCount > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (e.detail > 0) {
              (e.currentTarget as HTMLElement).blur();
            }
            handlePrev();
          }}
          aria-label="Previous slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/55 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 flex items-center justify-center transition-all duration-150 backdrop-blur-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] active:scale-95 shadow-md cursor-pointer opacity-80 group-hover/carousel:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 -translate-x-0.5" />
        </button>
      )}

      {/* Discreet Next Arrow Control */}
      {slideCount > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (e.detail > 0) {
              (e.currentTarget as HTMLElement).blur();
            }
            handleNext();
          }}
          aria-label="Next slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/55 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 flex items-center justify-center transition-all duration-150 backdrop-blur-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] active:scale-95 shadow-md cursor-pointer opacity-80 group-hover/carousel:opacity-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 translate-x-0.5" />
        </button>
      )}

      {/* Bottom Indicators & Slide Dots */}
      {slideCount > 1 && (
        <div className="absolute bottom-2.5 inset-x-0 z-20 flex justify-center items-center pointer-events-auto px-4">
          <div className="flex items-center gap-1.5 max-w-full overflow-x-auto scrollbar-none px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-xs border border-white/15 shadow-sm">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (e.detail > 0) {
                      (e.currentTarget as HTMLElement).blur();
                    }
                    handleSelect(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-full shrink-0 ${
                    isActive
                      ? 'w-4 sm:w-5 h-1.5 bg-[#FF6B00]'
                      : 'w-1.5 h-1.5 bg-white/45 hover:bg-white/80'
                  }`}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
