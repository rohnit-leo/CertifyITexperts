import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';

export function StickyContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href="tel:+919121787171"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-secondary rounded-full shadow-lg flex items-center justify-center text-white hover:bg-secondary/90 transition-colors relative group"
        title="Call Us"
      >
        <span className="absolute right-full mr-4 bg-white text-primary text-sm font-bold py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
        <Phone className="w-6 h-6" />
      </motion.a>
      
      <motion.a
        href={`https://wa.me/919121787171?text=${encodeURIComponent('Hello, I would like to speak with an expert.')}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#128C7E] transition-colors relative group"
        title="WhatsApp Us"
      >
        <span className="absolute right-full mr-4 bg-white text-primary text-sm font-bold py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
        <MessageSquare className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
