const PORT = 3001;
const app = require("./app");
const { sequelize } = require("./DB_connection");

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Server raised in port ${PORT}`);
  });
});
