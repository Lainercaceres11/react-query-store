import { ProductLike, Products } from "../interfaces/Products";
import productApi from "../api/productApi";

interface GetProductOptions {
  filterKey?: string;
}

export const getProducts = async ({
  filterKey,
}: GetProductOptions): Promise<Products[]> => {
  const filterUrl = filterKey ? `category=${filterKey}` : "";

  const { data } = await productApi.get<Products[]>(`/products?${filterUrl}`);

  return data;
};

export const getProductById = async (id: number): Promise<Products> => {
  const { data } = await productApi.get<Products>(`/products/${id}`);

  return data;
};


export const createProduct = async(product: ProductLike)=>{
  const {data} = await productApi.post<ProductLike>("/products", product)
  return data
}

export const deleteProduct = async(productId: number) : Promise<Products> =>{
  const {data} = await productApi.delete<Products>(`/products/${productId}`)

  console.log(data)
  return data
}