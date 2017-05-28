'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('favo_artists', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				}
			},
			artistId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'artists',
					key: 'id'
				}
			}
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('favo_artists');
	}
};
