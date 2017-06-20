'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("history_songs", [
			{ userId: 1, songId: 2, createdAt: "2017-06-20 22:11" },
			{ userId: 1, songId: 7, createdAt: "2017-06-20 23:11" },
			{ userId: 1, songId: 13, createdAt: "2017-06-20 24:11" },
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("history_songs");
	}
};
