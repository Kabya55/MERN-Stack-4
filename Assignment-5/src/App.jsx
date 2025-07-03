import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./page/Cart";
import Home from "./page/Home";
import SingleProduct from "./page/SingleProduct";
import About from "./page/About";
import Page404 from "./components/Page404";
import Footers from "./components/Footer";

function App() {
  return (
    <div className="px-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* <footer className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} Kabya. All rights reserved.
      </footer> */}
      <Footers />
    </div>
  );
}

export default App;
