import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <div className="navbar">
            <div className="nav_container">
                <Link to="/">
                    <h1>Payment Getway</h1>
                </Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    );
};

export default Header;
