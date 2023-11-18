const { Product } = require('../../../db');

const findProductByPk = async (id) => {
  try {
    const product = await Product.findByPk(id);

    return product;
  } catch (error) {
    return false;
  }
};
module.exports = findProductByPk;
