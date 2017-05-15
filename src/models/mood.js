module.exports = (sequelize, DataTypes) => {
	return sequelize.define('mood', {
		MoodId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		Name: DataTypes.STRING
	}, {
		timestamps: false
	});
};
