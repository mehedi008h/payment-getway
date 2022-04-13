const SSLCommerzPayment = require("sslcommerz");
const { v4: uuidv4 } = require("uuid");
const Order = require("../model/order");

// process payment  => api/v1/init
exports.processPayment = async (req, res, next) => {
    const {
        orderItem,
        shippingData,
        total_amount,
        itemsPrice,
        taxPrice,
        shippingPrice,
    } = req.body;

    const productInfo = {
        total_amount: total_amount,
        currency: "USD",
        tran_id: uuidv4(),
        success_url: "http://localhost:5000/api/v1/success",
        fail_url: "http://localhost:5000/api/v1/failure",
        cancel_url: "http://localhost:5000/api/v1/cancel",
        ipn_url: "http://localhost:5000/api/v1/ipn",
        paymentStatus: "pending",
        shipping_method: "Courier",
        product_name: orderItem.name,
        product_category: "Electronic",
        product_profile: orderItem.name,
        product_image: orderItem.image,
        cus_name: shippingData.name,
        cus_email: shippingData.email,
        cus_add1: shippingData.address,
        cus_add2: "Dhaka",
        cus_city: shippingData.city,
        cus_state: "Dhaka",
        cus_postcode: shippingData.postalCode,
        cus_country: shippingData.country,
        cus_phone: shippingData.phoneNo,
        cus_fax: "01711111111",
        ship_name: shippingData.name,
        ship_add1: shippingData.address,
        ship_add2: "Dhaka",
        ship_city: shippingData.city,
        ship_state: "Dhaka",
        ship_postcode: shippingData.postalCode,
        ship_country: shippingData.country,
        multi_card_name: "mastercard",
        value_a: "ref001_A",
        value_b: "ref002_B",
        value_c: "ref003_C",
        value_d: "ref004_D",
    };

    const order = await Order.create({
        shippingData,
        orderItem,
        tran_id: productInfo.tran_id,
        paymentStatus: productInfo.paymentStatus,
        itemsPrice,
        taxPrice,
        shippingPrice,
        total_amount,
        paidAt: Date.now(),
        user: shippingData.name,
    });

    const sslcommer = new SSLCommerzPayment(
        process.env.STORE_ID,
        process.env.STORE_PASSWORD,
        false
    ); //true for live default false for sandbox
    sslcommer.init(productInfo).then((data) => {
        const info = { ...productInfo, ...data };
        // console.log(info.GatewayPageURL);
        if (info.GatewayPageURL) {
            // res.redirect(info.GatewayPageURL);
            res.json(info.GatewayPageURL);
        } else {
            return res.status(400).json({
                message: "SSL session was not successful",
            });
        }
    });
};

// payment success  => api/v1/success
exports.paymentSuccess = async (req, res, next) => {
    const order = await Order.findOne({ tran_id: req.body.tran_id });

    order.val_id = req.body.val_id;
    order.paymentStatus = req.body.status;

    await order.save();

    res.redirect(`http://localhost:3000/success/${req.body.tran_id}`);
};

// payment success  => api/v1/failure
exports.failure = async (req, res, next) => {
    const order = await Order.findOne({ tran_id: req.body.tran_id });

    await order.remove();
    res.redirect(`http://localhost:3000`);
};

// payment success  => api/v1/cancel
exports.cancel = async (req, res, next) => {
    const order = await Order.findOne({ tran_id: req.body.tran_id });

    await order.remove();
    res.redirect(`http://localhost:3000`);
};

// payment success  => api/v1/ipn
exports.ipn = async (req, res, next) => {
    res.send(req.body);
};

// payment success  => api/v1/validate
exports.validate = async (req, res, next) => {
    console.log("hit");
    const order = await Order.findOne({ tran_id: req.body.tran_id });

    if (order.val_id === req.body.val_id) {
        order.paymentStatus = "paymentComplete";
        await order.save();
    } else {
        res.send("Something Wrong");
    }
};
