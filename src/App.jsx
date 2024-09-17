import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Layout2 from "./components/Layout2";
import Home from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import Loader from "./components/Loader";
import ProductDetails from "./pages/ProductDetails";
import SaleBanner from "./components/saleBanner/SaleBanner";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Layout2 />}>
              <Route path="/salebanner" element={<SaleBanner />} />
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/productdetail" element={<ProductDetails />} />
              <Route path="/loader" element={<Loader />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
