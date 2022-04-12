const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDatabase = require("./config/database");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

// import routes
const payment = require("./routes/payment");
const order = require("./routes/order");

app.use("/api/v1", payment);
app.use("/api/v1", order);

// connecting to database
connectDatabase();

app.use("/", (req, res) => {
    res.send("App is running.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
