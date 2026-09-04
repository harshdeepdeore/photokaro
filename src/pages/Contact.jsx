import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: luxuryEase,
      },
    },
  };

  return (
    <div className="min-h-screen pt-12 flex flex-col justify-between">
      <div>
        {/* Header & Typography Section */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div variants={itemVariants} className="mb-4">
                <span className="text-xs font-bold tracking-widest text-muted uppercase">
                  CONTACT
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.05] mb-6"
              >
                LET'S CREATE SOMETHING<br />WORTH SEEING.
              </motion.h1>

              <motion.div variants={itemVariants} className="max-w-2xl space-y-3 mb-10">
                <p className="text-lg sm:text-xl font-medium text-primary leading-relaxed">
                  Have a product you'd like us to work on?
                </p>
                <p className="text-base sm:text-lg text-secondary leading-relaxed">
                  Tell us what you're looking for and let's create content that makes your product stand out.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/start-project"
                  className="group inline-flex items-center space-x-3 bg-primary text-white text-xs sm:text-sm font-semibold tracking-wider px-8 py-4 rounded-full hover:bg-primary-hover transition-all duration-300 shadow-sm"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & Channels */}
        <section className="py-20 sm:py-28">
          <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-muted uppercase block mb-10">
                GET IN TOUCH
              </span>

              <div className="space-y-10">
                {/* WhatsApp */}
                <div className="border-b border-border pb-6">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/918485097488"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 text-xl sm:text-2xl font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <span>+91 8485097488</span>
                    <ArrowUpRight className="w-5 h-5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Email */}
                <div className="border-b border-border pb-6">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                    Email
                  </span>
                  <a
                    href="mailto:harshdeepdeore267@gmail.com"
                    className="group inline-flex items-center space-x-2 text-xl sm:text-2xl font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <span>harshdeepdeore267@gmail.com</span>
                    <ArrowUpRight className="w-5 h-5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Location */}
                <div className="border-b border-border pb-6">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                    Location
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-primary block">
                    Pune
                  </span>
                </div>

                {/* Additional Contact */}
                <div className="border-b border-border pb-6">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                    Additional Contact
                  </span>
                  <a
                    href="tel:+918600541991"
                    className="group inline-flex items-center space-x-2 text-xl sm:text-2xl font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <span>+91 86005 41991</span>
                    <ArrowUpRight className="w-5 h-5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-14">
                <Link
                  to="/start-project"
                  className="group inline-flex items-center space-x-3 bg-primary text-white text-xs sm:text-sm font-semibold tracking-wider px-8 py-4 rounded-full hover:bg-primary-hover transition-all duration-300 shadow-sm"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
