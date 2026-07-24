import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Technologies', path: '/#technologies' },
    { name: 'Voucher', path: '/voucher' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-sm border-b border-white/10 h-20 flex items-center' : 'bg-primary border-b border-white/10 h-24 flex items-center'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/IMG_2785.PNG" 
              alt="Certify IT Experts Logo" 
              className="w-16 h-16 object-contain scale-110 group-hover:scale-125 transition-transform"
            />
            <span className="text-xl md:text-2xl tracking-tight text-white">
              <span className="font-extrabold">Certify</span> <span className="font-light text-white/90">IT Experts</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path === '/#technologies' && location.hash === '#technologies');
                return (
                  <Link 
                    key={link.name}
                    to={link.path}
                    className={`text-[13px] font-semibold uppercase tracking-wider transition-colors ${
                      isActive ? 'text-secondary border-b-2 border-secondary' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-4 border-l border-white/20 pl-6">
              <Button size="sm" variant="secondary" href={`https://wa.me/919121787171?text=${encodeURIComponent('Hello, I would like to speak with an expert.')}`}>
                SPEAK WITH AN EXPERT
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-primary border-b border-white/10 shadow-lg py-4 px-4 flex flex-col gap-4 h-[calc(100vh-70px)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`flex items-center justify-between p-3 rounded-md text-base font-medium ${
                location.pathname === link.path ? 'bg-white/10 text-secondary' : 'text-white/80 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
            <Button variant="outlineWhite" className="w-full justify-center" href={`https://wa.me/919121787171?text=${encodeURIComponent('Hello, I would like to speak with an expert.')}`}>
              Speak with an Expert
            </Button>
            <Button variant="secondary" className="w-full justify-center" href="/certifications">
              Get Certified Today
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
