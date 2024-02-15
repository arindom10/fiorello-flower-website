import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Layouts/Main";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Product from "./Components/Product/Product";
import CategoryProducts from "./Components/CategoryProducts/CategoryProducts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",

        element: <Products></Products>,
      },
      {
        path: "/product/:productsId",
        loader: async ({ params }) => {
          return fetch(
            `https://fakestoreapi.com/products/${params.productsId}`
          );
        },
        element: <Product></Product>,
      },
      {
        path: "/category/:categoryId",
        loader: async ({ params }) => {
          return fetch(
            `https://fakestoreapi.com/products/category/${params.categoryId}`
          );
        },
        element: <CategoryProducts />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
