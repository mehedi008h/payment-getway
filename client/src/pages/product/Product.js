import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    // console.log(product);

    return (
        <div className="product">
            <div className="product_img">
                <img src={product?.images[0].url} alt={product?.name} />
            </div>
            <h3>{product?.name}</h3>
            <div>
                <p>$ {product?.price}</p>
            </div>
            <Link to={`/shipping/${product.id}`}>Buy Now </Link>
        </div>
    );
};

export default Product;
