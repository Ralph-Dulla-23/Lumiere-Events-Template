import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { RevealText, SectionTag, GoldButton } from '../components/ui/SharedUI';
import { CTABanner } from '../components/ui/CTABanner';

const servicesList = [
  {
    title: "Wedding Planning & Design",
    subtitle: "From concept to the final dance.",
    description: "Every love story deserves an environment that reflects its unique cadence. We seamlessly blend artistic vision with logistical precision, handling endless details so you can remain present in your joy.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    bullets: ["Venue Sourcing & Curation", "Full-Scale Visual Design", "Vendor Procurement & Management", "Timeline & Logistics Execution"]
  },
  {
    title: "Corporate & Social Event Production",
    subtitle: "Elevating brand experiences and milestone celebrations.",
    description: "Whether it’s a high-stakes executive retreat or a lavish milestone birthday, we construct environments that foster connection and awe. Our production approach guarantees a flawlessly run event where every touchpoint aligns beautifully with your objectives.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    bullets: ["Gala & Summit Planning", "Immersive Brand Experiences", "Private Milestone Parties", "Technical Deck & AV Oversight"]
  },
  {
    title: "Destination Coordination for Planners",
    subtitle: "Your trusted boots on the ground.",
    description: "We partner with international planners to bring their visions to life in our local regions. Acting as your extension, we navigate local nuances, procure elite regional vendors, and ensure your impeccable standards are met.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1887&auto=format&fit=crop",
    bullets: ["Local Vendor Procurement", "Site Visits & Regional Scouting", "Cultural & Logistical Navigating", "On-site Execution Support"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-page-bg">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center mb-24">
        <div className="inline-flex justify-center w-full">
          <SectionTag text="Our Expertise" />
        </div>
        <h1 className="text-[2.75rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl mb-8 font-serif">
          <RevealText>Curated Services for</RevealText>
          <RevealText delayOffset={0.1}>Exceptional Needs</RevealText>
        </h1>
        <p className="text-muted max-w-[600px] mx-auto text-[14px] md:text-[15px]">
          We design and produce events varying in scale and nature, but our approach remains constant: intentional, refined, and entirely bespoke.
        </p>
      </div>

      <div className="flex flex-col gap-32">
        {servicesList.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}>
              
              {/* Image side */}
              <div className="w-full md:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, clipPath: "inset(10% 0 10% 0)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className="aspect-[4/5] overflow-hidden group"
                >
                  <motion.div 
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-[2s]"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </motion.div>
              </div>

              {/* Text side */}
              <div className="w-full md:w-1/2">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-6 font-medium">0{idx + 1}</div>
                <h2 className="text-[2rem] leading-tight md:text-5xl mb-4 font-serif">{service.title}</h2>
                <div className="text-[12px] md:text-[14px] text-charcoal/60 uppercase tracking-widest mb-8 border-b border-gold/20 pb-4 inline-block">{service.subtitle}</div>
                <p className="text-muted text-[14px] md:text-[15px] leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="grid gap-4 mb-10">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-4 text-[14px] text-charcoal/80">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <GoldButton text="Inquire Now" to="/contact" outline />
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-32">
        <CTABanner />
      </div>
    </div>
  );
}
