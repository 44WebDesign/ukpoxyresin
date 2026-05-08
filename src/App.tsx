/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ProductShowcase from './components/ProductShowcase';
import ScrollingGallery from './components/ScrollingGallery';
import CTA from './components/CTA';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';
import CookieNotice from './components/CookieNotice';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <NewsletterPopup />
      <CookieNotice />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Testimonials />
        <ProductShowcase />
        <ScrollingGallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
