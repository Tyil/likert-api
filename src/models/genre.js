module.exports = (sequelize, dataTypes) => {
	return sequelize.define("genre", {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true
		},
		name: dataTypes.STRING
	}, {
		timestamps: false
	});
};
