import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/actions";

interface Options {
  filterKey?: string;
}

const useProducts = ({ filterKey }: Options) => {
  const {data, isLoading, error, isFetching} = useQuery({
    queryKey: ["products", { filterKey }],
    queryFn: () => getProducts({ filterKey }),
    // staleTime: 1000 * 60 * 60
  });

  return {data, isLoading, error, isFetching};
};

export default useProducts;
