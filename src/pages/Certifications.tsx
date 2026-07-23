import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, FileBadge2, ArrowRight } from 'lucide-react';
import { TECHNOLOGIES, CATEGORIES } from '../data/technologies';
import { Button } from '../components/ui/Button';

export function Certifications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTechnologies = TECHNOLOGIES.filter(tech => {
    const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tech.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tech.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface">
      {/* Header Section */}
      <section className="bg-white border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Certification Catalogue</h1>
            <p className="text-lg text-text-muted">
              Explore our comprehensive portfolio of globally recognized IT and software certifications. Find the right path to accelerate your professional journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-text-muted" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-4 bg-white border border-border rounded-lg text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
                placeholder="Search certifications, technologies, or providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-72">
              <select
                className="block w-full px-4 py-4 bg-white border border-border rounded-lg text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid */}
          {filteredTechnologies.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredTechnologies.map((tech, idx) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <a 
                    href={tech.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full bg-white rounded-lg border border-border p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 flex items-center justify-center rounded-xl ${tech.logoBg || 'bg-transparent'} p-2 group-hover:scale-110 transition-transform`}>
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
          ) : (
            <div className="text-center py-24 bg-white rounded-xl border border-border">
              <Search className="w-12 h-12 text-border mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">No certifications found</h3>
              <p className="text-text-muted">Try adjusting your search or category filter.</p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
