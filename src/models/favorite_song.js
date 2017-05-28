module.exports = (sequelize, dataTypes) => {
	return sequelize.define("favorite_song", {
		userId: dataTypes.INTEGER,
		songId: dataTypes.INTEGER
	});
};
