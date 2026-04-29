import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { RevealText, SectionTag } from '../components/ui/SharedUI';
import { CTABanner } from '../components/ui/CTABanner';
import { cn } from '../lib/utils';

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]); // Horizontal scroll equivalent

  const images = [
    "https://images.unsplash.com/photo-1519225495045-3b363d688845?",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?",
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?",
  ];

  return (
    <>
      <div className="bg-charcoal text-white pt-32 selection:bg-gold/30 selection:text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-24 text-center md:text-left">
          <SectionTag text="Visual Narratives" light />
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 font-serif leading-[1.1]">
            <RevealText>A Glimpse into</RevealText>
            <RevealText delayOffset={0.1}><span className="italic text-gold">Our World</span></RevealText>
          </h1>
          <p className="text-white/60 max-w-[500px] text-[15px] font-sans">
            Scroll down to journey through our curated horizontal gallery showcasing our most beloved occasions.
          </p>
        </div>

        {/* Horizontal GSAP-like Scroll Section */}
        <section ref={targetRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-[100dvh] flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-12 px-6 md:px-12 w-[300vw]">
               {images.map((img, i) => (
                  <div key={i} className="w-[80vw] md:w-[60vw] lg:w-[45vw] h-[60vh] shrink-0 relative group cursor-pointer overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url(${img}q=80&w=2070&auto=format&fit=crop)` }}
                    />
                    <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="text-[12px] uppercase tracking-widest text-white border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm bg-black/20">
                        View Project
                      </span>
                    </div>
                  </div>
               ))}
            </motion.div>
          </div>
        </section>
      </div>

      <CTABanner />
    </>
  );
}
