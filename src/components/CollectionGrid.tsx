import Link from "next/link";
import { collections } from "@/data/collections";

export default function CollectionGrid() {
  return (
    <section className="mt-14">
      <h2 className="text-xl font-semibold mb-6">
        Shop by Collection
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/products?collection=${collection.id}`}
            className="border rounded-lg px-4 py-6 text-center hover:shadow-sm transition bg-white"
          >
            <span className="text-sm font-medium text-gray-900">
              {collection.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
