import { ProductList } from ".."
import useProducts from "../hooks/useProducts"

export const MensPage = () => {

  const {data = [], isLoading} = useProducts({
    filterKey: "men's clothing"
  })
  
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {isLoading && "Cargando..."} 

      <ProductList products={data} />

    </div>
  )
}