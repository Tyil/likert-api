'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("genres", [
			{ id: 1, name: "Rock", },
			{ id: 2, name: "Soul", },
			{ id: 3, name: "Jazz", },
			{ id: 4, name: "Ambient", },
			{ id: 5, name: "New Age", },
			{ id: 6, name: "Orchestral", },
			{ id: 7, name: "Classical", },
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("genres");
	}
};
