'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("users", [
			{ username: "admin", password: "$2y$10$/KJgA47a/kA/vKvrcPIc1ushSR//HdUrdSPskwVf30/0U0Ro6WwxS", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
			{ username: "tyil", password: "$2y$10$RDEYRNzevPxSPWQbXttk4ut.QbcaSE5Zh3JOeQbonvkNOFWNZd2Bi", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("users");
	}
};
