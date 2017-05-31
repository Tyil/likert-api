module.exports = (sequelize, dataTypes) => {
	return sequelize.define("genre", {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNulls: false
		},
		name: dataTypes.STRING
	}, {
		timestamps: false
	});
};
