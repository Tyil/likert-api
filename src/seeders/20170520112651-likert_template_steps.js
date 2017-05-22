'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('likert_template_steps', [{
			templateId: 1,
			steps: 1
		}]);
	},

	down: function (queryInterface, Sequelize) {}
};
