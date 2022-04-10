const express = require("express");
const cors = require("cors");
const SSLCommerzPayment = require("sslcommerz");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const connectDatabase = require("./config/database");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

// connecting to database
connectDatabase();

app.use("/", (req, res) => {
    res.send("App is running.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
