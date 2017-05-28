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
			name: {
				type: Sequelize.STRING
			},
			artistId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'artists',
					key: 'id'
				}
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
