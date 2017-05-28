module.exports = (sequelize, dataTypes) => {
	return sequelize.define("favorite_genre", {
		userId: dataTypes.INTEGER,
		genreId: dataTypes.INTEGER
	});
};
