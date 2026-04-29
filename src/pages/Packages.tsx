import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RevealText, SectionTag, GoldButton } from '../components/ui/SharedUI';
import { ChevronRight, Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';
import { CTABanner } from '../components/ui/CTABanner';

const tiers = [
  {
    label: 'Standard',
    title: 'Essential Planning',
    desc: 'Perfect for local events requiring refined logistical coordination and vendor management.',
    features: ['Vendor Communication (8 weeks prior)', 'Comprehensive Timeline Creation', '1 Site Visit', 'Day-of Execution Phase'],
    button: 'Request Proposal',
    inverted: false
  },
  {
    label: 'Most Popular',
    title: 'Full-Service Design',
    desc: 'Our flagship tier for grand weddings and marquee events. From concept to clear-out.',
    features: ['Immersive Visual Concepting', 'Budget Projection & Management', 'Unlimited Consulting', 'Full Vendor Curation', 'Layout & Floorplan Design'],
    button: 'Start Your Journey',
    inverted: true
  },
  {
    label: 'Corporate',
    title: 'Event Production',
    desc: 'Specialized for high-end corporate summits, galas, and professional network gatherings.',
    features: ['Complex Logistics Management', 'Sponsorship Liasoning', 'Registration Oversight', 'Technical Deck Design', 'Post-Event Debriefing'],
    button: 'Request Quote',
    inverted: false
  }
];

const phases = [
  {
    number: "Phase 01",
    title: "Discovery & Concept",
    desc: "We begin with a deep dive into your vision. We establish the budget framework, secure your ideal date and venue, and present a comprehensive design deck that sets the aesthetic tone."
  },
  {
    number: "Phase 02",
    title: "Vendor Curation",
    desc: "Drawing from our exclusive black book of industry partners, we assemble your dream team. We handle all contract negotiations, communications, and logistical alignments on your behalf."
  },
  {
    number: "Phase 03",
    title: "The Blueprint",
    desc: "We build microscopic timelines, 3D floor plans, and technical production schedules. Every contingency is planned for, so you simply review, approve, and feel completely at ease."
  },
  {
    number: "Phase 04",
    title: "Flawless Execution",
    desc: "Our team arrives on-site days prior. From overseeing the marquee build to queuing the string quartet, we orchestrate the entire event behind the scenes so you can remain completely present."
  }
];

const faqs = [
  {
    question: "How far in advance should we secure our date?",
    answer: "For full-service planning, we recommend reaching out 12-18 months prior to your desired date, especially for destination events. For essential planning, 6-9 months is typical."
  },
  {
    question: "Do you travel for destination weddings?",
    answer: "Absolutely. While we are based in Cape Town, our team operates globally. We have robust networks in Europe, the Americas, and across Africa to secure elite local vendors."
  },
  {
    question: "Can we customize these packages?",
    answer: "Yes. Our packages serve as a baseline. After our initial consultation, we will provide a bespoke proposal tailored specifically to the complexity and scale of your event."
  },
  {
    question: "Do you handle the budget management?",
    answer: "In our Full-Service and Corporate tiers, comprehensive budget projection, tracking, and payment scheduling are standard. We ensure every dollar is allocated efficiently to maximize your vision."
  }
];

export default function Packages() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 bg-page-bg">
      {/* --- HERO & PRICING TIERS --- */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <div className="text-center mb-24">
          <div className="inline-flex justify-center w-full">
            <SectionTag text="Our Packages" />
          </div>
          <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl mb-8 font-serif leading-[1.1]">
            <RevealText>Tailored to Your</RevealText>
            <RevealText delayOffset={0.1}>Vision</RevealText>
          </h1>
          <p className="text-muted max-w-[600px] mx-auto text-[15px]">
            We offer transparent, comprehensive service tiers. No hidden fees, no unnecessary stress. Just a clear roadmap to bringing your event to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0.5 bg-transparent lg:bg-surface items-center w-full">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              className={cn(
                "p-8 md:p-12 lg:p-16 flex flex-col h-full transition-all duration-500 relative rounded-2xl lg:rounded-none",
                tier.inverted 
                  ? "bg-dark-footer text-white lg:-translate-y-4 shadow-[0_40px_80px_rgba(0,0,0,0.25)] z-20" 
                  : "bg-white hover:bg-page-bg z-10 shadow-sm lg:shadow-none"
              )}
            >
              {tier.label === 'Most Popular' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white text-[9px] uppercase tracking-[0.3em] font-medium px-4 py-2 rounded-full shadow-lg">
                  {tier.label}
                </div>
              )}
              {tier.label !== 'Most Popular' && (
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4 block">{tier.label}</span>
              )}
              <h3 className={cn("text-2xl md:text-3xl mb-8 font-serif", tier.inverted ? "mt-4" : "")}>{tier.title}</h3>
              <p className={cn("text-[14px] mb-10 leading-relaxed", tier.inverted ? "text-gray-400" : "text-muted")}>{tier.desc}</p>
              
              <div className={cn("w-full h-[1px] mb-10", tier.inverted ? "bg-white/10" : "bg-charcoal/5")} />
              
              <ul className="grid gap-5 mb-12 flex-1">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px]">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gold/10 shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-gold" />
                    </div>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <GoldButton text={tier.button} to="/contact" outline={!tier.inverted} className="w-full text-center" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- THE DEEP DIVE: OUR PROCESS --- */}
      <div className="mt-32 max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <SectionTag text="The Deep Dive" />
          <h2 className="text-[2.5rem] leading-tight md:text-5xl font-serif mb-6 text-charcoal">How We Work</h2>
          <p className="text-muted text-[15px] max-w-[500px] mx-auto">
            A look inside our Full-Service methodology. We break down the overwhelming into a curated, step-by-step journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mt-16">
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <span className="text-gold text-[11px] uppercase tracking-[0.2em] font-medium block mb-4 border-b border-gold/20 pb-2 inline-block">
                {phase.number}
              </span>
              <h3 className="text-2xl font-serif text-charcoal mb-4">{phase.title}</h3>
              <p className="text-muted leading-relaxed text-[15px]">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="mt-40 max-w-[800px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] leading-tight md:text-4xl font-serif text-charcoal mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="border-t border-charcoal/10">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-charcoal/10">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-[16px] font-medium text-charcoal group-hover:text-gold transition-colors">{faq.question}</span>
                <span className="ml-6 shrink-0 bg-surface w-8 h-8 rounded-full flex items-center justify-center border border-charcoal/5 group-hover:border-gold/30 transition-colors">
                  {openFaq === i 
                    ? <Minus className="w-4 h-4 text-charcoal" /> 
                    : <Plus className="w-4 h-4 text-charcoal" />
                  }
                </span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-muted text-[15px] pr-12 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-24">
        <CTABanner />
      </div>
    </div>
  );
}
