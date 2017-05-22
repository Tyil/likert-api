module.exports = function (sequelize, DataTypes) {
	return sequelize.define('likert_template', {
		name: DataTypes.STRING,
		max_value: DataTypes.INTEGER,
		description: DataTypes.TEXT
	});
};
