module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('songs', {
      SongId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Path: {
        type: Sequelize.STRING
      },
      Tag: {
        type: Sequelize.STRING
      },
      ArtistId: {
        type: Sequelize.INTEGER,
      },
      AlbumId: {
        type: Sequelize.INTEGER
      },
      GenreId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          key: 'GenreId'
        },
      },
      MoodId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'moods',
          key: 'MoodId'
        },
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('songs');
  }
};