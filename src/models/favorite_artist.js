module.exports = (sequelize, dataTypes) => {
	return sequelize.define("favorite_artists", {
		userId: dataTypes.INTEGER,
		artistId: dataTypes.INTEGER
	});
};
