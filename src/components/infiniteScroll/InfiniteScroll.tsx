import { useEffect, useRef, useState } from "react";
import { useGetFetchProducts } from "../../queries/useGetFetchProkducts";
import { Product } from "../../types/product.types";
import ProductCard from "../product/ProductCard";
import { Link } from "react-router-dom";

const InfiniteScroll = () => {
  const [skip, setSkip] = useState<number>(0);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const LIMIT = 10;

  const { data, isFetching, isPending } = useGetFetchProducts({
    limit: LIMIT,
    skip: skip,
  });

  useEffect(() => {
    const products = data?.products;
    if (!products) return;
    setAllProducts((prev) => [...prev, ...products]);
  }, [data]);

  useEffect(() => {
    if (!observerRef.current) return;

    const oberserver = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching) {
        setSkip((prev) => prev + LIMIT);
      }
    });

    oberserver.observe(observerRef.current);

    return () => oberserver.disconnect();
  }, [isFetching]);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Header */}
        <header className="border-b border-slate-900 pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors mb-4 group"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Dashboard
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-slate-100 via-white to-indigo-400 bg-clip-text text-transparent">
              Infinite Scroll Library
            </h1>
            <p className="text-sm text-slate-400 mt-2">
              Demonstrates viewport intersection tracking to dynamically fetch additional item rows.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-3 rounded-2xl">
            <span className="text-xs font-semibold text-slate-300">
              Loaded Items: <span className="font-mono text-indigo-400">{allProducts.length}</span>
            </span>
            {isFetching && (
              <span className="flex items-center gap-1.5 text-xs text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Loading...
              </span>
            )}
          </div>
        </header>

        {/* Initial loading state */}
        {isPending && allProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
            <p className="text-xs text-slate-400 font-semibold font-mono">Loading scroll listings...</p>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            <main
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {allProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </main>

            {/* Intersection observer anchor */}
            <div
              ref={observerRef}
              className="h-10 mt-12 mb-6 flex items-center justify-center"
            >
              {isFetching && (
                <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold font-mono bg-slate-900/40 border border-slate-800 px-4 py-2 rounded-xl backdrop-blur-md">
                  <div className="w-3.5 h-3.5 rounded-full border border-indigo-400 border-t-transparent animate-spin" />
                  Loading more items...
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
