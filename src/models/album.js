module.exports = (sequelize, dataTypes) => {
	return sequelize.define("album", {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true
		},
		userId: dataTypes.INTEGER,
		albumId: dataTypes.INTEGER
	});
};
