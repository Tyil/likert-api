module.exports = (sequelize, dataTypes) => {
	return sequelize.define("previous_mood", {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true
		},
		userId: dataTypes.INTEGER,
		moodId: dataTypes.INTEGER
	});
};
