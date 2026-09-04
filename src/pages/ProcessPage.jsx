import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function ProcessPage() {
  const processSteps = [
    {
      num: '01',
      title: 'SEND YOUR PRODUCT PHOTOS',
      summary: 'No studio shoot or sample shipping required.',
      details: 'Upload photos of your product from your existing catalog, phone, or white-background shots. Multi-angle images help us capture every texture and detail.',
    },
    {
      num: '02',
      title: 'CHOOSE YOUR DIRECTION & SPECS',
      summary: 'Direct creative control without agency complexity.',
      details: 'Select your target service format — whether studio photography, AI on-model, lifestyle scenes, marketplace infographics, ad creatives, or UGC. Add specific references or notes.',
    },
    {
      num: '03',
      title: 'RECEIVE SALES-READY ASSETS',
      summary: 'Turnaround within 24 to 48 hours.',
      details: 'Our production team crafts high-resolution, pixel-perfect visuals formatted for Shopify, Amazon, Instagram, and paid advertising channels.',
    },
  ];

  const standards = [
    'Direct communication via WhatsApp or Email',
    'Standard turnaround within 24 hours',
    'High-resolution output ready for Shopify, Amazon, and Meta Ads',
    'No monthly lock-in or subscription bloat',
  ];

  return (
    <div className="min-h-screen pt-12">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold tracking-widest text-muted uppercase block mb-3">
              THE WORKFLOW
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-tight mb-6">
              Three simple steps from photo to sales.
            </h1>
            <p className="text-base sm:text-lg text-secondary leading-relaxed">
              We eliminated casting calls, sample shipping delays, and studio rental costs so you can produce conversion-focused visuals at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Steps Detailed */}
      <section className="py-20 sm:py-28">
        <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: luxuryEase }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-border pb-16 last:border-b-0"
              >
                <div className="md:col-span-3">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tighter text-muted">
                    {step.num}
                  </span>
                </div>

                <div className="md:col-span-9 max-w-2xl">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary mb-2">
                    {step.title}
                  </h2>
                  <p className="text-sm sm:text-base font-medium text-primary mb-4">
                    {step.summary}
                  </p>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Delivery Standards */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl border border-border bg-surface shadow-sm">
            <h3 className="text-lg font-bold tracking-tight text-primary mb-6">
              Production Standards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {standards.map((std, sIdx) => (
                <div key={sIdx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-secondary">{std}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-16 text-center">
            <Link
              to="/start-project"
              className="group inline-flex items-center space-x-3 bg-primary text-white text-xs sm:text-sm font-semibold tracking-wider px-8 py-4 rounded-full hover:bg-primary-hover transition-all duration-300 shadow-sm"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
