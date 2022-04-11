const SSLCommerzPayment = require("sslcommerz");
const { v4: uuidv4 } = require("uuid");

// process payment  => api/v1/init
exports.processPayment = async (req, res, next) => {
    const productInfo = {
        total_amount: 1000,
        currency: "BDT",
        tran_id: uuidv4(),
        success_url: "http://localhost:5000/api/v1/success",
        fail_url: "http://localhost:5000/failure",
        cancel_url: "http://localhost:5000/cancel",
        ipn_url: "http://localhost:5000/ipn",
        paymentStatus: "pending",
        shipping_method: "Courier",
        product_name: "Gucci",
        product_category: "Electronic",
        product_profile: "profile",
        product_image: "image",
        cus_name: "cus_name",
        cus_email: "cus_email",
        cus_add1: "Dhaka",
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: "01711111111",
        cus_fax: "01711111111",
        ship_name: "cus_name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: 1000,
        ship_country: "Bangladesh",
        multi_card_name: "mastercard",
        value_a: "ref001_A",
        value_b: "ref002_B",
        value_c: "ref003_C",
        value_d: "ref004_D",
    };

    const sslcommer = new SSLCommerzPayment(
        process.env.STORE_ID,
        process.env.STORE_PASSWORD,
        false
    ); //true for live default false for sandbox
    sslcommer.init(productInfo).then((data) => {
        const info = { ...productInfo, ...data };
        // console.log(info.GatewayPageURL);
        if (info.GatewayPageURL) {
            res.redirect(info.GatewayPageURL);
            // res.json(info.GatewayPageURL);
        } else {
            return res.status(400).json({
                message: "SSL session was not successful",
            });
        }
    });
};

// payment success  => api/v1/success
exports.paymentSuccess = async (req, res, next) => {
    res.send(req.body);
    console.log(req.body);
};
