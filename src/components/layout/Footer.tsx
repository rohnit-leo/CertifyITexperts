import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/IMG_2785.PNG" 
                alt="Certify IT Experts Logo" 
                className="w-16 h-16 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-2xl tracking-tight text-white">
                <span className="font-extrabold">Certify</span> <span className="font-light text-white/90">IT Experts</span>
              </span>
            </Link>
            <p className="text-white/70 mb-8 max-w-sm leading-relaxed">
              End-to-end expert guidance to help professionals worldwide conquer software and IT certifications with confidence. A decade of global excellence.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span>certifyitexperts@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+91 91217 87171</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Why Us', 'Certifications', 'Voucher', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-white mb-6">Technologies</h4>
            <ul className="flex flex-col gap-4">
              {['Cloud', 'Cybersecurity', 'Automation', 'Project Management', 'Enterprise Platforms'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/certifications?category=${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/50 uppercase tracking-wider font-semibold">
          <div>
            Copyright © {currentYear} Certify IT Experts. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Developed by <a href="https://nexturex.com" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold hover:underline">NextureX</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
