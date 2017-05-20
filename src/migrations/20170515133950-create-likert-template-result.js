module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('likert_template_results', {
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
			templateId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'likert_templates',
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
			songId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'songs',
					key: 'id'
				}
			},
			scaleId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'likert_template_values',
					key: 'id'
				}
			},
			scaleScore: {
				type: Sequelize.INTEGER
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('likert_template_results');
	}
};
