module.exports = (sequelize, dataTypes) => {
	return sequelize.define("favo_artists", {
		userId: dataTypes.INTEGER,
		artistId: dataTypes.INTEGER
	});
};
