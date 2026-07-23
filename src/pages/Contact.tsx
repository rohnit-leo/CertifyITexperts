import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I would like to make an inquiry.\n\n*Name:* ${formState.name}\n*Email:* ${formState.email}\n*Subject:* ${formState.subject}\n*Message:* ${formState.message}`;
    window.open(`https://wa.me/919121787171?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Our Experts</h1>
            <p className="text-xl text-text-muted">
              Get in touch with our certification specialists. We provide global support across all major time zones to assist with your certification journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg p-8 border border-border shadow-sm"
            >
              <h2 className="text-2xl font-bold text-primary mb-8">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Corporate Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">Interested Certification / Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="AWS Certification">AWS Certification</option>
                    <option value="Microsoft Azure">Microsoft Azure</option>
                    <option value="Cisco">Cisco</option>
                    <option value="Voucher Request">Voucher Request</option>
                    <option value="Other">Other Technology</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Global Headquarters</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg border border-border flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Email</p>
                      <p className="text-text-muted">certifyitexperts@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg border border-border flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Phone</p>
                      <p className="text-text-muted">+91 91217 87171<br/>Available 24/5 Mon-Fri</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg border border-border flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Office Hours</p>
                      <p className="text-text-muted">Monday - Friday<br/>9:00 AM - 6:00 PM (PST)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a 
                href={`https://wa.me/919121787171?text=${encodeURIComponent('Hello, I would like to speak with an expert.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors shadow-sm font-semibold"
              >
                <MessageSquare className="w-5 h-5" />
                Contact via WhatsApp
              </a>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
