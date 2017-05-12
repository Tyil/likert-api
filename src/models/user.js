module.exports = (sequelize, dataTypes) => {
  return sequelize.define("user", {
    userId: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: dataTypes.STRING,
    password: dataTypes.STRING
  });
};

