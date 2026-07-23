/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Home } from './pages/Home';
import { Certifications } from './pages/Certifications';
import { WhyUs } from './pages/WhyUs';
import { Voucher } from './pages/Voucher';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { Accessibility } from './pages/Accessibility';
import { StickyContact } from './components/ui/StickyContact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="voucher" element={<Voucher />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="accessibility" element={<Accessibility />} />
        </Route>
      </Routes>
      <StickyContact />
    </Router>
  );
}
