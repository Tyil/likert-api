module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('like_dislike_genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'UserId'
        },
        allowNull: false
      },
      GenreId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          key:  'GenreId'
        },
        allowNull: false
      },
      like_dislike: {
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('like_dislike_genres');
  }
};