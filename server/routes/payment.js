const express = require("express");
const router = express.Router();

const {
    processPayment,
    paymentSuccess,
    validate,
    failure,
    cancel,
    ipn,
} = require("../controller/paymentController");

router.route("/init").post(processPayment);
router.route("/success").post(paymentSuccess);
router.route("/failure").post(failure);
router.route("/cancel").post(cancel);
router.route("/ipn").post(ipn);
router.route("/validate").post(validate);

module.exports = router;
