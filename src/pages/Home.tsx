import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useAnimation } from 'motion/react';
import { Button } from '../components/ui/Button';
import { 
  CheckCircle2, 
  Globe2, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  BookOpen,
  FileBadge2,
  ChevronDown,
  Map,
  Clock,
  TrendingUp,
  Lightbulb,
  Briefcase,
  Calendar,
  HelpCircle,
  BarChart3
} from 'lucide-react';
import { CATEGORIES, TECHNOLOGIES } from '../data/technologies';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AnimatedCounter = ({ value, label, suffix = '' }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{suffix}
      </h3>
      <p className="text-text-muted font-medium">{label}</p>
    </div>
  );
};

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    title: "Fast-Track Your IT Career with",
    highlight: "100% Assurance.",
    subtitle: "End-to-end guidance to help professionals worldwide conquer high-stakes IT certifications with total confidence."
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
    title: "Master the Cloud with",
    highlight: "Expert Guidance.",
    subtitle: "AWS, Azure, and Google Cloud certification tracks designed for enterprise professionals."
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    title: "Secure Your Future in",
    highlight: "Cybersecurity.",
    subtitle: "CISCO, CompTIA, and advanced security certifications to protect the modern enterprise."
  }
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Carousel */}
      <section className="relative h-[80vh] min-h-[600px] bg-primary overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-primary/80 z-10 mix-blend-multiply" />
            <img 
              src={heroSlides[currentSlide].image} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="inline-block px-4 py-1.5 mb-8 text-[11px] font-bold tracking-[0.2em] uppercase bg-white/10 text-white border border-white/20 backdrop-blur-sm rounded-sm">
                Enterprise Training Solutions
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white leading-[1.1] mb-6">
                {heroSlides[currentSlide].title} <span className="text-secondary">{heroSlides[currentSlide].highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" href="/certifications">
                  Get Certified Today
                </Button>
                <Button variant="outlineWhite" size="lg" href="/why-us">
                  Success Stories
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
          {heroSlides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-secondary' : 'w-4 bg-white/40 hover:bg-white/60'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-6 lg:py-8 bg-surface border-b border-border overflow-hidden flex flex-col justify-center relative">
        <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest text-center mb-6 z-10">Global Partners</span>
        <div className="flex overflow-hidden relative w-full">
           <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">
             {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 lg:gap-24 px-6 lg:px-12 opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <span className="font-bold text-2xl tracking-wider text-gray-500">AWS</span>
                  <span className="font-bold text-2xl tracking-wider text-[#00A4EF]">Microsoft</span>
                  <span className="font-bold text-2xl tracking-wider text-[#1BA0D7]">CISCO</span>
                  <span className="font-bold text-2xl tracking-wider text-[#F80000]">Oracle</span>
                  <span className="font-bold text-2xl tracking-wider text-[#00A1E0]">Salesforce</span>
                  <span className="font-bold text-2xl tracking-wider text-[#81B5A1]">ServiceNow</span>
                  <span className="font-bold text-2xl tracking-wider text-[#4285F4]">Google Cloud</span>
                  <span className="font-bold text-2xl tracking-wider text-gray-500">CompTIA</span>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: Award, stat: 10, suffix: '+', label: 'Years Experience' },
              { icon: ShieldCheck, stat: 100, suffix: '%', label: 'Certification Assurance' },
              { icon: BookOpen, stat: 25, suffix: '+', label: 'Technologies Supported' },
              { icon: Globe2, stat: 150, suffix: '+', label: 'Countries Served' },
            ].map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-4 sm:p-8 rounded-lg shadow-sm border border-border flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent text-secondary flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <metric.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <AnimatedCounter value={metric.stat} label={metric.label} suffix={metric.suffix} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Demand Chart Section */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Global Demand For Certified IT Experts</h2>
              <p className="text-lg text-text-muted mb-6">
                The technology landscape is shifting rapidly. Having an enterprise-grade certification not only solidifies your knowledge but drastically increases marketability and earning potential.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Average 20% salary increase post-certification",
                  "Over 3M+ unfilled cybersecurity and cloud roles globally",
                  "75% of hiring managers prefer certified candidates",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/certifications">Explore Career Paths</Button>
            </div>
            <div className="lg:w-1/2 w-full h-[400px] bg-surface p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-center font-bold text-primary mb-4 text-sm uppercase tracking-widest">Expected Salary Growth (USD)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { name: 'Cloud & DevOps', Pre: 95000, Post: 135000 },
                    { name: 'Cybersecurity', Pre: 88000, Post: 125000 },
                    { name: 'Data & AI', Pre: 92000, Post: 140000 },
                    { name: 'Enterprise', Pre: 85000, Post: 115000 },
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#4B5563', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#4B5563', fontSize: 12 }} dx={-10} tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="Pre" name="Pre-Certification" fill="#9CA3AF" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Post" name="Post-Certification" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Certify IT Experts</h2>
            <p className="text-lg text-text-muted">
              We deliver enterprise-grade preparation and guidance, ensuring your certification journey is smooth, predictable, and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: '100% Assurance', 
                desc: 'We stand by our support. Our expert guidance is designed to maximize your certification success.',
                icon: ShieldCheck
              },
              { 
                title: 'End-to-End Process', 
                desc: 'From registration to preparation and completion, we guide you through every step.',
                icon: ArrowRight
              },
              { 
                title: 'A Decade of Excellence', 
                desc: 'More than 10 years helping professionals achieve globally recognized certifications.',
                icon: Award
              },
              { 
                title: 'Global Reach', 
                desc: 'Professional certification guidance available worldwide, across all time zones.',
                icon: Globe2
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 rounded-lg border border-border shadow-sm hover:shadow-md hover:border-primary-light transition-all duration-300 bg-white group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-md bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">{feature.title}</h4>
                  <p className="text-text-muted leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-surface" id="technologies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Technologies We Support</h2>
              <p className="text-lg text-text-muted">
                Comprehensive certification paths across the industry's leading enterprise platforms and technologies.
              </p>
            </div>
            <Button variant="outline" href="/certifications" className="hidden md:flex flex-shrink-0">
              View All Certifications
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {TECHNOLOGIES.slice(0, 8).map((tech, idx) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <a 
                  href={tech.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-white rounded-lg border border-border p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-14 h-14 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center rounded-lg ${tech.logoBg || 'bg-transparent'} p-1 sm:p-2 group-hover:scale-110 transition-transform`}>
                    <img src={tech.logoUrl} alt={`${tech.name} logo`} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-[9px] sm:text-[10px] font-bold text-secondary mb-1 sm:mb-2 uppercase tracking-widest">{tech.category}</div>
                    <h3 className="font-bold text-base sm:text-lg text-primary mb-1 sm:mb-2">{tech.name}</h3>
                    <p className="text-xs sm:text-sm text-text-muted line-clamp-2 sm:line-clamp-3 mb-4 sm:mb-6">{tech.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[10px] sm:text-[12px] font-bold text-primary border-b border-primary pb-1 uppercase group-hover:text-secondary group-hover:border-secondary transition-colors">
                      View Details
                    </span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-text-muted group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" href="/certifications" className="w-full">
              View All Certifications
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Certification Roadmap */}
      <section className="py-24 bg-white border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Interactive Certification Roadmap</h2>
            <p className="text-lg text-text-muted">
              Navigate your career progression from foundational knowledge to expert-level mastery.
            </p>
          </div>
          
          <div className="relative">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
              {[
                { level: "Foundational", desc: "Build core concepts and vocabulary.", icon: Map, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
                { level: "Associate", desc: "Implement and configure systems.", icon: Briefcase, color: "text-green-500", bg: "bg-green-50", border: "border-green-200" },
                { level: "Professional", desc: "Design and architect solutions.", icon: TrendingUp, color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200" },
                { level: "Expert", desc: "Lead enterprise transformations.", icon: Award, color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-200" }
              ].map((phase, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  <div className={`w-16 h-16 rounded-2xl ${phase.bg} border ${phase.border} shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 relative bg-white`}>
                    <phase.icon className={`w-8 h-8 ${phase.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{phase.level}</h3>
                  <p className="text-text-muted text-sm leading-relaxed max-w-[200px]">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-white border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Success Stories</h2>
            <p className="text-lg text-text-muted">
              Hear from professionals who accelerated their careers with our enterprise certification programs.
            </p>
          </div>
          
          <div className="flex overflow-hidden relative w-full -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused] gap-8">
              {[...Array(2)].map((_, arrayIdx) => (
                <React.Fragment key={arrayIdx}>
                  {[
                    {
                      name: "Sarah Jenkins",
                      role: "Senior Cloud Architect",
                      company: "TechNova Solutions",
                      content: "The AWS Solutions Architect Professional certification seemed daunting, but the structured guidance and 100% assurance gave me the confidence I needed to pass on my first attempt.",
                      rating: 5
                    },
                    {
                      name: "Michael Chen",
                      role: "Lead Security Analyst",
                      company: "Global Cyber Defense",
                      content: "Their CISSP preparation is unmatched. The expert mentors identified my weak areas and focused my studies exactly where it mattered. Highly recommended for senior security professionals.",
                      rating: 5
                    },
                    {
                      name: "David Rodriguez",
                      role: "IT Infrastructure Manager",
                      company: "Enterprise Dynamics",
                      content: "We partnered with Certify IT Experts to upskill our entire infrastructure team on Azure. The results were phenomenal, with a 100% pass rate across 15 team members.",
                      rating: 5
                    },
                    {
                      name: "Emily Watson",
                      role: "DevOps Engineer",
                      company: "InnovateTech",
                      content: "The Kubernetes certification path was incredible. The hands-on labs and dedicated support made the difference between passing and failing.",
                      rating: 5
                    }
                  ].map((testimonial, idx) => (
                    <div key={`${arrayIdx}-${idx}`} className="bg-surface p-8 rounded-lg border border-border shadow-sm flex flex-col w-[350px] md:w-[450px] shrink-0 whitespace-normal">
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-text-muted italic mb-8 flex-grow">"{testimonial.content}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-primary">{testimonial.name}</h4>
                          <p className="text-xs text-text-muted">{testimonial.role} at {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Your Path to Certification</h2>
            <p className="text-lg text-text-muted">
              A structured, proven methodology designed to guarantee your success in high-stakes IT exams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border z-0"></div>
            
            {[
              {
                step: "01",
                title: "Expert Consultation",
                desc: "We analyze your career goals and technical background to recommend the perfect certification path tailored for you."
              },
              {
                step: "02",
                title: "Targeted Preparation",
                desc: "Engage with enterprise-grade study materials, practice tests, and expert-led mentoring sessions."
              },
              {
                step: "03",
                title: "Guaranteed Success",
                desc: "Take your exam with 100% confidence. Our assurance program means we stand firmly behind your result."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-surface shadow-md flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-2 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-text-muted leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-text-muted">
              Everything you need to know about our enterprise certification preparation and 100% assurance guarantee.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "What does your 100% assurance program cover?",
                a: "Our assurance program guarantees that if you follow our structured preparation path and fail the exam, we will cover the cost of your retake and provide additional 1-on-1 mentoring until you pass."
              },
              {
                q: "How long does a typical certification path take?",
                a: "Depending on the complexity of the certification and your prior experience, most professional paths take between 6 to 12 weeks of dedicated preparation."
              },
              {
                q: "Do you offer corporate or team training?",
                a: "Yes, we specialize in enterprise training. We can upskill entire departments with customized learning paths, dedicated mentors, and bulk licensing discounts."
              },
              {
                q: "Are the study materials updated for the latest exam versions?",
                a: "Absolutely. Our expert instructors continually update all practice materials and study guides within 48 hours of any official syllabus changes announced by the vendors."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-surface border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                <h3 className="text-lg font-bold text-primary mb-3 flex gap-3 items-start">
                  <HelpCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-text-muted leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who have successfully accelerated their careers with our enterprise-grade certification support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" size="lg" href={`https://wa.me/919121787171?text=${encodeURIComponent('Hello, I am interested in getting certified today.')}`}>
              Get Certified Today
            </Button>
            <Button variant="outlineWhite" size="lg" href={`https://wa.me/919121787171?text=${encodeURIComponent('Hello, I would like to speak with an expert.')}`}>
              Speak with an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Your Path to Certification</h2>
            <p className="text-lg text-text-muted">
              A streamlined, hassle-free process designed to get you certified quickly and efficiently, without the stress.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border -z-10"></div>
            
            {[
              { step: "01", title: "Consultation", desc: "Connect with our experts to discuss your career goals and select the right certification path." },
              { step: "02", title: "Preparation", desc: "Receive targeted guidance, resources, and 100% assurance support tailored to your exam." },
              { step: "03", title: "Certification", desc: "Pass your exam with confidence and receive your official enterprise-grade IT certification." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-border text-center relative z-10 group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
