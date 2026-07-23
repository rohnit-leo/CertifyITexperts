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
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-2xl rounded-r-2xl bg-primary/95 backdrop-blur-md border border-l-0 border-white/20 text-white overflow-hidden group/menu"
      aria-label="Quick Actions Sticky Menu"
    >
      {/* WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-3 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-300 border-b border-white/10 group"
        title="WhatsApp Support"
      >
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-xs font-bold whitespace-nowrap pr-2 hidden md:inline-block">
          WhatsApp Us
        </span>
      </a>

      {/* Call Action */}
      <a
        href="tel:+919121787171"
        className="flex items-center gap-3 px-3 py-3 bg-secondary hover:bg-secondary/90 text-white transition-all duration-300 border-b border-white/10 group"
        title="Call Us Now"
      >
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-xs font-bold whitespace-nowrap pr-2 hidden md:inline-block">
          Call +91 91217 87171
        </span>
      </a>

      {/* Quick Enquiry */}
      <Link
        to="/contact"
        className="flex items-center gap-3 px-3 py-3 hover:bg-white/10 text-white transition-all duration-300 border-b border-white/10 group"
        title="Quick Enquiry"
      >
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          <Send className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-xs font-bold whitespace-nowrap pr-2 hidden md:inline-block">
          Quick Enquiry
        </span>
      </Link>

      {/* Discount Voucher */}
      <Link
        to="/voucher"
        className="flex items-center gap-3 px-3 py-3 hover:bg-white/10 text-white transition-all duration-300 group"
        title="Claim Voucher"
      >
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          <Tag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-xs font-bold whitespace-nowrap pr-2 hidden md:inline-block">
          Get Voucher
        </span>
      </Link>
    </motion.aside>
  );
}

