'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.Comment, { foreignKey: 'review_id' });
    }
  }
  Review.init({
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    type: DataTypes.STRING,
    avg: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
    map: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};