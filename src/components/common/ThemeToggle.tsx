'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[var(--tx-border)] bg-[var(--tx-surface-secondary)] ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      whileHover={shouldReduceMotion ? undefined : { scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.92, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[var(--tx-border)] bg-[var(--tx-surface-secondary)] hover:opacity-90 backdrop-blur-md text-[var(--tx-text-primary)] hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 shadow-sm cursor-pointer overflow-hidden tx-surface-secondary ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="sr-only">Toggle theme</span>
      <AnimatePresence initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotate: -45, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 45, scale: 0.8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotate: -45, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 45, scale: 0.8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
