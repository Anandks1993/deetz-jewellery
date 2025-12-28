"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ProductImageCarousel({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + images.length) % images.length);

  const next = () =>
    setCurrent((current + 1) % images.length);

  return (
    <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
      <Image
        src={images[current]}
        alt={alt}
        fill
        className="object-cover"
        priority
      />

      {images.length > 1 && (
        <>
          {/* Left */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Right */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center"
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
