import { useQueryClient } from "@tanstack/react-query";
import { getProductById } from "../services/actions";

const usePrefetchProduct = () => {
  const productPrefetch = useQueryClient();

  const prefectProduct = (id: number) => {
    productPrefetch.prefetchQuery({
      queryKey: ["product", id],
      queryFn: () => getProductById(id),
    });
  };

  return prefectProduct;
};

export default usePrefetchProduct;
