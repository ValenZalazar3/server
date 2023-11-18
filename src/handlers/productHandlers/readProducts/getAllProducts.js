const { findAllProducts } = require('../../../controllers');

const getAllProducts = async (req, res) => {
  try {
    const userId = req.query.userId;
    const products = await findAllProducts(userId);

    if (!products.length) throw new Error('No products found');
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllProducts;
