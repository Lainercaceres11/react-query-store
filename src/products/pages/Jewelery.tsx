import { ProductList } from ".."
import useProducts from "../hooks/useProducts"


const Jewelery = () => {
    const {data = [], isLoading} = useProducts({
        filterKey: "jewelery"
    })
  return (
    <div className="flex-col">
    <h1 className="text-2xl font-bold">Productos de Joyas</h1>

    {isLoading && "Cargando..."} 

    <ProductList products={data} />

  </div>
  )
}

export default Jewelery