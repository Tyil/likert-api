module.exports = (sequelize, dataTypes) => {
  return sequelize.define("user", {
    username: dataTypes.STRING,
    password: dataTypes.STRING
  });
};

