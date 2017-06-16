'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("users", [
			{ username: "admin", password: "$2y$10$e0tQXVE4a.ozEFM90yg0puhYy7z/dJLiWdwtG6ljelSV8P1RWTQrm", createdAt: "1970-01-01 00:00:00", updatedAt: "1970-01-01 00:00:00", }
			{ username: "tyil", password: "$2y$10$RDEYRNzevPxSPWQbXttk4ut.QbcaSE5Zh3JOeQbonvkNOFWNZd2Bi", createdAt: "1970-01-01 00:00:00", updatedAt: "1970-01-01 00:00:00", }
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("users");
	}
};
