module.exports = (sequelize, dataTypes) => {
    return sequelize.define("genre", {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: dataTypes.STRING
      },
      createdAt: {
        type: dataTypes.DATE
      },
      updatedAt: {
        type: dataTypes.DATE
      },
      expiresAt: {
        type: dataTypes.DATE
      },
    });
}