"use client";

import { useEffect, useRef, useState } from "react";
import ProductFilters from "./ProductFilters";

type Props = {
  selectedCollection?: string;
  sort?: string;
};

export default function MobileFilterPanel({ selectedCollection, sort }: Props) {
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // scrolling down
        setShowBar(false);
      } else {
        // scrolling up
        setShowBar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Filter Bar (Single Action) */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 z-40 transition-transform duration-300 ${
          showBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          className="w-full bg-white border-b shadow-sm px-4 py-3 flex items-center justify-center gap-2 text-sm font-medium"
        >
          {/* Funnel + Sort Combined Icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4h18l-7 8v6l-4 2v-8L3 4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 16h5m-5-4h3"
            />
          </svg>
          Filter & Sort
        </button>
      </div>

      {/* Bottom Sheet */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Filter & Sort</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-sm text-gray-600"
              >
                Close
              </button>
            </div>

            <ProductFilters
              selectedCollection={selectedCollection}
              sort={sort}
            />
          </div>
        </div>
      )}
    </>
  );
}
