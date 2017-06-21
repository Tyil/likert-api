/**
 * This table should not need an ID, however, sequelize demands one and we're
 * short on time. Sorry!
 */
module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('history_songs', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
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

