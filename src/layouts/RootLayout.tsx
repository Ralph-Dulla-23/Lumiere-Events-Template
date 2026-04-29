import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import { CustomCursor } from '../components/ui/SharedUI';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[1000] bg-page-bg flex flex-col items-center justify-center pointer-events-none"
      initial={{ y: 0 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif tracking-widest text-charcoal flex"
        >
          Lumière <span className="italic text-gold ml-3 font-light">Events</span>
        </motion.div>
      </div>
      <motion.div 
        className="h-[1px] bg-gold mt-6 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "circInOut", delay: 0.8 }}
        style={{ width: "200px" }}
      />
    </motion.div>
  );
};

export const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Lenis Smooth Scroll initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    if (loading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-page-bg selection:bg-gold/30 selection:text-charcoal relative min-h-screen flex flex-col">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main 
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="flex-1"
            >
              <Outlet />
            </motion.main>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  );
};
