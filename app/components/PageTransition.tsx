'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PageTransition() {
  const [done, setDone] = useState(false);
  if (done) return null;
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setDone(true)}
      className="fixed inset-0 bg-[#1e40af] z-[9999] pointer-events-none"
    />
  );
}
