const Order = require("../models/order");

// Create a new order   =>  /api/v1/order/new
exports.newOrder = async (req, res, next) => {
    console.log(req.body);
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
    } = req.body;

    // const order = await Order.create({
    //     orderItems,
    //     shippingInfo,
    //     itemsPrice,
    //     taxPrice,
    //     shippingPrice,
    //     totalPrice,
    //     paymentInfo,
    //     paidAt: Date.now(),
    //     user: req.user._id,
    // });

    res.status(200).json({
        success: true,
        order,
    });
};
