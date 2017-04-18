const sequelize = require("sequelize");
const config = require(__dirname + "/../../config/database.json");

const connection = new sequelize(
  config.database,
  config.username,
  config.password,
  config
);

[
  "token",
  "user"
].forEach(model => {
  module.exports[model] = connection.import(__dirname + "/" + model);
});

module.exports.sequelize = connection;

