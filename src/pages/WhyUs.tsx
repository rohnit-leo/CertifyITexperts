import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Award, Globe2, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function WhyUs() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Hero */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose Us</h1>
            <p className="text-xl text-text-muted">
              We deliver enterprise-grade preparation and guidance, ensuring your certification journey is smooth, predictable, and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">The Certification Process</h2>
            <p className="text-lg text-text-muted">
              A structured, five-step framework designed to eliminate friction and maximize your chances of success on the first attempt.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

            <div className="space-y-12 relative z-10">
              {[
                { step: '01', title: 'Choose Certification', desc: 'Select from our extensive catalogue of globally recognized technology certifications.' },
                { step: '02', title: 'Talk with an Expert', desc: 'Consult with our specialists to align the certification with your career goals and current skill level.' },
                { step: '03', title: 'Preparation Guidance', desc: 'Receive tailored study plans, official materials, and strategic guidance.' },
                { step: '04', title: 'Book Exam', desc: 'We assist with seamless exam registration through official testing partners like Pearson VUE or PSI.' },
                { step: '05', title: 'Certification Success', desc: 'Pass your exam with confidence backed by our 100% assurance program.' }
              ].map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 flex ${idx % 2 !== 0 ? 'justify-start' : 'justify-end'} w-full`}>
                    <motion.div 
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-white p-8 rounded-lg border border-border shadow-sm max-w-md w-full relative"
                    >
                      <div className="text-sm font-bold text-secondary mb-2 tracking-widest">STEP {item.step}</div>
                      <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                      <p className="text-text-muted">{item.desc}</p>
                      
                      {/* Connector dot for desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white ${idx % 2 === 0 ? '-right-[2.6rem]' : '-left-[2.6rem]'}`}></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing Platforms */}
      <section className="py-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Official Testing Partners</h2>
            <p className="text-lg text-text-muted">
              We facilitate seamless examination scheduling and support across the world's most trusted testing platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Pearson VUE', desc: 'Global leader in computer-based testing for information technology, academic, government and professional testing programs.' },
              { name: 'PSI', desc: 'Providing secure, high-quality testing services for certification and licensure programs globally.' },
              { name: 'Kryterion', desc: 'Secure online proctoring and testing center delivery for high-stakes certification programs.' }
            ].map((platform, idx) => (
               <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface rounded-lg p-8 border border-border text-center hover:shadow-md transition-shadow"
              >
                <div className="h-16 flex items-center justify-center mb-6">
                  <div className="text-2xl font-bold text-primary opacity-80">{platform.name}</div>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'How does the 100% Certification Assurance work?', a: 'Our assurance program provides comprehensive support. If you follow our guided preparation track and do not pass your initial attempt, we provide continued expert support and cover the cost of your retake voucher.' },
              { q: 'Do you offer support globally?', a: 'Yes. Our services are available worldwide. We coordinate with global testing centers and offer online proctored options where applicable.' },
              { q: 'How long does preparation usually take?', a: 'Preparation time varies depending on the specific certification and your current experience level. On average, most professionals complete their track in 4 to 8 weeks.' },
              { q: 'Are the certification vouchers valid everywhere?', a: 'Yes, our vouchers are valid globally at authorized testing centers (Pearson VUE, PSI, Kryterion) and for online proctored exams.' }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white border border-border rounded-xl">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-primary hover:text-secondary transition-colors">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-text-muted p-6 pt-0 border-t border-border mt-4">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" href={`https://wa.me/919121787171?text=${encodeURIComponent('Hello, I would like to speak with an expert about your services.')}`}>Still have questions?</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
