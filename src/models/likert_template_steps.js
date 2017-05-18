module.exports = function(sequelize, DataTypes) {
  return sequelize.define('likert_template_steps', {
    templateId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'likert_template',
        key: 'id'
      }
    },
    step: DataTypes.INTEGER,
    description: DataTypes.TEXT
  });
};