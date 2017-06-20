'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('previously_listened', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        type: DataTypes.INTEGER
      },
      songId: {
        allowNull: false,
        references: {
          model: 'songs',
          key: 'id'
        },
        type: DataTypes.INTEGER
      }
    }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('previously_listened');
  }
};
