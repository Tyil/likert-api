module.exports = (sequelize, dataTypes) => {
	return sequelize.define("genre", {
		id: dataTypes.INTEGER,
		name: dataTypes.STRING
	}, {
		timestamps: false
	});
};
