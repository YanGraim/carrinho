import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
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
      }
    ]
  }
]);

export { router }