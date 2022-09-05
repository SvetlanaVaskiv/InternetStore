'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class basket_device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.basket)
      this.belongsTo(models.device)
    }
  }
  basket_device.init({
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'basket_device',
  });
  return basket_device;
};