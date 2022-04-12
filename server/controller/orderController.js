const Order = require("../model/order");

exports.singleOrder = async (req, res, next) => {
    const id = req.params.id;

    const order = await Order.findOne({ tran_id: id });

    res.json(order);
};
