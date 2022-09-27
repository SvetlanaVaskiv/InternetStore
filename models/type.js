'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type",
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    { tableName: "type" }
  );
  Type.associate = (models) => {
    // associations can be defined here
    Type.belongsToMany(models.Brand, {
      through: models.Type_Brand,
    });
    Type.hasMany(models.Device);
  };
  return Type;
};


