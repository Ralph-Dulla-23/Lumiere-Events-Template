import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export const CustomCursor = () => {
  const cursorPoint = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    
    document.documentElement.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      cursorPoint.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('data-cursor') === 'hover'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block",
        "bg-white transition-all duration-300 ease-out"
      )}
      style={{
        transform: 'translate(-50%, -50%)',
        width: isHovering ? '64px' : '12px',
        height: isHovering ? '64px' : '12px',
        opacity: isHovering ? 0.8 : 1,
      }}
    />
  );
};

export const Magnetic = ({ children }: { children: React.ReactElement }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export const RevealText = ({ children, delayOffset = 0, className = "" }: { children: string | ReactNode, delayOffset?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={cn("overflow-hidden block", className)}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: delayOffset }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const SectionTag = ({ text, light = false }: { text: string, light?: boolean }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className={cn("w-8 h-[1px]", light ? "bg-white/40" : "bg-gold")} />
    <span className={cn("text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium", light ? "text-white/60" : "text-gold")}>
      {text}
    </span>
  </div>
);

export const GoldButton = ({ text, outline = false, className = "", to, href, onClick }: { text: string, outline?: boolean, className?: string, to?: string, href?: string, onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void }) => {
  const btnClass = cn(
    "inline-block px-8 py-3 rounded-full text-[12px] uppercase tracking-[0.12em] transition-all duration-500 cursor-pointer",
    outline 
      ? "border border-gold text-gold hover:bg-gold hover:text-white" 
      : "bg-gold text-white hover:bg-[#A6824D] shadow-sm",
    className
  );

  const content = (
    <Magnetic>
      <div className={btnClass}>
        {text}
      </div>
    </Magnetic>
  );

  if (to) {
    return <Link to={to} onClick={onClick as any}>{content}</Link>;
  }

  if (href) {
    return <a href={href} onClick={onClick as any}>{content}</a>;
  }

  return <button className="p-0 border-none bg-transparent" onClick={onClick as any}>{content}</button>;
};

export const Counter = ({ value, label }: { value: string, label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-center relative z-10 px-4">
      <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-2">
        {isInView ? count : 0}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
        {label}
      </div>
    </div>
  );
};
