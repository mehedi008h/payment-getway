import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Success.scss";

const Success = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);

    const navigate = useNavigate();

    console.log(order);
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/v1/order/${id}`)
            .then((res) => setOrder(res.data));
    }, [id]);

    const validatePayment = () => {
        const data = {
            tran_id: id,
            val_id: order?.val_id,
        };
        axios
            .post(`http://localhost:5000/api/v1/validate`, data)
            .then((res) => {
                if (res.data) {
                    alert("Order placed successfully");
                    navigate("/");
                }
            });
    };
    return (
        <div className="success">
            <div className="success_container">
                <h1>Payment Successful. Confirm your Order</h1>
                <button onClick={validatePayment}>Confirm</button>
            </div>
        </div>
    );
};

export default Success;
