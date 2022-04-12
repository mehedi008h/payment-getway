const express = require("express");
const router = express.Router();
const { singleOrder } = require("../controller/orderController");

router.route("/order/:id").get(singleOrder);

module.exports = router;
