const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("There was a problem lol", err));

const app = express();

app.use(express.json());

const port = 3000;

app.use("/", require("./routes/authRoutes"));

app.listen(port, () =>
  console.log(
    "Hello Is this server working or am i crazy??? crazy? i was crazy once, man shiut up"
  )
);
