import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Hero() {
  const [videoAvailable, setVideoAvailable] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: luxuryEase,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: luxuryEase,
      },
    },
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36 overflow-hidden">
      <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow Label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted">
              E-Commerce Visual Production
            </span>
          </motion.div>

          {/* Editorial Animated Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-[1.05] sm:leading-[1.05] mb-8">
            <motion.span variants={lineVariants} className="block">
              PRODUCT PHOTOS,
            </motion.span>
            <motion.span variants={lineVariants} className="block text-primary">
              BUILT TO SELL.
            </motion.span>
          </h1>

          {/* Short Supporting Sentence */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-secondary max-w-2xl font-normal leading-relaxed mb-10"
          >
            Turn one simple product photo into the studio imagery, lifestyle scenes, marketplace graphics, and high-converting ads your brand needs.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link
              to="/start-project"
              className="group inline-flex items-center space-x-3 bg-primary text-white text-xs sm:text-sm font-semibold tracking-wider px-7 py-4 rounded-full hover:bg-primary-hover transition-all duration-300 shadow-sm"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={scrollToServices}
              className="group inline-flex items-center space-x-2 text-primary hover:text-secondary text-xs sm:text-sm font-semibold tracking-wider px-4 py-4 transition-colors duration-200"
            >
              <span>SEE THE WORK</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </motion.div>
        </motion.div>

        {/* Future Hero Video Architecture (Graceful Progressive Enhancement) */}
        {/* If /video/hero.mp4 is added, this container renders seamlessly without redesigning the hero */}
        <div className={`mt-16 transition-opacity duration-700 ${videoAvailable ? 'opacity-100 block' : 'hidden'}`}>
          <div className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-sm aspect-video max-w-5xl">
            <video
              src="/video/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoAvailable(true)}
              onError={() => setVideoAvailable(false)}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
