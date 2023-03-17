const express = require("express");
const cors = require("cors");
const router = require("./routes/index.js");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, // access-control-allow-credentials: true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

module.exports = app;
