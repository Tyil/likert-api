module.exports = (sequelize, dataTypes) => {
	return sequelize.define("favo_song", {
		userId: dataTypes.INTEGER,
		songId: dataTypes.INTEGER
	});
};
