'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('favo_genres', {
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
			genreId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'genres',
					key: 'id'
				}
			}
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('favo_genres');
	}
};
