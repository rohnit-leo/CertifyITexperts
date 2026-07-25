import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEO } from './SEO';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO />
      <Header />
      <main className="flex-grow pt-[88px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

