import { motion } from 'motion/react';
import { GoldButton } from './SharedUI';

export const CTABanner = () => {
  return (
    <section className="py-24 bg-page-bg px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] mx-auto bg-surface rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row relative shadow-sm"
      >
        {/* Text Content */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center">
          <h2 className="text-[2.25rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-charcoal">
            So, What's a Dream <br/>Wedding Like to You?
          </h2>
          <p className="text-muted text-[15px] mb-10 max-w-[400px]">
            Contact us now and we'll partner with the finest vendors to ensure your vision comes true with effortless elegance.
          </p>
          <div>
            <GoldButton text="Contact Us" to="/contact" />
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 flex items-stretch">
           <div 
             className="w-full h-full min-h-[300px] sm:min-h-[350px] rounded-[1.5rem] md:rounded-[2rem] bg-cover bg-center"
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop")' }}
           />
        </div>
      </motion.div>
    </section>
  );
};
