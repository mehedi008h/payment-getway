import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
    const cartItem = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : {};

    return (
        <div className="cart">
            <div className="cart_container">
                <div className="cart_items">
                    <h1>Cart Items</h1>

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
                    <p>Total : $ {cartItem.price}</p>
                    <hr />
                    <Link to="/shipping">Process To Payment</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
