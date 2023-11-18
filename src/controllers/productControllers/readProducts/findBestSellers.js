const { Products } = require('../../../db');

const findBestSellers = async () => {
  try {
    const products = await Products.findAll();
    products.sort((a, b) => b.sales - a.sales);
    const bestSellers = products.slice(0, 4);
    return bestSellers;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = findBestSellers;
