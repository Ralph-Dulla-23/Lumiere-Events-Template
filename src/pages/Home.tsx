import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, 
  ArrowRight, 
  Calendar, 
  Users, 
  Briefcase,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { RevealText, SectionTag, GoldButton, Magnetic, Counter } from '../components/ui/SharedUI';
import { cn } from '../lib/utils';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] pt-24 md:pt-0 flex flex-col md:flex-row overflow-hidden" id="about">
      {/* Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 watermark-text text-[18vw] leading-none opacity-10 z-0 select-none hidden lg:block font-serif">
        Lumière
      </div>

      {/* Left Column Content */}
      <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:pl-24 pb-16 md:pb-20 relative z-10 bg-page-bg/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
        <motion.div style={{ opacity, y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }} className="max-w-[540px] pt-12 md:pt-32">
          <SectionTag text="Elite Planning & Design" />
          <h1 className="flex flex-col text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl mb-4">
            <RevealText delayOffset={0.2}>Where Every</RevealText>
            <RevealText delayOffset={0.3}><span className="italic text-gold">Moment</span> Becomes</RevealText>
            <RevealText delayOffset={0.4}>a Memory</RevealText>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-[14px] md:text-[15px] text-muted mb-10 max-w-[480px]"
          >
            From intimate celebrations to grand corporate affairs, we blend artistic vision with flawless execution to curate experiences that resonate long after the lights fade.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap items-center gap-8"
          >
            <GoldButton text="View Our Services" to="/services" />
            <Magnetic>
              <Link to="/portfolio" className="text-[12px] uppercase tracking-[0.2em] relative group p-2">
                <span className="relative z-10">See Portfolio</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-charcoal/20 group-hover:bg-gold transition-colors duration-300" />
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column Image Parallax */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 overflow-hidden">
        <motion.div 
          className="absolute inset-[-10%] bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop")',
            y 
          }}
        />
        
        {/* Floating Overlap Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="absolute -bottom-12 -left-12 w-64 h-80 border-[12px] border-white shadow-2xl hidden lg:block overflow-hidden"
          data-cursor="hover"
        >
          <motion.div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop")',
              y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
            }}
          />
        </motion.div>

        {/* Circular Badge */}
        <Magnetic>
          <div className="absolute top-12 right-12 bg-white/90 backdrop-blur-md p-8 rounded-full border border-gold/20 flex flex-col items-center justify-center text-center w-40 h-40 shadow-xl cursor-default">
            <span className="text-4xl font-serif text-gold leading-none mb-1">10+</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted leading-tight">Years of<br/>Excellence</span>
          </div>
        </Magnetic>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      num: '01',
      icon: <Calendar className="w-8 h-8 text-gold stroke-[1px]" />,
      title: 'Wedding Planning',
      desc: 'Full-service curation for your most significant day. We handle everything from venue sourcing to the finest tabletop details.',
    },
    {
      num: '02',
      icon: <Briefcase className="w-8 h-8 text-gold stroke-[1px]" />,
      title: 'Event Management',
      desc: 'Seamless execution for corporate and social gatherings. Logistics, coordination, and production handled with precision.',
    },
    {
      num: '03',
      icon: <Users className="w-8 h-8 text-gold stroke-[1px]" />,
      title: 'Planner Partnerships',
      desc: 'Dedicated support for fellow professionals. We act as your boots-on-the-ground partner for destination coordination.',
    }
  ];

  return (
    <section className="bg-white section-padding" id="services">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <SectionTag text="Our Expertise" />
          <h2 className="text-[2.25rem] leading-tight md:text-5xl lg:text-6xl mb-6">
            <RevealText>One Team. Every Kind of Event.</RevealText>
          </h2>
          <p className="text-muted max-w-[600px] mx-auto text-[14px] md:text-[15px]">From intimate weddings to large-scale corporate summits, our methodology remains consistent: refined, calm, and exceptional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0.5 bg-transparent md:bg-surface">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group bg-white p-8 md:p-12 lg:p-16 transition-colors duration-500 hover:bg-page-bg relative overflow-hidden rounded-2xl md:rounded-none"
            >
              <span className="text-[12px] font-sans font-medium text-gold mb-8 block tracking-widest">{service.num}</span>
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500 origin-left">{service.icon}</div>
              <h3 className="text-2xl md:text-3xl mb-6 font-serif">{service.title}</h3>
              <p className="text-muted text-[14px] leading-relaxed mb-8">{service.desc}</p>
              <Link to="/services" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-charcoal group-hover:text-gold transition-colors">
                Explore More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="bg-page-bg section-padding overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        {/* Left Column: Layered Images */}
        <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[600px] group">
          <motion.div 
            className="absolute top-0 right-0 w-[80%] h-[80%] overflow-hidden shadow-2xl"
          >
            <motion.div 
              className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-[2s]" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop")', y: y1 }} 
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-0 w-[60%] h-[50%] border-[10px] border-white shadow-xl overflow-hidden"
          >
            <motion.div 
              className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-[2s]" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522673607200-164883eecd0c?q=80&w=1776&auto=format&fit=crop")', y: y2 }} 
            />
          </motion.div>
          
          <div className="absolute right-0 top-1/4 h-32 w-8 flex items-center justify-center bg-gold/10 border-r-2 border-gold backdrop-blur-sm">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gold whitespace-nowrap rotate-90">
              Est. 2014
            </span>
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="w-full md:w-1/2">
          <SectionTag text="Our Philosophy" />
          <h2 className="text-[2.5rem] leading-tight md:text-5xl lg:text-6xl mb-8 flex flex-col">
            <RevealText>We Plan Events.</RevealText>
            <RevealText delayOffset={0.1}><span className="italic text-gold">You Make Memories.</span></RevealText>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-[2px] bg-gold mb-10"
          />
          
          <p className="text-muted mb-8 leading-relaxed">
            Lumière was founded on a simple belief: the most profound moments are often the ones you don't notice being handled. We operate with a "quiet luxury" ethos—prioritizing depth, quality, and atmosphere over obvious trends.
          </p>

          <ul className="grid grid-cols-1 gap-4 mb-10">
            {['Bespoke Vendor Sourcing', 'Global Destination Management', 'Technical Production Oversight', 'Full-Service Styling & Design'].map((item, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 text-[14px] pb-4 border-b border-charcoal/5 italic text-charcoal/80 serif"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(184,147,90,0.5)]" />
                {item}
              </motion.li>
            ))}
          </ul>

          <GoldButton text="Our Story" />
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  return (
    <section className="bg-surface py-20 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 watermark-text text-[15vw] leading-none opacity-5 z-0 font-serif">
        Numbers
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative z-10">
        <Counter value="300+" label="Successful Events" />
        <div className="hidden lg:block absolute left-1/4 h-24 w-[1px] bg-gold/20 top-1/2 -translate-y-1/2" />
        
        <Counter value="10+" label="Years of Experience" />
        <div className="hidden lg:block absolute left-2/4 h-24 w-[1px] bg-gold/20 top-1/2 -translate-y-1/2" />
        
        <Counter value="150+" label="Planner Partners" />
        <div className="hidden lg:block absolute left-3/4 h-24 w-[1px] bg-gold/20 top-1/2 -translate-y-1/2" />
        
        <Counter value="98%" label="Client Satisfaction" />
      </div>
    </section>
  );
};

