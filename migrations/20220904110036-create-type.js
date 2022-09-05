"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("types", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    //type hasMany device
   /* await queryInterface.addColumn("devices", "type_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "types",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });*/
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("types");
   // await queryInterface.removeColumn("devices", "type_id");
  },
};
