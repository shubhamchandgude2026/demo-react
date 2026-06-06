import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductResponse } from "../types/product.types";

export const fetchProducts = async (
  limit: number = 30,
  skip: number = 30,
): Promise<ProductResponse> => {
    const response = (
      await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      )
    ).data;
    return response;  
};

interface ProductsProps {
  limit?: number;
  skip?: number;
}

export const useGetFetchProducts = ({
  limit = 30,
  skip = 0,
}: ProductsProps) => {
  return useQuery({
    queryKey: ["products", { limit, skip }],
    queryFn: () => fetchProducts(limit, skip),
  });
};
