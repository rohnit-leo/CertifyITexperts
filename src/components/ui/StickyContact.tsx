import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, Send, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StickyContact() {
  const whatsappUrl = `https://wa.me/919121787171?text=${encodeURIComponent('Hello, I would like to speak with an expert.')}`;

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-0 top-[58%] -translate-y-1/2 z-50 flex flex-col shadow-2xl rounded-r-xl bg-primary/95 backdrop-blur-md border border-l-0 border-white/20 text-white p-1 gap-1"
      aria-label="Quick Actions Sticky Menu"
    >
      {/* WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-11 h-11 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-all duration-300 group shadow-sm"
        aria-label="WhatsApp Support"
      >
        <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-white/15 z-50 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
          WhatsApp Chat
        </span>
      </a>

      {/* Call Action */}
      <a
        href="tel:+919121787171"
        className="relative flex items-center justify-center w-11 h-11 bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-all duration-300 group shadow-sm"
        aria-label="Call Us Now"
      >
        <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-white/15 z-50 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          Call +91 91217 87171
        </span>
      </a>

      {/* Quick Enquiry */}
      <Link
        to="/contact"
        className="relative flex items-center justify-center w-11 h-11 hover:bg-white/15 text-white rounded-lg transition-all duration-300 group"
        aria-label="Quick Enquiry"
      >
        <Send className="w-4 h-4 text-sky-300 group-hover:scale-110 transition-transform" />
        <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-white/15 z-50">
          Send Enquiry
        </span>
      </Link>

      {/* Discount Voucher */}
      <Link
        to="/voucher"
        className="relative flex items-center justify-center w-11 h-11 hover:bg-white/15 text-white rounded-lg transition-all duration-300 group"
        aria-label="Claim Voucher"
      >
        <Tag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
        <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-white/15 z-50">
          Get Discount Voucher
        </span>
      </Link>
    </motion.aside>
  );
}


