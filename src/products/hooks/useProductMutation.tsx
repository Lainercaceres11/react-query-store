import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createProduct } from "../services/actions"
import { Products } from "../interfaces/Products";

const useProductMutation = () => {
    const queryClient = useQueryClient();
    const productMutation = useMutation({
        mutationFn: createProduct,

        //Cuando la peticion es exitosa 
        onSuccess: (data, variables, context)=>{

            console.log({data, variables, context})
            
            alert("Producto creado")
            // queryClient.invalidateQueries(
            //     ['products',  {'filterKey': data.category }]
            // )

            queryClient.setQueriesData<Products>(
                ['products',  {'filterKey': data.category }],
                (old)=> {
                    old ? {...old, data} : old
                }
            )

        },

        //Cuando termina la peticion
        onSettled: ()=>{
            console.info("Producto creado")
        },

        //Cuando sucede un error
        onError: (error, variables, context )=>{
            console.log(error, variables, context)
        }
      })

  return productMutation
}

export default useProductMutation