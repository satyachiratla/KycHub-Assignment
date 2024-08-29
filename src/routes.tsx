import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CompareProductsPage from "./pages/CompareProductsPage";

export const router = createBrowserRouter([
  { path: "/", element: <ProductDetailsPage /> },
  {
    path: "/products-compare",
    element: <CompareProductsPage />,
  },
  { path: "*", element: <NotFoundPage /> },
]);
