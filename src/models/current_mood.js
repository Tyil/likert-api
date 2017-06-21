module.exports = (sequelize, dataTypes) => {
	return sequelize.define("current_mood", {
		userId: dataTypes.INTEGER,
		moodId: dataTypes.INTEGER
	});
};
