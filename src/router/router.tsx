import { createBrowserRouter } from 'react-router-dom';
import { CompleteListPage, MensPage, NewProduct, StoreLayout, WomensPage } from '../products';
import { ErrorPage } from '../ErrorPage';
import { ProductDetails } from '../products/pages/ProductDetails';
import Jewelery from '../products/pages/Jewelery';
import Electronics from '../products/pages/Electronics';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CompleteListPage />
      },
      {
        path: "men",
        element: <MensPage />
      },
      {
        path: "women",
        element: <WomensPage />
      },
      {
        path: "jewelery",
        element: <Jewelery />
      },
      {
        path: "elect",
        element: <Electronics />
      },
      {
        path: "new",
        element: <NewProduct />
      },
      {
        path: "product/:id",
        element: <ProductDetails />
      },
    ]
  },
  {
    
  }
]);