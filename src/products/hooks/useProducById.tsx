import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/actions";

interface Options {
  id: number;
}

const useProducById = ({ id }: Options) => {
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    staleTime: 1000 * 60 * 60
  });
  return { data, isFetching, isLoading, error };
};

export default useProducById;
