'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('favo_songs', {
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
			songId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'songs',
					key: 'id'
				}
			}
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('favo_songs');
	}
};
