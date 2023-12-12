import { ProductList } from ".."
import useProducts from "../hooks/useProducts"


export const CompleteListPage = () => {
  const {data = [], isLoading} = useProducts({filterKey: undefined})
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {isLoading && "Cargando..."}

      <ProductList products={data} />

    </div>
  )
}