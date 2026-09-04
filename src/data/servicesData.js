/**
 * PhotoKaro 3.0 Services Data Catalog
 * IMPORTANT: Every image reference below corresponds to a verified file in /public/images/
 */

const BASE = import.meta.env.BASE_URL;

export const SERVICES = [
  {
    id: '01',
    number: '01',
    slug: 'product-photography',
    title: 'PRODUCT PHOTOGRAPHY',
    categoryName: 'Product Photography',
    description: 'Clean, conversion-ready studio product images with controlled lighting that highlights craftsmanship and authentic detail.',
    image: `${BASE}images/product-photography/720d2680-0add-4140-aa03-4b9cb046f315.jpg`,
    alt: 'Clean commercial studio product photography of luxury brown leather handbag',
    layout: 'image-left',
    alternateImages: [],
  },
  {
    id: '02',
    number: '02',
    slug: 'ai-model',
    title: 'AI MODEL',
    categoryName: 'AI Model / On-Model',
    description: 'Put your apparel and accessories on diverse, realistic models without expensive photo shoots, model booking, or studio overhead.',
    image: `${BASE}images/ai-model/c24e404e-f68c-474c-85b5-6e809e3dc25c.jpg`,
    alt: 'E-commerce on-model product visual showing premium brown t-shirt',
    layout: 'image-right',
    alternateImages: [
      {
        url: `${BASE}images/ai-model/8f00879e-b69a-49b2-b284-0389909d1dbb.jpg`,
        title: 'Smartwatch on Model'
      },
      {
        url: `${BASE}images/ai-model/c5d57ab4-a560-47a7-9103-aea926c90ef7.jpg`,
        title: 'Commuter Backpack'
      },
      {
        url: `${BASE}images/ai-model/ff97d035-aa45-4954-b8ec-1aa919e37fe4.jpg`,
        title: 'Gold Pendant Necklace'
      },
      {
        url: `${BASE}images/ai-model/f502627d-4a03-4e74-9458-a67c3a852e95.jpg`,
        title: 'Classic Sunglasses'
      }
    ],
  },
  {
    id: '03',
    number: '03',
    slug: 'lifestyle',
    title: 'LIFESTYLE',
    categoryName: 'Lifestyle Scenes',
    description: 'Contextual environments and authentic spaces that help customers visualize your product in their everyday life.',
    image: `${BASE}images/lifestyle/8199a959-6cf3-47d1-9694-ea357814f34e.jpg`,
    alt: 'Lifestyle contextual product scene featuring wireless headphones',
    layout: 'image-left',
    alternateImages: [],
  },
  {
    id: '04',
    number: '04',
    slug: 'marketplace',
    title: 'MARKETPLACE',
    categoryName: 'Marketplace Images',
    description: 'Amazon and marketplace-optimized listing visuals designed to explain key features, dimensions, and drive higher conversions.',
    image: `${BASE}images/marketplace/f2ff9b67-c343-453d-bd69-57acf65847e2.jpg`,
    alt: 'Marketplace infographic feature breakdown for STRYD performance sneakers',
    layout: 'image-right',
    alternateImages: [
      {
        url: `${BASE}images/marketplace/67474991-eaa1-45b9-99f7-415aa970bdaa.jpg`,
        title: 'Linen Shirt Specs & Angles'
      },
      {
        url: `${BASE}images/marketplace/fd957b8c-1589-4ab1-af5f-a85ba4db85f3.jpg`,
        title: 'Lumina Facial Serum Infographic'
      }
    ],
  },
  {
    id: '05',
    number: '05',
    slug: 'social-ads',
    title: 'SOCIAL / AD CREATIVES',
    categoryName: 'Social / Ad Creatives',
    description: 'High-impact campaign creatives engineered for paid social performance and scroll-stopping engagement.',
    image: `${BASE}images/social-ads/8d2d3428-bc55-41f2-a57b-85b4df698f7c.jpg`,
    alt: 'High-conversion performance ad creative for C-Glow skincare serum',
    layout: 'image-left',
    alternateImages: [
      {
        url: `${BASE}images/social-ads/e951052e-dfd1-48f4-81a1-623c77ffffc2.jpg`,
        title: 'Summer Collection Campaign'
      }
    ],
  },
  {
    id: '06',
    number: '06',
    slug: 'ugc',
    title: 'UGC-STYLE CONTENT',
    categoryName: 'UGC-Style Content',
    description: 'Authentic, creator-oriented visual content that builds organic social proof and real customer trust.',
    image: `${BASE}images/ugc/01_RAW/WhatsApp Image 2026-09-01 at 12.44.08 PM.jpeg`,
    alt: 'Authentic creator-style organic product visual showing gold pendant necklace in casual setting',
    layout: 'image-right',
    alternateImages: [
      {
        url: `${BASE}images/ugc/01_RAW/WhatsApp Image 2026-09-01 at 12.39.57 PM.jpeg`,
        title: 'Silver Chain Bracelet — In-Hand'
      },
      {
        url: `${BASE}images/ugc/01_RAW/WhatsApp Image 2026-09-01 at 12.46.24 PM.jpeg`,
        title: 'Leather Handbag — Natural Setting'
      }
    ],
  },
];

export const getServiceBySlug = (slug) => {
  if (!slug) return null;
  return SERVICES.find((s) => s.slug.toLowerCase() === slug.toLowerCase()) || null;
};
