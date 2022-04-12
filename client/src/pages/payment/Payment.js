import "./Payment.scss";

const Payment = () => {
    const cartItem = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : {};

    const shippingInfo = localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {};

    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

    const handleSSLCommerz = () => {
        console.log("hit");

        const orderItem = {
            product: cartItem.id,
            name: cartItem.name,
            price: cartItem.price,
            image: cartItem.image,
            stock: cartItem.stock,
            quantity: cartItem.quantity,
        };

        const shippingData = {
            name: shippingInfo.name,
            email: shippingInfo.email,
            city: shippingInfo.city,
            phoneNo: shippingInfo.phone,
            postalCode: shippingInfo.postalCode,
            country: shippingInfo.country,
            address: shippingInfo.address,
        };

        const info = {
            orderItem: orderItem,
            shippingData: shippingData,
            total_amount: orderInfo?.totalPrice,
            itemsPrice: orderInfo?.itemsPrice,
            taxPrice: orderInfo?.tax,
            shippingPrice: orderInfo?.shipping,
        };
        fetch(`http://localhost:5000/api/v1/init`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                window.location.replace(data);
            });
    };

    return (
        <div className="payment">
            <div className="payment_container">
                <div className="payment_button">
                    <button onClick={handleSSLCommerz}>SSL Commerz</button>
                    <button>Stripe</button>
                    <button>Paypal</button>
                    <button>Cash On Delivery</button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
