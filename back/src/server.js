var http = require("http");
var fs = require("fs");
const PORT = 3001;
const HOST = "localhost";
var characters = require("./utils/data.js");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("rickandmorty")) {
      let idCharacter = req.url.split("/").pop();
      let character = characters.find((e) => e.id === Number(idCharacter));
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    }
  })
  .listen(PORT, HOST);
