import products from "../../utils/data.json";
import "./Payment.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
    const [open, setOpen] = useState(false);
    const shipping = localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {};

    const [name, setName] = useState(shipping.name);
    const [email, setEmail] = useState(shipping.email);
    const [phone, setPhone] = useState(shipping.phone);
    const [address, setAddress] = useState(shipping.address);

    let { productId } = useParams();

    const found = products.find((item) => item.id === productId);

    const shippingInfo = {
        name: name,
        email: email,
        phone: phone,
        address: address,
    };

    console.log(shippingInfo);

    const submitHandler = (e) => {
        e.preventDefault();

        localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));
    };

    return (
        <div className="payment">
            <div className="payment_container">
                <div className="shipping_container">
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
                            <label htmlFor="address_field">Address</label>
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                type="text"
                            />
                        </div>
                        <div className="form_group">
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
                <div className="total_container">
                    <h1>Total</h1>
                    <hr />

                    <p> $ {found?.price}</p>
                    <hr />
                    <button onClick={() => setOpen(open ? false : true)}>
                        Payment
                    </button>

                    {open && (
                        <>
                            <button>SSL Commerz</button>
                            <button>Stripe</button>
                            <button>Paypal</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Payment;
