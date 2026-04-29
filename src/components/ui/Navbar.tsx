import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Magnetic, GoldButton } from './SharedUI';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { pathname } = useLocation();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const isDarkPage = pathname === '/portfolio';
  const hasDarkBg = !isScrolled && isDarkPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[100] origin-left" 
        style={{ scaleX }}
      />
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 md:py-6",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.02)]" : "bg-transparent",
        isMobileMenuOpen && "!bg-white"
      )}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Magnetic>
            <Link to="/" className={cn(
              "text-2xl font-serif tracking-tight inline-block p-2 relative z-50 transition-colors",
              hasDarkBg && !isMobileMenuOpen ? "text-white" : "text-charcoal"
            )}>
              Lumière <span className="italic text-gold font-light">Events</span>
            </Link>
          </Magnetic>
          
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((item) => (
               <Link 
                 key={item.name} 
                 to={item.path}
                 className={cn(
                   "text-[12px] uppercase tracking-[0.12em] relative group overflow-hidden font-medium",
                   pathname === item.path ? "text-gold" : (hasDarkBg ? "text-white/90 hover:text-white" : "text-charcoal/80 hover:text-charcoal")
                 )}
               >
                 <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item.name}</span>
                 <span className="absolute top-full left-0 text-gold transition-transform duration-300 group-hover:-translate-y-full">{item.name}</span>
               </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <GoldButton 
              text="Let's Talk" 
              to="/contact"
            />
          </div>

          <button 
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className={cn("w-6 h-6", hasDarkBg ? "text-white" : "text-charcoal")} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center pt-20 pb-10 px-6 h-[100dvh]"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center border-b border-charcoal/5 pb-6"
                >
                  <Link 
                    to={item.path}
                    className={cn(
                      "text-2xl font-serif tracking-wide block",
                      pathname === item.path ? "text-gold italic" : "text-charcoal"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 w-full flex justify-center"
              >
                <GoldButton 
                  text="Contact Us" 
                  to="/contact"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
