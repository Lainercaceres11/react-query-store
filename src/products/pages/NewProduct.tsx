import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useProductMutation from "../hooks/useProductMutation";
interface FormInput {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const NewProduct = () => {

  const productMutation = useProductMutation()

  const { control, handleSubmit, watch } = useForm<FormInput>({
    defaultValues: {
      title: "",
      category: "men's clothing",
      description: "",
      image:
        "https://images.unsplash.com/photo-1675466583534-1755fbb2793b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHByb2R1Y3RvcyUyMGhvbWJyZXN8ZW58MHx8MHx8fDA%3D",
      price: 0
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) =>
    productMutation.mutate(data);

  const newImage = watch("image");

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around items-center">
          <div className="flex-col w-[500px]">
            <Controller
              control={control}
              rules={{ required: true }}
              name="title"
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2"
                  type="text"
                  label="Titulo del producto"
                />
              )}
            />

            <Controller
              control={control}
              rules={{ required: true }}
              name="price"
              render={({ field }) => (
                <Input
                  value={field.value?.toString()}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  className="mt-2"
                  type="number"
                  label="Precio del producto"
                />
              )}
            />

            <Controller
              control={control}
              rules={{ required: true }}
              name="image"
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2"
                  type="url"
                  label="Url del producto"
                />
              )}
            />

            <Controller
              control={control}
              rules={{ required: true }}
              name="description"
              render={({ field }) => (
                <Textarea
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2"
                  label="Descripcion del producto"
                />
              )}
            />

            <Controller
              control={control}
              rules={{ required: true }}
              name="category"
              render={({ field }) => (
                <select
                  value={field.value}
                  onChange={field.onChange}
                  className="rounded-md p-3 mt-2 bg-gray-800 w-full"
                >
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>
              )}
            />

            <br />
            <Button isDisabled={productMutation.isPending} type="submit" className="mt-2" color="primary">
              {productMutation.isPending ? "Cargando" : "Crear producto"}
            </Button>
          </div>

          <div
            className="bg-white rounded-2xl p-10 flex items-center"
            style={{
              width: "500px",
              height: "600px",
            }}
          >
            <Image src={newImage} />
          </div>
        </div>
      </form>
    </div>
  );
};
