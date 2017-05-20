'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('likert_template_results', [{
			userId: 1,
			templateId: 1,
			moodId: 1,
			songId: 1,
			score: 5
		}]);
	},

	down: function (queryInterface, Sequelize) {}
};
