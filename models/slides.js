'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slides extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // Comment associated because model organization is not created
      Slides.belongsTo(models.Organization);

    }
  };
  Slides.init({
    imageUrl: DataTypes.STRING,
    text: DataTypes.STRING,
    order: DataTypes.INTEGER,
    organizationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Slides',
    paranoid: true,
    timestamps:true,
    deletedAt: 'deleteAt'
  });
  return Slides;
};