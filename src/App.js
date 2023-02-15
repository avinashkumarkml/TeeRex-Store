import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ProductListingPage from "./component/ProductListingPage";
import PreCheckoutPage from "./component/PreCheckoutPage";
import Navbar from "./component/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductListingPage />,
      },
      {
        path: "/precheckout",
        element: <PreCheckoutPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
