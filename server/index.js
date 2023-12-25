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

app.use(
  cors({
    origin: "https://backend-frontend-ruby.vercel.app",
    credentials: true,
    methods: ["GET", "POST"],
  })
);

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded(false));

const port = 3000;

app.use("/", require("./routes/authRoutes"));

app.listen(port);
