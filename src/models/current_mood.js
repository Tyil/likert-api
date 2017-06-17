module.exports = (sequelize, dataTypes) => {
	return sequelize.define("current_mood", {
		id: Sequelize.INTEGER,
		userId: Sequelize.INTEGER,
		moodId: Sequelize.INTEGER
	});
};
