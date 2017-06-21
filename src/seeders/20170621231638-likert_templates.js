'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("likert_templates", [
			{
				id: 1,
				name: "MoodMusic track rating",
				max_value: 5,
				description: "A likert-scale to let the user rate the track he is currently listening to",
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			}
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("likert_templates");
	}
};
