'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function commitDomTheme(
  effectiveTheme: 'light' | 'dark',
  stateUpdater: () => void
) {
  const root = document.documentElement;
  root.classList.add('tx-theme-snap');
  flushSync(() => {
    stateUpdater();
  });
  if (effectiveTheme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  // Force synchronous style flush while element-level transitions are suppressed
  void root.offsetHeight;
  root.classList.remove('tx-theme-snap');
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Read from localStorage if present
    const savedTheme = localStorage.getItem('tx-theme') as Theme | null;
    const initialTheme: Theme = savedTheme || 'system';
    setThemeState(initialTheme);

    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effectiveTheme = initialTheme === 'system' ? (systemDark ? 'dark' : 'light') : initialTheme;
    setResolvedTheme(effectiveTheme);

    if (effectiveTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const currentStored = localStorage.getItem('tx-theme') as Theme | null;
      if (!currentStored || currentStored === 'system') {
        const newTheme = e.matches ? 'dark' : 'light';
        commitDomTheme(newTheme, () => {
          setResolvedTheme(newTheme);
        });
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem('tx-theme', newTheme);
    } catch {
      // ignore
    }

    let effectiveTheme: 'light' | 'dark' = 'light';
    if (newTheme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      effectiveTheme = newTheme;
    }

    const applyUpdate = () => {
      commitDomTheme(effectiveTheme, () => {
        setThemeState(newTheme);
        setResolvedTheme(effectiveTheme);
      });
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const docWithVT = document as Document & {
      startViewTransition?: (callback: () => void) => unknown;
    };

    if (typeof docWithVT.startViewTransition === 'function' && !prefersReducedMotion) {
      docWithVT.startViewTransition(() => {
        applyUpdate();
      });
    } else {
      applyUpdate();
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }, [resolvedTheme, setTheme]);

  const contextValue = useMemo(
    () => ({ theme, resolvedTheme, setTheme, toggleTheme }),
    [theme, resolvedTheme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
