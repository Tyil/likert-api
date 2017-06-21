'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("likert_template_values", [
			{
				id: 1,
				templateId: 1,
				value: "Depression,Sad,Neutral,Happy,Euphoric",
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			}
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("likert_template_values");
	}
};
