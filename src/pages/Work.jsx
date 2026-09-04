import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const luxuryEase = [0.16, 1, 0.3, 1];
const BASE = import.meta.env.BASE_URL;

export default function Work() {
  const categories = [
    {
      number: '01',
      title: 'PRODUCT PHOTOGRAPHY',
      slug: 'product-photography',
      description: 'Studio-grade product presentation with controlled lighting, authentic shadows, and razor-sharp textures.',
      layoutType: 'single',
      mainImage: `${BASE}images/product-photography/720d2680-0add-4140-aa03-4b9cb046f315.jpg`,
      alt: 'Commercial studio product photography of luxury brown leather handbag',
    },
    {
      number: '02',
      title: 'AI MODEL / ON-MODEL',
      slug: 'ai-model',
      description: 'Show your products worn and styled in real-world commercial fashion contexts without talent booking or studio fees.',
      layoutType: 'large-left',
      mainImage: `${BASE}images/ai-model/8f00879e-b69a-49b2-b284-0389909d1dbb.jpg`,
      mainAlt: 'Smartwatch worn by male model in studio and outdoor setting',
      subImages: [
        {
          url: `${BASE}images/ai-model/c5d57ab4-a560-47a7-9103-aea926c90ef7.jpg`,
          alt: 'Commuter backpack on model outdoors',
        },
        {
          url: `${BASE}images/ai-model/ff97d035-aa45-4954-b8ec-1aa919e37fe4.jpg`,
          alt: 'Gold pendant necklace on female model',
        },
      ],
    },
    {
      number: '03',
      title: 'LIFESTYLE SCENES',
      slug: 'lifestyle',
      description: 'Contextual storytelling and architectural atmospheres that help shoppers picture the product in their daily life.',
      layoutType: 'single',
      mainImage: `${BASE}images/lifestyle/8199a959-6cf3-47d1-9694-ea357814f34e.jpg`,
      alt: 'Architectural moody lifestyle scene featuring wireless headphones',
    },
    {
      number: '04',
      title: 'MARKETPLACE IMAGES',
      slug: 'marketplace',
      description: 'High-converting Amazon and marketplace listing graphics with feature breakdowns, dimensions, and callout overlays.',
      layoutType: 'large-right',
      mainImage: `${BASE}images/marketplace/67474991-eaa1-45b9-99f7-415aa970bdaa.jpg`,
      mainAlt: 'Linen shirt Amazon A+ listing infographic breakdown',
      subImages: [
        {
          url: `${BASE}images/marketplace/f2ff9b67-c343-453d-bd69-57acf65847e2.jpg`,
          alt: 'STRYD running sneakers feature breakdown',
        },
        {
          url: `${BASE}images/marketplace/fd957b8c-1589-4ab1-af5f-a85ba4db85f3.jpg`,
          alt: 'Lumina facial serum marketplace graphics',
        },
      ],
    },
    {
      number: '05',
      title: 'SOCIAL / AD CREATIVES',
      slug: 'social-ads',
      description: 'High-impact campaign creatives engineered for Meta, TikTok, and paid social performance with scroll-stopping aesthetics.',
      layoutType: 'large-left',
      mainImage: `${BASE}images/social-ads/e951052e-dfd1-48f4-81a1-623c77ffffc2.jpg`,
      mainAlt: 'Summer Collection 2024 editorial campaign creative',
      subImages: [
        {
          url: `${BASE}images/social-ads/8d2d3428-bc55-41f2-a57b-85b4df698f7c.jpg`,
          alt: 'C-Glow Vitamin C Serum performance creative',
        },
      ],
    },
    {
      number: '06',
      title: 'UGC-STYLE CONTENT',
      slug: 'ugc',
      description: 'Authentic creator-style photography and casual real-world framing that builds organic social proof and customer confidence.',
      layoutType: 'large-right',
      mainImage: `${BASE}images/ugc/01_RAW/WhatsApp Image 2026-09-01 at 12.46.24 PM.jpeg`,
      mainAlt: 'Handbag in natural organic ceramic setting',
      subImages: [
        {
          url: `${BASE}images/ugc/01_RAW/WhatsApp Image 2026-09-01 at 12.39.57 PM.jpeg`,
          alt: 'Silver chain bracelet in-hand close-up',
        },
        {
          url: `${BASE}images/ugc/01_RAW/WhatsApp Image 2026-09-01 at 12.44.08 PM.jpeg`,
          alt: 'Gold necklace worn in outdoor cafe setting',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-12">
      {/* Page Header */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold tracking-widest text-muted uppercase block mb-3">
              PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-tight mb-6">
              WORK
            </h1>
            <p className="text-base sm:text-lg text-secondary leading-relaxed">
              Selected work across product photography, AI models, lifestyle, marketplace and advertising content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase Galleries */}
      <section className="py-20 sm:py-28">
        <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12 space-y-28 sm:space-y-36">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="border-b border-border pb-24 sm:pb-32 last:border-b-0 last:pb-0"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div className="max-w-xl">
                  <span className="text-xs font-bold tracking-widest text-muted uppercase block mb-2">
                    {cat.number}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
                    {cat.title}
                  </h2>
                  <p className="text-sm sm:text-base text-secondary mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div>
                  <Link
                    to={`/start-project?service=${cat.slug}`}
                    className="group inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider text-primary hover:text-secondary py-2"
                  >
                    <span>TRY THIS FORMAT</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>

              {/* Editorial Masonry / Gallery Compositions */}

              {/* Single Hero Layout (01 Product Photography, 03 Lifestyle) */}
              {cat.layoutType === 'single' && (
                <div className="relative group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm aspect-[16/10] sm:aspect-[16/9] max-h-[640px]">
                  <img
                    src={cat.mainImage}
                    alt={cat.alt}
                    loading={idx < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.01]"
                  />
                </div>
              )}

              {/* Large Left + Stack Right Layout (02 AI Model, 05 Social Ads) */}
              {cat.layoutType === 'large-left' && (
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 lg:gap-6 items-stretch">
                  {/* Dominant Photo (Left) */}
                  <div className="sm:col-span-7 lg:col-span-8">
                    <div className="relative group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm h-full aspect-[4/3]">
                      <img
                        src={cat.mainImage}
                        alt={cat.mainAlt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Supporting Photos (Right) */}
                  <div className="sm:col-span-5 lg:col-span-4 flex flex-col gap-4 lg:gap-6 justify-between h-full">
                    {cat.subImages.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="relative group overflow-hidden rounded-xl border border-border bg-surface shadow-sm flex-1 aspect-square sm:aspect-auto"
                      >
                        <img
                          src={sub.url}
                          alt={sub.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack Left + Large Right Layout (04 Marketplace, 06 UGC) */}
              {cat.layoutType === 'large-right' && (
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 lg:gap-6 items-stretch">
                  {/* Supporting Photos (Left on desktop, underneath on mobile) */}
                  <div className="order-2 sm:order-1 sm:col-span-5 lg:col-span-4 flex flex-col gap-4 lg:gap-6 justify-between h-full">
                    {cat.subImages.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="relative group overflow-hidden rounded-xl border border-border bg-surface shadow-sm flex-1 aspect-square sm:aspect-auto"
                      >
                        <img
                          src={sub.url}
                          alt={sub.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Dominant Photo (Right on desktop, first on mobile) */}
                  <div className="order-1 sm:order-2 sm:col-span-7 lg:col-span-8">
                    <div className="relative group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm h-full aspect-[4/3]">
                      <img
                        src={cat.mainImage}
                        alt={cat.mainAlt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
