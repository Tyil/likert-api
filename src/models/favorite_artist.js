module.exports = (sequelize, dataTypes) => {
	return sequelize.define("favo_artist", {
		userId: dataTypes.INTEGER,
		artistId: dataTypes.INTEGER
	});
};
