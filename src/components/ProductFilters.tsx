import { collections } from "@/data/collections";

type Props = {
  selectedCollection?: string;
  sort?: string;
};

export default function ProductFilters({ selectedCollection, sort }: Props) {
  return (
    <>
      <h2 className="font-medium mb-4">Collections</h2>

      <ul className="space-y-2 text-sm">
        <li>
          <a
            href="/products"
            className={!selectedCollection ? "font-semibold" : ""}
          >
            All
          </a>
        </li>

        {collections.map((col) => (
          <li key={col.id}>
            <a
              href={`/products?collection=${col.id}`}
              className={
                selectedCollection === col.id
                  ? "font-semibold"
                  : ""
              }
            >
              {col.label}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="font-medium mt-8 mb-4">Sort by</h2>

      <ul className="space-y-2 text-sm">
        <li>
          <a
            href={`/products${
              selectedCollection ? `?collection=${selectedCollection}` : ""
            }`}
            className={!sort ? "font-semibold" : ""}
          >
            Default
          </a>
        </li>

        <li>
          <a
            href={`/products?collection=${selectedCollection ?? ""}&sort=price-asc`}
            className={sort === "price-asc" ? "font-semibold" : ""}
          >
            Price: Low to High
          </a>
        </li>

        <li>
          <a
            href={`/products?collection=${selectedCollection ?? ""}&sort=price-desc`}
            className={sort === "price-desc" ? "font-semibold" : ""}
          >
            Price: High to Low
          </a>
        </li>
      </ul>
    </>
  );
}
