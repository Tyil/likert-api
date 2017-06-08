'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("users", [{
			username: "admin",
			password: "admin"
		}]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("users", {
			username: [
				"admin",
				"MoodAPI"
			]
		});
	}
};
