module.exports = function(sequelize, DataTypes) {
  return sequelize.define('song', {
    Name: DataTypes.STRING,
    Path: DataTypes.STRING,
    Tag: DataTypes.STRING,
    ArtistId: DataTypes.INTEGER,
    AlbumId: DataTypes.INTEGER,
    GenreId: DataTypes.INTEGER,
    MoodId: DataTypes.INTEGER
  });
};