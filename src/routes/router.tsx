import { Route, Routes } from "react-router-dom";
import NotFound from "../components/notFound";
import Product from "../components/product";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
