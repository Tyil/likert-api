module.exports = (sequelize, dataTypes) => {
    return sequelize.define("genre", {
        name: dataTypes.STRING
    });
}