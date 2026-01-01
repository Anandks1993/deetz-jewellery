import Link from "next/link";
import { Product } from "@/data/products";
import ProductImageCarousel from "./ProductImageCarousel";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-surface-card border border-border-subtle rounded-lg overflow-hidden">
        <ProductImageCarousel
          images={product.images}
          alt={product.name}
        />

        <div className="p-4 sm:p-4">
          <h3 className="text-sm font-medium text-text-primary leading-snug">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {product.description}
          </p>
          <p className="text-sm font-semibold text-brand-gold mt-1">
            {product.price} {product.currency}
          </p>
        </div>
      </div>
    </Link>
  );
}
