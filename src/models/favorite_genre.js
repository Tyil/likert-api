module.exports = (sequelize, dataTypes) => {
	return sequelize.define("favo_genre", {
		userId: dataTypes.INTEGER,
		genreId: dataTypes.INTEGER
	});
};
