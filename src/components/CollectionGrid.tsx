import Link from "next/link";
import { collections } from "@/data/collections";

export default function CollectionGrid() {
  return (
    <section className="mt-14">
      <h2 className="text-lg font-medium leading-snug text-text-primary mb-6">
  Shop by Collection
</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/products?collection=${collection.id}`}
            className="border border-border-subtle rounded-lg px-4 py-6 text-center bg-surface-card hover:border-brand-gold transition"
          >
            <span className="text-sm font-medium text-text-primary">
              {collection.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
