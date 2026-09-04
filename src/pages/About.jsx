import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function About() {
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
              ABOUT PHOTO KARO
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-tight mb-6">
              Production without overhead.
            </h1>
            <p className="text-base sm:text-lg text-secondary leading-relaxed">
              PhotoKaro helps e-commerce brands create better product content without the traditional production overhead of photography studios, equipment rentals, and model bookings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-28">
        <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
                Built for the realities of modern e-commerce.
              </h2>
              <p className="text-secondary leading-relaxed">
                Traditional commercial photo shoots are slow, expensive, and inflexible. When you launch a new colorway, enter a new marketplace, or need fresh ad creative, booking a shoot takes weeks and costs thousands.
              </p>
              <p className="text-secondary leading-relaxed">
                PhotoKaro was built as a service-first production partner. You provide existing product photos, and we deliver the commercial assets your business needs to sell across web stores, Amazon listings, and paid social channels.
              </p>
            </div>

            <div className="space-y-8 p-8 sm:p-10 rounded-2xl border border-border bg-surface shadow-sm">
              <div>
                <h3 className="text-base font-bold text-primary mb-1">Commercial Quality</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Controlled lighting, genuine textures, and real-world proportions tailored specifically for high conversion rates.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-primary mb-1">Fast Turnaround</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Most requests are delivered within 24 hours so your advertising and catalog updates never stall.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-primary mb-1">Format Flexibility</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  From clean white-background listing photos to on-model visuals, lifestyle scenes, and social ad creatives — all from your original photo.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-primary mb-1">No Dashboard Complexity</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Simple intake, direct communication, and finished assets delivered to your WhatsApp or inbox.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 pt-16 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-primary">
                Ready to produce your next creative set?
              </h3>
              <p className="text-sm sm:text-base text-secondary mt-1">
                Start with a single product and see the quality firsthand.
              </p>
            </div>

            <Link
              to="/start-project"
              className="group inline-flex items-center space-x-3 bg-primary text-white text-xs sm:text-sm font-semibold tracking-wider px-7 py-4 rounded-full hover:bg-primary-hover transition-all duration-300 shadow-sm shrink-0"
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
