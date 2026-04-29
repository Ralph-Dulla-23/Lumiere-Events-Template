import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Magnetic } from './SharedUI';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-dark-footer text-white pt-32 pb-12 border-t border-gold/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-serif tracking-tight mb-8">
            Lumière <span className="italic text-gold font-light">Events</span>
          </div>
          <p className="text-gray-500 text-[13px] mb-8 leading-relaxed">
            Curating luxury experiences for the sophisticated soul. Based in Cape Town, serving clients globally.
          </p>
          <div className="text-gray-400 text-[13px] font-sans">
            <div className="mb-2">124 Bree Street, Cape Town, 8001</div>
            <div>hello@lumiereevents.com</div>
            <div>+27 21 456 7890</div>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-10">Navigate</h4>
          <ul className="grid gap-4 text-[13px] text-gray-500">
             {[
               { name: 'About Us', path: '/' },
               { name: 'Portfolio', path: '/portfolio' },
               { name: 'Services', path: '/services' },
               { name: 'Packages', path: '/packages' },
               { name: 'Contact', path: '/contact' }
             ].map(link => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-gold transition-colors inline-block relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-10">Services</h4>
          <ul className="grid gap-4 text-[13px] text-gray-500">
            {['Wedding Planning', 'Corporate Events', 'Social Soirees', 'DMC Support', 'Consultations'].map(link => (
               <li key={link}>
                <Link to="/services" className="hover:text-gold transition-colors inline-block relative group">
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-10">Follow</h4>
          <div className="flex gap-4 mb-8">
            <Magnetic>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </Magnetic>
          </div>
          <p className="text-gray-600 text-[11px]">
            Join 12k+ followers for daily inspiration.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[11px] text-gray-600 tracking-[0.1em]">
        <div>&copy; {new Date().getFullYear()} Lumière Events. All rights reserved.</div>
        <div className="flex gap-8 uppercase">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
