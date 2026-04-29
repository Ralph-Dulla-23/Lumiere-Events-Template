import { RevealText, SectionTag, GoldButton } from '../components/ui/SharedUI';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-page-bg min-h-screen flex flex-col items-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Form Container */}
        <div>
          <SectionTag text="Let's Begin" />
          <h1 className="text-5xl md:text-6xl mb-6 font-serif leading-[1.1]">
            <RevealText>Tell us about</RevealText>
            <RevealText delayOffset={0.1}>your vision.</RevealText>
          </h1>
          <p className="text-muted text-[14px] md:text-[15px] mb-12 max-w-[400px]">
            Please fill out our inquiry form. For a more accurate estimation and response, be as detailed as possible.
          </p>

          <form className="grid gap-10 group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative overflow-hidden">
                <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-charcoal/20 py-4 text-[13px] outline-none focus:border-gold transition-colors placeholder:text-muted/50 peer" />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 peer-focus:w-full" />
              </div>
              <div className="relative overflow-hidden">
                <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-charcoal/20 py-4 text-[13px] outline-none focus:border-gold transition-colors placeholder:text-muted/50 peer" />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 peer-focus:w-full" />
              </div>
            </div>

            <div className="relative overflow-hidden">
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-charcoal/20 py-4 text-[13px] outline-none focus:border-gold transition-colors placeholder:text-muted/50 peer" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative overflow-hidden">
                <select className="w-full bg-transparent border-b border-charcoal/20 py-4 text-[13px] outline-none focus:border-gold transition-colors text-charcoal/50 peer appearance-none">
                  <option value="" disabled selected>Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate</option>
                  <option value="social">Social</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 peer-focus:w-full" />
              </div>
              <div className="relative overflow-hidden">
                <input type="date" className="w-full bg-transparent border-b border-charcoal/20 py-4 text-[13px] outline-none focus:border-gold transition-colors text-charcoal/50 peer" />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 peer-focus:w-full" />
              </div>
            </div>

            <div className="relative overflow-hidden">
              <textarea placeholder="Event details, budget, and expectations..." rows={4} className="w-full bg-transparent border-b border-charcoal/20 py-4 text-[13px] outline-none focus:border-gold transition-colors placeholder:text-muted/50 resize-none peer" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 peer-focus:w-full" />
            </div>
            
            <div className="pt-4">
              <GoldButton text="Submit Inquiry" />
            </div>
          </form>
        </div>

        {/* Image Container */}
        <div className="relative h-[600px] lg:h-[800px] w-full hidden md:block">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark-text text-[15vw] opacity-[0.05] font-serif z-0 pointer-events-none select-none rotate-90 lg:rotate-0 tracking-widest whitespace-nowrap">
            Connect
          </div>
          <div 
            className="absolute inset-0 bg-cover bg-center shadow-2xl z-10"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop")' }}
          />
        </div>

      </div>

      {/* Map Segment */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full mt-32">
        <div className="h-[400px] md:h-[500px] w-full relative z-10 shadow-2xl overflow-hidden bg-surface">
           {/* Fallback frame via Google Maps embed using 124 Bree St, Cape Town for visual representation */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2868114008272!2d18.415053615212513!3d-33.93382768063854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67634fdea46f%3A0xc31920b75bd08a0!2s124%20Bree%20St%2C%20Cape%20Town%20City%20Centre%2C%20Cape%20Town%2C%208000%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1680582531333!5m2!1sen!2sus" 
             width="100%" 
             height="100%" 
             style={{ border: 0, filter: 'grayscale(1) contrast(1.2) sepia(0.2) opacity(0.9)' }} 
             allowFullScreen={false} 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-[13px] text-charcoal/80 mb-12">
          <div>
            <h4 className="font-serif text-charcoal text-lg mb-2">Visit Us</h4>
            <p className="leading-relaxed text-muted">124 Bree Street<br />Cape Town, 8001<br />South Africa</p>
          </div>
          <div>
            <h4 className="font-serif text-charcoal text-lg mb-2">Contact</h4>
            <p className="leading-relaxed text-muted">hello@lumiereevents.com<br />+27 21 456 7890</p>
          </div>
          <div>
            <h4 className="font-serif text-charcoal text-lg mb-2">Hours</h4>
            <p className="leading-relaxed text-muted">Monday - Friday<br />09:00 AM - 18:00 PM (SAST)</p>
          </div>
        </div>
      </div>

    </div>
  );
}
