import Link from "next/link";
import { Product } from "@/data/products";
import ProductImageCarousel from "./ProductImageCarousel";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-lg overflow-hidden hover:shadow-md transition bg-white cursor-pointer">
        <ProductImageCarousel
          images={product.images}
          alt={product.name}
        />

        <div className="p-3 sm:p-4">
          <h3 className="font-medium text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {product.description}
          </p>
          <p className="mt-3 font-semibold text-gray-900">
            {product.price} {product.currency}
          </p>
        </div>
      </div>
    </Link>
  );
}
