const { DataTypes, Model } = require('sequelize');

module.exports = function defineProductModel(sequelize) {
  class Product extends Model {
    static associate(models) {
      // Definir asociaciones aquí
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      specifications: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
      },
      sales: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM,
        values: ['ROSCADO', 'ESPIGA', 'KRONA'],
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.JSON,
        values: {
          public_id: DataTypes.STRING,
          secure_url: DataTypes.STRING
        },
        validate: {
          validateFormat(value) {
            if (!value.secure_url) {
              throw new Error('The "image" object must have "secure_url" property.');
            }

            const imageUrlRegex = /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
            if (!imageUrlRegex.test(value.secure_url)) {
              throw new Error(
                "The 'secure_url' property does not meet the required format"
              );
            }
          }
        },
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    { sequelize, modelName: 'Product' }
  );
  return Product;
};
