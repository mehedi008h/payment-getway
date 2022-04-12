import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shipping.scss";

const Shipping = () => {
    const shipping = localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {};

    const [name, setName] = useState(shipping.name);
    const [email, setEmail] = useState(shipping.email);
    const [phone, setPhone] = useState(shipping.phone);
    const [city, setCity] = useState(shipping.city);
    const [postalCode, setPostalCode] = useState(shipping.postalCode);
    const [address, setAddress] = useState(shipping.address);
    const [country, setCountry] = useState(shipping.country);

    const navigate = useNavigate();

    const shippingInfo = {
        name: name,
        email: email,
        phone: phone,
        city: city,
        postalCode: postalCode,
        address: address,
        country: country,
    };

    const submitHandler = (e) => {
        e.preventDefault();

        localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));

        navigate("/confirm");
    };
    return (
        <div className="shipping">
            <div className="shipping_container">
                <div className="form_container">
                    <form onSubmit={submitHandler}>
                        <div className="form_group">
                            <label htmlFor="name_field">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                required
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                type="email"
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="phone_field">Phone</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                type="text"
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="city_field">City</label>
                            <input
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                                type="text"
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="postalCode_field">
                                Postal Code
                            </label>
                            <input
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                                type="text"
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="address_field">Address</label>
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                type="text"
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="country_field">Country</label>
                            <input
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                                type="text"
                            />
                        </div>
                        <div className="form_group">
                            <button type="submit">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
