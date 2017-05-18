module.exports = function(sequelize, DataTypes) {
  return sequelize.define('likert_template_result', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    templateId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'likert_template',
        key: 'key'
      }
    },
    score: DataTypes.INTEGER
  });
};