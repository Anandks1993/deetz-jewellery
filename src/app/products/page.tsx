import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import MobileFilterPanel from "@/components/MobileFilterPanel";
import { products } from "@/data/products";
import { collections } from "@/data/collections";

type MetadataProps = {
  searchParams?: Promise<{
    collection?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: MetadataProps): Promise<Metadata> {
  const params = searchParams ? await searchParams : {};
  const collectionId = params.collection;

  const collection = collections.find((c) => c.id === collectionId);

  if (collection) {
    return {
      title: `${collection.label} | Deetz Jewellery`,
      description: `Explore our collection of ${collection.label.toLowerCase()} including elegant designs, premium finishes, and handcrafted imitation jewellery.`,
      alternates: {
        canonical: `/products?collection=${collection.id}`,
      },
    };
  }

  return {
    title: "All Jewellery Products | Deetz Jewellery",
    description:
      "Browse our complete collection of imitation jewellery including earrings, chains, bangles, bracelets, and South Indian bridal sets.",
    alternates: {
      canonical: "/products",
    },
  };
}

type Props = {
  searchParams?: Promise<{
    collection?: string;
    sort?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};
  const selectedCollection = params.collection;
  const sort = params.sort;

  let filteredProducts = [...products];

  // Filter by collection
  if (selectedCollection) {
    filteredProducts = filteredProducts.filter(
      (p) => p.collection === selectedCollection
    );
  }

  // Sort by price
  if (sort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const currentCollection = collections.find(
    (c) => c.id === selectedCollection
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-14 pt-16 md:pt-10">
      <h1 className="text-2xl font-medium leading-tight text-text-primary mb-6 font-serif">
        {currentCollection ? currentCollection.label : "All Products"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Mobile filters */}
        <MobileFilterPanel
          selectedCollection={selectedCollection}
          sort={sort}
        />

        {/* Desktop filters */}
        <aside className="hidden md:block md:col-span-1">
          <div className="sticky top-24">
            <div className="bg-surface-card border border-border-subtle rounded-lg p-4">
              <ProductFilters
                selectedCollection={selectedCollection}
                sort={sort}
              />
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <p className="text-text-secondary">No products found.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
