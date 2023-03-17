var axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function filterData(data) {
  return {
    id: data.id,
    image: data.image,
    name: data.name,
    gender: data.gender,
    species: data.species,
  };
}

const getCharById = async (req, res) => {
  const params = req.params;
  try {
    const { data } = await axios.get(`${URL}${params.id}`);
    const char = filterData(data);
    res.status(200).json(char);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getCharById, filterData, URL };
