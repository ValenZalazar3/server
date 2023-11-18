const { DataTypes, Model } = require('sequelize');

module.exports = function defineUserModel(sequelize) {
  class User extends Model {
    static associate(models) {
      // Definir asociaciones aquí
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        hooks: true
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      discount: {
        type: DataTypes.FLOAT
      }
    },
    { sequelize, modelName: 'User' }
  );
  return User;
};