const Gallery = () => {
  const items = [
    { url: 'https://images.unsplash.com/photo-1519225495045-3b363d688845?q=80&w=2070&auto=format&fit=crop', span: 'md:col-span-2 md:row-span-2' },
    { url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-2' },
    { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1742&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1887&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1961&auto=format&fit=crop', span: 'md:col-span-2 md:row-span-1' },
  ];

  return (
    <section className="bg-white section-padding" id="portfolio">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionTag text="Our Portfolio" />
            <h2 className="text-[2.5rem] leading-tight md:text-5xl">
              <RevealText>Weddings, Events, &</RevealText>
              <RevealText delayOffset={0.1}>Everything Between</RevealText>
            </h2>
          </div>
          <Magnetic>
            <Link to="/portfolio" className="hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-gold transition-colors p-2">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnetic>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-2 h-auto md:h-[800px]">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, clipPath: "inset(10% 0 10% 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.05, duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className={cn("relative overflow-hidden group cursor-pointer rounded-2xl md:rounded-none col-span-1 h-[300px] md:h-auto", item.span)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${item.url})` }}
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const tiers = [
    {
      label: 'Standard',
      title: 'Essential Planning',
      desc: 'Perfect for local events requiring refined logistical coordination and vendor management.',
      features: ['Vendor Communication', 'Timeline Creation', 'Site Visits', 'Execution Phase'],
      button: 'Request Proposal',
      inverted: false
    },
    {
      label: 'Most Popular',
      title: 'Full-Service Design',
      desc: 'Our flagship tier for grand weddings and marquee events. From concept to clear-out.',
      features: ['Visual Concepting', 'Budget Projection', 'Unlimited Consulting', 'Full Vendor Curation'],
      button: 'Start Your Journey',
      inverted: true
    },
    {
      label: 'Corporate',
      title: 'Event Production',
      desc: 'Specialized for high-end corporate summits, galas, and professional network gatherings.',
      features: ['Logistics Management', 'Sponsorship Liason', 'Registration Oversight', 'Technical Deck Design'],
      button: 'Request Quote',
      inverted: false
    }
  ];

  return (
    <section className="bg-page-bg section-padding relative" id="packages">
      <div className="absolute top-0 right-0 watermark-text text-[12vw] opacity-10 font-serif leading-none pt-24 pr-12 select-none tracking-tight">
        Plans
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <div className="text-center mb-24">
          <div className="inline-flex justify-center w-full">
            <SectionTag text="Our Packages" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <RevealText>Choose What Fits Your Event</RevealText>
          </h2>
          <p className="text-muted max-w-[600px] mx-auto">Flexible involvement levels designed to give you peace of mind while we handle the complexity.</p>
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
              
              <ul className="grid gap-5 mb-12">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[13px]">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gold/10">
                      <ChevronRight className="w-3 h-3 text-gold" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <GoldButton text={tier.button} outline={!tier.inverted} className="w-full" to="/packages" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      tag: 'Wedding',
      quote: "The level of detail was simply unparalleled. They didn't just plan a wedding; they created a space for our families to unite without a single worry.",
      author: 'Sophia & Julian',
      role: 'Cape Town, 2023',
      initials: 'SJ'
    },
    {
      tag: 'Corporate',
      quote: "Lumière handles the high-pressure environment of executive summits with a calm that is contagious. Truly a world-class production partner.",
      author: 'Marcus Thorne',
      role: 'CEO, Veridian Group',
      initials: 'MT'
    },
    {
      tag: 'Planner',
      quote: "We refer all our destination clients to Lumière. Their local expertise and refined aesthetic make them the only choice for destination events.",
      author: 'Isabella Grey',
      role: 'Luxury Event Designer',
      initials: 'IG'
    }
  ];

  return (
    <section className="bg-surface section-padding">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20 flex flex-col items-center">
          <SectionTag text="Client Stories" />
          <h2 className="text-[2.5rem] leading-tight md:text-5xl lg:text-6xl">
            <RevealText>Real Stories From</RevealText>
            <RevealText delayOffset={0.1}>Real Clients</RevealText>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-white p-8 sm:p-12 relative hover:shadow-xl transition-shadow duration-500 rounded-2xl md:rounded-none"
            >
              <div className="absolute top-8 right-8 text-[9px] uppercase tracking-[0.2em] text-gold font-medium">
                {rev.tag}
              </div>
              <Quote className="absolute top-12 left-12 w-16 h-16 text-gold opacity-10 stroke-[0.5]" />
              
              <div className="relative z-10">
                <p className="text-[17px] font-serif italic text-charcoal/90 mb-10 leading-relaxed">
                  "{rev.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/10 font-serif text-gold">
                    {rev.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-charcoal">{rev.author}</div>
                    <div className="text-[10px] uppercase tracking-[0.1em] text-muted">{rev.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquirySection = () => {
  return (
    <section className="bg-page-bg section-padding overflow-hidden" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left Map Area */}
        <div className="relative h-[400px] md:h-[650px] group overflow-hidden bg-surface rounded-2xl md:rounded-none">
          <div className="absolute inset-0 z-0">
             <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280010996!2d-74.14448737274075!3d40.69763123307521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
          <div className="absolute inset-0 border-[20px] border-white/20 m-6 z-20 pointer-events-none hidden md:block" />
          
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 border border-charcoal/5 z-20">
            <h4 className="font-serif text-xl mb-2 text-charcoal">Lumière Studio</h4>
            <p className="text-[13px] text-muted mb-1">123 Elegance Avenue, Suite 400</p>
            <p className="text-[13px] text-muted mb-4">New York, NY 10012</p>
            <a href="mailto:hello@lumiere.com" className="text-[12px] uppercase tracking-widest text-gold font-medium hover:text-charcoal transition-colors">hello@lumiere.com</a>
          </div>
        </div>

        {/* Right Form Area */}
        <div>
          <SectionTag text="Start Your Journey" />
          <h2 className="text-[2.5rem] leading-tight md:text-5xl mb-8">
            <RevealText>Let's Create Something</RevealText>
            <RevealText delayOffset={0.1}><span className="italic text-gold">Extraordinary</span></RevealText>
          </h2>
          <div className="w-16 h-[2px] bg-gold mb-10" />
          
          <p className="text-muted mb-6 text-[14px]">
            Every memorable event begins with a conversation. Share the details of your upcoming celebration, and our team will be in touch within 24 hours to schedule what's next.
          </p>

          <form className="grid gap-10 mt-12 group" onSubmit={(e) => e.preventDefault()}>
            <div className="relative overflow-hidden">
              <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-charcoal/20 py-4 min-h-[50px] text-[13px] outline-none focus:border-gold transition-colors placeholder:text-muted/50 peer rounded-none" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 peer-focus:w-full" />
            </div>
            <div className="relative overflow-hidden">
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-charcoal/20 py-4 min-h-[50px] text-[13px] outline-none focus:border-gold transition-colors placeholder:text-muted/50 peer rounded-none" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 peer-focus:w-full" />
            </div>
            <div className="relative overflow-hidden">
              <select defaultValue="" className="w-full bg-transparent border-b border-charcoal/20 py-4 min-h-[50px] text-[13px] outline-none focus:border-gold transition-colors text-muted/80 peer rounded-none appearance-none cursor-pointer">
                <option value="" disabled hidden>What type of service are you looking for?</option>
                <option value="wedding" className="text-charcoal bg-white">Full-Service Wedding Planning</option>
                <option value="corporate" className="text-charcoal bg-white">Corporate Event Design</option>
                <option value="social" className="text-charcoal bg-white">Private Social Celebration</option>
                <option value="destination" className="text-charcoal bg-white">Destination Event</option>
                <option value="other" className="text-charcoal bg-white">Other</option>
              </select>
              {/* Custom arrow for select */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 peer-focus:w-full" />
            </div>
            <div className="relative overflow-hidden">
              <textarea placeholder="Tell us about your event vision..." rows={3} className="w-full bg-transparent border-b border-charcoal/20 py-4 min-h-[50px] text-[13px] outline-none focus:border-gold transition-colors placeholder:text-muted/50 resize-none peer rounded-none" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 peer-focus:w-full" />
            </div>
            
            <div className="pt-6">
              <GoldButton text="Request Consultation" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="bg-gold py-32 relative overflow-hidden text-center" id="newsletter">
      {/* Watermark */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.08 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark-text !text-white text-[25vw] font-serif pointer-events-none select-none z-0"
      >
        Love
      </motion.div>

      <div className="relative z-10 px-6">
        <h2 className="text-white text-[2.75rem] leading-[1.05] sm:text-5xl md:text-7xl lg:text-8xl mb-8">
          <RevealText>Stay Inspired.</RevealText>
          <RevealText delayOffset={0.1}>Stay Informed.</RevealText>
        </h2>
        <p className="text-white/70 max-w-[500px] mx-auto mb-16 text-[15px]">
          Join our seasonal circle for exclusive venue reveals, design trends, and agency insights.
        </p>

        <div className="max-w-[540px] mx-auto flex flex-col sm:flex-row gap-4 group">
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="flex-1 min-h-[50px] px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/10 rounded-full text-white placeholder:text-white/60 outline-none focus:bg-white/30 transition-all font-light focus:border-white/40"
          />
          <Magnetic>
            <button className="min-h-[50px] px-10 py-4 w-full sm:w-auto bg-white text-gold rounded-full uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-charcoal hover:text-white transition-all shadow-xl">
              Subscribe
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <StatsBar />
      <Gallery />
      <Packages />
      <Testimonials />
      <InquirySection />
      <Newsletter />
    </>
  );
}
