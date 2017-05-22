'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('genres', [{
			name: "Rock",
      updatedAt: new Date(Date()).toISOString()
		}, {
			name: "Soul",
      updatedAt: new Date(Date()).toISOString()
		}, {
			name: "Jazz",
      updatedAt: new Date(Date()).toISOString()
		}]);
	},

	down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genres', {
      name: [
        "Rock",
        "Soul",
        "Jazz"
      ]
    });
  }
};
