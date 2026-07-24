import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Tag, CheckCircle2, AlertCircle, Globe, Calendar } from 'lucide-react';

export function Voucher() {
  return (
    <div className="flex flex-col w-full bg-surface min-h-screen">
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Save on Your Next Exam</h1>
            <p className="text-xl text-text-muted">
              Looking to reduce the cost of your certification journey? We provide exclusive IT certification discount vouchers across multiple technologies.
            </p>
          </div>

          {/* Availability & Validity Info Box */}
          <div className="max-w-4xl mx-auto mb-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 text-primary flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="text-sm leading-relaxed">
              <p className="font-bold text-amber-900 mb-1">Important Voucher Notice</p>
              <p className="text-slate-700">
                Certification discount vouchers are subject to availability. Please check with us to check availability. 
                Features include a <strong>remote extended validity period</strong>, and <strong>all certification discount vouchers are valid globally worldwide</strong>.
              </p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white rounded-xl border border-border shadow-sm overflow-hidden flex flex-col md:flex-row relative"
          >
            {/* Decorative dashed line for voucher feel */}
            <div className="hidden md:block absolute left-[35%] top-0 bottom-0 w-px border-l-2 border-dashed border-border/50"></div>
            <div className="md:hidden absolute top-[35%] left-0 right-0 h-px border-t-2 border-dashed border-border/50"></div>

            <div className="bg-primary p-12 md:w-[35%] flex flex-col justify-center items-center text-center relative">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Tag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Corporate</h3>
              <h3 className="text-2xl font-bold text-secondary mb-2">Discounts</h3>
              <p className="text-white/70 text-sm mt-4">Valid globally across major testing centers.</p>
              
              {/* Semi-circle cutouts */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full hidden md:block border-l border-border/50 shadow-inner"></div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-surface rounded-full md:hidden"></div>
            </div>
            
            <div className="p-10 md:p-12 md:w-[65%] flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-surface text-primary text-xs font-semibold uppercase tracking-wider rounded-md mb-6 border border-border w-fit">
                Exclusive Offer
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6">Global IT Certification Vouchers</h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Valid for Pearson VUE, PSI, Kryterion & online proctored exams',
                  'Applicable for AWS, Microsoft, Salesforce, ServiceNow, CompTIA, Cisco & more',
                  'All certification discount vouchers valid globally worldwide',
                  'Remote extended validity period available upon request'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-border mt-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto" 
                  href={`https://wa.me/919121787171?text=${encodeURIComponent('Hello, I would like to check for discount voucher availability.')}`}
                >
                  Check for discount voucher availability
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
