module.exports = (sequelize, dataTypes) => {
	return sequelize.define("token", {
		userId: dataTypes.INTEGER,
		token: dataTypes.STRING,
		expiresAt: dataTypes.DATE
	});
};
