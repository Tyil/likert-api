module.exports = {
  up: function(queryInterface, Sequelize) {
	return queryInterface.createTable('moods', {
	  MoodId: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
	  },
	  Name: {
		type: Sequelize.STRING
	  }
	});
  },
  down: function(queryInterface, Sequelize) {
	return queryInterface.dropTable('moods');
  }
};