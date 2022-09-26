"use strict";
module.exports = (sequelize, DataTypes) => {
  const Basket = sequelize.define("Basket", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  Basket.associate = (models) => {
    Basket.belongsTo(models.User);
  };

  return Basket;
};

/*module.exports = {
   up:(queryInterface, Sequelize)=> {
   /*const baskets= await queryInterface.createTable("baskets", {
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
    return queryInterface.addColumn("baskets", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
   
    //basket hasMany basket_device
   /*await queryInterface.addColumn("basket_devices", "basket_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "baskets",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
   down:(queryInterface, Sequelize)=> {
   return queryInterface.dropTable("baskets");
   // await queryInterface.removeColumn("basket_devices", "basket_id");
  },
};
*/