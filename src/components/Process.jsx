import React from 'react';
import { motion } from 'framer-motion';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'SEND YOUR PRODUCT',
      description: 'Upload your existing product photos directly from your phone or catalog.',
    },
    {
      number: '02',
      title: 'TELL US WHAT YOU NEED',
      description: 'Tell us the visual direction and formats you want created.',
    },
    {
      number: '03',
      title: 'GET SALES-READY CONTENT',
      description: 'We craft and deliver the final commercial visual assets, ready to publish.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-border bg-surface-subtle/50">
      <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-xl mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-muted uppercase block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Simple, friction-free visual production.
          </h2>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: luxuryEase }}
              className="flex flex-col space-y-4"
            >
              <div className="text-sm font-bold tracking-widest text-muted">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-primary">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
