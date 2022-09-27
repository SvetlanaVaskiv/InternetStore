
"use strict";


module.exports = (sequelize, DataTypes) => {
  const Basket = sequelize.define(
    "Basket",
    {
      id: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    { tableName: "basket" }
  );
  Basket.associate = (models) => {
    // associations can be defined here
    Basket.belongsTo(models.User,{
      as:'basket',
      foreignKey:'userId'
    });
  };
  return Basket;
};
