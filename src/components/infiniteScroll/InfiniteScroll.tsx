import { useEffect, useRef, useState } from "react";
import { useGetFetchProducts } from "../../queries/useGetFetchProkducts";
import { Product } from "../../types/product.types";
import ProductCard from "../product/ProductCard";

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
  if (isPending && allProducts.length === 0) return "Loading...";

  return (
    <div>
      {allProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
      <div ref={observerRef}></div>
      {
        (isFetching) && "Loading More...."
      }
    </div>
  );
};

export default InfiniteScroll;
