module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('moods', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('moods');
	}
};
