import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./ProductListing";
import { CartPage } from "./pages/cartPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/cartPage" element={<CartPage />} />
    </Routes>
  );
};
export { AppRouter };
