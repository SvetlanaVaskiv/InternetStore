"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("basket_devices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      count: {
        type: Sequelize.INTEGER,
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
    // basket_device belongsTo basket
    await queryInterface.addColumn("basket_devices", "basketId", {
      type: Sequelize.INTEGER,
      references: {
        model: "baskets",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    // basket_device belongsTo devices

    await queryInterface.addColumn("basket_devices", "deviceId", {
      type: Sequelize.INTEGER,
      references: {
        model: "devices",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("basket_devices");
    await queryInterface.removeColumn("basket_devices", "basketId");
    await queryInterface.removeColumn("basket_devices", "deviceId");
  },
};
