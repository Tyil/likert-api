'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('artists', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				unique: true
			}
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('artists');
	}
};
