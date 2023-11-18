const { putProduct } = require('../../../controllers/index');

const handlePutProduct = async (req, res) => {
  const { id } = req.params;
  const { name, specifications, type, category, image, price } =
    req.body;
  try {
    const updatedProduct = {
      name,
      specifications,
      type,
      category,
      image,
      price
    };

    const product = await putProduct(id, updatedProduct);

    if (product.errors) return res.status(400).json(product);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = handlePutProduct;
