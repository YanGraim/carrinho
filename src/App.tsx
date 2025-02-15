import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Product } from "./pages/product";
import { Layuot } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layuot/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/products/:id",
        element: <Product/>
      }
    ]
  }
]);

export { router }