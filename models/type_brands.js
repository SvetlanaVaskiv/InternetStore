"use strict";
module.exports = (sequelize, DataTypes) => {
  const Type_Brand = sequelize.define(
    "Type_Brand",
    {
      id: DataTypes.INTEGER,
      typeId: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
    },
    { tableName: "type_brand" }
  );
 
  return Type_Brand;
};