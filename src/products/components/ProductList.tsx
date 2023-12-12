import { useEffect } from "react";
import { ProductCard } from "..";
import { Products } from "../interfaces/Products";
import usePrefetchProduct from "../hooks/usePrefetchProduct";

interface Props {
  products: Products[];
}

export const ProductList = ({ products }: Props) => {
  const prefectProduct = usePrefetchProduct();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          prefectProduct={prefectProduct}
          fullDescription
        />
      ))}
    </div>
  );
};
