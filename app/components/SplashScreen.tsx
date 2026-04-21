'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('splash-seen')) {
      setShow(true);
      const t = setTimeout(() => {
        setShow(false);
        localStorage.setItem('splash-seen', '1');
      }, 1800);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#ffffff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 2.5, opacity: [0, 0.35, 0] }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            style={{
              position: 'absolute', width: 160, height: 160,
              borderRadius: '50%', background: '#533afd', filter: 'blur(50px)',
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <img src="/logo.png" alt="志成コンサル" style={{ height: 52, display: 'block' }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
