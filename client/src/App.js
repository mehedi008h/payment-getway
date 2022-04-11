import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Payment from "./pages/payment/Payment";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shipping/:productId" element={<Payment />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
