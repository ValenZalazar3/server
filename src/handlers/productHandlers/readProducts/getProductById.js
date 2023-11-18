const { findProductByPk } = require('../../../controllers');

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await findProductByPk(id);

    if (!product) throw new Error('Product not found with id:' + id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = getProductById;
