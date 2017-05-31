module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable("genres", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('genres');
	}
};
