'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('previous_moods', {
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
			moodId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'moods',
					key: 'id'
				}
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('previous_moods');
	}
};
