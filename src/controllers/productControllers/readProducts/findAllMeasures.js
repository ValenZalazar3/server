const { Product } = require('../../../db');

const findAllMeasures = async () => {
  try {
    const products = await Product.findAll();
    const measures = products.map(
      (product) => product.dataValues.measure
    );

    if (!measures) return false;

    const measuresNoRepeat = [...new Set(measures)];
    return measuresNoRepeat;
  } catch (error) {
    return false;
  }
};

module.exports = findAllMeasures;
