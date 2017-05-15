module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('songs', {
          SongId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      Name: {
        type: DataTypes.STRING
      },
      Path: {
        type: DataTypes.STRING
      },
      Tag: {
        type: DataTypes.STRING
      },
      Artist_ArtistId: {
        type: DataTypes.INTEGER,
      },
      Album_AlbumId: {
        type: DataTypes.INTEGER
      },
      Genre_GenreId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'genres',
          key: 'GenreId'
        },
      },
      Mood_MoodId: {
        type: DataTypes.INTEGER,
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