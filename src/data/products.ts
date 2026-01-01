export type Product = {
  id: string;
  code?: string;
  name: string;
  slug: string;
  collection: string;
  price: number;
  currency: string;
  images: string[];
  description: string;
  // internal metadata (not exposed to clients)
  type?: string;
  finish?: string;
  style?: string;
  region?: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Rose Gold Earrings",
    slug: "rose-gold-earrings",
    collection: "rose-gold-earrings",
    price: 149,
    currency: "AED",
    images: ["/images/product-1.jpg", "/images/product-2.jpg"],
    description: "Elegant rose gold earrings for daily wear.",
  },
  {
    id: "p2",
    name: "Fancy Earrings",
    slug: "fancy-earrings",
    collection: "fancy-earrings",
    price: 99,
    currency: "AED",
    images: ["/images/product-3.jpg", "/images/product-4.jpg"],
    description: "Minimal design silver ring with premium finish.",
  },
  {
    id: "p3",
    name: "Fancy Chains",
    slug: "fancy-chains",
    collection: "fancy-chains",
    price: 199,
    currency: "AED",
    images: ["/images/product-5.jpg", "/images/product-6.jpg"],
    description: "Classic pearl necklace for special occasions.",
  },
  {
    id: "p4",
    name: "Bracelets",
    slug: "bracelets",
    collection: "bracelets",
    price: 199,
    currency: "AED",
    images: ["/images/product-5.jpg", "/images/product-6.jpg"],
    description: "Elegant bracelets for all occasions.",
  },
  {
    id: "p5",
    name: "Bangles",
    slug: "bangles",
    collection: "bangles",
    price: 199,
    currency: "AED",
    images: ["/images/product-5.jpg", "/images/product-6.jpg"],
    description: "Elegant bangles for all occasions.",
  },
  {
    id: "p6",
    name: "Invisible Chains",
    slug: "invisible-chains",
    collection: "invisible-chains",
    price: 199,
    currency: "AED",
    images: ["/images/product-5.jpg", "/images/product-6.jpg"],
    description: "Elegant invisible chains for all occasions.",
  },
];
