import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Academy from "../pages/Academy";
import Bridals from "../pages/Bridals";
import Empowerment from "../pages/Empowerment";
import Home from "../pages/Home";

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bridals" element={<Bridals />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/empowerment" element={<Empowerment />} />
      </Routes>
    </BrowserRouter>
  );
}
