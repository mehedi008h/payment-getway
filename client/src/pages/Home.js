import React from "react";
import "./Home.scss";

import products from "../utils/data.json";
import Product from "./product/Product";

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                {products.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Home;
