'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable("type_brand", {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      typeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      brandId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    });
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable("type_brand");
  }
};
