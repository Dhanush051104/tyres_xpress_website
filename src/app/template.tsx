'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'motion/react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // On the homepage, do not apply Motion transforms so full-screen overlays (CinematicIntro) are not trapped in a transformed containing block
  const isHome = pathname === '/';

  if (isHome) {
    return <div className="w-full flex-1 flex flex-col">{children}</div>;
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.28,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="w-full flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}
