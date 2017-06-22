'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("current_moods", [
			{
				userId: 1,
				moodId: 3,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			},
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("current_moods");
	}
};
