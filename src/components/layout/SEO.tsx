import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const PAGE_METADATA: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Certify IT Experts | Enterprise IT Certification Guidance & Exam Vouchers',
    description: 'Pass AWS, Azure, Google Cloud, Salesforce, ServiceNow, Cisco, CompTIA, EC-Council, Databricks, Terraform, ISACA, and PMI IT certifications with 100% assurance.'
  },
  '/certifications': {
    title: 'All IT Certifications & Exam Syllabi | Certify IT Experts',
    description: 'Explore AWS, Microsoft Azure, Google Cloud, Salesforce, ServiceNow, EC-Council, Databricks, PeopleCert, HashiCorp, ISACA, PMI certification tracks and PDF guides.'
  },
  '/voucher': {
    title: 'Check Discount Voucher Availability | Certify IT Experts',
    description: 'Get global IT certification discount vouchers for Pearson VUE, PSI, Kryterion exams. Extended validity period valid worldwide.'
  },
  '/why-us': {
    title: 'Why Choose Certify IT Experts | 100% Pass Assurance & Global Excellence',
    description: 'A decade of global excellence in helping professionals pass high-stakes IT certifications with 1-on-1 expert guidance.'
  },
  '/about': {
    title: 'About Us | Certify IT Experts',
    description: 'Learn about our team of certified enterprise mentors and our mission to help professionals achieve world-class IT certifications.'
  },
  '/contact': {
    title: 'Contact Us | Certify IT Experts Consultation',
    description: 'Get in touch with our certification specialists via WhatsApp or call +91 91217 87171 for custom exam guidance.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Certify IT Experts',
    description: 'Read our privacy policy regarding how we protect user data and maintain confidentiality.'
  },
  '/terms-of-service': {
    title: 'Terms of Service | Certify IT Experts',
    description: 'Review the terms and conditions for Certify IT Experts services and exam vouchers.'
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Certify IT Experts',
    description: 'Information about how cookies are used to optimize your experience on Certify IT Experts.'
  },
  '/accessibility': {
    title: 'Accessibility Statement | Certify IT Experts',
    description: 'Our commitment to digital accessibility for all learners and certification candidates.'
  }
};

export function SEO({ title, description, keywords }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const defaultMeta = PAGE_METADATA[location.pathname] || PAGE_METADATA['/'];
    
    // Update Title
    const currentTitle = title || defaultMeta.title;
    document.title = currentTitle;

    // Update Meta Description
    const currentDescription = description || defaultMeta.description;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentDescription);
    }

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    const fullUrl = `https://certifyitexperts.com${location.pathname === '/' ? '' : location.pathname}`;
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    }

    // Update Keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
  }, [location, title, description, keywords]);

  return null;
}
