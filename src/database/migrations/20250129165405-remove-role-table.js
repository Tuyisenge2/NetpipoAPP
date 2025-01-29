module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('roles');  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  }
};
