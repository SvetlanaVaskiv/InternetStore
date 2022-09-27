
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
    Basket.belongsTo(models.User);
  };
  return Basket;
};
/* const Basket = sequelize.define(
   "basket",
   {
     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
     userId: { type: DataTypes.INTEGER, allowNull: false },
   },
   {}
 );
  Basket.associate = (models) => {
Basket.belongsTo(models.User);
  };


module.exports = Basket;
/*const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      // define association here
      this.belongsTo(models.user);
      this.hasMany(models.basket_device);
    }
  }
  basket.init({
    sequelize,
    modelName: "basket",
  });
  return basket;
};
*/