'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: "1001d946-8065-45a1-9ce3-3da1789e100a",
        name: 'John Doe',
        email: 'johndoe@example.com',
        position: 'Software Engineer',
        salary: 60000,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { email: 'johndoe@example.com' }, {});
  }
};
