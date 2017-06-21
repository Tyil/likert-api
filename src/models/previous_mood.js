module.exports = (sequelize, dataTypes) => {
	return sequelize.define("previous_mood", {
		userId: dataTypes.INTEGER,
		moodId: dataTypes.INTEGER
	});
};
