module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('likert_template_steps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      templateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'likert_templates',
          key: 'id'
        }
      },
      steps: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('likert_template_steps');
  }
};