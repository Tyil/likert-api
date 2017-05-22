'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('moods', [{
				name: "Happy"
			},
			{
				name: "Sad"
			},
			{
				name: "Euphoric"
			}
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('moods', {
			name: [
				"Happy",
				"Sad",
				"Euphoric"
			]
		});
	}
};
