'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device_Info = sequelize.define(
    "Device_Info",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      deviceId: DataTypes.INTEGER,
    },
    { tableName: "device_info" }
  );
  Device_Info.associate = (models) => {
    // associations can be defined here
    Device_Info.belongsTo(models.Device, {
      as: "info",
      foreignKey: "deviceId",
    });
  };
  return Device_Info;
};

