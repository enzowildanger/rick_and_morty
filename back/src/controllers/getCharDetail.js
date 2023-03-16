var axios = require("axios");
const { filterData, URL } = require("./getCharById.js");

const getCharDetail = (req, res) => {
  const params = req.params;

  axios
    .get(`${URL}${params.id}`)
    .then(({ data }) => {
      const char = filterData(data);
      res
        .status(200)
        .json({ ...char, status: data.status, origin: data.origin });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

module.exports = { getCharDetail };
