import React from 'react';

export function TermsOfService() {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-border prose prose-primary max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>

          <h2>2. Use of Our Services</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of our services complies with all applicable laws and regulations.</p>

          <h2>3. Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Certify IT Experts and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

          <h2>4. Limitation of Liability</h2>
          <p>In no event shall Certify IT Experts, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

          <h2>5. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
        </div>
      </div>
    </div>
  );
}
