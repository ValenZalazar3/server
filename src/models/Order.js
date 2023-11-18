const { DataTypes, Model } = require('sequelize');

module.exports = function defineOrderModel(sequelize) {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        hooks: true
      });
    }
  }

  Order.init(
    {
      id: {
        unique: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },

      products: {
        type: DataTypes.ARRAY(DataTypes.JSON)
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Order'
    }
  );
  return Order;
};
