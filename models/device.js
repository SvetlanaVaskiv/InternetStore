'use strict';


module.exports = (sequelize, DataTypes) => {
 const Device = sequelize.define(
   "Device",
   {
     name: DataTypes.STRING,
     price: DataTypes.INTEGER,
     rating: DataTypes.INTEGER,
     img: DataTypes.STRING,
     brandId:  DataTypes.INTEGER ,
     typeId: DataTypes.INTEGER ,
   },
   { tableName: "device" }
 );
Device.associate = (models) => {
  // associations can be defined here
  Device.belongsTo(models.Type, {
    as: "device",
    foreignKey: "deviceId",
  });Device.belongsTo(models.Brand, {
    as: "device",
    foreignKey: "deviceId",
  });Device.hasMany(models.Basket_Device,   );
  Device.hasMany(models.Device_Info, {
    as: "info",
    foreignKey: "deviceId",
  });
};
return Device;
};
