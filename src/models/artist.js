module.exports = (sequelize, dataTypes) => {
	return sequelize.define("artist", {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: dataTypes.STRING,
			allowNull: false
		}
	}, {
		timestamps: false
	});
};
