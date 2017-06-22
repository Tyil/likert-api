module.exports = function (sequelize, DataTypes) {
	return sequelize.define('likert_template_value', {
		templateId: DataTypes.INTEGER,
		value: DataTypes.STRING
	});
};
