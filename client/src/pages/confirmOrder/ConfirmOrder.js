import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmOrder.scss";

const ConfirmOrder = () => {
    const cartItem = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : {};

    const shippingInfo = localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {};

    const navigate = useNavigate();

    const itemsPrice = Number(cartItem.price);
    const shipping = itemsPrice > 200 ? 0 : 25;
    const tax = Number((0.05 * itemsPrice).toFixed(2));
    const totalPrice = (itemsPrice + shipping + tax).toFixed(2);

    const handlePayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shipping,
            tax,
            totalPrice,
        };

        sessionStorage.setItem("orderInfo", JSON.stringify(data));
        navigate("/payment");
    };
    return (
        <div className="confirm_order">
            <div className="confirm_container">
                <div className="cart_items">
                    <div className="shipping_info">
                        <h2>Shipping Info</h2>
                        <div>
                            <p>Name : {shippingInfo.name}</p>
                            <p>Email : {shippingInfo.email}</p>
                            <p>Phone : {shippingInfo.phone}</p>
                            <p>Address : {shippingInfo.address}</p>
                        </div>
                    </div>
                    <hr />
                    <h2>Your Cart Items</h2>

                    <div className="cart_item">
                        <img src={cartItem?.image} alt="" />
                        <h3>{cartItem.name}</h3>
                        <p>Price : $ {cartItem.price}</p>
                        <p>Quantity : {cartItem.quantity}</p>
                    </div>
                </div>
                <div className="total_summery">
                    <h3>Total Summery</h3>
                    <hr />
                    <p>Subtotal : $ {cartItem.price}</p>
                    <p>Shipping : $ {shipping}</p>
                    <p>Tax : $ {tax}</p>
                    <p>Total : $ {totalPrice}</p>
                    <hr />
                    <button onClick={handlePayment}>Process To Payment</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmOrder;
