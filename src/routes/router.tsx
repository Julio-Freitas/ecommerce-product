import { Route, Routes } from "react-router-dom";
import Product from '../components/product'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
    </Routes>
  );
}
