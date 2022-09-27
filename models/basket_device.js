'use strict';

module.exports = (sequelize, DataTypes) => {
  const Basket_Device = sequelize.define(
    "Basket_Device",
    {
      id: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      deviceId: DataTypes.INTEGER,
      basketId: DataTypes.INTEGER,
    },
    { tableName: "basket_device" }
  );
  Basket_Device.associate = (models) => {
    // associations can be defined here
    Basket_Device.belongsTo(models.Basket, {
      as: "basket_device",
      foreignKey: "basketId",
    });
     Basket_Device.belongsTo(models.Device, {
       as: "basket_device",
       foreignKey: "deviceId",
     });
  };
  return Basket_Device;
};

