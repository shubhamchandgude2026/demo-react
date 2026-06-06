import { useEffect, useRef, useState } from "react";
import { useGetFetchProducts } from "../../queries/useGetFetchProkducts";
import ProductCard from "../product/ProductCard";
import { Product } from "../../types/product.types";

const LIMIT = 10;

const CoverPhotos = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const [skip, setSkip] = useState(0);

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const { data, isPending, isFetching } =
    useGetFetchProducts({
      limit: LIMIT,
      skip,
    });

  useEffect(() => {
    if (!data?.products) return;

    setAllProducts((prev) => [
      ...prev,
      ...data.products,
    ]);
  }, [data]);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        console.log("value check here",target);
        
        if (
          target.isIntersecting &&
          !isFetching
        ) {
          setSkip((prev) => prev + LIMIT);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [isFetching]);

  if (isPending && allProducts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {allProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

      <div
        ref={observerRef}
        style={{ height: "20px" }}
      />

      {isFetching && (
        <div>Loading More...</div>
      )}
    </div>
  );
};

export default CoverPhotos;