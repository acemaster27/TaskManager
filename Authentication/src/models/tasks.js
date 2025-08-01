'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User , {
        foreignKey: 'userId' 
      })
    }
  }
  Tasks.init({
    description: {
      type:DataTypes.STRING,
      allowNull: false
    },
    userId: { 
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};