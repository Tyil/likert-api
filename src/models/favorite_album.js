module.exports = (sequelize, dataTypes) => {
	return sequelize.define("favo_album", {
		id: dataTypes.INTEGER,
		userId: dataTypes.INTEGER,
		albumId: dataTypes.INTEGER
	});
};
