module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('current_mood', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userId: {
				type: Sequelize.INTEGER,
				unique: true,
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
			createdAt: {
				type: Sequelize.DATE
			},
			updatedAt: {
				type: Sequelize.DATE
			}
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('current_mood');
	}
};
