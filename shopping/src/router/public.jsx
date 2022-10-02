import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import { ORDERSUMMARY, HOME } from "./constants";
import Navbar from "../components/Navbar";
import OrderSummary from "../pages/OrderSummary";
import { Footer } from "../components/Footer";

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path={ORDERSUMMARY} element={<OrderSummary />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
