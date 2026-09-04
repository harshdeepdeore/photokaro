import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function ServiceSection({ service, index }) {
  const isImageLeft = service.layout === 'image-left';

  return (
    <section 
      id={index === 0 ? 'services' : undefined} 
      className="py-16 sm:py-24 lg:py-32 border-t border-border first:border-t-0"
    >
      <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className={`order-1 ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}
          >
            <div className="relative group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
              <img
                src={service.image}
                alt={service.alt}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-auto object-cover max-h-[620px] transition-transform duration-700 ease-luxury group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Text Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: luxuryEase }}
            className={`order-2 ${isImageLeft ? 'md:order-2' : 'md:order-1'} max-w-lg`}
          >
            {/* Service Number */}
            <div className="mb-4">
              <span className="text-xs font-bold tracking-widest text-muted uppercase">
                {service.number}
              </span>
            </div>

            {/* Service Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4 leading-tight">
              {service.title}
            </h2>

            {/* Short Commercial Description */}
            <p className="text-base sm:text-lg text-secondary leading-relaxed mb-8">
              {service.description}
            </p>

            {/* TRY THIS CTA */}
            <div>
              <Link
                to={`/start-project?service=${service.slug}`}
                className="group inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider text-primary hover:text-secondary transition-colors duration-200 py-2"
                aria-label={`Try this service: ${service.title}`}
              >
                <span>TRY THIS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
