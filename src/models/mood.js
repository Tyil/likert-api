module.exports = (sequelize, DataTypes) => {
	return sequelize.define('mood', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: DataTypes.STRING
	}, {
		timestamps: false
	});
};
