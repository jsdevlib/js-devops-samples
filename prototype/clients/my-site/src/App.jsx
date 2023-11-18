import { Route, Routes } from "react-router-dom";
import { HomePage, OrderPage, ProductPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/orders" element={<OrderPage />} />
    </Routes>
  );
}

export default App;
