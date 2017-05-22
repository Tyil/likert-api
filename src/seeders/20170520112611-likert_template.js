'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Person', [{
      name: "Default",
      max_value: 5,
      description: "Default likert scale for the users"
		}]);
	},

	down: function (queryInterface, Sequelize) {
		/*
		  Add reverting commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.bulkDelete('Person', null, {});
		*/
	}
};
