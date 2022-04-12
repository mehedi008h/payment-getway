const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    shippingData: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    user: {
        type: String,
        required: true,
    },
    orderItem: [
        {
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],

    tran_id: {
        type: String,
    },
    val_id: {
        type: String,
    },
    paymentStatus: {
        type: String,
    },

    paidAt: {
        type: Date,
    },

    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    total_amount: {
        type: Number,
        required: true,
        default: 0.0,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Processing",
    },
    deliveredAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Order", orderSchema);
