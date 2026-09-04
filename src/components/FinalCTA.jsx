import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-36 border-t border-border">
      <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold tracking-widest text-muted uppercase block mb-4">
            START NOW
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight mb-6">
            READY TO CREATE BETTER PRODUCT CONTENT?
          </h2>
          <p className="text-base sm:text-xl text-secondary mb-10 max-w-xl font-normal leading-relaxed">
            Send us your product photos and tell us what you need. Most projects are completed and delivered within 24 hours.
          </p>
          <div>
            <Link
              to="/start-project"
              className="group inline-flex items-center space-x-3 bg-primary text-white text-xs sm:text-sm font-semibold tracking-wider px-8 py-4 rounded-full hover:bg-primary-hover transition-all duration-300 shadow-sm"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
