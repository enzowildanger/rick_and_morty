var axios = require("axios");

function filterData(data) {
  return {
    id: data.id,
    image: data.image,
    name: data.name,
    gender: data.gender,
    species: data.species,
  };
}

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const params = req.params;

  axios
    .get(`${URL}${params.id}`)
    .then(({ data }) => {
      const char = filterData(data);
      res.status(200).json(char);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

module.exports = { getCharById, filterData, URL };
