import { ProductList } from ".."
import useProducts from "../hooks/useProducts"


const Electronics = () => {
    const {data = [], isLoading} = useProducts({
        filterKey: "electronics"
    })
  return (
    <div className="flex-col">
    <h1 className="text-2xl font-bold">Productos electronicos</h1>

    {isLoading && "Cargando..."} 

    <ProductList products={data} />

  </div>
  )
}

export default Electronics