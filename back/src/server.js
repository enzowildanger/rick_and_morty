var http = require("http");
var { getCharById } = require("./controllers/getCharById.js");
var { getCharDetail } = require("./controllers/getCharDetail.js");
const PORT = 3001;
const HOST = "localhost";

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("onsearch/")) {
      let idCharacter = req.url.split("/").pop();
      getCharById(res, idCharacter);
    }
    if (req.url.includes("detail/")) {
      let idCharacter = req.url.split("/").pop();
      getCharDetail(res, idCharacter);
    }
  })
  .listen(PORT, HOST);
