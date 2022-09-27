"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    { 
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      tableName: "user",
    }
  );
  User.associate = (models) => {
    // associations can be defined here
    User.hasOne(models.Basket);
  };
  return User;
};
