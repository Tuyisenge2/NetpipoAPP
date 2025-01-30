module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'salary', {
      type: Sequelize.BIGINT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'salary', {
      type: Sequelize.INTEGER, 
    });
  }
};
