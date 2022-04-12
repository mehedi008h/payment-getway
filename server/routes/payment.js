const express = require("express");
const router = express.Router();

const {
    processPayment,
    paymentSuccess,
} = require("../controller/paymentController");

router.route("/init").post(processPayment);
router.route("/success").post(paymentSuccess);

module.exports = router;
