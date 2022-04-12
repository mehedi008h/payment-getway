import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Cart from "./pages/cart/Cart";
import Shipping from "./pages/shipping/Shipping";
import ConfirmOrder from "./pages/confirmOrder/ConfirmOrder";
import Payment from "./pages/payment/Payment";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/confirm" element={<ConfirmOrder />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
