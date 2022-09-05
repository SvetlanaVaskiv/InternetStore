"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("devices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      img: {
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
    //device belongsTo types
    await queryInterface.addColumn("devices", "typesId", {
      type: Sequelize.INTEGER,
      references: {
        model: "types",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    //device belongsTo brands
    await queryInterface.addColumn("devices", "brandsId", {
      type: Sequelize.INTEGER,
      references: {
        model: "brands",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    //device hasMany basket_device
   /* await queryInterface.addColumn("basket_devices", "device_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "devices",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    //device hasMany device_info

    await queryInterface.addColumn("device_infos", "device_id", {
      type: Sequelize.INTEGER,
      as: "info",
      references: {
        model: "devices",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });*/
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("devices");
    await queryInterface.removeColumn("devices", "types_id");
    await queryInterface.removeColumn("devices", "brands_id");
   // await queryInterface.removeColumn("basket_devices", "device_id");
  //  await queryInterface.removeColumn("device_infos", "device_id");
  },
};
