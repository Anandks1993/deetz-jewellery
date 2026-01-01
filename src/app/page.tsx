import ProductCard from "@/components/ProductCard";
import CollectionGrid from "@/components/CollectionGrid";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-8">
        Featured Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Collection Navigation */}
      <CollectionGrid />
    </main>
  );
}
