module.exports = function (sequelize, DataTypes) {
	return sequelize.define('likert_template_result', {
		userId: DataTypes.INTEGER,
		templateId: DataTypes.INTEGER,
		moodId: DataTypes.INTEGER,
		songId: DataTypes.INTEGER,
		scaleScore: DataTypes.INTEGER
	});
};
