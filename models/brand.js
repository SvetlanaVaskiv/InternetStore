'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.device);
      this.belongsToMany(models.type,{through: models.type_brand})
    }
  }
  brand.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'brand',
  });
  return brand;
};