const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(8080, () => {
  console.log("Backend server is started at port 8080.");
});
