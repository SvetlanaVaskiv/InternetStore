"use strict";

module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "Brand",
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    { tableName: "brand" }
  );
  Brand.associate = (models) => {
    // associations can be defined here
    Brand.belongsToMany(models.Type, {
      through: models.Type_Brand,
    });
    Brand.hasMany(models.Device);
   
  };
  return Brand;
};

