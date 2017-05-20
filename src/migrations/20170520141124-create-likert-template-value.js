'use strict';
module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('likert_template_values', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			likertId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'likert_templates',
					key: 'id'
				}
			},
			name: {
				type: Sequelize.STRING
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
		return queryInterface.dropTable('likert_template_values');
	}
};
