const express = require("express");
const router = express.Router();

const { processPayment } = require("../controller/paymentController");

router.route("/init").get(processPayment);

module.exports = router;
