'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Review, { foreignKey: 'review_id' });
    }
  }
  Comment.init({
    comment: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};