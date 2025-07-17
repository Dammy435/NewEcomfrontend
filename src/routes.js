import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product.js";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

const AppRoutes = () => (
    <div className="pt-20 px-4">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </div>
);

export default AppRoutes;
