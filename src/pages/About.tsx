import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, HeartHandshake } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-surface py-20 md:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Certify IT Experts</h1>
            <p className="text-xl text-text-muted leading-relaxed">
              For over a decade, we have been the trusted partner for professionals worldwide seeking to validate their expertise through global IT certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="prose prose-lg text-text-muted space-y-4">
                <p>
                  Certify IT Experts was founded with a singular vision: to demystify and streamline the complex world of enterprise IT certifications. 
                </p>
                <p>
                  We recognized that brilliant professionals were often held back not by a lack of knowledge, but by the daunting logistics, rigorous preparation requirements, and high stakes of certification exams.
                </p>
                <p>
                  Today, with 10+ years of experience, we provide a structured, end-to-end framework that guarantees success. We don't just provide study materials; we provide strategic career acceleration.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface rounded-lg overflow-hidden border border-border flex items-center justify-center p-8 shadow-sm">
                {/* Abstract corporate illustration placeholder */}
                <div className="w-full h-full border border-border/50 rounded-lg relative overflow-hidden bg-white">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-bl-full opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-surface rounded-tr-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-center">
                        <div className="text-6xl font-bold text-primary mb-2">10+</div>
                        <div className="text-sm font-semibold text-secondary uppercase tracking-widest">Years of Trust</div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Core Principles</h2>
            <p className="text-white/80">The values that drive our enterprise commitment to your success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Mission', icon: Target, desc: 'To empower IT professionals globally by ensuring seamless, guaranteed certification success.' },
              { title: 'Vision', icon: Lightbulb, desc: 'To be the world\'s leading partner in enterprise technology credentialing and career advancement.' },
              { title: 'Values', icon: HeartHandshake, desc: 'Integrity, Excellence, Reliability, and an unwavering commitment to our clients\' goals.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm shadow-sm"
              >
                <div className="w-14 h-14 bg-white/10 rounded-md flex items-center justify-center mb-6 text-white">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
