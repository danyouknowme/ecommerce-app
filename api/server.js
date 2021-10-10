const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection is successful!"))
  .catch((err) => console.log(err));

app.listen(8080 || process.env.PORT, () => {
  console.log("Backend server is started at port 8080.");
});
