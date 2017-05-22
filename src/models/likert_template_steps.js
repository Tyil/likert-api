module.exports = function(sequelize, DataTypes) {
  return sequelize.define('likert_template_steps', {
    templateId: DataTypes.INTEGER,
    step: DataTypes.INTEGER,
    description: DataTypes.TEXT
  });
};