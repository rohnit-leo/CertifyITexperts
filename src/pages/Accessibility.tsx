import React from 'react';

export function Accessibility() {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Accessibility Statement</h1>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-border prose prose-primary max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Our Commitment</h2>
          <p>Certify IT Experts is committed to making our website accessible to everyone, including individuals with disabilities. We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards.</p>

          <h2>2. Ongoing Efforts</h2>
          <p>We regularly evaluate our website to identify areas for improvement and are continuously working to enhance accessibility for all users.</p>

          <h2>3. Feedback and Assistance</h2>
          <p>If you have difficulty accessing any part of our website or need assistance, please contact us. We are dedicated to providing support and will work to accommodate your needs.</p>
          <p>Email: certifyitexperts@gmail.com</p>
          <p>Phone: +91 91217 87171</p>
        </div>
      </div>
    </div>
  );
}
