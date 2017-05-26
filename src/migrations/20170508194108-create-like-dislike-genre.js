module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('like_dislike_genres', {
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
				},
				allowNull: false
			},
			genreId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'genres',
					key: 'id'
				},
				allowNull: false
			},
			like_dislike: {
				type: Sequelize.STRING
			}
		});
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('like_dislike_genres');
	}
};
