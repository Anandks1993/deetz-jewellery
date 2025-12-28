export type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  images: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Gold Plated Bracelet",
    price: 149,
    currency: "AED",
    images: ["/images/product-1.jpg", "/images/product-2.jpg"],
    description: "Elegant gold plated bracelet for daily wear.",
  },
  {
    id: "p2",
    name: "Minimal Silver Ring",
    price: 99,
    currency: "AED",
    images: ["/images/product-3.jpg", "/images/product-4.jpg"],
    description: "Minimal design silver ring with premium finish.",
  },
  {
    id: "p3",
    name: "Pearl Necklace",
    price: 199,
    currency: "AED",
    images: ["/images/product-5.jpg", "/images/product-6.jpg"],
    description: "Classic pearl necklace for special occasions.",
  },
];
