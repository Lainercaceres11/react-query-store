/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { ProductCard } from "..";
import useProducById from "../hooks/useProducById";

export const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useProducById({ id: Number(id) });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto</h1>

      {isLoading && "Cargando..."}

      {data && <ProductCard product={data} />}

    </div>
  );
};
