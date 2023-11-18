const { Product } = require('../../../db');

const putProduct = async (id, productUpdated) => {
  try {
    const product = await Product.findByPk(id);
    await product.update(productUpdated);
    return product;
  } catch (error) {
    return error;
  }
};

module.exports = putProduct;
