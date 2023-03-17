var axios = require("axios");
const { filterData, URL } = require("./getCharById.js");

const getCharDetail = async (req, res) => {
  const params = req.params;
  try {
    const { data } = await axios.get(`${URL}${params.id}`);
    const char = filterData(data);
    res
      .status(200)
      .json({ ...char, status: data.status, origin: data.origin.name });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getCharDetail };
