module.exports = (sequelize, dataTypes) => {
	return sequelize.define("artist", {
		ArtistId: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: dataTypes.STRING,
			allowNull: false
		}
	}, {
		timestamps: false
	});
};
