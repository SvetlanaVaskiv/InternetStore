"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
   const baskets= await queryInterface.createTable("baskets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
    //basket belongsTo user
    await queryInterface.addColumn("baskets", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    baskets.associate=models=>{
      baskets.belongsTo(models.users)
    }
    return baskets
    //basket hasMany basket_device
   /*await queryInterface.addColumn("basket_devices", "basket_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "baskets",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });*/
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("baskets");
    await queryInterface.removeColumn("baskets", "userId");
   // await queryInterface.removeColumn("basket_devices", "basket_id");
  },
};
