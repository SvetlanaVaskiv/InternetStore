'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('brands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
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
    //brands hasMany devices
   /*  await queryInterface.addColumn("devices", "brand_id", {
       type: Sequelize.INTEGER,
       references: {
         model: "brands",
         key: "id",
       },
       onUpdate: "CASCADE",
       onDelete: "SET NULL",
     });*/
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('brands');
  //  await queryInterface.removeColumn("devices", "brand_id");

  }
};