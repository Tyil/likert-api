module.exports = function(sequelize, DataTypes) {
  return sequelize.define('like_dislike_genre', {
    userId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    like_dislike: DataTypes.STRING
  });
};