module.exports = (sequelize, dataTypes) => {
    return sequelize.define("genre", {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false
      },
      createdAt: dataTypes.DATE,
      updatedAt: dataTypes.DATE
    });
};