'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("moods", [
			{
				id: 1,
				name: "Happy"
			},
			{
				id: 2,
				name: "Sad"
			},
			{
				id: 3,
				name: "Euphoric"
			}
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("moods");
	}
};
