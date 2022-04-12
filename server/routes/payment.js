const express = require("express");
const router = express.Router();

const {
    processPayment,
    paymentSuccess,
    validate,
} = require("../controller/paymentController");

router.route("/init").post(processPayment);
router.route("/success").post(paymentSuccess);
router.route("/validate").post(validate);

module.exports = router;
