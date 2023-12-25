const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("There was a problem lol", err));

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded(false));
app.use(cors({
  origin: "https://backend-frontend-ruby.vercel.app",
  credentials: true,
  methods: ["GET", "POST"],
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

const port = 3000;

app.use("/", require("./routes/authRoutes"));

app.listen(port);
