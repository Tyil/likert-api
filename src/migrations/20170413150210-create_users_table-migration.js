'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
	return queryInterface.createTable("users", {
	  id: {
		  type: Sequelize.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
	  },
	  Username: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	  },
	  Password: {
		type: Sequelize.STRING,
		allowNull: false
	  },
	  createdAt: {
		type: Sequelize.DATE
	  },
	  updatedAt: {
		type: Sequelize.DATE
	  },
	  deletedAt: {
		type: Sequelize.DATE
	 }
	});
  },

  down: function (queryInterface, Sequelize) {
	return queryInterface.dropTable("users");
  }
};
