module.exports = (sequelize, dataTypes) => {
	return sequelize.define("user", {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Username: {
			type: dataTypes.STRING,
			allowNull: false,
			unique: true
		},
		Password: {
			type: dataTypes.STRING,
			allowNull: false
		},
		createdAt: dataTypes.DATE,
		updatedAt: dataTypes.DATE,
		deletedAt: dataTypes.DATE,
	});
};
