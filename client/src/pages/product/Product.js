import React from "react";
import "./Product.scss";
import products from "../../utils/data.json";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    // console.log(product);

    const handleToCart = (productId) => {
        const found = products.find((item) => item.id === productId);

        const cartItems = {
            product: found.id,
            name: found.name,
            price: found.price,
            image: found?.images[0]?.url,
            stock: found.stock,
            quantity: 1,
        };

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    return (
        <div className="product">
            <div className="product_img">
                <img src={product?.images[0].url} alt={product?.name} />
            </div>
            <h3>{product?.name}</h3>
            <div>
                <p>$ {product?.price}</p>
            </div>
            <div>
                <Link to={`/shipping/${product.id}`}>View</Link>
                <button onClick={() => handleToCart(product.id)}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
