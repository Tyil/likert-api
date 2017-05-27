'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('albums', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			path: {
				type: Sequelize.STRING,
				unique: true
			}
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('albums');
	}
};
