import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/About";
import Academy from "../pages/Academy";
import Bridals from "../pages/Bridals";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Empowerment from "../pages/Empowerment";
import Home from "../pages/Home";
import Saved from "../pages/Saved";
import Shop from "../pages/Shop";

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bridals" element={<Bridals />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/empowerment" element={<Empowerment />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
