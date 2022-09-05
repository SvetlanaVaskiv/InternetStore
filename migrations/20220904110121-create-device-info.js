"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("device_infos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
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
    // device_infos belongsTo devices
    await queryInterface.addColumn("device_infos", "deviceId", {
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
    await queryInterface.dropTable("device_infos");
    await queryInterface.removeColumn("device_infos", "deviceId");
  },
};
