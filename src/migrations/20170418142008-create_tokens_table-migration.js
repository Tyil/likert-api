'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
	return queryInterface.createTable("tokens", {
	  id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	  },
	  userId: {
		type: Sequelize.INTEGER
	  },
	  token: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	  },
	  createdAt: {
		type: Sequelize.DATE
	  },
	  updatedAt: {
		type: Sequelize.DATE
	  },
	  expiresAt: {
		type: Sequelize.DATE
	  },
	});
  },

  down: function (queryInterface, Sequelize) {
	return queryInterface.dropTable("tokens");
  }
};
