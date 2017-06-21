module.exports = (sequelize, dataTypes) => {
	return sequelize.define("current_mood", {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true
		},
		userId: dataTypes.INTEGER,
		moodId: dataTypes.INTEGER
	});
};
