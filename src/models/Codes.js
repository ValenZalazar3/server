const { DataTypes, Model } = require('sequelize');

module.exports = function defineCodesModel(sequelize) {
  class Codes extends Model {
    static associate(models) {
      Codes.hasOne(models.User, {
        foreignKey: 'userId',
        timestamps: false
      });
    }
  }

  Codes.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { sequelize, modelName: 'Codes' }
  );
  return Codes;
};
