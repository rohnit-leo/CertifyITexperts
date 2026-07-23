import React from 'react';

export function CookiePolicy() {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Cookie Policy</h1>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-border prose prose-primary max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. What are Cookies?</h2>
          <p>Cookies are small text files that are placed on your computer or mobile device when you browse websites. Our website uses cookies, as almost all websites do, to help provide you with the best experience we can.</p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li>To enable certain functions of the Service</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable advertisements delivery, including behavioral advertising</li>
          </ul>

          <h2>3. Your Choices Regarding Cookies</h2>
          <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>
          <p>Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>
        </div>
      </div>
    </div>
  );
}
