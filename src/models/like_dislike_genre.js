module.exports = function(sequelize, DataTypes) {
  return sequelize.define('like_dislike_genre', {
    user: DataTypes.INTEGER,
    like_dislike: DataTypes.STRING,
    genre_name: DataTypes.STRING
  });
};