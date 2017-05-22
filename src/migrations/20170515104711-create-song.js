module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('songs', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			path: {
				type: Sequelize.STRING
			},
			tag: {
				type: Sequelize.STRING
			},
			artistId: {
				type: Sequelize.INTEGER,
			},
			albumId: {
				type: Sequelize.INTEGER
			},
			genreId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'genres',
					key: 'id'
				},
			},
			moodId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'moods',
					key: 'id'
				},
			}
		});
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('songs');
	}
};
