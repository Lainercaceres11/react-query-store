import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteProduct } from "../services/actions"

const useProductMutationDelete = (id: number) => {

    const queryClient = useQueryClient()

    const deleteMutation = useMutation({
        mutationFn: ()=> deleteProduct(id),
        onSuccess: (data)=>{
            alert("Producto eliminado exitosamente")

            queryClient.invalidateQueries(
               ['products',  {'filterKey': data.category }]
            )
        }
    })
  return deleteMutation
}


export default useProductMutationDelete