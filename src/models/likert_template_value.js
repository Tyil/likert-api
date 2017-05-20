module.exports = function (sequelize, DataTypes) {
	return sequelize.define('likert_template_value', {
		name: DataTypes.STRING
	});
};
