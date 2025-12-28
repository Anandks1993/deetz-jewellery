import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: `${product.name} | Deetz Jewellery`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.map((img) => ({
        url: img,
        alt: product.name,
      })),
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Images */}
        <ProductImageCarousel images={product.images} alt={product.name} />

        {/* Details */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-4 text-gray-600">{product.description}</p>

          <p className="mt-6 text-xl font-semibold text-gray-900">
            {product.price} {product.currency}
          </p>

          <button
            disabled
            className="mt-8 px-6 py-3 bg-black text-white rounded-md opacity-50 cursor-not-allowed"
          >
            Add to Cart (Coming Soon)
          </button>
        </div>
      </div>
    </main>
  );
}
