'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("history_songs", [
			{ userId: 1, songId: 2, createdAt: new Date("2015").toISOString() },
			{ userId: 1, songId: 7, createdAt: new Date("2016").toISOString() },
			{ userId: 1, songId: 13, createdAt: new Date("2017").toISOString() },
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("history_songs");
	}
};
