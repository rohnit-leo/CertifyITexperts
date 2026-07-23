import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Send, Tag, X, Headset, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StickyContact() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/919121787171?text=${encodeURIComponent('Hello, I would like to speak with an expert.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="mb-4 w-80 bg-primary/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden text-white"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-primary-light border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary">
                    <Headset className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-primary rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                    Certification Support
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  </h4>
                  <p className="text-[11px] text-white/70">Experts online • 24/5 Mon-Fri</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Close Support Menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Menu Actions */}
            <div className="p-3 space-y-2">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-200 group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">Chat on WhatsApp</div>
                    <div className="text-[11px] text-white/90 font-medium">+91 91217 87171</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:+919121787171"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-secondary hover:bg-secondary/90 text-white transition-all duration-200 group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">Instant Voice Call</div>
                    <div className="text-[11px] text-white/90 font-medium">+91 91217 87171</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Quick Enquiry */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-all duration-200 group border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">Submit Enquiry</div>
                    <div className="text-[11px] text-white/70">Get custom consultation</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Discount Voucher */}
              <Link
                to="/voucher"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/10 hover:from-amber-500/30 hover:to-amber-600/20 text-white transition-all duration-200 group border border-amber-400/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight text-amber-300">Discount Voucher</div>
                    <div className="text-[11px] text-white/70">Save on IT exam fees</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-light text-white shadow-2xl border-2 border-white/20 hover:border-secondary transition-all"
        aria-label="Toggle Quick Contact Menu"
      >
        {/* Pulse Effect when closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-secondary/40 animate-ping opacity-75"></span>
        )}

        {isOpen ? (
          <X className="w-6 h-6 text-white relative z-10" />
        ) : (
          <Headset className="w-6 h-6 text-secondary relative z-10 group-hover:scale-110 transition-transform" />
        )}

        {/* Badge Indicator */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#25D366] border-2 border-white rounded-full"></span>
        )}
      </motion.button>
    </div>
  );
}



