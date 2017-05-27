module.exports = (sequelize, dataTypes) => {
	return sequelize.define("artist", {
		name: dataTypes.STRING
	});
};
