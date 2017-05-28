module.exports = (sequelize, dataTypes) => {
	return sequelize.define("favorite_album", {
		userId: dataTypes.INTEGER,
		albumId: dataTypes.INTEGER
	});
};
