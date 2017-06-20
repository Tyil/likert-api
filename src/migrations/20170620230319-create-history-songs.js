module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('history_songs', {
			songId: {
				type: Sequelize.INTEGER
			},
			userId: {
				type: Sequelize.INTEGER,
				index: true
			},
			createdAt: {
				type: Sequelize.DATE,
				index: true
			}
		});
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('history_songs');
	}
};

