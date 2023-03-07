var axios = require("axios");

const getCharById = (res, ID) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(({ data }) => {
      const char = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(char));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" }).end(err.message);
    });
};

module.exports = { getCharById };
