module.exports = (sequelize, dataTypes) => {
	return sequelize.define("previous_mood", {
		id: Sequelize.INTEGER,
		userId: Sequelize.INTEGER,
		moodId: Sequelize.INTEGER
	});
};
