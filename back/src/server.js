const express = require("express");
const cors = require("cors");
const router = require("./routes/index.js");
const server = express();
const PORT = 3001;

const corsOptions = {
  origin: "*",
  credentials: true, // access-control-allow-credentials: true
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(express.json());
server.use("/", router);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});
