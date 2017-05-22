module.exports = (sequelize, dataTypes) => {
	return sequelize.define("user", {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: dataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: dataTypes.STRING,
			allowNull: false
		},
		createdAt: dataTypes.DATE,
		updatedAt: dataTypes.DATE,
		deletedAt: dataTypes.DATE,
	});
};
